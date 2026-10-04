# SEIAI-0144: 55 Shoonya Growth Club WhatsApp IPO investment fraud

## Record status

- Case ID: `SEIAI-0144`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0144-01 | T1 | bail_order | Sanju Kumar Shah v. State of Rajasthan, 2 April 2026 |

Source URL: https://indiankanoon.org/doc/33824373/

## Procedural posture

- Court / authority: Rajasthan High Court, Jodhpur
- Case / FIR: S.B. Criminal Misc. Bail Application No.2238/2026; FIR No.11/2025, Cyber Police Station Sri Ganganagar
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail allowed on 2 April 2026 after challan filing; merits left for trial.

## Neutral case summary

A Rajasthan complainant joined the 55 Shoonya Growth Club WhatsApp group, downloaded a supplied investment application and transferred money for stock and IPO investments, reporting a loss of about INR 1.11 crore. A firm account linked to the applicant allegedly received INR 14 lakh, but the bail order notes that the final report did not directly connect him to the WhatsApp group.

## Reconstruction

### Initial contact

The complainant joined a WhatsApp group named 55 Shoonya Growth Club that offered stock-market and IPO trading guidance.

### Pretext

Group operators induced the complainant to download a trading application/link and transfer funds for stock and IPO investments.

### Requested action

Use the supplied investment application and transfer funds for trading and IPO allocations.

### Victim action and consequence

The complainant transferred funds and reported a total loss of approximately INR 1.11 crore.

- Reported focal financial loss: INR 11100000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: not reported

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not reported

## Actor and attribution analysis

### SEIAI-0144-A01: 55 Shoonya Growth Club operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Operating the WhatsApp investment group and supplied trading flow used to solicit stock/IPO deposits.
- Limitation: The human operators are not resolved in the bail order.
- Alternative explanation: The group and application may have been operated by multiple people.

### SEIAI-0144-A02: Sanju Kumar Shah / applicant-linked firm account
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Applicant-associated firm account allegedly received INR 1.4 million of the complainant's funds.
- Limitation: The court noted the final report did not directly link the applicant to the WhatsApp group, so financial receipt is not converted into caller authorship.
- Alternative explanation: The applicant may have had only a recipient/account role.


### Incident-level attribution assessment

- Attribution target: Unknown Shoonya group/application operators and applicant-linked firm receiving INR 1.4 million.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `unclear`
- Attribution strength: **moderate**
- Limitations: The final report cited in the bail order said there was no direct connection between applicant Sanju Kumar Shah and the WhatsApp group; the direct support is receipt of INR 1.4 million in a firm account.
- Alternative explanation: The applicant may have had only a downstream account role rather than operating the victim-facing group.

## Primary evidentiary gap

Authenticated WhatsApp/app control evidence linking the victim-facing investment operation to the beneficiary-account network.

## Legal/procedural notes

No additional statutory coding is necessary beyond the source/case metadata for this wave.

## Coding decisions

The applicant was described as resident of Nepal, supporting a suspected cross-border dimension, but the focal victim-facing operation itself is not proven to be foreign-controlled.
