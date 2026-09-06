# SEIAI-0078: Fake Louis Philippe refund support and malicious-app fraud

## Record status

- Case ID: `SEIAI-0078`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0078-01 | T1 | appellate_judgment | State Bank of India v. Pallabh Bhowmick & 4 Ors., 13 September 2024 |

Source URLs:

- SRC-SEIAI-0078-01: https://indiankanoon.org/doc/67475818/

## Procedural posture

- Court / authority: Gauhati High Court
- Case / FIR: WA/364/2022; WP(C) No.1900/2022; Jalukbari P.S. Case No.1229/2021
- Primary source stage: `appellate_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: Gauhati High Court dismissed SBI's writ appeal and upheld the direction to credit the unauthorized-transaction amount to the customer.

## Neutral case summary

A Guwahati customer who wanted to return a Louis Philippe garment received a refund call from a person posing as the brand's customer-care manager. The caller instructed him to download a mobile app to receive INR 4,000. Three unauthorized transactions totalling INR 94,204 followed. The record identified Papendra Kumar as the caller/respondent, traced a substantial transfer to an account in his name and documented later movement of funds. The retailer also acknowledged a customer-database breach during the relevant period. The High Court treated the transactions as unauthorized and upheld relief against SBI. The case combines pretext-specific targeting, device compromise and a comparatively unusual overlap between a human-resolved victim-facing actor and a financial endpoint.

## Reconstruction

### 1. Target

- Target type: `individual`
- Sector/context: retail banking / e-commerce
- State/UT: Assam
- City: Guwahati
- Incident year: 2021
- Cross-border dimension: `no`

### 2. Reconnaissance

- Present: `yes`
- Detail: The victim had recently purchased a Louis Philippe garment online and later received a brand-specific refund call. The brand subsequently reported a customer-database breach during the relevant period.

### 3. Initial contact

The victim received a phone call from a person posing as Louis Philippe customer care after seeking to return an online garment purchase.

### 4. Pretext

The caller offered to process a INR 4,000 refund and instructed the victim to download a mobile application.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `no`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `no`

- Other mechanism: Brand-specific knowledge and refund context created legitimacy; later records noted a customer-data breach at the retailer.

### 6. Requested action

Download a mobile application to receive a refund.

### 7. Victim/target action

The victim downloaded the application; three unauthorized transactions totalling INR 94,204 followed.

### 8. Consequence

- Reported financial loss: INR 94,204
- Credential compromise: `unknown`
- Device compromise: `yes`
- Payment method: `multiple`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | yes |
| CDR/telecom | not_reported |
| Bank/transaction | yes |
| IP/login | not_reported |
| Device | not_reported |
| Chats/messages | not_reported |
| Email | yes |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: Bank transaction records, beneficiary-account records, OTP logs, complaint records and retailer email acknowledging a customer-database breach.

## Actor and attribution analysis

### SEIAI-0078-A01 — Papendra Kumar

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Direct victim contact: `yes`
- Conduct assessed: Posing as Louis Philippe customer care, inducing app download and controlling/receiving a beneficiary endpoint.
- Attribution basis: `bank_account_or_money_flow` + `witness_or_statement`
- Attribution strength: **moderate**
- Limitation: The proceeding adjudicated bank/customer liability rather than criminal guilt and does not independently prove every technical action through the app.
- Alternative explanation: Criminal responsibility was not the issue finally determined in the writ appeal.
- Relationship note: Unusual case where a source resolves both victim-facing and financial functions to the same named human.

### SEIAI-0078-A02 — Downstream transfer recipient(s)

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Receiving onward transfers after the initial unauthorized transaction.
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitation: The appellate record does not resolve the identities or knowledge of all downstream recipients.


### Incident-level attribution assessment

- Attribution target: Papendra Kumar's caller/beneficiary role and downstream transfer recipients.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The appellate consumer/writ record identifies Papendra Kumar as the fraudster/respondent and documents a beneficiary account in his name, but it is not a criminal conviction and does not independently establish every technical step performed through the downloaded application.
- Alternative explanation: The proceeding centered on bank/customer liability, not a criminal trial of the identified respondent.

## Primary evidentiary gap

Device/application forensic evidence showing what the downloaded app did and directly tying the caller's device/account activity to the unauthorized transactions.

## Legal/procedural notes

IPC Section 417; IPC Section 420

## Coding decisions

Identity resolution does not imply criminal guilt. The High Court proceeding adjudicated banking liability rather than criminal responsibility.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
