# SEIAI-0222: Lucknow fake female profile and morphed-photo blackmail

## Record status

- Case ID: `SEIAI-0222`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, police claims, prima facie bail findings, journalistic reporting and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0222-01 | T3 | journalistic_report | Youth poses as girl to blackmail uncle's pal |

Source URL(s):
- https://timesofindia.indiatimes.com/city/lucknow/youth-poses-as-girl-to-blackmail-uncles-pal/articleshow/62374188.cms

## Procedural posture

- Court / authority: Lucknow Cyber Cell / Gomtinagar Police
- Case / FIR: not reported
- Primary source stage: `journalistic_report`
- Public case status: `arrest`
- Conviction status: `not_yet_adjudicated`
- Disposition: Lucknow police arrested the accused after call-detail analysis; the source did not report a final adjudication.

## Neutral case summary

A 19-year-old Lucknow student allegedly created a female social-media persona to befriend an affluent friend of his uncle. After the target accepted the request and exchanged photographs, the student allegedly morphed a photograph to make it appear that the target was with a woman. Using a new SIM, he demanded INR 1 lakh and threatened to make the images viral. The target negotiated the demand down to INR 50,000 but contacted police rather than paying. Police said call-detail records led them to the student, who was arrested and reportedly admitted the scheme.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal / social media.

### 2. Reconnaissance

Reconnaissance present: `yes`. Police reported that the accused deliberately selected his uncle's affluent middle-aged friend as someone he believed could be pressured for money.

### 3. Initial contact

A 19-year-old student allegedly sent the target a friend request while posing as a woman; the friendship developed through social media and photographs were later exchanged by phone.

### 4. Pretext

The accused allegedly used the female persona to obtain photographs, morphed one to depict the target with a woman and then used a newly purchased SIM to demand money under threat of viral publication.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: False social identity followed by synthetic/morphed reputational blackmail.

### 6. Requested action

Pay INR 1 lakh, later negotiated to INR 50,000, to prevent the morphed photographs from being made viral.

### 7. Victim action

The target negotiated the demand but contacted police instead of paying; after further morphed images were sent, he lodged a case.

### 8. Consequence

- Reported focal financial loss: not quantified in INR
- Payment method: `not_applicable`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Timeline

| Time / Date | Event | Source | Confidence / limitation |
|---|---|---|---|
| Early January 2018, exact date not reported | Target received the morphed-image extortion demand and contacted police instead of paying. | SRC-SEIAI-0222-01 | Article gives relative weekdays, not a source-supported ISO incident date. |
| 2018-01-04 | Police reported picking up the accused on Thursday. | SRC-SEIAI-0222-01 | This date is derived from publication context and therefore is not encoded in structured exact dates. |

Structured exact-date fields:
- incident_start_date: `not_reported`
- incident_end_date: `not_reported`
- incident_year: `2018`

## Evidence map

| Evidence | What it supports | What it does NOT establish | Source |
|---|---|---|---|
| Telecom / phone / SIM material | Contact, SIM or caller layer where reported | Real-world human identity across every role without corroboration | SRC-SEIAI-0222-01 |
| Message / platform material | Persona, contact or coercive communication described by the source | Human identity behind an online persona without provider/device attribution | SRC-SEIAI-0222-01 |

## Actor and attribution analysis

### SEIAI-0222-A01: Fake female-profile and blackmail operator

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `cdr_or_telecom_record` / `confession_or_admission`
- Attribution strength: **moderate**
- Conduct assessed: Creating the fake female identity, obtaining photographs, morphing an image and making the extortion demand.
- Limitation: Public reporting summarizes but does not reproduce the telecommunications or device evidence.
- Alternative explanation: The attribution had not been finally adjudicated in the source reviewed.

### Incident-level attribution assessment

- Attribution target: Ibrahim Warsi, alleged operator of the fake female profile and threat phone.
- Primary basis: `cdr_or_telecom_record`
- Secondary basis: `confession_or_admission`
- Attribution strength: **moderate**
- Limitations: The report is based on police statements and does not reproduce the underlying CDRs, device extraction or platform records in full.
- Alternative explanation: The accused's reported confession and police attribution had not yet been tested in a final criminal judgment in the source reviewed.

## Primary evidentiary gap

Authenticated platform and device evidence showing account control alongside the police-reported CDR linkage.

## Legal/procedural notes

No specific statutory citation is coded beyond what the source supports.

The primary source is coded at the procedural stage shown above. Allegations and investigative attributions are not converted into final findings of guilt unless the cited source expressly adjudicates them.

## Coding decisions

Structured exact dates are left blank because the article uses relative weekday references. The case is included as a failed-payment sextortion attempt with documented social engineering.

No financial loss is coded because the source indicates that the target contacted police rather than delivering the demanded cash. The platform is not named, so contact_channel_primary is `other` rather than inferred as Facebook.

This incident was selected as part of the 2008-2020 targeted expansion wave. The wave excluded Delhi, Maharashtra, Haryana, Madhya Pradesh, Telangana, Chhattisgarh, Kerala and Odisha and prioritized identity theft, sextortion, romance fraud and relationship/honeytrap mechanisms.
