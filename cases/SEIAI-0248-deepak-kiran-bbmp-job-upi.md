# SEIAI-0248: Fake BBMP officer computer-operator job and UPI fraud

## Record status

- Case ID: `SEIAI-0248`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0248-01 | T1 | final_judgment | North CEN Crime PS v. Deepak @ Kiran & Anr., 30 July 2025 |

Source URL:
- https://indiankanoon.org/doc/176480543/

## Procedural posture

- Court / authority: XLV Addl. Chief Judicial Magistrate, Bengaluru
- Case: C.C.No.42196/2024
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `acquitted`
- Disposition: Deepak @ Kiran and Harsha were acquitted on 30 July 2025.

## Neutral case summary

The prosecution alleged that two men called a complainant using a SIM registered to a deceased person, posed as BBMP officers, promised a computer-operator job for her son and obtained INR 8,000 through UPI. Police seized phones and sent them to FSL, but the complainant did not support the case and the screenshots and bank records lacked compliant Section 65B certification. Both accused were acquitted.

## Reconstruction

### 1. Target

Target type: `job_seeker`. Sector/context: municipal employment / family.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

Calls were allegedly made from a SIM registered in the name of a deceased person, with the callers presenting themselves as BBMP officers.

### 4. Pretext

The callers promised a computer-operator job for the complainant son and requested payment under the authority of BBMP officials.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `yes`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Transfer INR 8,000 by UPI in connection with the promised BBMP computer-operator job.

### 7. Victim action

The prosecution alleged that the complainant caused INR 8,000 to be transferred through UPI.

### 8. Consequence

- Reported focal financial loss: INR 8000
- Payment method: `upi`
- Credential compromise: `no`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2023-10-27`
- incident_end_date: `2023-10-31`
- incident_year: `2023`

## Evidence map

- Phone / SIM evidence: `yes`
- CDR evidence: `not_reported`
- Bank evidence: `yes`
- IP / login evidence: `not_reported`
- Device evidence: `yes`
- Message / chat evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `yes`
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `yes`
- Other evidence: Seized mobile phones, UPI identifier and UTR, screenshots, bank statements, FSL submission and a defective Section 65B certificate.

## Actor and attribution analysis

### SEIAI-0248-A01: Deepak @ Kiran

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Attribution basis: `device_possession_or_forensics` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Alleged operation of the BBMP Officer Kiran identity and participation in the INR 8,000 UPI scheme.
- Limitation: Electronic evidence was inadmissible for deficient Section 65B certification and the principal witness denied the prosecution version.
- Alternative explanation: The named accused may not have controlled the call, SIM or UPI chain.

### SEIAI-0248-A02: Harsha

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Attribution basis: `device_possession_or_forensics` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Alleged participation in the BBMP job pretext and associated UPI transaction.
- Limitation: The complainant did not support the prosecution version and the electronic records were not admissible with a compliant Section 65B certificate.
- Alternative explanation: The named accused may not have controlled the call, SIM or UPI chain.


### Incident-level attribution assessment

- Attribution target: Deepak @ Kiran and Harsha as the alleged BBMP impersonation operators
- Primary basis: `device_possession_or_forensics`
- Secondary basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitations: The complainant did not support the prosecution version at trial, screenshots and bank records lacked compliant Section 65B certification, and the investigating officer evidence was insufficient to prove the charged conduct.
- Alternative explanation: The accused may not have operated the calling, SIM and UPI chain described in the charge-sheet allegation.

## Primary evidentiary gap

Admissible authenticated electronic records linking the seized devices and UPI endpoint to the BBMP impersonation calls.

## Legal/procedural notes

IT Act 66D; IPC 419; IPC 420; IPC 34

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The formal judgment header states 31 October 2023 as the offence date, while the prosecution narrative gives a 27 to 31 October period. The Atlas preserves the wider source-supported interval.
