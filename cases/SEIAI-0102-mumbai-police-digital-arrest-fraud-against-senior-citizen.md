# SEIAI-0102: Mumbai Police digital-arrest fraud against senior citizen

## Record status

- Case ID: `SEIAI-0102`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0102-01 | T1 | bail_order | Rajendra Kumar v. State NCT of Delhi, 28 January 2026 |

Source URL: https://indiankanoon.org/doc/174042043

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN.353/2026; FIR No.026/2025
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Delhi High Court dismissed Rajendra Kumar’s anticipatory-bail application on 28 January 2026, emphasizing the need for custodial investigation.

## Neutral case summary

A man in his seventies was placed under digital arrest by unknown persons posing as Mumbai Police IPS officers and induced to transfer INR 13,818,100 under a money-laundering pretext. The bail applicant was alleged to be a downstream mastermind/fund handler, but the source does not independently identify him as the victim-facing caller.

## Reconstruction

### Initial contact

The source records that Vijay Kumar Kathuria, in his seventies, was contacted by unknown persons impersonating IPS officers from Mumbai Police.

### Pretext

The operators alleged that the complainant was involved in a money-laundering case and placed him under digital arrest.

### Requested action

Comply with the purported police/money-laundering investigation and transfer funds as directed.

### Victim action and consequence

The complainant transferred INR 13,818,100 in the course of the digital-arrest fraud.

- Reported financial loss: INR 13818100
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `not_reported`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: The bail order records a prosecution theory that INR 9,782,500 was handled/transferred by the applicant and cites CCTV contact with co-accused.

## Actor and attribution analysis

### SEIAI-0102-A01: Mumbai Police impersonator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Operating the money-laundering digital-arrest deception and directing transfers.
- Limitation: The source does not identify the communication platform or resolve the human callers.

### SEIAI-0102-A02: Rajendra Kumar
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `co_accused_link`
- Attribution strength: **limited**
- Conduct assessed: Alleged downstream coordination and movement of a substantial part of the proceeds.
- Limitation: Mastermind attribution relies partly on co-accused statement and does not establish victim-facing conduct.



### Incident-level attribution assessment

- Attribution target: Unknown Mumbai Police impersonators and Rajendra Kumar’s alleged downstream mastermind/fund-handling role.
- Primary basis: `co_accused_link`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The applicant was named by a co-accused and alleged to have handled/transferred funds; the order does not establish that he performed the original victim-facing impersonation or provide independent platform evidence resolving the callers.
- Alternative explanation: The applicant argued that the co-accused statement had no evidentiary value and sought anticipatory bail; guilt remained unadjudicated.

## Primary evidentiary gap

Victim-facing communication/provider evidence and independent corroboration linking the applicant to control and knowing transfer of focal proceeds.

## Legal/procedural notes

BNS 308; BNS 318(4); BNS 319; BNS 340

## Coding decisions

The source does not identify the initial communication platform, so contact channel is coded unknown.
