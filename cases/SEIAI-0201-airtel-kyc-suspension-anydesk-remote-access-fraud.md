# SEIAI-0201: Airtel KYC suspension AnyDesk remote-access fraud

## Record status

- Case ID: `SEIAI-0201`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0201-01 | T1 | bail_order | Md. Misbahu Haque v. State of UT Chandigarh, 9 February 2023 |

Source URL(s):
- https://indiankanoon.org/doc/15729965/

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / FIR: CRM-M-44240-2022; FIR No. 24 dated 02.02.2022
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is procedural or bail-stage material; underlying criminal merits and accused guilt are not treated as finally adjudicated.

## Neutral case summary

In January 2022, a Chandigarh resident received an SMS warning that his SIM would be suspended unless KYC was completed. A caller claiming to be an Airtel employee induced him to install AnyDesk and make small debit-card payments. Subsequent unauthorized debits and a loan against a fixed deposit produced a total reported loss of INR 990,000.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: telecom and personal banking.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The complainant received an SMS warning that KYC had to be completed or his SIM would be suspended, with a customer-care number to call.

### 4. Pretext

A caller claiming to be an Airtel employee directed the complainant to install AnyDesk and make a INR 10 test payment, then shifted between debit cards when the first payment was said to have failed.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Install AnyDesk and perform small debit-card transactions under the guise of KYC verification.

### 7. Victim action

The complainant followed the remote-access and payment instructions. Unauthorized debits and a loan against a fixed deposit produced a total reported loss of INR 990,000.

### 8. Consequence

- Reported focal financial loss: INR 990000
- Payment method: `multiple`
- Credential compromise: `yes`
- Device compromise: `yes`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2022-01-30 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0201-01 | Source-limited; exact date is left blank where not stated |
| 2022-02-01 | Financial consequence / detection / complaint period | SRC-SEIAI-0201-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0201-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0201-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0201-01 |

## Actor and attribution analysis

### SEIAI-0201-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0201-A02: Downstream financial / technical / infrastructure layer

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

Device and telecom evidence identifying the Airtel-impersonating caller and proving control of the remote-access session.

## Legal/procedural notes

IPC Sections 419, 420, 120B

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

Petitioner-specific attribution in the bail order is primarily financial: investigation traced amounts into an account in his name. That does not by itself prove he was the caller.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
