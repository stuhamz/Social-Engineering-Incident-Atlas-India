# SEIAI-0230: Gujarat OLX fake identity, job promise and video blackmail

## Record status

- Case ID: `SEIAI-0230`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0230-01 | T3 | journalistic_report | Gujarat man fakes identity to rape woman, records act for blackmail: Cops |

Source URL(s):
- https://www.ndtv.com/cities/man-arrested-in-gujarat-for-raping-on-pretext-of-job-blackmailing-cops-2145042

## Procedural posture

- Court / authority: Gandhigram Police Station, Rajkot
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `arrest`
- Conviction status: `not_yet_adjudicated`
- Disposition: Rajkot police reported arresting Aijaz Gadhwala from Chotila; no final judgment was reported in the source.

## Neutral case summary

A woman who responded to an OLX flat advertisement was allegedly contacted by a man using the false identity Ravirajsinh. Police said he developed a friendship by claiming to be the son of a policeman and promised to use family connections to secure her a police job. He then called her to a hotel in Chotila, where he allegedly committed sexual abuse, recorded it and used the recording for blackmail. Police said he also took INR 2 lakh. Aijaz Gadhwala was arrested in December 2019. The Atlas codes the deception and recorded-media coercion while keeping the unadjudicated nature of the police allegations explicit.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: employment / online classifieds.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. The reviewed source does not establish a distinct pre-contact reconnaissance stage.

### 3. Initial contact

The victim contacted an OLX advertisement for a flat. The advertiser allegedly used the false name Ravirajsinh, developed a friendship and claimed to be a policeman's son.

### 4. Pretext

The alleged operator promised to use his father's connections to obtain a police job for the victim, then arranged a hotel-room meeting where he recorded sexual abuse and used the recording for blackmail.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `yes`
- Repeated contact: `yes`
- Other: False identity, employment-access promise and image/video-based coercion.

### 6. Requested action

Meet at the hotel under the job-related pretext and later comply with financial demands under threat of the recorded material.

### 7. Victim action

The victim went to the hotel meeting; police later reported that the accused used a recording to blackmail her and took INR 2 lakh.

### 8. Consequence

- Reported focal financial loss: INR 200000
- Payment method: `unknown`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| 2019, exact date not reported | Victim contacted the OLX flat advertisement; friendship and police-job pretext developed before the hotel meeting. | SRC-SEIAI-0230-01 | No exact incident date in source. |
| 2019-12-07 | Police publicly reported the suspect's arrest. | SRC-SEIAI-0230-01 | Publication/procedural date. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2019`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0230-01 |
| Message / platform material | Persona, contact or coercive communication described by the source | Human identity behind an online persona without provider/device attribution | SRC-SEIAI-0230-01 |

## Actor and attribution analysis

### SEIAI-0230-A01: Ravirajsinh / alleged OLX blackmail operator

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `witness_or_statement` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Using a false OLX-linked identity, cultivating trust, promising a police job and using recorded material to obtain money.
- Limitation: The public source does not reproduce platform or device forensic evidence and no final judgment is cited.
- Alternative explanation: Police attribution remained subject to investigation and trial.

### Incident-level attribution assessment

- Attribution target: Aijaz Gadhwala, alleged operator of the Ravirajsinh OLX identity and blackmail scheme.
- Primary basis: `witness_or_statement`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The source reports police attribution and arrest but does not reproduce OLX account records, device extraction or the alleged recording.
- Alternative explanation: The allegations had not been finally adjudicated in the public source reviewed.

## Primary evidentiary gap

OLX account attribution and seized-device evidence tying the Ravirajsinh persona and recording to the arrested suspect.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

The record distinguishes police allegations from adjudicated findings and leaves exact incident dates blank.

The public source does not state how the INR 2 lakh was transferred, so payment_method is `unknown`. The sexual-offence allegation is included only to explain the blackmail mechanism and is not converted into a final finding.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
