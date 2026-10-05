# SEIAI-0207: Facebook fake Army-personnel Scorpio sale fraud

## Record status

- Case ID: `SEIAI-0207`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0207-01 | T1 | bail_order | Aarif and another v. State of Himachal Pradesh, 7 January 2022 |

Source URL(s):
- https://indiankanoon.org/doc/103959599/

## Procedural posture

- Court / authority: Himachal Pradesh High Court
- Case / FIR: Cr.MP(M) Nos. 2001 and 2132 of 2021; FIR No. 70/2020
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

A taxi driver in Solan responded to a Facebook advertisement for a Mahindra Scorpio posted by a seller claiming to be Army personnel. The complainant paid a booking amount and then further sums through bank transfer and Google Pay, totalling INR 290,000, but the vehicle was never delivered. Investigation later linked downstream payment accounts and devices to the bail petitioners.

## Reconstruction

### 1. Target

Target type: `online_seller_or_buyer`. Sector/context: used vehicle marketplace.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The complainant saw photographs and registration details of a Mahindra Scorpio advertised for sale on Facebook and contacted the listed number.

### 4. Pretext

The seller introduced himself as Army personnel and used the vehicle photographs and registration material to make the sale appear legitimate.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Pay a booking amount and then the balance purchase amount into supplied bank and Google Pay channels.

### 7. Victim action

The complainant paid INR 5,000 initially and eventually transferred INR 290,000 in total, but no vehicle was delivered and the seller switched off the phone.

### 8. Consequence

- Reported focal financial loss: INR 290000
- Payment method: `multiple`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2020 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0207-01 | Source-limited; exact date is left blank where not stated |
| 2020-06-04 | Financial consequence / detection / complaint period | SRC-SEIAI-0207-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0207-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0207-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0207-01 |

## Actor and attribution analysis

### SEIAI-0207-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0207-A02: Downstream financial / technical / infrastructure layer

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

Platform and telecom evidence tying the Facebook seller persona directly to a real-world operator.

## Legal/procedural notes

IPC Sections 420, 120B; IT Act Sections 66 and 66D

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The principal seller identity and downstream account actors are kept separate. The petitioners argued that their role was limited to money routing.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
