---
title: Repo+Story — the story of what changed, cited
description: A repository-history narrative concept that groups git events into cited change stories with blast-radius context.
last_updated: 2026-11-13
---

# Repo+Story — the story of what changed, cited

> Repo+Story turns a repository's git event stream into a clustered, blast-radius-aware narrative where every claim is cited to its source commit.

Repo+Story is a PR and repository-history narrative concept for review and maintenance. It is intended to help reviewers understand what changed together, why it matters, and what it touches without re-deriving the story from raw history.

## Proposed workflow

1. **Ingest:** commits, file mutations, and authors.
2. **Cluster:** group events by change coupling, file neighborhoods, authorship, and time windows while retaining rename lineage.
3. **Blast radius:** identify the touched-surface footprint and coupled files.
4. **Narrate:** generate a chronological story with every claim cited to its source commit.
5. **Publish:** post or update a sticky story on the pull request.

## Proposed surfaces

- GitHub Action for a sticky PR story.
- Local pre-push hook for a draft PR description.
- Pinned Markdown story as a durable review record.

## Status and boundaries

The published page explicitly describes Repo+Story as a concept of record with a buildable specification, not a shipped product. It distinguishes the concept from Gource animation and from similarly named projects.

## Source material

- [Repo+Story repository](https://github.com/timerloggedout-spec/repo-story)
- [Concept of record](https://github.com/timerloggedout-spec/repo-story/blob/main/CONCEPT.md)
- [Specification](https://github.com/timerloggedout-spec/repo-story/blob/main/SPEC.md)
- [Fleet landing page](https://timerloggedout-spec.github.io/repo-story/)
