# Roadmap

## Current baseline: v0.3.0

The Atlas contains 233 active reviewed incidents, 513 actor-role records, 243 registered sources, 319 screening candidates, a public exploration interface, and validator-backed cross-file checks.

## Next expansion stage

Continue expansion in bounded, reviewable batches.

Priorities:

- underrepresented states and Union Territories
- earlier incident years where credible public material exists
- attack categories with thin coverage
- stronger T1 judicial or official sources where available
- cases that add new evidence or attribution patterns rather than only increasing count

Every batch should:

1. log candidates in `references/screening_log.csv`
2. check incident-level duplicates
3. register sources
4. add the incident row
5. add actor-function records
6. create one narrative per active incident
7. run all validators
8. rebuild the public Atlas
9. document the release-level change

## Quality priorities

- preserve stable IDs
- preserve exact source provenance
- avoid invented date precision
- keep allegations and adjudicated findings separate
- distinguish endpoint association from conduct attribution
- prefer explicit unknown values over researcher inference
- add corroborating sources where they materially improve a record

Future analysis should continue to treat procedural stage, source availability, and purposive collection as part of the study design rather than as population sampling.
