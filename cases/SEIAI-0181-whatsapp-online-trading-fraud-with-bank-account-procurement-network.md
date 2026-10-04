# SEIAI-0181: WhatsApp online-trading fraud with bank-account procurement network

## Record status

- Case ID: `SEIAI-0181`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0181-01 | T1 | bail_order | Sermadurai v. State of Tamil Nadu, 13 May 2026 |

Source URL: https://indiankanoon.org/doc/197478374/

## Procedural posture

- Court / authority: High Court of Judicature at Madras
- Case / FIR: CRL OP No.12110/2026; Crime No.91/2025, State Cyber Crime Investigation Centre, Chennai
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail granted on 13 May 2026 subject to conditions.

## Neutral case summary

A Tamil Nadu complainant was induced through WhatsApp to participate in an online-trading scheme promising high returns and lost INR 31,897,120. The prosecution alleged that the petitioner acted as an agent collecting bank accounts and mule-account kits for commission. That alleged financial-infrastructure role is kept separate from the unresolved operators who delivered the victim-facing investment pitch.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `online trading`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant was contacted through WhatsApp by persons offering online trading opportunities with high returns.

### 4. Pretext

The operators represented that transfers would be invested profitably through an online trading scheme.

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

Transfer funds to accounts supplied for purported online trading.

### 7. Victim action

The complainant transferred funds and was cheated of INR 31,897,120.

### 8. Consequence

- Reported focal financial loss: INR 31897120
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

Other evidence: Investigation material concerning alleged collection and supply of mule-account kits.

## Actor and attribution analysis

### SEIAI-0181-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0181-A02: Sermadurai
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `co_accused_link`
- Attribution strength: **moderate**
- Conduct assessed: Alleged collection/provision of bank-account kits for commission to support cyber-fraud transactions.
- Limitation: The source does not establish that he delivered the WhatsApp high-return trading pitch.
- Alternative explanation: The financial-infrastructure layer may have been organisationally separate from the victim-facing operators.

### Incident-level attribution assessment

- Attribution target: Unresolved WhatsApp trading operators and petitioner Sermadurai's alleged bank-account procurement role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `co_accused_link`
- Attribution strength: **moderate**
- Limitations: The petitioner's alleged role was collecting bank-account materials for commission, not proven direct communication with the victim.
- Alternative explanation: Financial/account facilitation may be organisationally separate from the social-engineering operation.

## Primary evidentiary gap

WhatsApp account and device evidence linking the high-return representations to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The source is bail-stage and the applicant-specific allegations remain unadjudicated.
