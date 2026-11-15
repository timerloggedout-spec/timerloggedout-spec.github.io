#!/usr/bin/env python3
"""Validate canonical landing navigation routes and visible mobile navigation."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
content = (ROOT / "js" / "content.js").read_text(encoding="utf-8")
index = (ROOT / "index.html").read_text(encoding="utf-8")

nav_block = re.search(r"nav:\s*\[(.*?)\],", content, re.S)
assert nav_block, "nav block not found in content.js"
hrefs = re.findall(r'href:"([^"]+)"', nav_block.group(1))

REQUIRED = ["#why", "#demo", "#partners", "studysprint/", "delphi-oracle/", "repo-story/",
            "/tribute/", "/tribute/tracking.html",
            "/tribute/quota.html", "/tribute/desk.html",
            "/matrix/", "/termux-monorepo/", "videos.html", "https://github.com/timerloggedout-spec", "#cta"]
missing = [h for h in REQUIRED if h not in hrefs]
assert not missing, f"landing nav missing links: {missing}"
assert len(hrefs) >= len(REQUIRED), f"landing nav shrank: {len(hrefs)} links"

assert not re.search(r"nav ul\s*\{[^}]*display:\s*none", index), \
    "mobile rule hides the nav again (display:none on nav ul)"

# Public video-library discovery contract.
videos_html = ROOT / "videos.html"
videos_md = ROOT / "videos.md"
assert videos_html.is_file(), "videos.html is missing"
assert videos_md.is_file(), "videos.md mirror is missing"
for filename in ("sitemap.xml", "sitemap.md", "llms.txt", "llms-full.txt"):
    text = (ROOT / filename).read_text(encoding="utf-8")
    assert "/videos.html" in text, f"{filename} does not discover videos.html"
gallery = videos_html.read_text(encoding="utf-8")
assert 'type="text/markdown"' in gallery and 'href="/videos.md"' in gallery, "video page Markdown alternate is missing"
for video_id in ("i0FusuYuRUs", "DNREnvgjIv0", "VkjO57haraQ", "4Qf0OAq4d7c", "ixpUUm4pkdQ", "gUC3RqTZXCQ", "-CNherwZM-o", "z-hkwnUFOqM", "WK9LMwpvHUk", "AZSeqOI5H9M", "N3HBRV4LOGQ", "AKCqOCXAFu0", "eFXyOYTpuvg"):
    assert video_id in gallery, f"video library is missing curated asset {video_id}"

print(f"nav guard OK: {len(hrefs)} links, mobile nav visible")
