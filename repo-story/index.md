---
title: "Repo+Story — the story of what changed"
description: "Cited repository-history narratives and blast-radius-aware change stories."
canonical: https://timerloggedout-spec.github.io/repo-story/
dateModified: 2026-11-13
---

# Repo+Story — read the story of what changed

Repo+Story is a repository-history narrative for review and maintenance. It ingests a repository's git event stream — commits, file mutations, and authors — and produces a clustered, blast-radius-aware story in which every claim is cited to its source commit.

## How the story gets built

1. **Ingest:** collect commits, file mutations, and authorship.
2. **Cluster:** group related events by change coupling, file neighborhoods, authorship, and time windows while preserving rename lineage.
3. **Assess blast radius:** make touched-surface and co-changing-file footprints explicit.
4. **Narrate:** cite every claim to its source commit; uncited claims do not ship.
5. **Publish:** post and update a durable story on the pull request.

## Intended use

Reviewers and maintainers can understand what changed, why it matters, and which surfaces may be affected without reconstructing the narrative from raw repository history each time.

## Source and specification

- [Repo+Story repository](https://github.com/timerloggedout-spec/repo-story)
- [Concept of record](https://github.com/timerloggedout-spec/repo-story/blob/main/CONCEPT.md)
- [Specification](https://github.com/timerloggedout-spec/repo-story/blob/main/SPEC.md)

## Sitemap

- [Complete route sitemap](https://timerloggedout-spec.github.io/sitemap.md)
