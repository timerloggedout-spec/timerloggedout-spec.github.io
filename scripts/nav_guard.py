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
            "/matrix/", "/termux-monorepo/", "https://github.com/timerloggedout-spec", "#cta"]
missing = [h for h in REQUIRED if h not in hrefs]
assert not missing, f"landing nav missing links: {missing}"
assert len(hrefs) >= len(REQUIRED), f"landing nav shrank: {len(hrefs)} links"

assert not re.search(r"nav ul\s*\{[^}]*display:\s*none", index), \
    "mobile rule hides the nav again (display:none on nav ul)"
print(f"nav guard OK: {len(hrefs)} links, mobile nav visible")
