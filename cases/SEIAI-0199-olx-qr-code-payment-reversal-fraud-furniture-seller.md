# SEIAI-0199: OLX QR-code payment reversal fraud against furniture seller

## Record status

- Case ID: `SEIAI-0199`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0199-01 | T1 | bail_order | Karan Singh v. Jagath Devaiah M.M. and Another, 3 July 2020 |

Source URL(s):
- https://www.casemine.com/judgement/in/5f03b2ac9fca1957d423d04f

## Procedural posture

- Court / authority: Karnataka High Court
- Case / FIR: Criminal Petition No. 1956/2020; Crime No. 10044/2019
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

A Bengaluru seller posted furniture on OLX on 13 December 2019. A purported buyer calling himself Rahul Sharma sent QR codes and asked the seller to scan them through PhonePe and Paytm, supposedly to facilitate payment. Repeated scans instead caused a total loss of INR 84,000.

## Reconstruction

### 1. Target

Target type: `online_seller_or_buyer`. Sector/context: online marketplace.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The complainant listed furniture for sale on OLX and was contacted by a person calling himself Rahul Sharma who expressed interest in buying it.

### 4. Pretext

The purported buyer sent QR codes and represented that scanning them in PhonePe or Paytm was part of receiving payment.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Scan multiple QR codes through PhonePe and Paytm.

### 7. Victim action

The complainant scanned the QR codes and lost INR 84,000 in total.

### 8. Consequence

- Reported focal financial loss: INR 84000
- Payment method: `wallet`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2019-12-13 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0199-01 | Source-limited; exact date is left blank where not stated |
| 2019-12-14 | Financial consequence / detection / complaint period | SRC-SEIAI-0199-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0199-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0199-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0199-01 |

## Actor and attribution analysis

### SEIAI-0199-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0199-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Platform, device and wallet-account records tying the OLX buyer persona and QR codes to the identified accused.

## Legal/procedural notes

IPC Sections 419, 420; IT Act Sections 66C and 66D

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The public bail order supports the victim-facing QR-code deception. The petitioner’s exact relationship to the “Rahul Sharma” persona should remain separately assessed.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
