# SEIAI-0226: Lucknow fake London groom and customs terror-funding fraud

## Record status

- Case ID: `SEIAI-0226`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0226-01 | T3 | journalistic_report | Fraudsters pose as prospective groom, customs official to dupe doctor's family of over Rs 4 lakh |

Source URL(s):
- https://www.hindustantimes.com/cities/fraudsters-pose-as-prospective-groom-customs-official-to-dupe-doctor-s-family-of-over-4-lakh/story-9sEhTB9NTgpdV9O1VDqi6J_amp.html

## Procedural posture

- Court / authority: Gomti Nagar Police, Lucknow
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Gomti Nagar police registered an FIR against the matrimonial website and four persons; cybercrime experts were assisting the investigation.

## Neutral case summary

A Lucknow doctor's family looking for a groom contacted a matrimonial profile using the name Rajiv Gumber, who claimed to be from Lucknow and working in London. After several weeks of contact, the profile said on 31 August 2019 that he had sent the family a surprise gift. A caller posing as Delhi-airport customs officer Namita Sharma then claimed the parcel contained cash, threatened a terror-funding case and demanded payments for an anti-terror certificate and other clearance charges. The family transferred INR 4.1 lakh in four instalments from 2 to 6 September. A further demand on 7 September prompted verification with real customs officials, who confirmed the process was fraudulent.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: matrimonial / family.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

A Lucknow doctor's family looking for a groom for a female relative contacted a profile called Rajiv Gumber on a matrimonial website and remained in touch for several weeks.

### 4. Pretext

The profile claimed to be a Lucknow resident employed in London and said he sent a surprise gift. A caller posing as Delhi airport customs officer Namita Sharma then demanded payments and threatened a terror-funding case over cash supposedly found in the parcel.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Marriage prospect, gift reciprocity, customs authority and threat of terrorism-related prosecution.

### 6. Requested action

Pay purported customs/anti-terror certificate and clearance charges into accounts supplied by the fake customs officer.

### 7. Victim action

The family transferred INR 4.1 lakh in four instalments between 2 and 6 September 2019 and stopped after a further demand triggered verification with real customs officials.

### 8. Consequence

- Reported focal financial loss: INR 410000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2019-08-31 | The fake groom said he had sent a surprise gift. | SRC-SEIAI-0226-01 | Exact date stated by police. |
| 2019-09-02 to 2019-09-06 | Family transferred INR 4.1 lakh in four instalments. | SRC-SEIAI-0226-01 | Exact transfer range stated. |
| 2019-09-07 | Further INR 85,000 demand prompted verification with real customs officials. | SRC-SEIAI-0226-01 | Exact detection trigger stated. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `2019-09-07`
- incident_year: `2019`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0226-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0226-01 |
| Message / platform material | Persona, contact or coercive communication described by the source | Human identity behind an online persona without provider/device attribution | SRC-SEIAI-0226-01 |

## Actor and attribution analysis

### SEIAI-0226-A01: Rajiv Gumber matrimonial persona operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Operating the London-groom identity and introducing the surprise-gift pretext.
- Limitation: The persona was not resolved to a verified human in the source.
- Alternative explanation: A separate actor could have operated the later customs call.

### SEIAI-0226-A02: Fake customs caller / beneficiary-account layer

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `witness_or_statement` / `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Impersonating customs authority, escalating fear and directing payments.
- Limitation: The source does not establish the real identity of the caller or control of the named accounts.
- Alternative explanation: Account holders may have been downstream participants rather than the caller.

### Incident-level attribution assessment

- Attribution target: Unknown Rajiv Gumber matrimonial persona, fake customs caller and beneficiary-account participants named in the police complaint.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The article reports the FIR and named account/persona details but does not provide platform, telecom or account-control evidence identifying the human operators.
- Alternative explanation: The matrimonial profile, customs caller and receiving accounts could have been handled by separate participants with different levels of knowledge.

## Primary evidentiary gap

Shaadi.com account records, phone subscriber data and bank KYC/transaction evidence resolving each operational role.

## Legal/procedural notes

IPC 406; IPC 419; IPC 420; Information Technology Act Section 66

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

No exact initial-contact date is created even though the relationship existed for several weeks before 31 August.

The exact initial contact date is not reported. The structured incident_end_date is 2019-09-07 because the source explicitly states that the additional demand on that date triggered verification and detection.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
