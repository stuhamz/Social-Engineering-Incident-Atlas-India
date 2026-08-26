# Versioning Policy

## Dataset and coding version

Every case record includes `coding_version`.

- `0.1`: original ten-case methodology pilot
- `0.1.1`: twenty-case protocolized expansion, producing the reviewed 30-case validation set

A coding-version change records a meaningful collection or coding-method change. It does not imply that the dataset is representative.

## Changes requiring a version note

- adding or removing fields
- changing controlled-vocabulary meanings
- changing inclusion/exclusion criteria
- changing attribution definitions
- changing retrieval or sampling strategy
- recoding earlier cases under new rules
- introducing actor-level or source-claim companion tables

Material changes must be documented in `CHANGELOG.md`.

## Release discipline

Published Git tags should remain immutable. Corrections after a published tag should be released under a new version rather than moving an existing tag.
