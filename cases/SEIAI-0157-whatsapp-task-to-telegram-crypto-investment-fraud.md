# SEIAI-0157: WhatsApp task-to-Telegram crypto investment fraud

## Record status

- Case ID: `SEIAI-0157`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0157-01 | T1 | bail_order | Gautam Godara v. State of Madhya Pradesh, 18 June 2026 |

Source URL: https://indiankanoon.org/doc/150094988/

## Procedural posture

- Court / authority: High Court of Madhya Pradesh, Indore Bench
- Case / FIR: MCRC-24057-2026; Crime No.202/2025, Cyber Cell Indore
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail granted on 18 June 2026; merits remained open.

## Neutral case summary

An Indore complainant was recruited through a WhatsApp task group, moved to Telegram and then induced to make cryptocurrency-related deposits through a website. The victim transferred INR 850,000 into eight accounts while the platform displayed fictitious gains. A further withdrawal fee was demanded, but it was not paid. The public record primarily supports downstream financial attribution rather than resolution of the victim-facing operators.

## Reconstruction

### 1. Target

The focal target is coded as `job_seeker` in the sector `online tasks / cryptocurrency investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant was added to a WhatsApp task group and asked to complete simple screenshot-based tasks before the interaction moved to Telegram.

### 4. Pretext

After small task activity, the operators instructed the complainant to open a website account and make cryptocurrency-related deposits that purportedly generated profit.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Complete online tasks and then make progressively larger cryptocurrency-investment deposits.

### 7. Victim action

The complainant deposited INR 850,000 into eight accounts; the interface showed about INR 1.2 million in apparent profit, after which a further INR 600,000 withdrawal fee was demanded.

### 8. Consequence

- Reported focal financial loss: INR 850000
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

Other evidence: Website/account interface showing fictitious gains and beneficiary-account records.

## Actor and attribution analysis

### SEIAI-0157-A01: Unresolved job/task recruitment operator(s)
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

### SEIAI-0157-A02: Gautam Godara
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `co_accused_link`
- Attribution strength: **limited**
- Conduct assessed: Alleged downstream beneficiary-account role in the task-to-crypto fraud.
- Limitation: The bail record does not link him directly to the WhatsApp or Telegram persona.
- Alternative explanation: He may have had a narrower financial role or disputed knowledge of the wider scheme.

### Incident-level attribution assessment

- Attribution target: Unresolved task/crypto operators and an applicant linked to downstream financial infrastructure.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `co_accused_link`
- Attribution strength: **limited**
- Limitations: The bail material does not establish that the applicant authored the task messages or controlled the Telegram persona or website.
- Alternative explanation: The applicant disputed knowledge of the wider fraud operation.

## Primary evidentiary gap

Authenticated Telegram/WhatsApp account and website-control records linking victim-facing communications to identified humans.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The fictitious displayed profit and the unpaid INR 600,000 withdrawal demand are not counted as financial loss.
