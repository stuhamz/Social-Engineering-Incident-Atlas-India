# Start Here

## Adding a candidate

1. Add the candidate to `references/screening_log.csv`.
2. Record the public source URL and enough detail to reproduce the screening decision.
3. Apply the inclusion, exclusion, and duplicate rules.
4. If included, assign the next stable `SEIAI-####` ID.
5. Register every source used for coding.
6. Add the incident to `data/cases.csv`.
7. Add conduct-specific actor records to `data/actors.csv`.
8. Create one narrative reconstruction under `cases/`.
9. Record uncertainty and attribution limitations explicitly.
10. Run all validators and rebuild the public Atlas.

## Current release

**v0.3.0 contains 233 active reviewed incidents, 513 actor-role records, 243 registered sources, and 319 screening candidates.**

Stable active IDs run through `SEIAI-0234`.

`SEIAI-0060` remains retired as a duplicate of `SEIAI-0029`. Stable IDs are never recycled or renumbered.

## Core coding rule

> Reconstruct broadly. Attribute conservatively.

Do not infer a human operator from a bank account, SIM registration, device, IP address, platform account, or transaction endpoint alone.

Keep allegations, investigative claims, prima facie observations, defence claims, and final findings distinct.

## Validation

Run:

```powershell
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
python analysis/scripts/corpus_snapshot.py
python analysis/scripts/build_public_atlas.py
```

Then inspect:

```powershell
git diff --check
git status --short
```

## Interpretation boundary

The Atlas is purposively assembled from public sources.

Do not use corpus counts to estimate national or state prevalence, category frequency in the population, average financial loss, demographic risk, arrest rates, bail rates, or conviction rates.
