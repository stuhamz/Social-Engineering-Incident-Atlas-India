# SEIAI-0186: Sango Consultants duplicate-SIM and foreign-IP bank fraud

## Record status

- Case ID: `SEIAI-0186`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0186-01 | T1 | final_judgment | Vodafone Cellular Limited v. Mr Sanjay Govind Dhande and Others, 14 February 2020 |

Source URL(s):
- https://indiankanoon.org/doc/81320460/

## Procedural posture

- Court / authority: Telecom Disputes Settlement and Appellate Tribunal
- Case / FIR: Cyber Appeals Nos. 1 and 4 of 2014
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The cited final civil/consumer/telecom or writ judgment resolves the proceeding before that forum but does not necessarily adjudicate criminal offender identity.

## Neutral case summary

Between 6 and 10 September 2013, a Pune complainant’s registered mobile number was taken over through a fraudulently issued duplicate SIM from a Nagpur franchise. During the outage, unauthorized internet-banking transfers totalling INR 1,901,073.16 were made, with police material also noting foreign IP usage. The tribunal found a direct nexus between the duplicate-SIM issuance and the unauthorized financial transactions.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: banking / consulting business.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

An impostor presented himself or herself at a Vodafone franchise in Nagpur as the legitimate subscriber and requested replacement of the registered SIM.

### 4. Pretext

The impostor used subscriber identity materials to obtain a replacement SIM, allowing OTPs and transaction alerts to be diverted while internet-banking transfers were executed from the complainant’s account.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Replace the legitimate subscriber’s SIM and activate the replacement.

### 7. Victim action

The telecom franchise issued the replacement SIM; during the period of lost mobile service, twenty-two illegal transactions were identified and funds were transferred using internet banking, including activity from foreign IP addresses.

### 8. Consequence

- Reported focal financial loss: INR 1901073.16
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2013-09-06 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0186-01 | Source-limited; exact date is left blank where not stated |
| 2013-09-10 | Financial consequence / detection / complaint period | SRC-SEIAI-0186-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0186-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0186-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0186-01 |

## Actor and attribution analysis

### SEIAI-0186-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `documentary_record`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0186-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `documentary_record`
- Attribution strength: **moderate**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `documentary_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Device and account evidence resolving the human who presented the forged subscriber identity and linking that person to the internet-banking sessions.

## Legal/procedural notes

Information Technology Act Sections 43 and 43A

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

Gross fraudulent withdrawal is coded. The source also records partial recovery of INR 326,504.17, which is not netted from the focal loss field.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
