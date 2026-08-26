# Start Here

This file defines the current Atlas workflow.

## Before adding a case

1. Add the candidate to `references/screening_log.csv`.
2. Record the discovery query/source and enough information to reproduce the screening decision.
3. Apply `methodology/inclusion_criteria.md` and `methodology/exclusion_criteria.md`.
4. Record the decision as `include`, `exclude`, `duplicate`, or `pending`.
5. If included, assign the next `SEIAI-####` case ID.
6. Register every source in `references/sources.csv`.
7. Create a case note from `cases/CASE_TEMPLATE.md`.
8. Code the incident in `data/cases.csv` or the local workbook.
9. Review source stage and claim status so allegations, defence claims, investigative assertions, and judicial findings are not collapsed.
10. Review attribution using `methodology/attribution_framework.md`.
11. Run `python analysis/scripts/validate_dataset.py`.
12. Mark the record `reviewed` only after a second source-to-code pass.

## Current release

**v0.1.1 contains 30 reviewed incident records.**

- SEIAI-0001 to SEIAI-0010 form the original purposive methodology pilot.
- SEIAI-0011 to SEIAI-0030 form the protocolized expanded validation set.
- The expansion protocol is documented in `methodology/retrieval_protocol_v0.1.1.md`.

The combined 30-case dataset remains a methodology and schema-validation set. It is not a representative sample of Indian cybercrime.

## Do not infer

- national or state prevalence
- average losses
- comparative frequency of scam categories
- demographic risk
- conviction rates
- missing attack stages
- human identity from bank, SIM, device, IP, or platform association alone

## Next stage

Before collecting the larger v0.2 dataset, review:

- fields that are persistently unavailable
- actor-level information that cannot be represented cleanly in one incident row
- whether source claims need a companion table
- overlapping or overly broad categories
- attribution-scale consistency
- source-stage imbalance
- retrieval bias toward fact-rich bail orders and recent High Court material

Automated source discovery may be expanded later. Final factual coding and attribution decisions remain human-reviewed.
