# Start Here

## Before adding a case

1. Add the candidate to `references/screening_log.csv`.
2. Record discovery query/source and enough information to reproduce the screening decision.
3. Apply the inclusion/exclusion and duplicate rules.
4. If included, assign the next `SEIAI-####` ID and register every source.
5. Create the incident note and code `data/cases.csv`.
6. Code distinct conduct/actor roles in `data/actors.csv`, including non-exclusive victim-facing and financial function flags.
7. Preserve allegation, defence, investigation, prima facie observation and final finding as different claim statuses.
8. Review attribution against the specific conduct being assessed.
9. Run `validate_dataset.py`, `validate_actors.py`, `validate_full_audit.py`, and the privacy scan.
10. Mark records `reviewed` only after a second source-to-code pass.

## Current release

**v0.2.0 contains 74 active reviewed incident records and 196 reviewed actor-role records.** The 75-ID history is retained in the audit log, with `SEIAI-0060` retired as an exact duplicate of `SEIAI-0029`.

The combined corpus remains a methodology/schema-validation set rather than a prevalence sample.

## Do not infer

- national or state prevalence
- average losses
- comparative scam-category frequency
- demographic risk
- conviction rates
- missing attack stages
- human identity from a bank, SIM, device, IP or platform association alone

## Next stage

The v0.2.0 full re-audit is the current methodological baseline. Before adding more cases, use the corrected corpus to decide which research questions survive. If expansion resumes, prioritize second-source corroboration, underrepresented geographies, final/appellate material for categories still dominated by interim records, and richer provider/forensic evidence. Stable IDs must never be recycled or renumbered.
