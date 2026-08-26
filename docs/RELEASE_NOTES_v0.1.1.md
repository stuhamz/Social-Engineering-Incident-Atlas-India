# v0.1.1 Release Notes

## Release

**Social Engineering Incident Atlas India v0.1.1**

This release expands the reviewed Atlas from 10 to **30 incident records**.

## Added

- 20 newly reviewed incident records, `SEIAI-0011` through `SEIAI-0030`
- 20 new primary judicial/adjudicatory source records
- 20 new narrative reconstruction notes
- a versioned retrieval protocol for the expansion
- additional included, excluded, duplicate, and deferred candidate records in the screening log
- a thirty-case release audit

## Methodological change

The original ten cases were deliberately selected for schema diversity.

Cases 11-30 were collected through a documented retrieval protocol with:

- predefined search-query families
- a stated source hierarchy
- candidate logging
- duplicate resolution by focal incident
- a diversity constraint on new digital-arrest cases
- a fixed twenty-case stopping rule

This improves reproducibility but **does not make the dataset representative**.

## Audit corrections

The second-pass audit made three material conservative changes:

- SEIAI-0016: identity/KYC disclosure is no longer coded as credential compromise
- SEIAI-0029: secondary phishing label removed
- SEIAI-0030: formal forensic examination changed to `not_reported`

See `docs/v0.1.1_release_audit.md`.

## Validation

The reviewed 30-case dataset passes the structural validator with:

- **0 errors**
- **0 warnings**
