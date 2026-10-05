# SEIAI-0209: Land-sale proceeds trust and fake bank-manager diversion fraud

## Record status

- Case ID: `SEIAI-0209`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0209-01 | T1 | bail_order | Sapna Jigarbhai Tuli v. State of Gujarat, 23 September 2021 |

Source URL(s):
- https://indiankanoon.org/doc/184166812/

## Procedural posture

- Court / authority: Gujarat High Court
- Case / FIR: R/Criminal Misc. Application No. 1082/2021; C.R. No. I-11191039201772/2020
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

An Ahmedabad complainant who had received ancestral-land sale proceeds placed trust in an acquaintance and a purportedly helpful bank manager. According to the prosecution, the group manipulated the account-opening and mobile-OTP arrangements and transferred INR 14,003,981 from the complainant’s account without his knowledge. The High Court considered anticipatory bail while the merits remained under investigation.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal banking / land-sale proceeds.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

After receiving substantial ancestral-land sale proceeds, an illiterate complainant relied on a trusted acquaintance who advised him about how to hold and withdraw the money and introduced him to a bank manager.

### 4. Pretext

The complainant was told that ordinary bank withdrawal restrictions required the account arrangements proposed by the accused. His mobile linkage and banking access were then controlled without his informed knowledge.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Open and operate the bank account through the persons presented as trusted banking helpers and sign forms they supplied.

### 7. Victim action

The complainant deposited the land-sale proceeds and, without his knowledge, INR 14,003,981 was transferred in parts to accounts linked to the accused.

### 8. Consequence

- Reported focal financial loss: INR 14003981
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2020-09-14 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0209-01 | Source-limited; exact date is left blank where not stated |
| 2020-12-01 | Financial consequence / detection / complaint period | SRC-SEIAI-0209-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0209-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0209-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0209-01 |

## Actor and attribution analysis

### SEIAI-0209-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0209-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Complete account-opening, mobile-number change and OTP logs showing who authorized each transfer and which actor controlled the registered device.

## Legal/procedural notes

IPC Sections 406, 420, 120B, 114

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

This case combines interpersonal trust exploitation with bank-access control. Applicant-specific guilt is not treated as established by the bail order.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
