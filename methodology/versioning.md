# Versioning Policy

## Dataset and release versioning

Structured records retain the coding version under which they were last substantively coded.

A repository release version summarizes a coherent public snapshot and does not require rewriting historical row-level coding versions when the schema itself has not changed.

## Version history

- `0.1`: original ten-case methodology pilot
- `0.1.1`: protocolized expansion to 30 reviewed incidents
- `0.1.2`: actor-role attribution schema introduced
- `0.1.3`: expansion to 40 reviewed incidents
- `0.1.4`: expansion to 50 reviewed incidents and analytical-stability audit
- `0.1.5`: corrective expansion to 75 reviewed incidents
- `0.2.0`: full 75-ID source-to-code re-audit; exact duplicate `SEIAI-0060` retired
- `0.2.1`: repository-integrity hotfix
- `0.2.2`: expansion to 84 active reviewed incidents without a breaking schema change
- `0.3.0`: consolidated 233-incident public release, retaining the v0.2 actor/function schema and stable-ID rules
- `0.4.0`: 300-active-incident public release; judgment-heavy expansion to stable ID `SEIAI-0301`, with the existing v0.2 actor/function schema retained

## Changes requiring a version note

- adding or removing fields
- changing controlled-vocabulary meanings
- changing inclusion or exclusion rules
- changing attribution definitions
- materially changing retrieval or sampling strategy
- recoding earlier records under new rules
- introducing new companion tables
- large corpus releases

## Stable IDs

Incident IDs are never renumbered to close gaps.

Retired IDs remain retired and are documented as such.

## Release discipline

Published Git tags should remain immutable.

Corrections after a published tag should be released under a new version rather than moving the existing tag.

Historical audit files and release notes remain part of the repository record even when the current methodology has evolved.
