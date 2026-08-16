# Deduplication Protocol

One underlying incident should normally correspond to one `case_id`.

## Potential duplicate indicators

- same victim or organisation
- same incident date
- same loss amount
- same accused
- same FIR, court case, or police station
- same unusual fact pattern
- same transaction trail

## Procedure

1. Mark the candidate `pending` while checking.
2. Compare all available sources.
3. If the records concern the same incident, keep one canonical case.
4. Add the additional source to `references/sources.csv`.
5. Mark the screening record `duplicate`.
6. Populate `duplicate_of_case_id`.

Do not discard duplicate-source information. Multiple independent sources may improve case reconstruction.
