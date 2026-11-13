# Agent Guide — Autonomous AI Employees Website

## Overview

This repository publishes https://timerloggedout-spec.github.io/ as a static GitHub Pages site. It contains a marketing landing page, project explainers, and read-only operational dashboards for the timerloggedout-spec ecosystem.

The site is a discovery and presentation layer. It is not the authoritative store for repository state, pull-request status, workflow execution, deployment provenance, credentials, or private operational data.

## Setup

The site is primarily static HTML, CSS, JavaScript, Markdown, JSON, and XML.

- No package manifest or application build command is currently declared at the repository root.
- Preview HTML files directly in a local static web server when testing browser behavior.
- Do not introduce a framework, package manager, or deployment platform merely to add static discovery files.
- Confirm the actual GitHub Pages publishing branch and deployment workflow before changing publication configuration.

## Configuration

- `index.html`: landing-page structure, styles, static fallback content, metadata, and structured data.
- `js/content.js`: canonical marketing copy and landing-page data used by the existing client-side enhancement.
- `tribute/`: Tribute contributor-lane dashboards and their supporting assets.
- `matrix/`: live pull-request lane matrix.
- `studysprint/`: StudySprint project explainer.
- `delphi-oracle/`: Delphi Oracle project explainer.
- `repo-story/`: Repo+Story project explainer.
- `llms.txt`: curated agent-facing entry point.
- `llms-full.txt`: expanded agent-facing context.
- `sitemap.xml` and `sitemap.md`: machine-readable and human/agent-readable route indexes.
- `AGENTS.md`: this repository's agent operating guidance.

The landing page's visible static fallback should remain semantically equivalent to the copy in `js/content.js`. Update both when marketing copy changes. Client-side scripts may enhance the page, but essential meaning and navigation must remain available in the initial HTML.

## Usage

Use the site to discover public projects, read project summaries, and navigate to source repositories and evidence dashboards.

Preferred starting points:

- Home: https://timerloggedout-spec.github.io/
- Tribute: https://timerloggedout-spec.github.io/tribute/
- Lane Matrix: https://timerloggedout-spec.github.io/matrix/
- StudySprint: https://timerloggedout-spec.github.io/studysprint/
- Delphi Oracle: https://timerloggedout-spec.github.io/delphi-oracle/
- Repo+Story: https://timerloggedout-spec.github.io/repo-story/

Use the Markdown mirror at the corresponding `.md` URL when extracting page content. Use `llms.txt` as the curated index and `llms-full.txt` for expanded context.

## Source of truth and evidence

- Treat source repositories, commit SHAs, pull requests, workflow runs, and generated evidence artifacts as authoritative for engineering state.
- Treat dashboards as projections. Check their source feed, generated timestamp, and source SHA before relying on a displayed value.
- Keep PARTIAL, STALE, UNOBSERVED, QUEUED, and FAILED states distinct. Never translate them into COMPLETE or SUCCESS without evidence.
- Do not infer that a deployment serves a particular commit merely because its URL responds.
- Do not silently reconcile conflicting source records; identify the conflict and defer to the subsystem's documented authority hierarchy.
- Keep private data, secrets, tokens, session exports, prompts, completions, and internal-only metrics out of public pages and agent-facing files.

## Accessibility and agent readability

- Keep meaningful page content in initial HTML; JavaScript is an enhancement, not the only source of page meaning.
- Use one descriptive `h1`, properly nested section headings, a `main` landmark, a skip link, and accessible names for controls.
- Give every public HTML page a unique title, useful meta description, canonical URL, Open Graph metadata, and JSON-LD describing the page.
- Maintain a Markdown mirror and a `rel="alternate" type="text/markdown"` link for each primary public page.
- Link to `/llms.txt` with `rel="describedby"` so agents can discover the curated index from any primary page.
- Keep `robots.txt` permissive for public content and keep `/llms.txt` crawlable.
- Update `sitemap.xml` and `sitemap.md` when public routes are added, removed, or renamed. Set `lastmod` only when the corresponding page was actually modified.
- GitHub Pages is static hosting; do not claim it supports dynamic content negotiation for `Accept: text/markdown` unless a deployed server/edge implementation and its response headers have been verified.

## Validation

Before publishing changes:

1. Check all new links resolve to the intended public route or source file.
2. Parse `sitemap.xml` as XML and verify unique, absolute HTTPS URLs.
3. Verify every Markdown mirror has frontmatter, a page title, useful headings, and a Sitemap section.
4. Verify every primary HTML page has a unique canonical URL, description, Open Graph title/description, JSON-LD, Markdown alternate, and `rel="describedby"` link.
5. Confirm the landing page's main content is present in the raw HTML without JavaScript.
6. Check that headings are non-empty, landmarks are present, and links/buttons have accessible names.
7. Re-run the Agent Ready scan against the deployed URL after the Pages deployment completes. A branch-only change is not evidence of a production score improvement.

Report exact commands, results, commit SHA, deployment identity, and scan ID. Do not claim a fix is live until the deployed source SHA has been verified.
