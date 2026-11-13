---
title: "Tribute — evidence and control surface"
description: "Read-only evidence and control surface for the upstream contributor lane."
canonical: https://timerloggedout-spec.github.io/tribute/
dateModified: 2026-11-13
---

# Tribute — contributor lane evidence and control surface

Tribute observes the upstream contribution lane from scout → claim → pull request → follow-up → evidence → publication.

This surface is a projection of repository evidence, not a second source of truth and not a MoneyBall admission score. Its operational panels summarize generated status feeds and receipts.

## Live board

The dashboard presents current KPIs, charts, contributor-lane records, foreign open pull requests, tracked evidence, lane evolution, publication lanes, and the operating contract. Values are loaded from published feeds; check their observation timestamp and source before drawing conclusions.

## Control surface

The browser dashboard is for inspection and navigation. It embeds no credentials and does not mutate repository state. Operator links open the owning GitHub workflow, issue, Vercel project, or other platform surface where platform permissions govern actions.

## Evidence interpretation

- A dashboard row is a projection; follow its source receipt or repository record.
- A queued workflow is not a completed workflow.
- Reachability is not proof of deployment provenance.
- Missing or stale data remains missing or stale.
- Do not treat the dashboard as an admission score or as a replacement for source ledgers.

## Related surfaces

- [Lane Matrix](https://timerloggedout-spec.github.io/matrix/)
- [Quota panel](https://timerloggedout-spec.github.io/tribute/quota.html)
- [Tracking](https://timerloggedout-spec.github.io/tribute/tracking.html)
- [Desk](https://timerloggedout-spec.github.io/tribute/desk.html)
- [Termux Monorepo](https://github.com/timerloggedout-spec/termux-monorepo)
- [Tribute lane contract](https://github.com/timerloggedout-spec/termux-monorepo/blob/master/docs/ops/Tribute-LANE.md)

## Sitemap

- [Complete route sitemap](https://timerloggedout-spec.github.io/sitemap.md)
