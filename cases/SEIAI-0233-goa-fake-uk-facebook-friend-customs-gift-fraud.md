# SEIAI-0233: Goa fake UK Facebook friend and customs-gift fraud

## Record status

- Case ID: `SEIAI-0233`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0233-01 | T3 | journalistic_report | Nigerian dupes Goan of Rs 5 lakh in online fraud |

Source URL(s):
- https://timesofindia.indiatimes.com/city/goa/nigerian-dupes-goan-of-rs-5l-in-online-fraud/articleshow/79180593.cms

## Procedural posture

- Court / authority: Goa Cyber Crime Cell
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `arrest`
- Conviction status: `not_yet_adjudicated`
- Disposition: Goa cybercrime police arrested a Nigerian national in Delhi after the 6 November 2020 FIR; no final judicial outcome was reported.

## Neutral case summary

A Goan woman received a Facebook friend request in August 2020 from a profile using the fictitious name Steve Jose and claiming to be a UK national. After building an online friendship, the persona said he would send her a birthday gift from abroad. The victim then received calls claiming to come from customs officials in Delhi and was pressured to pay charges, with the persona saying the money spent on the gift would otherwise be lost. She deposited about INR 5 lakh into supplied accounts. Goa cybercrime police later arrested Onuorah Donatus Jideoffor in Delhi, but the public report does not establish that he personally operated every persona or account.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal / social media.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

A Goan woman accepted a Facebook friend request in August 2020 from a profile calling itself Steve Jose, which claimed to be a UK national and began sending her messages.

### 4. Pretext

The persona promised a birthday surprise gift from abroad. The victim then received calls claiming to be from the customs office in Delhi, while the persona pressured her to pay customs-related charges.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Online friendship and gift reciprocity followed by fake customs authority.

### 6. Requested action

Deposit money into accounts to clear the purported overseas gift and avoid the claimed sender's loss.

### 7. Victim action

The victim deposited about INR 5 lakh into accounts supplied by the fraudsters.

### 8. Consequence

- Reported focal financial loss: INR 500000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| August 2020 | Steve Jose profile sent the Facebook friend request. | SRC-SEIAI-0233-01 | Month stated; exact day absent. |
| September 2020 | Persona promised a birthday surprise gift; customs-payment stage followed. | SRC-SEIAI-0233-01 | Month stated. |
| 2020-11-06 | FIR registered. | SRC-SEIAI-0233-01 | Exact FIR date stated. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2020`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0233-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0233-01 |
| Message / platform material | Persona, contact or coercive communication described by the source | Human identity behind an online persona without provider/device attribution | SRC-SEIAI-0233-01 |

## Actor and attribution analysis

### SEIAI-0233-A01: Steve Jose / associated customs-fraud operator

- Identity resolution: `partially_identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `documentary_record` / `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Operating or facilitating the fake Facebook friendship, customs-payment pretext and receipt of proceeds.
- Limitation: The source does not show which specific profile, caller or bank account the arrested suspect personally controlled.
- Alternative explanation: Other participants may have handled the customs calls or financial accounts.

### Incident-level attribution assessment

- Attribution target: Onuorah Donatus Jideoffor, arrested by Goa cybercrime police, while preserving uncertainty about whether he alone operated the Steve Jose and fake-customs personas.
- Primary basis: `documentary_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: Police reported identifying and arresting the suspect in coordination with Delhi police, but the article does not reproduce Facebook, phone or bank evidence tying every persona to him.
- Alternative explanation: The Steve Jose profile, customs callers and receiving accounts may have involved additional network members.

## Primary evidentiary gap

Facebook, telecom, device and beneficiary-account evidence showing which persona/account was controlled by the arrested suspect.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

The UK nationality claim is treated as pretext only. Cross-border_dimension remains not_reported because the public report does not establish that the offender operated from abroad.

The source establishes friendship/social impersonation but not an explicit marriage or romantic promise, so the primary category is social_media_impersonation rather than romance_fraud. The reported INR 5 lakh is approximate.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
