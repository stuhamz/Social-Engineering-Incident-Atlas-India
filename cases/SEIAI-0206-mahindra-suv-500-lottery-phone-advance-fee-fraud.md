# SEIAI-0206: Mahindra SUV 500 lottery phone advance-fee fraud

## Record status

- Case ID: `SEIAI-0206`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0206-01 | T1 | bail_order | Alok Kumar v. State of Himachal Pradesh, 6 January 2020 |

Source URL(s):
- https://indiankanoon.org/doc/163820453/

## Procedural posture

- Court / authority: Himachal Pradesh High Court
- Case / FIR: Cr.MP(M) No. 2417/2019; FIR No. 189/2019
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

On 2 October 2019, a Chamba resident received a call claiming that he had won a Mahindra SUV 500. He was told to deposit INR 14,800 and later made additional payments on the caller’s instructions before reporting the fraud. The public bail order does not state the complete aggregate loss, so Atlas leaves the total loss field blank rather than extrapolating.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: consumer / prize scam.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The informant received a phone call stating that he had won a Mahindra SUV 500 in a lottery.

### 4. Pretext

The caller required an initial deposit of INR 14,800 and then advised the victim to make further payments to secure the supposed prize.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Deposit the initial and subsequent amounts specified by the caller.

### 7. Victim action

The informant paid INR 14,800 and additional amounts before reporting that he had been cheated.

### 8. Consequence

- Reported focal financial loss: not fully quantified in the primary source
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2019-10-02 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0206-01 | Source-limited; exact date is left blank where not stated |
| 2019-10-19 | Financial consequence / detection / complaint period | SRC-SEIAI-0206-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0206-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0206-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0206-01 |

## Actor and attribution analysis

### SEIAI-0206-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0206-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Attribution basis: `documentary_record`
- Attribution strength: **limited**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `witness_or_statement`
- Secondary basis: `documentary_record`
- Attribution strength: **limited**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Complete payment schedule and telecom/bank attribution for the caller and recipient accounts.

## Legal/procedural notes

IPC Sections 420, 467, 468, 34; IT Act Section 66

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

Only the first INR 14,800 payment is quantified in the source; the total focal loss is therefore not coded.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
