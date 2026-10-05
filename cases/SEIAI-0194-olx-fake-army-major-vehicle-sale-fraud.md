# SEIAI-0194: OLX fake Army Major vehicle-sale fraud

## Record status

- Case ID: `SEIAI-0194`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0194-01 | T1 | bail_order | Sagar Omnarayna Mishra v. State of Maharashtra, 5 August 2016 |

Source URL(s):
- https://www.casemine.com/judgement/in/5e3e354946571b7663abd862

## Procedural posture

- Court / authority: Bombay High Court
- Case / FIR: Anticipatory Bail Application No. 1206 of 2016; Crime No. 50/2016
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

A Mumbai complainant responded to a December 2015 OLX advertisement for a car. The seller represented himself as the owner and an Indian Army Major being transferred, showed the vehicle, and induced a INR 500,000 RTGS payment. The vehicle was not delivered and was also sold to another purchaser. Police verification found no Army officer matching the claimed identity.

## Reconstruction

### 1. Target

Target type: `online_seller_or_buyer`. Sector/context: used vehicle marketplace.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The complainant found a vehicle advertisement on OLX and contacted the number in the listing.

### 4. Pretext

The seller posed as the vehicle owner and as an Indian Army Major who was being transferred, using the military identity and physical vehicle inspection to reinforce legitimacy.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Transfer INR 500,000 by RTGS for the advertised vehicle and wait for delivery after purported removal of Army equipment.

### 7. Victim action

The complainant transferred INR 500,000 after inspecting the vehicle, but delivery was repeatedly delayed and the same vehicle was sold to another buyer.

### 8. Consequence

- Reported focal financial loss: INR 500000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2015-12-30 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0194-01 | Source-limited; exact date is left blank where not stated |
| 2016-01-17 | Financial consequence / detection / complaint period | SRC-SEIAI-0194-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0194-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0194-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0194-01 |

## Actor and attribution analysis

### SEIAI-0194-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0194-A02: Downstream financial / technical / infrastructure layer

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

Authenticated platform and telecom records establishing who created and controlled the OLX listing and phone identities.

## Legal/procedural notes

IPC Sections 420 and related provisions as reported in the bail proceeding

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The focal loss is the first complainant’s INR 500,000. A separate INR 500,000 paid by another purchaser is not added to this focal incident.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
