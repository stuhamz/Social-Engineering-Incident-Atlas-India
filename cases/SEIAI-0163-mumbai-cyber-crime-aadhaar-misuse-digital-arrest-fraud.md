# SEIAI-0163: Mumbai Cyber Crime Aadhaar-misuse digital-arrest fraud

## Record status

- Case ID: `SEIAI-0163`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0163-01 | T1 | bail_order | Shaik Meera Hussain v. State of Telangana, 22 January 2025 |

Source URL: https://indiankanoon.org/doc/52891405/

## Procedural posture

- Court / authority: High Court for the State of Telangana
- Case / FIR: Criminal Petition No.443/2025; Crime No.2546/2024, Cyber Crime P.S. Hyderabad
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: A further bail application was dismissed on 22 January 2025; investigation continued.

## Neutral case summary

A Hyderabad victim received a WhatsApp call from purported Mumbai Cyber Crime officials who alleged that her Aadhaar had been used for Jio Fiber connections connected to child trafficking, pornography and financial fraud. She was threatened with arrest if she disconnected and ultimately transferred INR 321,000. The public record provides downstream account attribution but leaves the original caller identity unresolved.

## Reconstruction

### 1. Target

The focal target is coded as `individual` in the sector `personal banking`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The victim received a WhatsApp call from persons claiming to be from Mumbai Cyber Crime.

### 4. Pretext

The callers said her Aadhaar had been misused in several states to obtain a Jio Fiber connection involved in child trafficking, pornography and financial fraud, and threatened arrest if she disconnected.

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

Remain connected and transfer funds in compliance with the purported cybercrime investigation.

### 7. Victim action

The victim transferred INR 321,000.

### 8. Consequence

- Reported focal financial loss: INR 321000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `yes`
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

Other evidence: Bank-account linkage cited in the repeated bail proceedings.

## Actor and attribution analysis

### SEIAI-0163-A01: Mumbai Cyber Crime impersonation operator(s)
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

### SEIAI-0163-A02: Shaik Meera Hussain
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Association with an account in the focal digital-arrest money trail.
- Limitation: The public record does not establish that she made the threatening Mumbai Cyber Crime call.
- Alternative explanation: Financial receipt may reflect a downstream role only.

### Incident-level attribution assessment

- Attribution target: Unresolved Mumbai Cyber Crime impersonators and a petitioner linked to the recipient financial trail.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The petitioner was linked to a bank account in the money trail, but the source does not establish that she made the threatening WhatsApp call.
- Alternative explanation: Financial receipt can reflect a downstream role distinct from authorship of the digital-arrest pretext.

## Primary evidentiary gap

Telecom/platform and device evidence identifying the operator of the Mumbai Cyber Crime WhatsApp identity.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The source is bail-stage material and all accused-specific conduct remains unadjudicated.
