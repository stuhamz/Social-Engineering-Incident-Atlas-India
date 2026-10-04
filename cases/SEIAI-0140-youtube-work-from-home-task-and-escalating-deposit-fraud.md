# SEIAI-0140: YouTube work-from-home task and escalating deposit fraud

## Record status

- Case ID: `SEIAI-0140`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0140-01 | T1 | bail_order | Jitendra Kumar v. State of Jharkhand, 12 July 2024 |

Source URL: https://indiankanoon.org/doc/119151696/

## Procedural posture

- Court / authority: Jharkhand High Court
- Case / FIR: B.A. 2959/2024; Ranchi Cybercrime P.S. Case No.47/2023
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail rejected on 12 July 2024; charge sheet filed against the petitioner while investigation continued against co-accused.

## Neutral case summary

A victim was recruited over WhatsApp for paid YouTube-like tasks, moved to Telegram and given small initial payments before being induced to make repeated deposits. The FIR recital states a loss of INR 8.4321 million. Petitioner Jitendra Kumar was linked as an account holder allegedly receiving INR 1.16 million, but the original recruiter identity remains unresolved.

## Reconstruction

### Initial contact

The informant was contacted on WhatsApp by a person using the name Shanay Navin and offered work from home by liking YouTube videos.

### Pretext

The victim was moved to Telegram for payment and further tasks, received some initial payment, and was then induced to deposit progressively larger sums into various accounts.

### Requested action

Perform online tasks and make repeated deposits into accounts supplied by the scheme.

### Victim action and consequence

The informant continued the task scheme and deposited a total of INR 8,432,100 into various accounts according to the FIR recital.

- Reported focal financial loss: INR 8432100
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Small initial payouts seeded trust before large deposit demands.

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not reported

## Actor and attribution analysis

### SEIAI-0140-A01: Shanay Navin recruiter/task persona
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Offering work-from-home YouTube tasks and moving the victim into the Telegram payment/task flow.
- Limitation: The persona is named but not resolved to a real-world human.
- Alternative explanation: Shanay Navin may be an alias.

### SEIAI-0140-A02: Jitendra Kumar beneficiary-account actor
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Allegedly receiving INR 1.16 million of fraud-linked funds in an account that was later frozen.
- Limitation: Direct receipt supports a financial role but does not establish that the petitioner operated the recruiter persona or knew the full scheme.
- Alternative explanation: The petitioner denied involvement and may have had a narrower account role.


### Incident-level attribution assessment

- Attribution target: Unresolved Shanay Navin/task operators and petitioner Jitendra Kumar's beneficiary-account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `unclear`
- Attribution strength: **moderate**
- Limitations: The petitioner was not named in the FIR and was linked as an account holder; the source does not establish that he made the recruiting contact.
- Alternative explanation: The petitioner denied involvement; account receipt alone does not prove authorship of the task scam.

## Primary evidentiary gap

Authenticated WhatsApp/Telegram control records connecting the recruiter persona to the beneficiary-account network.

## Legal/procedural notes

IPC 120B, 384, 406, 419, 420, 467, 468, 471; IT Act 66B, 66C, 66D

## Coding decisions

The source states an unusually long chronology from 10 May 2020 through 30 May 2023. Atlas preserves those source dates rather than silently normalising them.
