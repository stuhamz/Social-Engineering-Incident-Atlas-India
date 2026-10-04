# SEIAI-0172: Avendus Stock Market Outlook WhatsApp and Asamtop app fraud

## Record status

- Case ID: `SEIAI-0172`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0172-01 | T1 | bail_order | Pradeep Jain v. State of Chhattisgarh, 24 February 2026 |

Source URL: https://indiankanoon.org/doc/130837664/

## Procedural posture

- Court / authority: High Court of Chhattisgarh
- Case / FIR: MCRC No.1894/2026; Crime No.4/2024, Cyber Cell HQ Raipur
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular-bail application rejected on 24 February 2026.

## Neutral case summary

A Raipur victim received a WhatsApp investment approach, was added to an 'Avendus Stock Market Outlook-B108' group and was directed to use the Asamtop application. Social-proof screenshots and promised returns induced transfers totalling INR 5,923,000. When withdrawal was attempted, the operators claimed the money was committed to an IPO and demanded further payment. The applicant's documented link is principally downstream financial infrastructure.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `stock-market investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant received a WhatsApp message from a person using the name Asana, who claimed association with Naresh Rathi and promoted stock-market returns.

### 4. Pretext

The victim was added to the 'Avendus Stock Market Outlook-B108' group, shown social-proof screenshots and directed to the Asamtop application.

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

Deposit funds into supplied accounts for stock-market and IPO investments through the application.

### 7. Victim action

Between 14 May and 11 June 2024 the victim transferred a total of INR 5,923,000; when withdrawal was attempted, the operators claimed the funds were tied up in an IPO and demanded more money.

### 8. Consequence

- Reported focal financial loss: INR 5923000
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

Other evidence: WhatsApp group material, app-linked instructions and bank-account trail.

## Actor and attribution analysis

### SEIAI-0172-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0172-A02: Pradeep Jain
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged provision/control of an account used to receive investment-fraud proceeds.
- Limitation: The record does not establish that he operated the Avendus/Asamtop WhatsApp persona.
- Alternative explanation: He may have occupied a narrower account-facilitation role.

### Incident-level attribution assessment

- Attribution target: Unresolved Avendus/Asamtop victim-facing operators and applicant Pradeep Jain's alleged beneficiary-account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The source supports an account-facilitation allegation but does not establish that the applicant authored the WhatsApp messages or controlled the app.
- Alternative explanation: The applicant may have supplied or controlled an account without operating the victim-facing investment persona.

## Primary evidentiary gap

Authenticated WhatsApp-group and application-administration records tying the operation to identified humans.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Additional requested amounts after the withdrawal attempt are not added to focal loss unless the source confirms payment.
