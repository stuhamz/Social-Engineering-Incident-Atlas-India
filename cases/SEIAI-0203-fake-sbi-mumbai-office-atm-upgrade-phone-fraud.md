# SEIAI-0203: Fake SBI Mumbai-office ATM upgrade phone fraud

## Record status

- Case ID: `SEIAI-0203`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, civil or consumer findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0203-01 | T1 | final_judgment | State Bank of India v. Dr. J.C.S. Kataky, 3 May 2017 |

Source URL(s):
- https://indiankanoon.org/doc/25533575/

## Procedural posture

- Court / authority: National Consumer Disputes Redressal Commission
- Case / FIR: Revision Petition No. 3073 of 2016; Consumer Complaint No. 7/2014
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The cited final civil/consumer/telecom or writ judgment resolves the proceeding before that forum but does not necessarily adjudicate criminal offender identity.

## Neutral case summary

On 8 August 2012, an SBI customer in Jorhat received a call from someone claiming to be from the bank’s Mumbai office. The caller announced an ATM-card upgrade and supplied a purported new card number and PIN. Shortly afterward, unauthorized POS transactions totalling INR 30,694 were posted to the account. Consumer fora found deficiency in the bank’s response while the fraudster remained unidentified.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal banking.

### 2. Reconnaissance

The public source does not establish a complete reconnaissance chain. Identity information, account details, platform listings, telecom records or other legitimacy cues are coded only where the source itself describes them.

### 3. Initial contact

The complainant received an evening call from someone claiming to be from SBI’s Mumbai office.

### 4. Pretext

The caller said the complainant’s ATM card had been upgraded, supplied a purported new card number and PIN, claimed the old card was blocked and stated the new card had reached the local branch.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution, legitimacy borrowing, or pretext-specific trust cues as documented in the source.

### 6. Requested action

Accept the purported card-upgrade information and interact with the caller as if it were an official bank communication.

### 7. Victim action

Soon after the call, three unauthorized POS-related debits totalling INR 30,694 appeared on the complainant’s account.

### 8. Consequence

- Reported focal financial loss: INR 30694
- Payment method: `card`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2012-08-08 | Initial or earliest documented phase of focal incident | SRC-SEIAI-0203-01 | Source-limited; exact date is left blank where not stated |
| 2012-08-08 | Financial consequence / detection / complaint period | SRC-SEIAI-0203-01 | Does not imply every alleged actor participated throughout |

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and, where reported, downstream flow | Authorship of the original deception by itself | SRC-SEIAI-0203-01 |
| Telecom / phone / platform material | Contact, SIM, caller, listing or messaging layer where described | Human identity across every functional layer | SRC-SEIAI-0203-01 |
| Judicially recited complaint / FIR / status report | The public reconstruction used for coding | Final criminal guilt unless the source expressly adjudicates it | SRC-SEIAI-0203-01 |

## Actor and attribution analysis

### SEIAI-0203-A01: Victim-facing / impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitation: The source reconstructs the victim-facing or telecom-facing conduct but may not resolve the persona, phone, platform account or subscriber-replacement identity to a verified human.

### SEIAI-0203-A02: Downstream financial / technical / infrastructure layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitation: Receipt of funds, control of a SIM/account, employment at a call centre, or technical association does not by itself prove authorship of the original victim-facing deception or knowledge of the full scheme.

### Incident-level attribution assessment

- Attribution target: The victim-facing social-engineering operator(s) and any separately evidenced downstream financial, telecom or technical actors.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Limitations: The source supports the focal manipulation sequence but procedural posture and public evidence do not necessarily resolve every online, telephone, telecom or financial function to the same human actor.
- Alternative explanation: A downstream account holder, SIM-linked person, platform user or employee may have performed a narrower function than the original victim-facing deception; accused-specific guilt remains subject to the source posture.

## Primary evidentiary gap

Telecom and merchant-acquirer evidence identifying the caller and tracing how card credentials used at the POS terminals were obtained.

## Legal/procedural notes

Consumer protection proceeding; underlying police case at Pulibar Police Station

The primary public source is coded at the procedural stage shown above. Bail, anticipatory-bail, quashing and investigative recitals are not converted into final findings of guilt. Civil, consumer and telecom-liability decisions are not treated as criminal convictions of the social-engineering operators.

## Coding decisions

The bank argued that sensitive card details must have been disclosed, but the public record does not establish exactly what information the complainant gave the caller. Atlas therefore codes the social-engineering contact but not unproved credential disclosure.

This incident was selected as part of the historical expansion wave focused on 2008–2022. The wave deliberately avoided Delhi, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala, Odisha and Punjab.
