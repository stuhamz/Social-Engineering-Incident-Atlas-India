# SEIAI-0218: Bengaluru fake UK doctor matrimonial and customs fraud

## Record status

- Case ID: `SEIAI-0218`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0218-01 | T3 | journalistic_report | Conmen posing as Mr Right cheat women of lakhs online |

Source URL(s):
- https://timesofindia.indiatimes.com/city/bengaluru/conmen-posing-as-mr-right-cheat-women-of-lakhs-online/articleshow/58334135.cms

## Procedural posture

- Court / authority: Bengaluru cybercrime police
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The victim had filed a complaint with Bengaluru cybercrime police; the source described the case as under investigation.

## Neutral case summary

A Bengaluru woman who joined a matrimonial website in December 2016 was contacted by a man calling himself Benjamin, who claimed to be a British citizen and paediatrician in Liverpool. Over phone calls, WhatsApp and email he presented himself as a serious prospective husband planning to settle in Karnataka. In February 2017, a woman posing as a customs officer said Benjamin had been detained at an airport with jewellery and foreign currency and demanded clearance and anti-terrorism payments. The victim borrowed money and transferred INR 4.5 lakh in four instalments before the personas disappeared.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: matrimonial / personal.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

After the victim registered on a matrimonial website in December 2016, a man calling himself Benjamin contacted her and presented himself as a UK-based Indian-origin paediatrician seeking marriage and a move to Karnataka.

### 4. Pretext

After weeks of affectionate phone, WhatsApp and email contact, he said he was returning to India to marry her. A woman then called as a customs officer, claiming he had been detained with jewellery and foreign currency and demanding clearance and anti-terrorism charges.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Romantic grooming, future-marriage commitment and a fabricated airport emergency.

### 6. Requested action

Transfer money to release the purported fiance from customs detention and obtain claimed clearance or anti-terror documentation.

### 7. Victim action

The victim borrowed money and transferred INR 4.5 lakh in four instalments to bank accounts supplied by the callers.

### 8. Consequence

- Reported focal financial loss: INR 450000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| December 2016 | Victim registered on a matrimonial site and was contacted by the Benjamin persona. | SRC-SEIAI-0218-01 | Month and year stated; exact day not reported. |
| February 2017 | Benjamin said he was returning to India; a fake customs officer later demanded release-related payments. | SRC-SEIAI-0218-01 | Month stated; exact days not reported. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2016`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0218-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0218-01 |
| Message / platform material | Persona, contact or coercive communication described by the source | Human identity behind an online persona without provider/device attribution | SRC-SEIAI-0218-01 |

## Actor and attribution analysis

### SEIAI-0218-A01: Benjamin matrimonial persona operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Operating the prospective-groom identity and cultivating trust and marriage expectations.
- Limitation: The public source does not resolve the online persona to a verified human.
- Alternative explanation: A separate operator may have handled the persona from the later customs and bank-account stages.

### SEIAI-0218-A02: Fake customs and beneficiary-account layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `witness_or_statement` / `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Impersonating customs authority and directing the victim to transfer release and certificate charges.
- Limitation: The article does not identify the customs caller or prove control of each beneficiary account.
- Alternative explanation: The customs caller and account controllers may have been distinct network members.

### Incident-level attribution assessment

- Attribution target: Unknown operators behind the Benjamin matrimonial persona, fake customs caller and beneficiary accounts.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The report provides a detailed victim narrative and police context but does not identify the human controlling the Benjamin persona or prove whether the customs caller and beneficiary-account controllers were the same people.
- Alternative explanation: Different members of a fraud network may have handled the romantic persona, customs call and bank accounts.

## Primary evidentiary gap

Matrimonial-platform, telecom and bank-account records resolving the operators behind the Benjamin persona and customs call.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

The claimed UK identity is part of the pretext and does not by itself establish a cross-border offender location.

Incident_year is 2016 because the documented social-engineering relationship began in December 2016. Exact start and transfer dates are not reported, so they remain blank.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
