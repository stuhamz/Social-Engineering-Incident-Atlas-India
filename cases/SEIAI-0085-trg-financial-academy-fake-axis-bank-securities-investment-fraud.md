# SEIAI-0085: TRG Financial Academy and fake Axis Bank Securities investment fraud

## Record status

- Case ID: `SEIAI-0085`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0085-01 | T1 | bail_order | Ahsan Khan v. State of Andhra Pradesh, 16 July 2025 |

Source URLs:

- SRC-SEIAI-0085-01: https://indiankanoon.org/doc/91349355/

## Procedural posture

- Court / authority: Andhra Pradesh High Court at Amaravati
- Case / FIR: Criminal Petition No.6609/2025; Crime No.63/2025, Mandapeta Town Police Station
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Andhra Pradesh High Court granted Ahsan Khan bail on 16 July 2025 while investigation was incomplete and charge sheet had not yet been filed.

## Neutral case summary

A 27-year-old UPSC aspirant in Mandapeta joined a WhatsApp group called TRG Financial Academy, which offered financial-investment classes and promoted a purported Axis Bank Securities app represented as legitimate and SEBI-linked. Beginning in December 2024, she made a large initial investment and additional IPO, tax and account-correction payments. Her account was later shown as frozen on a pretext of incorrect bank details and further payments were demanded, bringing the alleged total to about INR 62 lakh. The bail record says Ahsan Khan provided an account used to route approximately INR 35 lakh; he claimed he had shared the account for trading in return for promised profits and was himself an indirect victim. The case adds a new state and a clean example of strong financial-endpoint evidence without victim-facing identity resolution.

## Reconstruction

### 1. Target

- Target type: `investor`
- Sector/context: retail investment / UPSC aspirant
- State/UT: Andhra Pradesh
- City: Mandapeta
- Incident year: 2024
- Cross-border dimension: `not_reported`

### 2. Reconnaissance

- Present: `not_reported`
- Detail: No source-supported reconnaissance detail coded.

### 3. Initial contact

A 27-year-old UPSC aspirant was introduced to alleged fraudsters through a WhatsApp group called TRG Financial Academy offering investment classes.

### 4. Pretext

The group promoted a purported Axis Bank Securities application that appeared legitimate/SEBI-registered, then demanded investment, IPO and later tax/error/frozen-account payments.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `no`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `yes`
- Reciprocity: `no`
- Isolation: `no`
- Repeated contact: `yes`

- Other mechanism: Legitimacy borrowing from a known financial brand and SEBI, escalating sunk-cost pressure and withdrawal/account-freeze barriers.

### 6. Requested action

Install/use the purported investment app and make repeated investment, IPO, tax and account-unfreeze payments.

### 7. Victim/target action

The complainant made repeated payments beginning with INR 3.5 million and ultimately paid approximately INR 6.2 million.

### 8. Consequence

- Reported financial loss: INR 6,200,000
- Credential compromise: `not_reported`
- Device compromise: `no`
- Payment method: `bank_transfer`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | not_reported |
| CDR/telecom | not_reported |
| Bank/transaction | yes |
| IP/login | not_reported |
| Device | not_reported |
| Chats/messages | yes |
| Email | not_reported |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | not_reported |

Other evidence: Bank-account freeze and investigation of accounts used to route victim funds.

## Actor and attribution analysis

### SEIAI-0085-A01 — TRG Financial Academy / fake app operator(s)

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Conduct assessed: Operating the WhatsApp investment pretext and purported Axis Bank Securities app, escalating payment demands and account-freeze barriers.
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Limitation: The source does not map the TRG/app identities to specific real-world humans.

### SEIAI-0085-A02 — Ahsan Khan

- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Providing/control of a bank account used to route approximately INR 35 lakh associated with the fraud.
- Attribution basis: `bank_account_or_money_flow` + `witness_or_statement`
- Attribution strength: **moderate**
- Limitation: He was not identified as a victim-facing operator and said he only shared the account for promised profits before learning of the fraud.
- Alternative explanation: He described himself as an indirect victim and said he received INR 10,000 as promised profit.

### SEIAI-0085-A03 — Mazhar/Farhan/Anand alleged coordination cluster

- Identity resolution: `actor_cluster`
- Role layer: `organisational`
- Victim-facing function: `uncertain`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Alleged direction/use of beneficiary accounts in the investment-fraud network.
- Attribution basis: `co_accused_link` + `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitation: The public bail order gives only a brief account of these alleged roles and does not establish victim-facing conduct or final guilt.


### Incident-level attribution assessment

- Attribution target: Ahsan Khan's beneficiary-account role and the unresolved TRG/app operators.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The petitioner was not identified as a victim-facing operator. The order records that his account was used for approximately INR 3.5 million and his defence that he shared the account for promised trading returns before learning of the fraud.
- Alternative explanation: Ahsan Khan argued that he was an indirect victim who provided his bank account for trading in exchange for promised monthly payments/profits and received only INR 10,000.

## Primary evidentiary gap

Authenticated WhatsApp/app/device records connecting the TRG Financial Academy and fake investment application to identified operators and showing the petitioner's knowledge or coordination.

## Legal/procedural notes

BNS Section 318(4); Information Technology Act Section 66-D

## Coding decisions

Incident start date is supported by the order's statement that investment began on 23 December 2024. Incident end date is left blank because the order does not provide a complete day-level end date. Amount normalized to INR 6.2 million from the source's OCR-distorted but textually clear Rs.62,00,000 figure.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
