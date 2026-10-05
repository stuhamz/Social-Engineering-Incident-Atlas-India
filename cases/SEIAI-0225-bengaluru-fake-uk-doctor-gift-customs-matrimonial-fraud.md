# SEIAI-0225: Bengaluru fake UK doctor gift-and-customs matrimonial fraud

## Record status

- Case ID: `SEIAI-0225`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0225-01 | T3 | journalistic_report | 4 months, 3,000 cases and Rs 32 crore: Cyber crooks continue to make merry in IT hub |

Source URL(s):
- https://timesofindia.indiatimes.com/city/bengaluru/4-months-3000-cases-rs-32cr-cyber-crooks-continue-to-make-merry-in-it-hub/articleshow/69568366.cms

## Procedural posture

- Court / authority: Bengaluru Cyber Crime Police Station
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Bengaluru cybercrime police had recorded the case; the source did not report a final investigative or judicial outcome.

## Neutral case summary

A 39-year-old Jayanagar woman who registered on a marriage portal in 2018 was contacted by a man presenting himself as a UK-based Indian doctor who wanted to settle in Bengaluru. The source describes the contact as a fraudulent suitor scheme in which the prospective-marriage relationship was used to introduce an overseas gift and customs-clearance payment story. The woman ultimately lost INR 33 lakh. The article was published as part of a broader report on Bengaluru cybercrime and does not identify the human operator or provide a final case outcome.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: matrimonial / personal.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

A 39-year-old Jayanagar woman registered with a marriage portal in 2018 and was approached by a man presenting himself as a UK-based Indian doctor who wanted to settle in Bengaluru.

### 4. Pretext

After cultivating the prospective-marriage relationship, the persona said he had sent gifts. The scheme escalated into demands associated with clearing the purported overseas gift through customs.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Future-marriage promise and high-value-gift reciprocity.

### 6. Requested action

Make payments connected to the purported overseas gift and customs-clearance process.

### 7. Victim action

The victim made payments totalling INR 33 lakh before discovering that the prospective suitor was an online impostor.

### 8. Consequence

- Reported focal financial loss: INR 3300000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2018, exact date not reported | Victim joined a marriage portal and was approached by a fake UK-based Indian doctor. | SRC-SEIAI-0225-01 | Source gives year by relative reference only. |
| By May 2019 | Cybercrime police had recorded the INR 33 lakh loss. | SRC-SEIAI-0225-01 | Procedural/publication context, not an exact incident end date. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2018`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0225-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0225-01 |

## Actor and attribution analysis

### SEIAI-0225-A01: Fake UK-doctor matrimonial persona operator(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `message_or_email_content`
- Attribution strength: **limited**
- Conduct assessed: Operating the fake suitor identity and establishing trust for the gift/customs payment pretext.
- Limitation: The public report does not identify a human controller of the profile.
- Alternative explanation: The persona may have been operated by a team rather than one person.

### SEIAI-0225-A02: Gift/customs payment and beneficiary-account layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Receiving or directing the payments generated by the purported overseas gift and customs-clearance pretext.
- Limitation: The source does not identify account holders or connect them directly to the suitor persona.
- Alternative explanation: Downstream receiving accounts may have been controlled by separate participants.

### Incident-level attribution assessment

- Attribution target: Unknown operator(s) behind the UK-doctor matrimonial persona and gift/customs payment pathway.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The source is a broader cybercrime report using the case as an example; it does not provide account KYC, platform records or accused identities.
- Alternative explanation: Different fraud-network members may have controlled the romantic persona and downstream payment accounts.

## Primary evidentiary gap

Marriage-portal, telecom and beneficiary-account records resolving the persona and payment recipients.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

Kept separate from the 2016-2017 Evelyn Vijay case because the victims, timing and reported loss are distinct.

The source states that the victim registered on the marriage portal 'last year' relative to May 2019, supporting incident_year=2018 but not an exact day or month. This record is distinct from SEIAI-0218, a separate Bengaluru victim reported in 2017.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
