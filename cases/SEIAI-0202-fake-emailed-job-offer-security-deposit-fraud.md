# SEIAI-0202: Fake emailed job offer and security-deposit fraud

## Record status

- Case ID: `SEIAI-0202`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0202-01 | T1 | final_judgment | V. Balasubramaniam v. Department of Banking Ombudsman, 20 July 2021 |

Source URL(s):
- https://indiankanoon.org/doc/160833202/

## Procedural posture

- Court / authority: Madras High Court
- Case / FIR: W.P. No. 15596 of 2014; Crime No. 274/2013
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The cited final civil/consumer/telecom or writ judgment resolves the proceeding before that forum but does not necessarily adjudicate criminal offender identity.

## Neutral case summary

A Tamil Nadu job seeker received a fraudulent employment offer by email in January 2013. After contacting numbers in the message, he was asked to pay INR 180,000 as security, received a confirmation email and was given a date to report to the purported company. He later discovered the recruitment communication was fake.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: employment.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The petitioner’s son, who was searching for a job, received an unsolicited job offer by email and called the mobile numbers listed in it.

### 4. Pretext

The callers presented the offer as genuine employment and required an advance security deposit, later sending a confirmation email and a reporting date.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Transfer INR 180,000 as an employment security deposit to the supplied bank account.

### 7. Victim action

The victim transferred INR 180,000 and received a confirmation email before discovering the offer and email identity were fake.

### 8. Consequence

- Reported focal financial loss: INR 180000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| January 2013, exact date not reported | Victim received the fraudulent job-offer email and later transferred the requested security deposit | SRC-SEIAI-0202-01 | Source does not state the exact initial-contact or transfer date |
| 2013-01-23 | Purported reporting date stated in the confirmation email | SRC-SEIAI-0202-01 | Explicitly stated in source |
| 2013-01-28 | Complaint submitted to the Superintendent of Police, Villupuram District | SRC-SEIAI-0202-01 | Explicitly stated in source |
| 2013-01-28 | Financial consequence / detection / complaint period | SRC-SEIAI-0202-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0202-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0202-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0202-01 |

## Actor and attribution analysis

### SEIAI-0202-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0202-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Identity and account-control evidence resolving the people behind the fake recruitment email and beneficiary account.

## Legal/procedural notes

Underlying Crime No. 274/2013; writ concerned banking remedy

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The writ proceeding concerned recovery from the receiving bank rather than offender guilt. Atlas uses it for the well-described focal social-engineering sequence.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
