# Start Here

## Before adding a case

1. Add the candidate to `references/screening_log.csv`.
2. Record discovery query/source and enough information to reproduce the screening decision.
3. Apply the inclusion/exclusion and duplicate rules.
4. If included, assign the next `SEIAI-####` ID and register every source.
5. Create the incident note and code `data/cases.csv`.
6. Code distinct conduct/actor roles in `data/actors.csv`.
7. Preserve allegation, defence, investigation, prima facie observation and final finding as different claim statuses.
8. Review attribution against the specific conduct being assessed.
9. Run both validators and the privacy scan.
10. Mark records `reviewed` only after a second source-to-code pass.

## Current release

**v0.1.5 contains 75 reviewed incident records and 198 reviewed actor-role records.**

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

The 51–75 corrective batch substantially improved source-stage balance, so the next priority is not simply case count. Seek second-source corroboration, expand outside Delhi/Haryana, target final/appellate material for `family_impersonation` and `tech_support_fraud`, and resolve the future of `accused_count` before a breaking schema revision. The actor schema should remain fixed unless repeated cases expose a genuine structural failure.
