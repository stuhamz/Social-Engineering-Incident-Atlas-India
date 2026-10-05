# SEIAI-0197: Loan-processing and ZebPay OTP diversion fraud

## Record status

- Case ID: `SEIAI-0197`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0197-01 | T1 | bail_order | Hitesh Dineshbhai Bulde v. State of Maharashtra, 9 March 2021 |

Source URL(s):
- https://indiankanoon.org/doc/96694613/

## Procedural posture

- Court / authority: Bombay High Court
- Case / FIR: ABA No. 642/2021; C.R. No. 12/2021, Swargate Police Station
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

Two Pune victims seeking a loan were led into using ZebPay and paying processing fees. The applicant allegedly obtained OTPs under the pretext of completing a bitcoin transaction, after which INR 1,751,262 was transferred from the victims’ accounts to an unknown ZebPay account. The High Court denied anticipatory bail while leaving guilt for trial.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal finance / cryptocurrency.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The applicant allegedly approached the informant and a friend in connection with arranging a large loan and required processing payments and cryptocurrency activity.

### 4. Pretext

After the victims downloaded ZebPay and paid processing fees, the applicant said an incomplete bitcoin transaction required a transfer and asked for OTPs, assuring that any excess transfer would be reversed.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Disclose OTPs purportedly needed to complete the bitcoin-related step in the loan process.

### 7. Victim action

The informant and friend disclosed OTPs; INR 1,016,911 and INR 734,351 were transferred from their ZebPay accounts to an unknown account.

### 8. Consequence

- Reported focal financial loss: INR 1751262
- Payment method: `cryptocurrency`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2021 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0197-01 | Source-limited; exact date is left blank where not stated |
| 2021 | Financial consequence / detection / complaint period | SRC-SEIAI-0197-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0197-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0197-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0197-01 |

## Actor and attribution analysis

### SEIAI-0197-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0197-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

ZebPay account ownership, device and login records resolving the destination account and wider conspiracy.

## Legal/procedural notes

IPC Sections 420, 406 and 34

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The source strongly supports the OTP-elicitation sequence. Recipient identity remains unresolved in the public order.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
