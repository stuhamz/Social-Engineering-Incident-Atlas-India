# SEIAI-0167: Fake stock and IPO platform WhatsApp-Telegram investment fraud

## Record status

- Case ID: `SEIAI-0167`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0167-01 | T1 | bail_order | Jangam Ravi Kumar v. State of Telangana, 18 August 2026 |

Source URL: https://indiankanoon.org/doc/177028574/

## Procedural posture

- Court / authority: High Court for the State of Telangana
- Case / FIR: Criminal Petition No.12876/2026; Crime No.143/2026, TGCSB Cyber Crime P.S. Hyderabad
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Bail-stage proceeding after completion of investigation; underlying prosecution remained pending.

## Neutral case summary

A Telangana investor was recruited through WhatsApp and Telegram groups into a fake stock and IPO platform. After transferring INR 7,111,000, the victim saw a fictitious balance of about INR 22.09 million and was told to pay a further INR 2.7 million service charge to withdraw it. The applicant was linked to downstream financial infrastructure rather than directly to the victim-facing messaging.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `stock and IPO investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The victim was drawn into WhatsApp and Telegram groups promoting stock and IPO investments.

### 4. Pretext

The operators used a fake investment platform to display large apparent gains and encouraged escalating deposits.

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

Transfer funds into supplied accounts for stock and IPO investments, followed by a purported service charge to withdraw the displayed balance.

### 7. Victim action

The victim transferred INR 7,111,000; the platform later showed about INR 22.09 million and demanded an additional INR 2.7 million service charge for withdrawal.

### 8. Consequence

- Reported focal financial loss: INR 7111000
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

Other evidence: Fake-platform account display and beneficiary-account investigation.

## Actor and attribution analysis

### SEIAI-0167-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0167-A02: Jangam Ravi Kumar
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Alleged association with a business/current account used in the investment-fraud money trail.
- Limitation: The record does not establish operation of the WhatsApp/Telegram investment groups.
- Alternative explanation: He alleged misuse of his business account.

### Incident-level attribution assessment

- Attribution target: Unresolved investment-platform operators and an applicant associated with a business/current bank account used in the money trail.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **limited**
- Limitations: The applicant's account linkage does not establish that he operated the WhatsApp/Telegram groups or fake platform.
- Alternative explanation: The applicant alleged misuse of his business account.

## Primary evidentiary gap

Authenticated platform-administration and messaging records linking the victim-facing operation to identified people.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Displayed gains and the unpaid service-charge demand are not added to focal loss.
