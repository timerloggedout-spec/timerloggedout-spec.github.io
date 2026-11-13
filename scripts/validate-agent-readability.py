#!/usr/bin/env python3
"""Offline contract checks for the static agent-readability surface."""
from __future__ import annotations

import json
import re
from html import unescape
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://timerloggedout-spec.github.io"
PAGES = [
    ("index.html", "index.md"),
    ("matrix/index.html", "matrix/index.md"),
    ("tribute/index.html", "tribute/index.md"),
    ("termux-monorepo/index.html", "termux-monorepo/index.md"),
    ("studysprint/index.html", "studysprint/index.md"),
    ("delphi-oracle/index.html", "delphi-oracle/index.md"),
    ("repo-story/index.html", "repo-story/index.md"),
]
errors: list[str] = []

def require(condition: bool, message: str) -> None:
    if not condition:
        errors.append(message)

def read(path: str) -> str:
    file_path = ROOT / path
    require(file_path.is_file(), f"missing required file: {path}")
    return file_path.read_text(encoding="utf-8") if file_path.is_file() else ""

for path in ("llms.txt", "llms-full.txt", "AGENTS.md", "sitemap.md", "glossary.md", "robots.txt", "sitemap.xml"):
    read(path)

llms = read("llms.txt")
require(llms.startswith("# "), "llms.txt must start with an H1")
require(bool(re.search(r"(?m)^> ", llms)), "llms.txt must include a blockquote summary")
require(len(re.findall(r"(?m)^## ", llms)) >= 2, "llms.txt must include at least two H2 sections")
require(bool(re.search(r"\[[^\]]+\]\(https://", llms)), "llms.txt must include Markdown links")

agents = read("AGENTS.md")
require(bool(re.search(r"(?im)^## Configuration\s*$", agents)), "AGENTS.md needs a Configuration section")
require(bool(re.search(r"(?im)^## Usage\s*$", agents)), "AGENTS.md needs a Usage section")

site_map = read("sitemap.md")
require(bool(re.search(r"(?m)^## ", site_map)), "sitemap.md needs section headings")
require(bool(re.search(r"\[[^\]]+\]\(https://", site_map)), "sitemap.md needs Markdown links")

xml_text = read("sitemap.xml")
try:
    sitemap = ET.fromstring(xml_text)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = sitemap.findall("sm:url", ns)
    require(bool(urls), "sitemap.xml must contain at least one URL")
    for entry in urls:
        loc = entry.findtext("sm:loc", default="", namespaces=ns)
        lastmod = entry.findtext("sm:lastmod", default="", namespaces=ns)
        require(loc.startswith(BASE), f"sitemap URL must use canonical origin: {loc}")
        require(bool(lastmod), f"sitemap entry is missing lastmod: {loc}")
except ET.ParseError as exc:
    errors.append(f"sitemap.xml is invalid XML: {exc}")

for html_path, md_path in PAGES:
    html = read(html_path)
    markdown = read(md_path)
    canonical = BASE + ("/" if html_path == "index.html" else "/" + html_path.rsplit("/", 1)[0] + "/")
    require(f'rel="canonical" href="{canonical}"' in html, f"{html_path}: missing canonical URL")
    require(bool(re.search(r'<meta name="description" content="[^"]{50,}"', html)), f"{html_path}: missing useful meta description")
    require('property="og:title"' in html and 'property="og:description"' in html, f"{html_path}: missing Open Graph metadata")
    require('name="robots" content="index, follow, max-snippet:-1, max-image-preview:large"' in html, f"{html_path}: missing AI snippet directives")
    require('rel="describedby" href="/llms.txt"' in html, f"{html_path}: missing llms.txt discovery link")
    require(f'href="/{md_path}"' in html, f"{html_path}: missing Markdown alternate link to /{md_path}")
    require("/glossary.md" in html, f"{html_path}: missing glossary link")
    require("<main" in html and "</main>" in html, f"{html_path}: missing main landmark")
    require("Skip to main content" in html, f"{html_path}: missing skip link")
    json_blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    require(bool(json_blocks), f"{html_path}: missing JSON-LD")
    has_breadcrumb = False
    for block in json_blocks:
        try:
            data = json.loads(block)
            require(bool(data.get("@type")), f"{html_path}: JSON-LD missing @type")
            if data.get("@type") == "BreadcrumbList":
                has_breadcrumb = True
                require(bool(data.get("itemListElement")), f"{html_path}: BreadcrumbList missing itemListElement")
                continue
            require(bool(data.get("name") or data.get("headline")), f"{html_path}: JSON-LD missing name/headline")
            require(bool(data.get("description")), f"{html_path}: JSON-LD missing description")
            require(bool(data.get("url")), f"{html_path}: JSON-LD missing url")
            require(bool(data.get("dateModified")), f"{html_path}: JSON-LD missing dateModified")
        except json.JSONDecodeError as exc:
            errors.append(f"{html_path}: invalid JSON-LD: {exc}")
    if html_path == "index.html":
        require(has_breadcrumb, "index.html: JSON-LD needs a BreadcrumbList")
        visible = re.sub(r"<script\\b[\\s\\S]*?</script>|<style\\b[\\s\\S]*?</style>", " ", html, flags=re.I)
        visible = unescape(re.sub(r"<[^>]+>", " ", visible))
        text_ratio = len(re.sub(r"\\s+", " ", visible).strip()) / max(1, len(html))
        require(text_ratio >= 0.15, f"index.html: static text-to-HTML ratio {text_ratio:.1%} is below 15%")
    require(markdown.startswith("---\n"), f"{md_path}: missing YAML frontmatter")
    for field in ("title:", "description:", "last_updated:"):
        require(field in markdown.split("---", 2)[1] if "---" in markdown[4:] else False, f"{md_path}: frontmatter missing {field}")
    require(bool(re.search(r"(?m)^# ", markdown)), f"{md_path}: missing H1")
    require(bool(re.search(r"(?m)^## Sitemap\s*$", markdown)), f"{md_path}: missing Sitemap section")

home = read("index.html")
for asset in ("site.css", "js/landing.js", "js/landing-metrics.js", "js/agent-readability-badge.js"):
    read(asset)
status = json.loads(read("data/agent-readability-status.json"))
require(status.get("threshold") == 95, "agent-readability badge threshold must equal 95")
score = status.get("score")
if score is not None and score >= 95:
    require(bool(re.match(r"^https://agent-ready\\.dev/scan/[A-Za-z0-9_-]+$", str(status.get("scan_url") or ""))), "95+ badge needs a verified Agent Ready scan URL")
    require(bool(status.get("verified_at")), "95+ badge needs a verification timestamp")
else:
    require('id="agent-readability-badge"' in home and 'id="agent-readability-badge" class="agent-readability-badge" href=' in home and ' hidden ' in home, "badge must remain hidden below the verified 95 threshold")
require('src="/js/agent-readability-badge.js"' in home, "homepage missing conditional Agent Readability badge script")

robots = read("robots.txt")
require("Sitemap: " + BASE + "/sitemap.xml" in robots, "robots.txt missing canonical sitemap declaration")
require("User-agent: GPTBot" in robots, "robots.txt missing explicit GPTBot policy")

if errors:
    print("Agent readability contract: FAIL")
    for error in errors:
        print(f" - {error}")
    sys.exit(1)

print(f"Agent readability contract: PASS ({len(PAGES)} HTML pages and Markdown mirrors; discovery, metadata, JSON-LD, sitemap, and crawler policy)")
