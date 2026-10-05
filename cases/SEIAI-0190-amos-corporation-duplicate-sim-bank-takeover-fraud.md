# SEIAI-0190: Amos Corporation duplicate-SIM bank takeover fraud

## Record status

- Case ID: `SEIAI-0190`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0190-01 | T1 | final_judgment | IndusInd Bank Ltd v. Amos Corporation & Ors, 7 February 2025 |

Source URL(s):
- https://indiankanoon.org/doc/76567321/

## Procedural posture

- Court / authority: Telecom Disputes Settlement and Appellate Tribunal
- Case / FIR: not fully stated in the coded source metadata
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The cited final civil/consumer/telecom or writ judgment resolves the proceeding before that forum but does not necessarily adjudicate criminal offender identity.

## Neutral case summary

On 13 January 2014, Amos Corporation’s registered mobile service stopped after a duplicate SIM was issued using fraudulent identity material. Eight unauthorized debits totalling INR 1,426,000 were then made from the company bank account. The appellate record identifies the duplicate SIM as the principal enabling mechanism.

## Reconstruction

### 1. Target

Target type: `business`. Sector/context: corporate banking.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

A person using the identity of a purported company HR head obtained a duplicate SIM for the registered mobile number of Amos Corporation’s chairman.

### 4. Pretext

The requester used fraudulent documents to appear authorised to replace the company-linked SIM.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Issue a duplicate SIM for the corporate registered number.

### 7. Victim action

The registered number went out of service and eight unauthorized debit transactions totalling INR 1,426,000 were detected later that day.

### 8. Consequence

- Reported focal financial loss: INR 1426000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2014-01-13 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0190-01 | Source-limited; exact date is left blank where not stated |
| 2014-01-13 | Financial consequence / detection / complaint period | SRC-SEIAI-0190-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0190-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0190-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0190-01 |

## Actor and attribution analysis

### SEIAI-0190-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `documentary_record`
- Attribution strength: **limited**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0190-A02: Downstream financial / technical / infrastructure layer

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

Evidence tying the SIM applicant and beneficiary-account controllers to the same human network.

## Legal/procedural notes

Information Technology Act Sections 43 and 43A

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The source states INR 1,000,000 was withheld/recovered, leaving INR 426,000 unreverted. Atlas records the gross unauthorized transfer amount.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
