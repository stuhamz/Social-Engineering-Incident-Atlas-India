# SEIAI-0165: Aarushi Jaina WhatsApp part-time-job and Telegram investment fraud

## Record status

- Case ID: `SEIAI-0165`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0165-01 | T1 | final_judgment | Prem Bhalla v. State of Telangana, 26 March 2024 |

Source URL: https://indiankanoon.org/doc/11742097/

## Procedural posture

- Court / authority: High Court for the State of Telangana
- Case / FIR: Writ Petition No.28098/2023; Crime No.666/2023, Hyderabad City Cyber Crime P.S.
- Primary source stage: `final_judgment`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Writ petition disposed of on 26 March 2024 while the underlying cyber-fraud investigation continued.

## Neutral case summary

A Hyderabad victim received a WhatsApp part-time-job offer from a persona calling herself Aarushi Jaina and was moved to Telegram investment options. He transferred INR 1,129,000 but did not receive the promised returns. The High Court record is particularly useful because it documents investigative requests to messaging platforms for registration and IP data while leaving human identity attribution unresolved.

## Reconstruction

### 1. Target

The focal target is coded as `job_seeker` in the sector `part-time work / online investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

M. Dinesh Kumar received a WhatsApp message from a person using the name Aarushi Jaina offering a part-time job.

### 4. Pretext

The interaction shifted to Telegram, where the victim was shown investment options and promised returns connected to the part-time opportunity.

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

Transfer funds into accounts supplied through the Telegram investment workflow.

### 7. Victim action

The victim transferred INR 1,129,000 and received neither the promised money nor profit.

### 8. Consequence

- Reported focal financial loss: INR 1129000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `yes`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `yes`
- Forensic examination: `not_reported`

Other evidence: Police Section 91 requests to Telegram/WhatsApp for registration and login/logout IP records and to banks for account statements.

## Actor and attribution analysis

### SEIAI-0165-A01: Unresolved job/task recruitment operator(s)
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

### SEIAI-0165-A02: Prem Bhalla / investigation-linked account holder
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Account-holder/writ-petitioner role connected to the freeze/investigation arising from the focal cyber fraud.
- Limitation: The writ record does not establish knowing participation in the Aarushi Jaina recruitment or Telegram investment deception.
- Alternative explanation: The account may have received disputed funds without proof of victim-facing involvement.

### Incident-level attribution assessment

- Attribution target: Unresolved Aarushi Jaina/Telegram operator cluster and downstream financial endpoints.
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitations: The writ record describes active investigative requests but does not resolve the real-world humans behind the messaging identities.
- Alternative explanation: A named messaging persona need not correspond to the true operator.

## Primary evidentiary gap

Platform-provider responses identifying account-registration, login and device records for the victim-facing WhatsApp and Telegram accounts.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The writ judgment resolves the petition before the High Court, not the underlying criminal merits.
