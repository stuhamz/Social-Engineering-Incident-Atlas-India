# SEIAI-0193: Rajkumar Singhee multi-bank duplicate-SIM fraud

## Record status

- Case ID: `SEIAI-0193`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0193-01 | T1 | final_judgment | Rajkumar Sreelal Singhee v. Gajanan Doye and Ors, 28 November 2025 |

Source URL(s):
- https://indiankanoon.org/doc/151477915/

## Procedural posture

- Court / authority: Telecom Disputes Settlement and Appellate Tribunal
- Case / FIR: Complaint No. 39 of 2016 / connected cyber appeal
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The cited final civil/consumer/telecom or writ judgment resolves the proceeding before that forum but does not necessarily adjudicate criminal offender identity.

## Neutral case summary

In July 2016, an impostor obtained a duplicate SIM in the name of Nagpur businessman Rajkumar Shreelal Singhee. Unauthorized transfers of INR 1,700,000, INR 370,000 and INR 600,000 were then made from three bank accounts, totalling INR 2,670,000. The adjudicatory and appellate records link the loss to the improperly issued duplicate SIM.

## Reconstruction

### 1. Target

Target type: `business`. Sector/context: commercial banking.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

An impostor claiming to be Rajkumar Shreelal Singhee visited an Idea franchise in Gondia and requested a duplicate SIM.

### 4. Pretext

The requester claimed the original SIM had been lost and used a PAN copy to obtain replacement of the legitimate subscriber’s number.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Issue a duplicate SIM for the registered mobile number.

### 7. Victim action

The legitimate phone lost connectivity and unauthorized NEFT/RTGS transactions were made from three bank accounts.

### 8. Consequence

- Reported focal financial loss: INR 2670000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2016-07-02 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0193-01 | Source-limited; exact date is left blank where not stated |
| 2016-07-05 | Financial consequence / detection / complaint period | SRC-SEIAI-0193-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0193-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0193-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0193-01 |

## Actor and attribution analysis

### SEIAI-0193-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `documentary_record`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0193-A02: Downstream financial / technical / infrastructure layer

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

Identification of the duplicate-SIM applicant and proof of coordination with the persons controlling receiving accounts.

## Legal/procedural notes

Information Technology Act Sections 43 and 43A

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

Gross loss is directly stated by the source and spans three separate bank accounts controlled by the same complainant.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
