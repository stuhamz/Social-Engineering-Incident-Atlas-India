# SEIAI-0195: A to Z Car Finance OLX bank-auction vehicle fraud

## Record status

- Case ID: `SEIAI-0195`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0195-01 | T1 | bail_order | Salma Mohammed Salim Qureshi v. State of Maharashtra and Anr, 8 September 2021 |

Source URL(s):
- https://indiankanoon.org/doc/161582949/

## Procedural posture

- Court / authority: Bombay High Court
- Case / FIR: C.R. No. 45/2021, Chembur Police Station
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

From May 2019, operators associated with A to Z Car Finance advertised purported bank-auction vehicles on OLX. In the focal C.R. No. 45/2021 incident, the complainant was induced to pay INR 100,000 and the vehicle was not delivered. The source also reports INR 14.83 million collected from other persons, which Atlas keeps outside the focal loss.

## Reconstruction

### 1. Target

Target type: `online_seller_or_buyer`. Sector/context: used vehicle marketplace.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

A to Z Car Finance and associates published OLX advertisements for vehicles represented as bank-auction cars available for sale.

### 4. Pretext

The operators claimed access to legitimate bank-auction vehicles and induced buyers to pay deposits and purchase amounts for cars that were not delivered.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Pay money toward the advertised bank-auction vehicle.

### 7. Victim action

The focal complainant paid INR 100,000 and did not receive the vehicle; the same FIR also records much larger amounts collected from other persons.

### 8. Consequence

- Reported focal financial loss: INR 100000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2019-05-17 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0195-01 | Source-limited; exact date is left blank where not stated |
| 2019 | Financial consequence / detection / complaint period | SRC-SEIAI-0195-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0195-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0195-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0195-01 |

## Actor and attribution analysis

### SEIAI-0195-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0195-A02: Downstream financial / technical / infrastructure layer

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

Platform records and actor-specific payment tracing showing which named accused controlled the focal OLX advertisement and received the focal complainant’s funds.

## Legal/procedural notes

IPC Sections 420, 409, 504, 506 and 34

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The same order also discusses a separate C.R. No. 565/2020 involving A to Z Car Enterprises and INR 3.305 million aggregate payments. That separate FIR is not folded into the focal incident.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
