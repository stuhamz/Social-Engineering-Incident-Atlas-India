# SEIAI-0210: Fake Covaxin registration customer-care and remote-access fraud

## Record status

- Case ID: `SEIAI-0210`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0210-01 | T1 | bail_order | Siraj Ansari v. State of Jharkhand, 18 August 2022 |

Source URL(s):
- https://indiankanoon.org/doc/67774675/

## Procedural posture

- Court / authority: Jharkhand High Court
- Case / FIR: A.B.A. No. 3542 of 2022; Doranda P.S. Case No. 129/2021
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

A Ranchi woman searching through Justdial for Sadar Hospital Covaxin information reached a fraudulent contact. A caller identifying himself as Rajesh Kumar requested a INR 5 registration fee, sent a link for card and account data and directed her to install a remote-access app. Unauthorized withdrawals totalled INR 99,998.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: health services / personal banking.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The informant’s mother used Justdial to seek Sadar Hospital information about Covaxin and called a number that turned out to be fraudulent.

### 4. Pretext

A callback from a person identifying himself as Rajesh Kumar requested a INR 5 registration fee, sent a link for card/account data and asked the victim to install an “Anytime” remote-access application.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Pay a small registration fee, enter banking details through the supplied link and install the remote-access application.

### 7. Victim action

The victim followed the registration instructions and unauthorized debits eventually totalled INR 99,998.

### 8. Consequence

- Reported focal financial loss: INR 99998
- Payment method: `multiple`
- Credential compromise: `yes`
- Device compromise: `yes`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2021 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0210-01 | Source-limited; exact date is left blank where not stated |
| 2021 | Financial consequence / detection / complaint period | SRC-SEIAI-0210-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0210-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0210-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0210-01 |

## Actor and attribution analysis

### SEIAI-0210-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0210-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `cdr_or_telecom_record`
- Attribution strength: **limited**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `cdr_or_telecom_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Device and platform records proving who controlled the fake hospital/customer-care numbers, the link and remote-access session.

## Legal/procedural notes

IPC Sections 420, 406; IT Act Sections 66C and 66D

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

Petitioner-specific involvement was inferred during investigation from call-detail and SIM-use material; the bail order does not establish that he was the original caller.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
