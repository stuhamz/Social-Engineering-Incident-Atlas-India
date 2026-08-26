# Retrieval Protocol v0.1.1

## Purpose

This protocol governs the expansion from the 10-case v0.1 methodology pilot to a **30-case expanded validation set**.

The purpose remains schema and method validation. The 30 cases are **not a probability sample** and must not be used to estimate national prevalence, state rankings, average loss, category frequency, demographic risk, arrest rates, conviction rates, or any other population parameter.

## Source universe

For this phase, candidate discovery is restricted to **publicly accessible Indian adjudicatory/judicial material**, with High Court decisions and orders prioritized.

Indian Kanoon is used as a discovery/access index where convenient. Source tier continues to classify the underlying judicial/adjudicatory material rather than the website hosting the accessible copy. Important claims should be checked against an official court copy when practicable.

## Retrieval window

Search pass executed: **26 August 2026**.

The phase primarily searched decisions published from **1 January 2024 through 26 August 2026**. The underlying incidents may have occurred earlier where a qualifying decision within the publication window contained sufficient detail.

## Query families

The search used documented concept families rather than case-name discovery alone:

- `digital arrest` + police / CBI / court / TRAI / RBI / telecom
- WhatsApp / Telegram + investment / stock / trading / app / high returns
- work from home / review / rating / task + WhatsApp / Telegram
- customer care / tech support + APK / remote access / Microsoft / AnyDesk / TeamViewer
- romance / matrimonial / marriage + impersonation / Army / blackmail
- sextortion / intimate material / social media / WhatsApp
- marketplace / OLX + UPI / QR / payment
- evidence-oriented terms such as CDR, SIM, IMEI, bank account, device, forensic, IP, CCTV and WhatsApp chats were used to prioritize cases with evidentiary detail

Exact query descriptions for substantively inspected candidates are retained in `references/screening_log.csv`.

## Screening sequence

A candidate is included only where:

1. India is materially involved in the incident, investigation, accused network or adjudication.
2. Human manipulation is a material part of the attack rather than a purely technical compromise.
3. The public source contains enough detail to reconstruct at least initial contact, pretext and consequential victim action.
4. The source contains at least one meaningful evidentiary, digital-forensic, financial-trail or attribution feature.
5. The incident is not a duplicate of an already coded focal incident.

Every substantively inspected candidate is logged as `include`, `exclude`, `duplicate`, or `pending`.

## Duplicate rule

The unit of analysis is the **incident**, not the accused person or court order.

Different bail orders concerning different accused are duplicates if they arise from the same focal victim incident/FIR and do not represent a distinct incident. Multiple sources may instead be linked to one case record.

## Diversity constraint

The first ten cases were deliberately diverse. For the next twenty, retrieval is more protocolized but still retains a diversity constraint because the purpose is validation rather than prevalence estimation.

For this 20-case batch:

- no more than **six new digital-arrest incidents** were selected;
- once a category cap was reached, otherwise eligible candidates were left `pending`, not falsely marked `exclude`;
- cases with weak attribution, strong attribution, missing financial totals, conflicting source claims, non-criminal adjudication, and final convictions were deliberately retained when they tested different parts of the schema.

## Stopping rule

The collection pass stops after **20 new eligible, non-duplicate incidents** have been coded, producing 30 total Atlas cases.

Additional eligible candidates discovered after a category cap or stopping rule remain `pending` for a later version.

## Known retrieval bias

This protocol improves auditability but does not create a representative sample.

Likely biases include:

- judicial-publication bias
- bail-order overrepresentation
- English-language/search-index bias
- preference for cases with unusually detailed fact recitals
- survivorship toward incidents that reached higher courts
- greater visibility of financial and telecom evidence than provider-side platform evidence

These biases must be considered before any descriptive claims are generalized beyond the dataset.
