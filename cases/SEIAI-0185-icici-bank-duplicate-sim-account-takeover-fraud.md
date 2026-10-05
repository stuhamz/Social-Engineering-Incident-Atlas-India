# SEIAI-0185: ICICI Bank duplicate-SIM account takeover fraud

## Record status

- Case ID: `SEIAI-0185`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0185-01 | T1 | final_judgment | ICICI Bank Ltd v. Saurabh Ravi Shankar Jain and Ors, 24 September 2019 |

Source URL(s):
- https://www.legitquest.com/case/icici-bank-ltd-v-saurabh-ravi-shankar-jain-and-ors/198D30

## Procedural posture

- Court / authority: Telecom Disputes Settlement and Appellate Tribunal
- Case / FIR: Cyber Appeal No. 5 of 2013
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The cited final civil/consumer/telecom or writ judgment resolves the proceeding before that forum but does not necessarily adjudicate criminal offender identity.

## Neutral case summary

A Pune bank customer suffered fifteen unauthorized transfers totalling INR 202,000 on 15–16 October 2010 after a fraudster obtained a duplicate SIM using a forged driving licence and forged FIR. The appellate tribunal treated the telecom provider’s duplicate-SIM lapse and the bank’s security failures as material to the loss, while noting that a phishing explanation for credential compromise was asserted but not proved.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal banking.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

A fraudster obtained a duplicate SIM for the complainant’s registered mobile number using forged identity material while the complainant’s bank credentials were compromised through an unresolved route.

### 4. Pretext

The telecom-facing pretext was that the fraudster was the legitimate subscriber entitled to a replacement SIM; the bank argued, without proof, that a phishing message may also have compromised the complainant’s user ID and password.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Issue a replacement SIM as though the requester were the legitimate subscriber.

### 7. Victim action

The telecom provider issued a duplicate SIM; the original subscriber lost control of the registered number and fifteen unauthorized bank transfers followed.

### 8. Consequence

- Reported focal financial loss: INR 202000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2010-10-15 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0185-01 | Source-limited; exact date is left blank where not stated |
| 2010-10-16 | Financial consequence / detection / complaint period | SRC-SEIAI-0185-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0185-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0185-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0185-01 |

## Actor and attribution analysis

### SEIAI-0185-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `documentary_record`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0185-A02: Downstream financial / technical / infrastructure layer

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

Direct technical evidence showing how the fraudster obtained the complainant’s internet-banking credentials in addition to control of the duplicate SIM.

## Legal/procedural notes

Information Technology Act Sections 43 and 43A

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

Historical TDSAT source. The phishing theory was a bank defence and was expressly not proved; Atlas therefore does not code phishing as established. Gross focal loss is INR 202,000.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
