# SEIAI-0156: Ganesh Consumer IPO WhatsApp investment-app fraud

## Record status

- Case ID: `SEIAI-0156`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0156-01 | T1 | bail_order | Haridas Sandu Tupe v. State of Madhya Pradesh, 18 August 2026 |

Source URL: https://indiankanoon.org/doc/42327189/

## Procedural posture

- Court / authority: High Court of Madhya Pradesh, Jabalpur
- Case / FIR: MCRC-22977-2026; Crime No.493/2025, P.S. Omti, Jabalpur
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail rejected on 18 August 2026 after filing of the charge sheet.

## Neutral case summary

A Jabalpur complainant was moved from an online investment advertisement into a WhatsApp group and a trading application promoting stock and IPO investments. The victim transferred INR 5,016,000 and was then asked for an additional INR 2,070,701. The public bail record contains downstream SIM and bank-account evidence but does not establish that the applicant personally delivered the original investment pretext.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `retail investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

After encountering an online investment advertisement, the complainant was contacted by a person using the name Jass Singh and was brought into a WhatsApp investment group.

### 4. Pretext

The group promoted stock and IPO opportunities through a trading application and induced the complainant to make escalating deposits.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `yes`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Install or use the supplied trading application and transfer funds for stock and IPO investments.

### 7. Victim action

The complainant transferred INR 5,016,000 beginning in September 2025 and was later asked for a further INR 2,070,701.

### 8. Consequence

- Reported focal financial loss: INR 5016000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Bank-account, SIM and investigation material described in the charge-sheet-stage bail order.

## Actor and attribution analysis

### SEIAI-0156-A01: Unresolved victim-facing investment operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0156-A02: Haridas Sandu Tupe
- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `sim_or_subscriber_record` / `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Alleged connection to SIM and banking infrastructure used in the investment-fraud network.
- Limitation: The record does not prove he made the original WhatsApp representations.
- Alternative explanation: He said the SIM had been handed to an acquaintance and disputed knowing participation.

### Incident-level attribution assessment

- Attribution target: Unresolved investment-group operators and an applicant linked through SIM and banking evidence.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `sim_or_subscriber_record`
- Attribution strength: **limited**
- Limitations: The source links the applicant to financial/telecom infrastructure but does not establish that he made the original investment representations.
- Alternative explanation: The applicant said a SIM had been handed to an acquaintance and denied victim-facing participation.

## Primary evidentiary gap

Device-level and platform-account evidence tying the investment-group communications and application control to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The requested additional payment is not added to focal loss because the source describes it as a demand rather than a completed transfer.
