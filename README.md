# timerloggedout-spec.github.io

Marketing landing page and public project/operations index, served by GitHub Pages at https://timerloggedout-spec.github.io/.

## Landing page source

- Marketing copy data: `js/content.js` (canonical source for the client-side enhancement).
- HTML structure, styles, metadata, and **static fallback copy**: `index.html`.
- Keep the visible initial HTML semantically equivalent to `js/content.js`; essential content must be readable without JavaScript.
- Project explainers: `studysprint/`, `delphi-oracle/`, and `repo-story/`.
- Operations surfaces: `tribute/` and `matrix/`.

## Agent-readable discovery

- [`llms.txt`](llms.txt): curated agent entry point.
- [`llms-full.txt`](llms-full.txt): expanded context.
- [`AGENTS.md`](AGENTS.md): repository guidance for coding agents.
- [`sitemap.xml`](sitemap.xml): machine-readable route index.
- [`sitemap.md`](sitemap.md): hierarchical Markdown route index.
- Markdown mirrors live beside the primary HTML pages as `index.md`.

## Source of truth

The site is a discovery and presentation surface. Engineering state is authoritative in the owning source repositories, commit history, pull requests, workflow runs, and generated evidence artifacts. Dashboard values are projections and must be interpreted with their freshness and provenance.

## Maintainers

Maintained by the project contributors. Public partner and referral copy is governed by the source registry in the termux-monorepo.
