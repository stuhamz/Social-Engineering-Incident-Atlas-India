# SEIAI-0196: OLX Maruti Ertiga non-owner sale fraud

## Record status

- Case ID: `SEIAI-0196`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0196-01 | T1 | bail_order | Sajid Mohd. Laddan Khan v. State of Maharashtra, 21 April 2022 |

Source URL(s):
- https://indiankanoon.org/doc/189732283/

## Procedural posture

- Court / authority: Bombay High Court
- Case / FIR: C.R. I-150/2020, Kashimira Police Station
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

A buyer responded to an OLX advertisement for a Maruti Ertiga and was shown the vehicle at Mira Road. After negotiations, he transferred a total of INR 410,000 through bank accounts and Google Pay. He later learned that the vehicle belonged to another person and was not for sale, prompting the criminal complaint.

## Reconstruction

### 1. Target

Target type: `online_seller_or_buyer`. Sector/context: used vehicle marketplace.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The complainant saw an OLX listing for a Maruti Ertiga and contacted the applicant for details.

### 4. Pretext

The applicant showed the vehicle at Mira Road and represented that it was legitimately for sale, although the complainant later learned it belonged to another person and was not for sale.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Transfer the negotiated purchase price into accounts supplied by the sellers.

### 7. Victim action

The complainant paid INR 200,000 to one account, INR 10,000 by Google Pay and another INR 200,000 before discovering the vehicle was not legitimately for sale.

### 8. Consequence

- Reported focal financial loss: INR 410000
- Payment method: `multiple`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2020 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0196-01 | Source-limited; exact date is left blank where not stated |
| 2020 | Financial consequence / detection / complaint period | SRC-SEIAI-0196-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0196-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0196-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0196-01 |

## Actor and attribution analysis

### SEIAI-0196-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0196-A02: Downstream financial / technical / infrastructure layer

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

OLX account and device records tying the listing to the human operator and clarifying each accused’s role in the deception.

## Legal/procedural notes

IPC Sections 419, 420 and related provisions

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

Source is a bail-stage order. The applicant and co-accused roles remain allegations, though the victim-facing sequence and payments are specifically recited.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
