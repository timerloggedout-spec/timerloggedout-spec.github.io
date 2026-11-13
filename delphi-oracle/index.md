---
title: "Delphi Oracle — evidence over claims"
description: "Deterministic evidence gate with ALLOW_RECOMMENDATION, ABSTAIN, and ESCALATE outcomes."
canonical: https://timerloggedout-spec.github.io/delphi-oracle/
dateModified: 2026-11-13
---

# Delphi Oracle — evidence over claims

The Delphi Oracle is a deterministic evidence-gate oracle. It judges a proposed consequential action against an evidence set and returns one of three outcomes:

- `ALLOW_RECOMMENDATION`
- `ABSTAIN`
- `ESCALATE`

Each decision carries a versioned receipt.

## Fail-closed behavior

The stated policy is fail-closed: when material evidence is missing, the oracle abstains. Consequential action classes are escalated before evidence is weighed.

## Fetching evidence

The `fetch_evidence` tool retrieves public artifacts such as pull requests, files, and workflow runs in read-only mode, then assembles evidence with source provenance, observation time, freshness, and content hash.

## Demonstration and source

The project page documents a demo and offline tests. Refer to the linked source repository and release for the exact implementation and current state.

- [Delphi Oracle repository](https://github.com/timerloggedout-spec/delphi-oracle)
- [Release v1.0.0](https://github.com/timerloggedout-spec/delphi-oracle/releases/tag/v1.0.0)
- [StudySprint, built on the foundation](https://timerloggedout-spec.github.io/studysprint/)

## Sitemap

- [Complete route sitemap](https://timerloggedout-spec.github.io/sitemap.md)
