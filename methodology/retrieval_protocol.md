# Current Retrieval Protocol

## Purpose

This protocol describes the current process for adding incidents to the Atlas.

The objective is to identify source-rich, distinct social-engineering incidents that add useful geographic, temporal, attack, evidence, or attribution coverage.

## 1. Candidate discovery

Candidates may be located through public judicial and adjudicatory records, official institutional material, credible journalism, and references or links discovered from already reviewed public material.

Discovery priorities can be targeted toward gaps in the existing corpus.

Targeted discovery is a collection strategy, not a claim about prevalence.

## 2. Candidate registration

A substantively screened candidate should be entered in `references/screening_log.csv`.

Record the candidate ID, discovery date, source title and URL, apparent incident year and state where available, provisional category, final screening decision, and duplicate relationship where applicable.

## 3. Incident-level duplicate check

Before creating a new case ID, compare victim/location, dates, amount or transaction path, platform/channel, accused or operator details, FIR or case number, and distinctive pretext.

A different article, FIR, or judgment does not create a new incident when the underlying event is the same.

## 4. Inclusion review

An incident should be included only when human manipulation is materially relevant, the focal incident can be reconstructed separately from aggregate network activity, a public source supports the core factual sequence, source detail is sufficient for conservative coding, and the incident is not already represented.

Use `methodology/inclusion_criteria.md` and `methodology/exclusion_criteria.md`.

## 5. Coding

For an included incident:

1. assign the next stable case ID
2. add the incident row to `data/cases.csv`
3. register all used sources in `references/sources.csv`
4. add actor-function rows to `data/actors.csv`
5. create one narrative file in `cases/`
6. record uncertainty and attribution limitations explicitly

## 6. Validation

Run all validators after every batch.

A batch is not release-ready until active cases and narratives match one-to-one, IDs are unique, source and actor ownership is valid, retired IDs remain retired, date rules pass, and all active cases have at least one source and actor record.

## 7. Release interpretation

No expansion batch should be described as population-representative.

Case counts, state counts, year counts, and attack-category counts describe the reviewed Atlas corpus only.
