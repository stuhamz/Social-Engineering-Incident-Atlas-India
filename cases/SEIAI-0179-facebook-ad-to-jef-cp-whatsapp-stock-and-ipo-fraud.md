# SEIAI-0179: Facebook ad to Jef CP WhatsApp stock and IPO fraud

## Record status

- Case ID: `SEIAI-0179`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0179-01 | T1 | bail_order | Deepak Kumar Dash and others v. State of Odisha, 9 February 2026 |

Source URL: https://indiankanoon.org/doc/40691635/

## Procedural posture

- Court / authority: High Court of Orissa
- Case / FIR: BLAPL Nos.10424/2025, 11090/2025 and 11292/2025; CID Cyber Crime P.S. Case No.34/2024; G.R. Case No.539/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail allowed in the connected proceedings on 9 February 2026; merits remained open.

## Neutral case summary

An Odisha investor saw a lucrative Facebook advertisement for stock and IPO opportunities, followed a WhatsApp link and was persuaded to use the Jef CP application. The victim transferred INR 14,585,000 into ten bank accounts. The public bail record provides substantial financial-network information but leaves the original Facebook and WhatsApp operators comparatively unresolved.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `stock and IPO investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The victim saw a lucrative stock/IPO advertisement on Facebook and followed a WhatsApp link.

### 4. Pretext

WhatsApp operators promoted stock and IPO returns and persuaded the victim to create/use an account on the Jef CP application.

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

Transfer funds into a series of supplied bank accounts for stock and IPO investments.

### 7. Victim action

The victim transferred INR 14,585,000 into ten bank accounts.

### 8. Consequence

- Reported focal financial loss: INR 14585000
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
- Social media: `yes`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Application and beneficiary-account trail described in the bail proceedings.

## Actor and attribution analysis

### SEIAI-0179-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0179-A02: Deepak Kumar Dash and connected petitioners
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Alleged downstream financial roles in the Jef CP fraud network.
- Limitation: The reviewed bail material is stronger on banking linkage than on victim-facing account control.
- Alternative explanation: The original Facebook advertisement and WhatsApp persuasion may have been handled by different operators.

### Incident-level attribution assessment

- Attribution target: Unresolved Jef CP victim-facing operators and petitioners linked to the financial network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **limited**
- Limitations: The bail material gives stronger information about downstream banking roles than about which petitioner operated the Facebook/WhatsApp investment identities.
- Alternative explanation: Financial participation does not by itself establish authorship of the advertisement or WhatsApp inducement.

## Primary evidentiary gap

Facebook/WhatsApp account and application-administration records identifying the victim-facing operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Multiple connected bail applications concern the same focal cybercrime case and are treated as one Atlas incident.
