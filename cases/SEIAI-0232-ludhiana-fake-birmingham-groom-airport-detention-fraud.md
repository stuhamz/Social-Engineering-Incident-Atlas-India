# SEIAI-0232: Ludhiana fake Birmingham groom airport-detention fraud

## Record status

- Case ID: `SEIAI-0232`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0232-01 | T3 | journalistic_report | 33-year-old Ludhiana woman duped of Rs 20 lakh in matrimonial fraud |

Source URL(s):
- https://www.hindustantimes.com/cities/others/33yearold-ludhiana-woman-duped-of-20-lakh-in-matrimonial-fraud-101613845453430.html

## Procedural posture

- Court / authority: Ludhiana Cyber Crime Police
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `reported`
- Conviction status: `not_yet_adjudicated`
- Disposition: Ludhiana cybercrime police identified nine people through phone numbers and bank accounts and booked them for cheating and conspiracy; the source did not report a final outcome.

## Neutral case summary

A 33-year-old Ludhiana woman was contacted through a matrimonial website by a profile called Pradeep Anand, who claimed to be a businessman in Birmingham and expressed interest in marriage. On 22 December 2020, an unknown caller said Anand had been detained at Delhi airport while carrying GBP 200,000. The caller connected her to the persona, who urged her to transfer money to secure his release and promised repayment. She sent INR 20.37 lakh to bank accounts before the profile stopped responding. Police said analysis of the phone numbers and accounts used in the scheme led them to identify nine people.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: matrimonial / personal.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

A 33-year-old Ludhiana woman was contacted through a matrimonial website by a profile using the name Pradeep Anand, who claimed to be a businessman living in Birmingham and interested in marrying her.

### 4. Pretext

On 22 December 2020 an unknown caller said Anand had been detained at Delhi airport with GBP 200,000; the victim was connected to the persona, who urged her to pay fines so he could be released.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Marriage commitment and fabricated airport detention emergency.

### 6. Requested action

Transfer INR 20.37 lakh to bank accounts as purported fines for the prospective groom's release.

### 7. Victim action

The victim transferred INR 20.37 lakh to the supplied accounts; the persona later stopped responding.

### 8. Consequence

- Reported focal financial loss: INR 2037000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2020, exact initial date not reported | Matrimonial contact with the Pradeep Anand persona began. | SRC-SEIAI-0232-01 | Exact initial-contact date absent. |
| 2020-12-22 | Caller claimed the prospective groom was detained at Delhi airport with GBP 200,000 and payment demands followed. | SRC-SEIAI-0232-01 | Exact date stated. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2020`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0232-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0232-01 |

## Actor and attribution analysis

### SEIAI-0232-A01: Pradeep Anand matrimonial persona operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `message_or_email_content`
- Attribution strength: **limited**
- Conduct assessed: Operating the prospective-groom identity and inducing the victim to finance a fabricated airport detention.
- Limitation: No platform record resolves the profile to a verified human in the source.
- Alternative explanation: The persona could have been operated by one of several network participants.

### SEIAI-0232-A02: Identified phone and beneficiary-account network

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `uncertain`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Conduct assessed: Providing or controlling phone and bank infrastructure used to receive or facilitate the fraudulent payments.
- Limitation: Association with the numbers/accounts does not by itself prove operation of the matrimonial profile or full knowledge of the scheme.
- Alternative explanation: Some identified participants may have had narrower infrastructure roles.

### Incident-level attribution assessment

- Attribution target: Unknown Pradeep Anand matrimonial persona plus nine people identified by police through phone and bank-account evidence.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Limitations: The source links nine identified people to the numbers/accounts used in the fraud but does not establish which person operated the Pradeep Anand profile or made the airport call.
- Alternative explanation: Some identified people may have controlled only bank or phone infrastructure rather than the original matrimonial deception.

## Primary evidentiary gap

Matrimonial-platform account records tying the Pradeep Anand profile to one or more of the identified phone/account participants.

## Legal/procedural notes

IPC 420; IPC 120B

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

Phone and bank evidence supports a network association, while authorship of the romantic persona remains unresolved.

The 22 December date is explicit for the airport-detention call, but the earlier matrimonial contact date is not. Therefore incident_start_date remains blank and incident_year is 2020.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
