# SEIAI-0200: Fake SBI corporate-loan website and INR 7.15 crore commission fraud

## Record status

- Case ID: `SEIAI-0200`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0200-01 | T1 | final_judgment | Seba Jeevan Sebaratnam v. State of Karnataka, 30 January 2026 |

Source URL(s):
- https://indiankanoon.org/doc/94470216/

## Procedural posture

- Court / authority: Karnataka High Court
- Case / FIR: Crime No. 219/2022; C.C. No. 14359/2024 and connected criminal petitions
- Primary source stage: `final_judgment`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

Beginning in 2017, a Karnataka businessman seeking finance for a sugar factory was promised a INR 225 crore SBI corporate loan. The alleged operators created a counterfeit SBI Corporate Finance website, bogus account and KYC process, fake credit alerts and later a forged ICICI demand draft. The complainant paid INR 71.5 million in commission before discovering the banking infrastructure was fictitious.

## Reconstruction

### 1. Target

Target type: `business`. Sector/context: industrial project finance.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

A businessman seeking financing for a sugar factory was introduced through in-person meetings to persons who claimed they could arrange a INR 225 crore SBI corporate loan.

### 4. Pretext

The group used meetings, a bogus KYC process, a fake SBI Corporate Finance website, fabricated account balances, emails, WhatsApp messages, purported OTPs and a forged ICICI demand draft to make a nonexistent loan appear real.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Pay a seven-percent commission, including an initial fifty-percent share, for arranging the purported INR 225 crore loan.

### 7. Victim action

Believing the displayed account balance and loan documentation, the complainant paid INR 71.5 million in cash and bank transfers.

### 8. Consequence

- Reported focal financial loss: INR 71500000
- Payment method: `multiple`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2017-10-01 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0200-01 | Source-limited; exact date is left blank where not stated |
| 2020-03-23 | Financial consequence / detection / complaint period | SRC-SEIAI-0200-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0200-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0200-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0200-01 |

## Actor and attribution analysis

### SEIAI-0200-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0200-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Forensic attribution of the fake domain, email infrastructure and OTP-generation mechanism to specific accused devices and accounts.

## Legal/procedural notes

IPC Sections 120B, 406, 419, 420, 465, 467, 468, 471, 34; IT Act Section 66D

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The source is a 2026 quashing judgment concerning a 2017–2020 fraud reported in 2022. The court found the materials disclosed a prima facie cyber-fraud case and allowed proceedings to continue; accused guilt remains for trial.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
