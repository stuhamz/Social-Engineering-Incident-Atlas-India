# Sampling Strategy

## v0.1.0: 10-case methodology pilot

The first 10 cases use **purposive diversity sampling** solely to test the coding framework across different attack categories, channels, evidentiary patterns, and procedural stages.

## v0.1.1: 30-case expanded validation set

Cases 11-30 are collected under the versioned retrieval protocol in [`retrieval_protocol_v0.1.1.md`](retrieval_protocol_v0.1.1.md).

The expansion introduces:

- documented query families
- a defined search date/window
- explicit candidate logging
- incident-level duplicate resolution
- a category-diversity constraint
- a 20-new-case stopping rule
- preservation of eligible-but-deferred cases as `pending`

This remains a **protocolized purposive validation set**, not a representative sample.

## Candidate logging

Every substantively inspected candidate must be entered in `references/screening_log.csv`, including excluded, duplicate and deferred/pending cases.

This prevents invisible cherry-picking and creates an auditable record of how the dataset was assembled.

## Prohibited inference from v0.1.x

The 10-case pilot and 30-case expanded validation set must not be used to estimate:

- national or state prevalence
- average financial loss
- comparative frequency of attack categories
- demographic risk
- arrest, bail, charge-sheet or conviction rates
- the population frequency of any evidence or attribution type

## Toward v0.2

Before a larger empirical release, the project should evaluate the 30-case schema audit and decide whether actor-level, source-claim, transaction-level or provider-evidence companion tables are necessary. A later sampling strategy should further reduce dependence on relevance-ranked manual search results.
