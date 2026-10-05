# SEIAI-0234: Goa fake female Facebook marriage-profile fraud

## Record status

- Case ID: `SEIAI-0234`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0234-01 | T3 | journalistic_report | Man duped of Rs 23 lakh on pretext of marriage, one arrested |

Source URL(s):
- https://www.thegoan.net/goa-news/man-duped-of-rs-23-lakh-on-pretext-of-marriage-one-arrested/60663.html

## Procedural posture

- Court / authority: Goa Cyber Crime Cell
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `arrest`
- Conviction status: `not_yet_adjudicated`
- Disposition: Goa Cyber Crime Cell arrested Swapnil Naik in Davangere, Karnataka, after analysing bank accounts, phone and online profiles; no final criminal judgment was reported.

## Neutral case summary

Ponda resident Vishnu Gaude complained that an unknown Facebook user, presenting as a woman interested in marrying him, induced him to make repeated transfers between 27 June and 16 September 2020. The total reported loss was INR 2,321,068. Goa Cyber Crime Cell said its investigation linked the scheme to Swapnil Naik, whom police alleged had created the fake female profile. Investigators reported analysing bank accounts, phone records and online profiles before locating and arresting him in Davangere, Karnataka. The source supports a clear marriage-pretext social-engineering sequence and moderate investigative attribution, but not a final finding of guilt.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal / social media.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

A Facebook user contacted Ponda resident Vishnu Gaude under the pretext of being a woman interested in marrying him.

### 4. Pretext

The fake profile sustained the marriage pretext over several months and induced repeated transfers to accounts associated with the scheme.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Marriage promise and sustained trust-building through a gender-impersonating social-media profile.

### 6. Requested action

Transfer money during the purported marriage relationship.

### 7. Victim action

Between 27 June and 16 September 2020, the victim transferred a total of INR 2,321,068.

### 8. Consequence

- Reported focal financial loss: INR 2321068
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2020-06-27 | Start of victim-reported period during which the fake marriage profile induced transfers. | SRC-SEIAI-0234-01 | Exact start date reported. |
| 2020-09-16 | End of victim-reported transfer period. | SRC-SEIAI-0234-01 | Exact end date reported. |
| October 2020 | Goa cybercrime police reported locating and arresting the accused in Davangere. | SRC-SEIAI-0234-01 | Month-level procedural context. |

Structured exact-date fields:
- incident_start_date: `2020-06-27`
- incident_end_date: `2020-09-16`
- incident_year: `2020`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0234-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0234-01 |
| Message / platform material | Persona, contact or coercive communication described by the source | Human identity behind an online persona without provider/device attribution | SRC-SEIAI-0234-01 |

## Actor and attribution analysis

### SEIAI-0234-A01: Fake female marriage-profile operator

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `multiple_independent_sources` / `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Operating the fake marriage persona and inducing/receiving repeated transfers during the relationship pretext.
- Limitation: The public article summarizes, rather than reproduces, the technical evidence and no final conviction is reported.
- Alternative explanation: Police attribution remained subject to criminal adjudication.

### Incident-level attribution assessment

- Attribution target: Swapnil Naik, arrested and alleged by Goa cybercrime police to have created the fake female Facebook profile.
- Primary basis: `multiple_independent_sources`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The source summarizes police analysis rather than reproducing the bank, phone and profile records, and the allegations had not yet been finally adjudicated.
- Alternative explanation: Police attribution was investigative at publication and remained subject to trial.

## Primary evidentiary gap

Authenticated Facebook and device records demonstrating direct account control together with the full beneficiary-account trail.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

This is a clean romance-fraud/social-media-impersonation case with an explicit incident date range and reported bank/phone/profile investigation.

The exact incident date range is expressly reported by the victim and is therefore encoded. The gender identity used online is treated as a fraudulent persona, not as evidence about the arrested suspect's personal identity beyond the police allegation.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
