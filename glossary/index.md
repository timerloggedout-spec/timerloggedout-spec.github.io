---
title: "Glossary — Autonomous AI Employees"
description: "Definitions for evidence, provenance, agent orchestration, dashboards, and software delivery terms."
canonical: https://timerloggedout-spec.github.io/glossary/
dateModified: 2026-11-13
---

# Glossary

Shared vocabulary for reading the public project pages, operational dashboards, and evidence records.

## Evidence and provenance

- **Evidence:** A source-backed observation that can be inspected or independently retrieved. A summary or assertion without a supporting source is not equivalent to evidence.
- **Receipt:** A structured record of a decision or operation, including inputs, outcome, version, and provenance.
- **Provenance:** The origin and observation context of a record: source, artifact or API path, and observation time.
- **Freshness:** Whether an observation is recent enough for the decision being made.
- **Asserted evidence:** A statement supplied by a person or agent but not independently verified against its source.
- **Content hash:** A cryptographic digest identifying exact content bytes. A hash supports integrity checking; it does not establish truth.

## Execution and delivery states

- **COMMITTED:** A change exists in version-control history. It is not proof of execution or deployment.
- **EXECUTED:** The relevant job or process actually ran, with runtime evidence.
- **VALIDATED:** Expected outputs and quality requirements were checked against observed evidence.
- **PROMOTED:** A change was deliberately moved into its target production or canonical state.
- **PARTIAL:** Only a bounded portion of the intended dataset or operation is complete.
- **STALE:** The observation is older than its freshness policy or the latest known source state.

## Agent orchestration and measurement

- **Agent:** An automated software actor performing a bounded task using tools, instructions, and an execution environment.
- **Manager / orchestrator:** The policy layer that assigns work, selects agents, coordinates dependencies, manages retries, and decides when to integrate or escalate.
- **ATES:** Agent Throughput and Effectiveness Score, a family of throughput and execution-efficiency observations. It does not replace correctness or quality evidence.
- **WTCV:** Weighted Task Completion Value, a throughput/effectiveness measure interpreted using task weight and outcome quality.
- **3L0 / MoneyBall:** Evidence-oriented evaluation of agent and manager outcomes using quality, integration, time, context use, retries, conflicts, and human intervention rather than raw activity alone.
- **Lane Matrix:** A generated projection grouping pull requests into operational lanes for triage. It is not merge authorization.

## Sitemap

- [Complete route sitemap](https://timerloggedout-spec.github.io/sitemap.md)
