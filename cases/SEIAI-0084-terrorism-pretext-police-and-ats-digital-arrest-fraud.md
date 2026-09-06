# SEIAI-0084: Terrorism-pretext police and ATS digital-arrest fraud

## Record status

- Case ID: `SEIAI-0084`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-09-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, consumer/civil findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0084-01 | T1 | bail_order | Ritu Gupta v. State (NCT of Delhi), 16 March 2026 |

Source URLs:

- SRC-SEIAI-0084-01: https://indiankanoon.org/doc/125524973/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN.1044/2026; FIR No.152/2025
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Delhi High Court dismissed Ritu Gupta's regular bail application on 16 March 2026; allegations remained to be tested at trial.

## Neutral case summary

An elderly Delhi couple were told by callers posing as police and ATS officials that they were implicated in terrorism. The callers escalated the story across multiple asserted authorities, showed purported arrest warrants, ordered secrecy and hourly reporting, and obtained information about assets and retirement benefits. The couple transferred INR 94.5 lakh. The focal bail applicant's account received INR 40 lakh; the prosecution said she retained INR 33 lakh, moved the balance to 20 accounts and deleted WhatsApp content. She countered that co-accused had obtained and misused her bank details and SIM and that she had herself complained. The bail court rejected that explanation only on a prima facie basis. The case strongly illustrates the Atlas distinction between a well-resolved financial endpoint and an unresolved victim-facing deception layer.

## Reconstruction

### 1. Target

- Target type: `elderly_person`
- Sector/context: retired household / personal banking
- State/UT: Delhi
- City: New Delhi
- Incident year: 2025
- Cross-border dimension: `not_reported`

### 2. Reconnaissance

- Present: `yes`
- Detail: The callers elicited/ascertained the couple's assets, liabilities and retirement benefits before directing transfers.

### 3. Initial contact

An elderly complainant received a call from a woman claiming to be Inspector Anita Verma from Delhi Police Headquarters and saying the complainant's husband was involved in terrorist activity.

### 4. Pretext

The call was escalated through purported senior police and ATS officials, with claims of a Jammu & Kashmir terrorism case, arrest warrants, secrecy instructions and hourly reporting requirements.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `no`
- Reciprocity: `no`
- Isolation: `yes`
- Repeated contact: `yes`

- Other mechanism: Multi-agency authority escalation, purported arrest warrants, surveillance-style reporting and asset interrogation.

### 6. Requested action

Remain at home, keep the matter secret, report hourly, disclose assets/liabilities and transfer funds to specified accounts.

### 7. Victim/target action

The complainant and husband complied under fear and transferred a total of INR 9,450,000.

### 8. Consequence

- Reported financial loss: INR 9,450,000
- Credential compromise: `not_reported`
- Device compromise: `not_reported`
- Payment method: `bank_transfer`

## Evidence map

| Evidence type | Reported |
|---|---|
| Phone/SIM | yes |
| CDR/telecom | not_reported |
| Bank/transaction | yes |
| IP/login | not_reported |
| Device | yes |
| Chats/messages | yes |
| Email | not_reported |
| Social media | not_reported |
| CCTV | not_reported |
| Provider records | not_reported |
| Forensic examination | not_reported |
| Electronic-evidence authentication | not_reported |
| Chain of custody/provenance | not_reported |
| Integrity issue | yes |

Other evidence: Ritu Gupta's account received INR 4,000,000 from the focal loss; prosecution alleged same-day onward transfers and deletion of WhatsApp content from her phone.

## Actor and attribution analysis

### SEIAI-0084-A01 — Police/ATS digital-arrest impersonator cluster

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Conduct assessed: Delivering the terrorism accusation, arrest-warrant threats, secrecy/hourly-reporting instructions and transfer demands.
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Limitation: The victim-facing humans remain unresolved in the reviewed bail order.

### SEIAI-0084-A02 — Ritu Gupta

- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Conduct assessed: Receiving and allegedly redistributing a major portion of the focal victim's transfer.
- Attribution basis: `bank_account_or_money_flow` + `device_possession_or_forensics`
- Attribution strength: **moderate**
- Limitation: She was not linked to the victim-facing calls and claimed her bank details/SIM had been misused by co-accused; the bail court rejected this only prima facie.
- Alternative explanation: She claimed to be a fraud victim who had handed over banking credentials/SIM for proposed investment and later complained of misuse.
- Relationship note: Financial function is coded independently of the unresolved victim-facing layer.


### Incident-level attribution assessment

- Attribution target: Ritu Gupta's financial-endpoint role and the unresolved police/ATS impersonating caller cluster.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `device_possession_or_forensics`
- Attribution strength: **moderate**
- Limitations: The applicant was not identified as a victim-facing caller. She admitted the INR 4 million credit but claimed that co-accused had obtained and misused her bank details and SIM. The bail court considered that explanation implausible only prima facie.
- Alternative explanation: Ritu Gupta claimed she was herself cheated, had given bank details and SIM to proposed investors and later complained that they were being misused.

## Primary evidentiary gap

Communications/device evidence showing whether the applicant knowingly coordinated with the digital-arrest callers, and recovery/authentication of deleted WhatsApp material.

## Legal/procedural notes

BNS Section 308; BNS Section 318(4); BNS Section 319

## Coding decisions

This is the previously deferred CAND-0031, now admitted under Wave 1A. Screening history should be updated in place rather than creating a duplicate candidate.

## Wave 1A note

This incident was added in the v0.2.2 corrective expansion from 74 to 84 active reviewed incidents. The expansion was deliberately selected for temporal, geographic, procedural-stage and digital-evidence diversity rather than prevalence estimation.
