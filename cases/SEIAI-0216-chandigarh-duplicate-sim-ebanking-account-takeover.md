# SEIAI-0216: Chandigarh duplicate-SIM e-banking account takeover

## Record status

- Case ID: `SEIAI-0216`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0216-01 | T3 | journalistic_report | Money transferred through three transactions |

Source URL(s):
- https://www.tribuneindia.com/news/archive/community/money-transferred-through-three-transactions-225455/

## Procedural posture

- Court / authority: Chandigarh Cyber Crime Investigation Cell
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Chandigarh Cyber Crime Investigation Cell was investigating the duplicate-SIM and three-transfer fraud; the report did not state a final procedural outcome.

## Neutral case summary

A Chandigarh industrialist lost INR 10 lakh after fraudsters caused his mobile SIM to be blocked, obtained a duplicate SIM and used the replacement number to generate e-banking passwords. Police said the money was transferred in three transactions and withdrawn in Delhi and West Bengal. The report establishes a social-engineering identity-substitution mechanism at the telecom layer and a downstream bank-transfer consequence, but it does not identify the human who obtained the replacement SIM or establish how the telecom provider was deceived.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: banking / industrialist.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

Fraudsters caused a Chandigarh industrialist's genuine SIM to be blocked and obtained a duplicate SIM; the public report does not state how the replacement request was presented to the telecom provider.

### 4. Pretext

The replacement SIM was obtained as though the fraudsters were entitled to control the victim's mobile number, enabling them to generate e-banking passwords.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `no`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Identity substitution at the telecom-account layer.

### 6. Requested action

Issue or activate a duplicate SIM for the victim's number.

### 7. Victim action

The victim lost control of the original SIM; the duplicate SIM was then used to obtain banking passwords and transfer money.

### 8. Consequence

- Reported focal financial loss: INR 1000000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| April 2016, exact incident date not reported | Police publicly described the duplicate-SIM account takeover and three transfers. | SRC-SEIAI-0216-01 | Publication is procedural context, not an exact incident date. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2016`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0216-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0216-01 |

## Actor and attribution analysis

### SEIAI-0216-A01: Duplicate-SIM impersonation operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `technical`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `sim_or_subscriber_record` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Obtaining control of the victim's mobile number through a duplicate SIM and enabling e-banking credential generation.
- Limitation: No human identity or telecom replacement documentation is reproduced in the public report.
- Alternative explanation: A known person or insider could have assisted the replacement process, as police had not ruled that out.

### SEIAI-0216-A02: Downstream transfer / cash-out operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `financial_withdrawal_or_cashout`
- Attribution strength: **limited**
- Conduct assessed: Receiving or withdrawing the proceeds generated after the duplicate-SIM takeover.
- Limitation: The public report does not show whether the cash-out actors also obtained the duplicate SIM or knew the full scheme.
- Alternative explanation: A downstream account or withdrawal actor may have had a narrower role.

### Incident-level attribution assessment

- Attribution target: Unknown operators who obtained the duplicate SIM and the downstream people controlling or withdrawing the transferred funds.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The public report describes the duplicate-SIM mechanism and transaction trail but does not identify the person who deceived the telecom provider or establish whether the same person controlled the beneficiary accounts.
- Alternative explanation: Police had not ruled out assistance from someone known to the victim; the public report does not establish the precise insider or outsider role.

## Primary evidentiary gap

Telecom replacement records and subscriber-identification material linking the duplicate-SIM request to a specific human operator.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

The source supports identity substitution through a duplicate SIM but does not establish the precise replacement-channel interaction or human operator.

No exact incident day is reported. The article was published on 21 April 2016 and describes an ongoing investigation. The Atlas does not infer the precise SIM-replacement pretext beyond the documented fact that a duplicate SIM was fraudulently obtained.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
