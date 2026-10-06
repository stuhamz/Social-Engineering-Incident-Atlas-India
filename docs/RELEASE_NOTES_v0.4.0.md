# Release Notes v0.4.0

v0.4.0 publishes the 300-active-incident Social Engineering Incident Atlas India corpus.

## Corpus

- 300 active reviewed incidents
- 600 actor-role records
- 310 registered sources
- 412 screening candidates
- stable active IDs through `SEIAI-0301`
- `SEIAI-0060` remains retired as a duplicate of `SEIAI-0029`

## Source composition

- 282 incidents use T1 primary sources
- 18 incidents use T3 primary sources
- 143 primary sources are bail orders
- 77 are final judgments
- 48 are appellate judgments
- 8 are procedural orders
- 6 are interim orders
- 18 are journalistic reports

## Change from v0.3.0

The active corpus increased from 233 to 300 reviewed incidents.

The actor layer increased from 513 to 600 records.

Registered sources increased from 243 to 310.

The screening log increased from 319 to 412 candidates.

All 67 incidents added since v0.3.0 use T1 primary sources. The number of bail-order primary sources remains 143, while final-judgment primaries increased from 34 to 77 and appellate-judgment primaries increased from 24 to 48.

The release therefore increases the proportion of merits-stage material without changing the incident schema, actor-function model, conservative identity-resolution rules, or stable-ID policy.

## 47-case final expansion

The final expansion from 253 to 300 active incidents was built under an explicit judgment-heavy acquisition rule.

- 47 genuinely new incidents survived the final audit
- 47 use T1 adjudicatory material as the primary source
- 0 use bail orders as the primary source
- duplicate incidents were removed before stable IDs were assigned
- weaker candidates were replaced rather than retained merely to reach the target count
- victim-facing, financial, technical, and endpoint attribution remained analytically separate

The expansion occupies stable IDs `SEIAI-0255` through `SEIAI-0301`.

## Repository alignment

v0.4.0 refreshes current documentation and the public Atlas so that:

- README counts match the authoritative CSVs
- the public interface is rebuilt from the 300-case research tables
- release metadata and citation text identify v0.4.0
- current documentation points to the v0.4.0 release notes
- historical release notes remain unchanged as an audit trail
- all validators continue to return zero errors and zero warnings before release

## Interpretation

The corpus remains purposive and retrieval-driven.

The increase in final and appellate judgments is a collection-quality correction, not evidence that such procedural stages are more prevalent in Indian cybercrime generally.

Counts by state, year, attack category, procedural stage, financial loss, actor type, or evidentiary feature describe the reviewed corpus only. They must not be interpreted as national prevalence, state rankings, conviction rates, average-loss estimates, or demographic risk.
