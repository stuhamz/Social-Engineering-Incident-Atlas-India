# Versioning Policy

## Dataset and coding version

Every structured record includes a coding version so substantive collection or schema changes remain traceable.

Current version history:

- `0.1`: original ten-case methodology pilot
- `0.1.1`: protocolized expansion producing the reviewed 30-case validation set
- `0.1.2`: additive actor-role attribution schema and migration of the 30-case corpus into `actors.csv`
- `0.1.3`: diversity-focused expansion to 40 reviewed incidents using the stable incident and actor schemas
- `0.1.4`: expansion to 50 reviewed incidents followed by the first analytical-stability audit
- `0.1.5`: audit-directed corrective expansion to 75 reviewed incidents, with stronger final/appellate source-stage coverage and no breaking schema change
- `0.2.0`: full 75-ID source-to-code re-audit; retires exact duplicate SEIAI-0060, repairs actor functions and identity resolution, date precision and batch harmonization
- `0.2.1`: repository-integrity hotfix; removes the retired duplicate narrative from the public case directory and adds narrative-to-case validation, with no structured data recoding

Historical rows retain the coding version under which they were last substantively coded. The current repository release version therefore does not require rewriting every earlier row's coding-version value.

A coding-version change records a meaningful collection, coding-method or schema change. It does not imply that the dataset is representative.

## Changes requiring a version note

- adding or removing fields
- changing controlled-vocabulary meanings
- changing inclusion/exclusion criteria
- changing attribution definitions
- changing retrieval or sampling strategy
- recoding earlier cases under new rules
- introducing actor-level or source-claim companion tables

Material changes must be documented in `CHANGELOG.md` and, where appropriate, release-specific audit or release-note files.

## Release discipline

Published Git tags should remain immutable. Corrections after a published tag should be released under a new version rather than moving an existing tag.

The reviewed Excel workbook is distributed as a GitHub release asset rather than committed to the repository. CSVs and research documentation remain versioned in Git.

