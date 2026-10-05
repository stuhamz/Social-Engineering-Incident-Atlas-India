# SEIAI-0220: Uttarpara fake NRI matrimonial airport-clearance fraud

## Record status

- Case ID: `SEIAI-0220`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0220-01 | T3 | journalistic_report | West Bengal girl duped of lakhs on false marriage promise, 3 Nigerians arrested |

Source URL(s):
- https://www.ndtv.com/kolkata-news/west-bengal-girl-duped-of-lakhs-on-false-marriage-promise-3-nigerians-arrested-1866452

## Procedural posture

- Court / authority: Chandannagar Police Commissionerate / Uttarpara Police
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `arrest`
- Conviction status: `not_yet_adjudicated`
- Disposition: Three Nigerian nationals were arrested in Noida, brought to West Bengal on transit remand and produced in a local court; the source did not report a final criminal outcome.

## Neutral case summary

A 22-year-old woman from Uttarpara met a prospective groom on a matrimonial website. The man presented himself as an NRI, spoke with her by phone and said he would travel from the United States to meet her for marriage. He later claimed to be stuck at New Delhi airport and asked for money for clearance. She transferred almost INR 8 lakh, after which the persona stopped communicating. Police later arrested three Nigerian nationals in Noida and said ATM CCTV helped connect them to withdrawal of the transferred money. The public record does not identify which human operated the original matrimonial profile.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: matrimonial / personal.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

A 22-year-old Uttarpara woman met a prospective groom on a matrimonial site; he presented himself as an NRI and continued the interaction by phone.

### 4. Pretext

The persona said he was travelling from the United States to meet her for marriage but was stuck at New Delhi airport and needed money for clearance.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Marriage commitment followed by a fabricated travel emergency.

### 6. Requested action

Send money so the purported groom could obtain airport clearance and meet her.

### 7. Victim action

The victim sent almost INR 8 lakh to the supplied account before the persona ended all contact.

### 8. Consequence

- Reported focal financial loss: INR 800000
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| Before mid-April 2018, exact dates not reported | Matrimonial contact, NRI persona and airport-clearance payment sequence occurred. | SRC-SEIAI-0220-01 | Exact dates are not provided. |
| Mid-April 2018 | Victim lodged a complaint at Uttarpara Police Station. | SRC-SEIAI-0220-01 | Only approximate period is reported. |
| June 2018 | Police reported arrests of three suspects in Noida. | SRC-SEIAI-0220-01 | Arrest reporting is procedural context. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2018`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Bank / transaction material | Financial consequence and downstream flow where reported | Authorship of the original deception by itself | SRC-SEIAI-0220-01 |
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0220-01 |
| CCTV / location evidence | Physical withdrawal or location association | Authorship of the original online deception by itself | SRC-SEIAI-0220-01 |

## Actor and attribution analysis

### SEIAI-0220-A01: Prospective-NRI groom persona operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `message_or_email_content`
- Attribution strength: **limited**
- Conduct assessed: Operating the NRI prospective-groom identity and inducing the airport-clearance transfer.
- Limitation: No platform-provider attribution to a named human is reported.
- Alternative explanation: The profile operator may have been separate from the cash-out participants.

### SEIAI-0220-A02: Arrested cash-out / network participants

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `cctv_or_location` / `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Withdrawing or controlling proceeds sent after the matrimonial deception.
- Limitation: The source does not prove which arrested participant, if any, authored the matrimonial communications.
- Alternative explanation: Cash-out involvement can be narrower than direct participation in the initial deception.

### Incident-level attribution assessment

- Attribution target: Unknown prospective-groom persona operator and three arrested alleged cash-out/network participants.
- Primary basis: `cctv_or_location`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: ATM footage and the transfer trail support a connection to the arrested suspects, but the public report does not establish which person operated the original matrimonial persona.
- Alternative explanation: The person controlling the matrimonial profile could have been distinct from the people who withdrew the proceeds.

## Primary evidentiary gap

Matrimonial-platform and telecom records tying the prospective-groom profile and phone contact to one or more of the arrested suspects.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

ATM CCTV supports the downstream withdrawal layer, not authorship of the original matrimonial persona by itself.

The focal amount is encoded as INR 800,000 because the source says 'almost Rs 8 lakh'; it should be read as an approximate reported amount. Exact incident dates before the mid-April complaint are not stated.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
