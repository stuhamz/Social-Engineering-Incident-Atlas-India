# Sampling Strategy

## Overview

The Atlas uses **purposive, source-driven sampling**.

The goal is to build a diverse, auditable corpus for studying social-engineering mechanisms, evidence, actor functions, and attribution. The project is not designed to estimate the population frequency of cybercrime in India.

## Development history

### Initial methodology pilot

The first 10 incidents were selected deliberately to stress-test the schema across different attack categories, channels, evidentiary patterns, and procedural stages.

### Protocolized expansion

The next stages introduced explicit candidate logging, inclusion and exclusion criteria, incident-level duplicate resolution, source hierarchy, stable IDs, actor-level attribution records, and validator-backed release checks.

### Corrective and targeted expansion

Later collection batches were used to widen geographic coverage, temporal coverage, attack-category coverage, procedural-stage diversity, and evidence/attribution patterns.

Selection priorities were adjusted when earlier corpus audits revealed concentration or gaps.

## Current corpus

The v0.3.0 release contains 233 active reviewed incidents.

Every active incident has at least one registered public source, at least one actor-role record, one narrative reconstruction, a screening-history path, and validator-backed cross-file consistency.

## Candidate logging

Every substantively screened candidate should be recorded in `references/screening_log.csv` as include, exclude, duplicate, or pending.

Candidate logging preserves the collection trail and reduces invisible case selection.

## Interpretation

Because collection is purposive and source availability is uneven, the Atlas must not be used to estimate national or state prevalence, category frequency in the population, average financial loss, demographic risk, arrest rates, bail rates, charge-sheet rates, conviction rates, or the population frequency of any evidence or attribution type.

Comparisons within the reviewed corpus should be framed as corpus-level findings.
