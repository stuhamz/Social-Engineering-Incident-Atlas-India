# SEIAI-0221: Mohali Facebook marriage and diamond-ring customs fraud

## Record status

- Case ID: `SEIAI-0221`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0221-01 | T3 | journalistic_report | Facebook friend dupes woman of Rs 30 lakh after marriage promise |

Source URL(s):
- https://timesofindia.indiatimes.com/city/chandigarh/facebook-friend-dupes-woman-of-rs-30-lakh-after-marriage-promise/articleshow/67238626.cms

## Procedural posture

- Court / authority: Mohali Police
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `reported`
- Conviction status: `not_yet_adjudicated`
- Disposition: After the victim approached the Mohali SSP on 19 December 2018, police registered a case under IPC Sections 420 and 120B; no final outcome was reported in the source.

## Neutral case summary

A Mohali woman met a man using the name Jamez Manaual on Facebook. He claimed to be a UK citizen, exchanged phone numbers with her and promised marriage. In November 2018 he said he had bought her a diamond ring worth GBP 120,000. A woman then called claiming to be from the airport, supplied a bank account and demanded customs duty and other charges. The victim transferred INR 30 lakh in six to seven transactions over a month before the man stopped responding. Police registered a cheating and conspiracy case.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal / social media.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

The complainant met a man calling himself Jamez Manaual on Facebook, exchanged mobile numbers with him and was promised marriage.

### 4. Pretext

In November 2018 he claimed to have bought a high-value diamond ring for her. A woman then called pretending to be from the airport and demanded customs duty and other charges.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Marriage promise, high-value gift and airport-authority legitimacy.

### 6. Requested action

Transfer customs duty and related charges so the purported diamond ring gift could be cleared.

### 7. Victim action

The victim transferred INR 30 lakh in six to seven transactions over about a month.

### 8. Consequence

- Reported focal financial loss: INR 3000000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| November 2018 | The persona claimed to have bought a diamond ring and the fake airport/customs payment stage began. | SRC-SEIAI-0221-01 | Month reported; exact day not stated. |
| 2018-12-19 | Victim approached the Mohali SSP. | SRC-SEIAI-0221-01 | Exact complaint-approach date stated in source. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2018`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0221-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0221-01 |
| Message / platform material | Persona, contact or coercive communication described by the source | Human identity behind an online persona without provider/device attribution | SRC-SEIAI-0221-01 |

## Actor and attribution analysis

### SEIAI-0221-A01: Jamez Manaual romantic persona operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Operating the prospective-husband identity and setting up the gift/customs payment stage.
- Limitation: The source does not resolve the Facebook profile to a verified human.
- Alternative explanation: The persona and fake airport caller may have been operated by different people.

### SEIAI-0221-A02: Fake airport/customs and receiving-account layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `witness_or_statement` / `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Impersonating airport/customs authority and directing the victim's transfers.
- Limitation: No human identity or account-control evidence beyond the victim/police report is reproduced.
- Alternative explanation: The receiving-account controller may be distinct from the caller.

### Incident-level attribution assessment

- Attribution target: Unknown Jamez Manaual Facebook persona operator and fake airport/customs caller.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The source documents the victim's Facebook and phone interactions and the beneficiary account but does not resolve the personas to verified human identities.
- Alternative explanation: Different people may have operated the romantic persona, airport call and receiving account.

## Primary evidentiary gap

Facebook, telecom and beneficiary-account KYC records tying the Jamez Manaual and airport personas to identified operators.

## Legal/procedural notes

IPC 420; IPC 120B

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

No exact initial-contact date is encoded. The focal loss is the INR 30 lakh the police said was transferred in six to seven transactions.

The source does not provide exact initial-contact or transfer dates. The claimed UK citizenship and high-value ring are treated as elements of the pretext, not verified facts.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
