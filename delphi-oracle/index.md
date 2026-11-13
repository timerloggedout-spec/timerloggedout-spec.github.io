---
title: Delphi Oracle — evidence over claims
description: A deterministic evidence-gate oracle that returns ALLOW_RECOMMENDATION, ABSTAIN, or ESCALATE with a versioned receipt.
last_updated: 2026-11-13
---

# Delphi Oracle — evidence over claims

> A deterministic evidence-gate oracle judges a proposed consequential action against an evidence set and returns ALLOW_RECOMMENDATION, ABSTAIN, or ESCALATE with a versioned receipt.

The oracle fails closed: without material evidence it abstains; for consequential action classes it escalates before evidence is weighed.

## The fetch_evidence tool

The read-only fetch_evidence tool retrieves a named artifact such as a pull request, file, or workflow run. It assembles evidence items carrying:

- Provenance: source, exact API path, and observation time.
- Freshness: a fresh_until timestamp.
- Content hash: a hash of the evidence set that was judged.

## Decision flow

1. Judge a request supported only by asserted evidence. The oracle abstains.
2. Fetch the named artifact's actual state and checks.
3. Judge again against the fetched evidence and issue a versioned receipt.
4. Escalate sensitive action classes before evidence evaluation.

## Published demonstration and limitations

The page documents a captured demonstration with three scenarios: asserted evidence only (ABSTAIN), a fetched pull request (ALLOW_RECOMMENDATION), and a credential-mutation request (ESCALATE). It reports an offline test suite and a local Lambda handler smoke test.

The page explicitly states that there is no live AWS deployment, no Bedrock invocation claim, and no challenge submission or win claim. The deterministic MVP kernel is not a model/provider ballot.

## Source and release

- [Delphi Oracle repository](https://github.com/timerloggedout-spec/delphi-oracle)
- [Release v1.0.0](https://github.com/timerloggedout-spec/delphi-oracle/releases/tag/v1.0.0)
- [StudySprint](https://github.com/timerloggedout-spec/studysprint)
- [Fleet landing page](https://timerloggedout-spec.github.io/delphi-oracle/)


## Sitemap

- [Site sitemap](https://timerloggedout-spec.github.io/sitemap.md)
- [Agent discovery index](https://timerloggedout-spec.github.io/llms.txt)
