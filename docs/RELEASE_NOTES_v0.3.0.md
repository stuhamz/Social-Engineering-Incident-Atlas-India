# Release Notes v0.3.0

v0.3.0 consolidates the current 233-incident Social Engineering Incident Atlas India corpus into a documented release.

## Corpus

- 233 active reviewed incidents
- 513 actor-role records
- 243 registered sources
- 319 screening candidates
- stable active IDs through `SEIAI-0234`
- `SEIAI-0060` remains retired as a duplicate of `SEIAI-0029`

## Source composition

- 215 incidents use T1 primary sources
- 18 incidents use T3 primary sources
- 143 primary sources are bail orders
- 34 are final judgments
- 24 are appellate judgments
- 8 are procedural orders
- 6 are interim orders
- 18 are journalistic reports

## Change from v0.2.2

The active corpus increased from 84 to 233 reviewed incidents.

The actor layer increased from 220 to 513 records.

Registered sources increased from 93 to 243.

The screening log increased from 107 to 319 candidates.

The release retains the existing incident schema, v0.2 actor-function model, conservative identity-resolution rules, and stable-ID policy.

## Repository alignment

v0.3.0 also refreshes current documentation so that:

- README counts match the authoritative CSVs
- current methodology is separated from historical release notes
- retrieval, sampling, and quality-control documentation reflect the present workflow
- obsolete future-work language is removed from current guidance
- the public Atlas metadata is updated to the current release
- validation commands are centralized

Historical audit files remain in the repository as an audit trail.

## Interpretation

The corpus remains purposive and source-driven.

v0.3.0 does not convert the Atlas into a prevalence sample. Counts by state, year, attack category, procedural stage, loss, or actor type describe the reviewed corpus only.
