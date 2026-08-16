# Start Here

This file defines the v0.1 workflow.

## Before adding a case

1. Add the candidate to `references/screening_log.csv`.
2. Apply `methodology/inclusion_criteria.md`.
3. Record the decision as `include`, `exclude`, `duplicate`, or `pending`.
4. If included, assign the next case ID in the format `SEIAI-0001`.
5. Create a case note from `cases/CASE_TEMPLATE.md`.
6. Add every source to `references/sources.csv`.
7. Code the case in the local coding workbook or directly in `data/cases.csv`.
8. Run `python analysis/scripts/validate_dataset.py`.
9. Review all attribution statements using `methodology/attribution_framework.md`.
10. Mark the record `reviewed` only after a second pass against the source.

## v0.1 target

Code 10 deliberately varied cases, ideally including several different social-engineering forms. The purpose is schema testing, not prevalence estimation.

## Do not do yet

- Do not make claims about national prevalence from the first 10 cases.
- Do not automate case coding with an LLM.
- Do not infer missing attack stages.
- Do not collapse allegations, investigative claims, and judicial findings.
- Do not treat bank, SIM, device, or IP association as automatic proof of human conduct.
- Do not delete excluded candidates from the screening log.

## After 10 cases

Review the schema before pushing a public v0.1 dataset. Specifically assess:

- fields that were almost always unavailable
- categories that overlap
- values that were difficult to code consistently
- recurring evidence types not captured
- recurring social-engineering mechanisms not captured
- whether attribution strength can be applied consistently
- whether the sampling strategy needs revision
