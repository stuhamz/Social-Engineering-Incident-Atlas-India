# SEIAI-0162: SMC Company WhatsApp stock-trading fraud

## Record status

- Case ID: `SEIAI-0162`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0162-01 | T1 | bail_order | Boda Srikanth v. State of Telangana, 11 April 2025 |

Source URL: https://indiankanoon.org/doc/26021240/

## Procedural posture

- Court / authority: High Court for the State of Telangana
- Case / FIR: Criminal Petition No.4790/2025; Crime No.328/2025, Cyber Crimes P.S. Hyderabad
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Anticipatory-bail application dismissed; investigation remained in progress.

## Neutral case summary

A Hyderabad complainant was induced through WhatsApp by persons claiming association with SMC Company to make stock-market investments. Following an initial INR 100,000 transfer, the victim ultimately transferred INR 8,844,000. The public bail record links an applicant to a downstream beneficiary account but does not resolve who operated the SMC-branded victim-facing personas.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `retail stock trading`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant was added to or contacted through a WhatsApp investment context claiming association with SMC Company.

### 4. Pretext

A person using the name Keerthi Gupta and other operators promised profitable stock trading through a reputed-company identity and encouraged escalating investments.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Transfer increasing amounts into accounts supplied for purported stock-market investments.

### 7. Victim action

After an initial INR 100,000 transfer, the complainant made further deposits totalling INR 8,844,000.

### 8. Consequence

- Reported focal financial loss: INR 8844000
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

Other evidence: Beneficiary-account and investigation records described in the anticipatory-bail order.

## Actor and attribution analysis

### SEIAI-0162-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0162-A02: Boda Srikanth
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Alleged control/association with a beneficiary account receiving victim funds.
- Limitation: The source does not establish that he operated the SMC-branded WhatsApp persona.
- Alternative explanation: A beneficiary-account role may be distinct from the victim-facing investment operator.

### Incident-level attribution assessment

- Attribution target: Unresolved SMC-impersonating WhatsApp operators and an applicant linked to a beneficiary account.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **limited**
- Limitations: The financial trail links the applicant to receipt of funds but does not establish authorship of the SMC/Keerthi Gupta representations.
- Alternative explanation: The applicant disputed knowing participation in the social-engineering scheme.

## Primary evidentiary gap

Authenticated WhatsApp account, device and platform records tying the investment personas to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The source contains an apparent internal date inconsistency regarding a transaction date later than the judgment. Atlas preserves the inconsistency in research notes and does not silently correct it.
