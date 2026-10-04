# SEIAI-0178: BOBCAPS and Chola WhatsApp fake trading-app fraud

## Record status

- Case ID: `SEIAI-0178`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0178-01 | T1 | bail_order | Manas Kumar Sahu and others v. State of Odisha, 12 May 2026 |

Source URL: https://indiankanoon.org/doc/71957262/

## Procedural posture

- Court / authority: High Court of Orissa
- Case / FIR: BLAPL Nos.4248/2026, 4350/2026 and 4423/2026; EOW P.S. Case No.233/2025; C.T. Case No.2443/2025
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail allowed on 12 May 2026 after submission of the charge sheet.

## Neutral case summary

An Odisha victim was recruited through several WhatsApp groups using BOBCAPS and Chola-branded investment identities and was directed to a fake trading application. The victim transferred INR 9,462,461 before discovering the scheme. The petitioners were principally linked through alleged mule-account and credential infrastructure, making actor-layer separation essential.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `retail investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The victim was drawn into WhatsApp groups styled as BOBCAPS Information Learning Group, Chola VIP 1on1 Investment Guidance and M Chola Trading Zone.

### 4. Pretext

The operators used established financial-brand identities and a fake mobile application resembling legitimate trading infrastructure to solicit investments.

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

Transfer funds through the supplied accounts for trading and investment through the application.

### 7. Victim action

The victim transferred INR 9,462,461 from Axis Bank and SBI accounts before discovering that the application and investment operation were fraudulent.

### 8. Consequence

- Reported focal financial loss: INR 9462461
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `not_reported`
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

Other evidence: Charge sheet and bank-account material concerning alleged mule accounts and credential kits.

## Actor and attribution analysis

### SEIAI-0178-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0178-A02: Manas Kumar Sahu and connected petitioners
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged opening/provision of mule accounts and banking credentials for commission.
- Limitation: The source does not establish direct operation of the BOBCAPS/Chola WhatsApp groups by the petitioners.
- Alternative explanation: Account suppliers may not be the persons who delivered the victim-facing brand impersonation.

### Incident-level attribution assessment

- Attribution target: Unresolved BOBCAPS/Chola victim-facing operators and petitioners alleged to have supplied or controlled mule accounts.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The charge-sheet material supports account-facilitation allegations but not direct operation of the victim-facing WhatsApp groups by every petitioner.
- Alternative explanation: Account providers may occupy a narrower financial role than the people who operated the brand impersonation and application.

## Primary evidentiary gap

Platform and app-control records resolving the victim-facing WhatsApp and application administrators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Brand impersonation is represented as a secondary identity-deception feature while the primary category remains investment fraud.
