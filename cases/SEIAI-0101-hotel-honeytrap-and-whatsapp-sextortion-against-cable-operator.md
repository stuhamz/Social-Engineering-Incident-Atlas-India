# SEIAI-0101: Hotel honeytrap and WhatsApp sextortion against cable operator

## Record status

- Case ID: `SEIAI-0101`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0101-01 | T1 | bail_order | Arun M v. State by Cyber Crime Police Station, 26 October 2021 |

Source URL: https://indiankanoon.org/doc/23000304/

## Procedural posture

- Court / authority: Karnataka High Court
- Case / FIR: Criminal Petition No.3649/2021; Crime No.2/2021
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Karnataka High Court dismissed Arun M’s anticipatory-bail petition on 26 October 2021 after charge sheet.

## Neutral case summary

A Bengaluru cable operator was honeytrapped in a hotel, secretly recorded nude and later threatened by phone and WhatsApp that the video would be circulated unless he paid. He ultimately paid INR 3.4 million. The bail order links multiple accused to the scheme and alleges a conspiracy role for Arun M, but actor-specific digital attribution remains incomplete.

## Reconstruction

### Initial contact

In September 2019, cable operator Shekar met a woman calling herself Sukanya at a Bengaluru hotel, where she allegedly made him nude and recorded video.

### Pretext

Months later, a caller calling herself Nandini sent the nude video over WhatsApp and demanded money under threat of social-media publication; further callers escalated the demands.

### Requested action

Pay escalating extortion demands to prevent publication/distribution of the nude video.

### Victim action and consequence

The complainant paid INR 3,400,000 on different dates in response to the threats.

- Reported financial loss: INR 3400000
- Payment method: `multiple`

## Evidence map

- Phone/SIM: `yes`
- CDR/telecom: `not_reported`
- Bank/transaction: `not_reported`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `yes`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Police arrested multiple accused and recovered INR 600,000 from one accused; the charge sheet relied in part on co-accused statements about roles.

## Actor and attribution analysis

### SEIAI-0101-A01: Sukanya/Nandini sextortion operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `yes`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Creating intimate material and using it in repeated reputational/sexual blackmail demands.
- Limitation: Multiple aliases/callers are described and human-role mapping is incomplete.

### SEIAI-0101-A02: Arun M
- Identity resolution: `identified`
- Role layer: `organisational`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Direct victim contact: `unknown`
- Attribution basis: `co_accused_link` + `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Alleged conspiracy/coordination role in the sextortion network.
- Limitation: Attribution in this bail order depends materially on co-accused statements and was not finally adjudicated.



### Incident-level attribution assessment

- Attribution target: Sukanya/Nandini-linked sextortion network and Arun M’s alleged conspiracy/extortion role.
- Primary basis: `co_accused_link`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The source is an anticipatory-bail order and attributes Arun’s role partly through statements of co-accused; it does not independently map every phone/WhatsApp identity or payment to him.
- Alternative explanation: The petitioner sought anticipatory bail and the allegations remained for trial.

## Primary evidentiary gap

Authenticated device/platform/telecom evidence mapping the extortion identities and communications to individual operators and a complete payment trail.

## Legal/procedural notes

IPC 506; IPC 384; IPC 120B; IT Act 67A

## Coding decisions

Incident begins with the 2019 in-person trap and continues into 2020 extortion; exact end date is not coded.
