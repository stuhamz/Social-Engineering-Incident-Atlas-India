# SEIAI-0174: WhatsApp-to-Telegram speedy-growth investment fraud

## Record status

- Case ID: `SEIAI-0174`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0174-01 | T1 | bail_order | Raju Singh v. State of Punjab, 7 March 2026 |

Source URL: https://indiankanoon.org/doc/123233656/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: CRM-M-68463-2025; FIR No.3 dated 08.04.2025, Cyber Crime P.S. Rupnagar
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail allowed on 7 March 2026; underlying prosecution remained pending.

## Neutral case summary

A Rupnagar complainant received a WhatsApp investment approach, was moved to Telegram and interacted with a persona named Deepak Chopra who promoted rapid investment growth. The victim transferred INR 3,065,000 through various payment routes. The applicant's public-record connection is primarily a downstream financial one, while the victim-facing Telegram operator remains unresolved.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `retail investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

Complainant Lokesh Goyal received a WhatsApp message and was instructed to download Telegram.

### 4. Pretext

On Telegram, a persona using the name Deepak Chopra added the victim to a group and promoted investments promising speedy growth.

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

Transfer money through various modes into accounts specified by the Telegram investment operation.

### 7. Victim action

The complainant transferred INR 3,065,000.

### 8. Consequence

- Reported focal financial loss: INR 3065000
- Payment method: `multiple`
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

Other evidence: Beneficiary-account records and bail-stage investigation material.

## Actor and attribution analysis

### SEIAI-0174-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0174-A02: Raju Singh
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Alleged association with an account used to siphon part of the investment-fraud proceeds.
- Limitation: No direct victim-contact role is established in the bail source.
- Alternative explanation: The applicant said banking documents were misused.

### Incident-level attribution assessment

- Attribution target: Unresolved Deepak Chopra/Telegram operator cluster and applicant Raju Singh's alleged beneficiary-account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **limited**
- Limitations: The source links the applicant to the financial trail but does not establish that he operated the Telegram persona or contacted the complainant.
- Alternative explanation: The applicant alleged misuse of banking documents and denied knowing involvement.

## Primary evidentiary gap

Authenticated Telegram-account and device evidence identifying the victim-facing operator.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Other bail orders concerning the same FIR are treated as sources for the same incident rather than separate Atlas incidents.
