# SEIAI-0176: ED officer and forged Supreme Court warrant digital-arrest fraud

## Record status

- Case ID: `SEIAI-0176`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0176-01 | T1 | bail_order | Dafda Jignesh Jethbhai v. State of Punjab, 20 March 2026 |

Source URL: https://indiankanoon.org/doc/4916901/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: CRM-M-13144-2026; FIR No.04 dated 26.04.2025, Cyber Crime P.S. Pathankot
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Second regular-bail proceeding on 20 March 2026 after completion of investigation and presentation of challan; trial remained pending.

## Neutral case summary

A Pathankot couple was told by a purported Directorate of Enforcement officer that a Canara Bank account in the complainant's name was implicated in money laundering. A forged Supreme Court arrest warrant was sent through WhatsApp and the couple was threatened with digital arrest unless they complied. They transferred INR 5,426,665. The applicant emerged through a downstream business-account trail, not direct victim-facing evidence.

## Reconstruction

### 1. Target

The focal target is coded as `individual` in the sector `household / personal banking`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant's wife received a call from a person claiming to be Vijay Khanna of the Directorate of Enforcement in Mumbai.

### 4. Pretext

The caller alleged that a Canara Bank Mahim account had been opened in the complainant's name for money laundering, claimed an arrest warrant existed and sent a forged Supreme Court warrant through WhatsApp.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `yes`
- Repeated contact: `yes`

### 6. Requested action

Transfer funds for purported verification to avoid arrest and comply with the digital-arrest instructions.

### 7. Victim action

The couple transferred INR 5,426,665 into multiple accounts.

### 8. Consequence

- Reported focal financial loss: INR 5426665
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

Other evidence: Forged Supreme Court warrant and downstream beneficiary-account trail.

## Actor and attribution analysis

### SEIAI-0176-A01: ‘Vijay Khanna’ ED / forged-warrant impersonation operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0176-A02: Dafda Jignesh Jethbhai
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged association with a business account reached through the beneficiary trail.
- Limitation: The record does not establish that he made the ED call or sent the forged Supreme Court warrant.
- Alternative explanation: The account may have served a downstream payment function.

### Incident-level attribution assessment

- Attribution target: Unresolved ED/Supreme Court impersonation operators and petitioner Dafda Jignesh Jethbhai's alleged beneficiary-account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The petitioner was traced through a business-account trail, not direct proof that he made the ED impersonation call or sent the forged warrant.
- Alternative explanation: Financial infrastructure and victim-facing impersonation may have been operated by different actors.

## Primary evidentiary gap

Authenticated WhatsApp/document metadata and telecom records tying the forged warrant and ED persona to a human operator.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The court record states that investigation was complete and material witnesses had begun to be examined. The public source is treated as bail-stage, not a final finding of guilt.
