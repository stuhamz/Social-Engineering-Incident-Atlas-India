# Release Notes v0.2.1

v0.2.1 is a repository-integrity hotfix over the unchanged v0.2.0 coded Atlas.

## Why this release exists

The v0.2.0 structured tables correctly retired `SEIAI-0060` as an exact duplicate of `SEIAI-0029`, but an old tracked narrative file for `SEIAI-0060` remained in the public Git tree after the working-tree replacement. That created a mismatch between the 74 active incident rows and 75 `SEIAI-####` narrative files.

## Changes

- removes `cases/SEIAI-0060-olx-buyer-qr-and-upi-payment-manipulation-fraud.md`;
- strengthens `analysis/scripts/validate_full_audit.py` so every active case must have exactly one narrative and no retired/non-active narrative can remain;
- updates current-release documentation and package manifests.

## Data stability

There are **no changes** to `data/cases.csv`, `data/actors.csv`, `references/sources.csv`, or `references/screening_log.csv` from v0.2.0.

The active corpus remains:

- 74 reviewed incidents;
- 196 actor-role records;
- 82 active registered sources;
- 96 screening candidates retained as audit history.

The v0.2.0 workbook remains the authoritative workbook for the unchanged coded data.
