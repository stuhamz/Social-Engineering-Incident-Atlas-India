# SEIAI-0177: TECHSTARS PRO and Ram Investment Academy WhatsApp fraud

## Record status

- Case ID: `SEIAI-0177`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0177-01 | T1 | bail_order | Subharun Das v. State of Odisha, 11 March 2026 |

Source URL: https://indiankanoon.org/doc/174545359/

## Procedural posture

- Court / authority: High Court of Orissa
- Case / FIR: BLAPL No.696/2026; CID CB Cyber P.S. Case No.21/2024; G.R. Case No.395/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Bail-stage proceeding before the Orissa High Court; underlying prosecution remained pending.

## Neutral case summary

An Odisha investor was lured through a fictitious TECHSTARS PRO operation and the 'Ram Investment Academy' WhatsApp group, ultimately losing INR 25,860,000. Unlike many Atlas financial-layer cases, the prosecution material in this bail record more directly alleges that the petitioner and co-accused participated in creating or guiding the victim-facing investment operation. Those allegations nevertheless remain unadjudicated.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `online investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The informant was drawn into an online investment operation using the fictitious TECHSTARS PRO identity and a WhatsApp group called Ram Investment Academy.

### 4. Pretext

The group promoted lucrative investment opportunities and guided the victim through an apparently organised trading operation.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Transfer money into accounts supplied by the investment operation.

### 7. Victim action

The informant transferred funds and was cheated of INR 25,860,000.

### 8. Consequence

- Reported focal financial loss: INR 25860000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Prosecution material alleging creation and operation of the WhatsApp investment group and associated financial trail.

## Actor and attribution analysis

### SEIAI-0177-A01: Unresolved victim-facing investment operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0177-A02: Subharun Das
- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Prosecution alleged participation in creating/guiding the TECHSTARS PRO and Ram Investment Academy victim-facing operation.
- Limitation: The allegations are recorded at bail stage and are not final findings of guilt.
- Alternative explanation: The precise division of group administration and financial control among co-accused remains unresolved.

### Incident-level attribution assessment

- Attribution target: Subharun Das and co-accused alleged to have created/guided the victim-facing investment operation.
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The allegations are recorded at bail stage and have not been converted into final findings of guilt.
- Alternative explanation: The petitioner may dispute the extent of personal control over the group, accounts or specific messages.

## Primary evidentiary gap

Authenticated platform and device records establishing which accused controlled each victim-facing WhatsApp identity and payment instruction.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Attribution is coded moderate rather than strong because the source is a bail proceeding.
