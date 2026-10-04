# SEIAI-0161: Fake court warrant and QR-payment digital-arrest fraud

## Record status

- Case ID: `SEIAI-0161`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0161-01 | T1 | bail_order | Krishnakant v. State of Uttarakhand, 19 June 2026 |

Source URL: https://indiankanoon.org/doc/86779055/

## Procedural posture

- Court / authority: High Court of Uttarakhand
- Case / FIR: SABA No.15/2026; Case Crime No.370/2025, P.S. Kotwali Jwalapur, Haridwar
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Anticipatory-bail proceeding before the Uttarakhand High Court; underlying investigation remained pending.

## Neutral case summary

A Haridwar victim received a mobile PDF purporting to be a non-bailable court warrant and was told that it would be executed unless INR 30,000 was paid through a QR code. The victim paid and later discovered the demand was fraudulent. The case is a rare document-led digital-arrest variant in which judicial authority rather than a conventional police video call was used to create fear and compliance.

## Reconstruction

### 1. Target

The focal target is coded as `individual` in the sector `personal banking`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The victim received a PDF on a mobile device that purported to be a non-bailable warrant issued by a Sessions Court.

### 4. Pretext

The document and accompanying communication said the warrant would be executed unless the victim paid money immediately through a QR code.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`

### 6. Requested action

Pay INR 30,000 through the supplied QR code to avoid execution of the purported warrant.

### 7. Victim action

The victim paid INR 30,000 and later realised that the warrant and payment demand were fraudulent.

### 8. Consequence

- Reported focal financial loss: INR 30000
- Payment method: `upi`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Purported warrant PDF, QR-payment trail and investigation material.

## Actor and attribution analysis

### SEIAI-0161-A01: Unresolved digital-arrest impersonation operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0161-A02: Krishnakant
- Identity resolution: `identified`
- Role layer: `technical`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Direct victim contact: `unknown`
- Attribution basis: `documentary_record` / `device_possession_or_forensics`
- Attribution strength: **limited**
- Conduct assessed: Investigation-linked role concerning the fake-warrant/payment infrastructure.
- Limitation: The public source does not conclusively establish that he authored or sent the warrant to the victim.
- Alternative explanation: He may have supplied technical/document infrastructure rather than conducting the victim-facing contact.

### Incident-level attribution assessment

- Attribution target: Unresolved fake-warrant operator(s) and an applicant investigated in connection with the document/payment infrastructure.
- Primary basis: `documentary_record`
- Secondary basis: `device_possession_or_forensics`
- Attribution strength: **limited**
- Limitations: The public bail record supports the fraudulent warrant mechanism but does not conclusively establish who authored and sent the victim-facing document.
- Alternative explanation: An investigated person may have supplied document or technical infrastructure without personally contacting the victim.

## Primary evidentiary gap

Forensic metadata and platform/device records establishing authorship and transmission of the fake warrant and QR-payment instruction.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The contact platform is not clearly reported in the reviewed source, so the primary channel is coded `other` rather than inferred as WhatsApp.
