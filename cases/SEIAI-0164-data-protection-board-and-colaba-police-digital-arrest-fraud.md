# SEIAI-0164: Data Protection Board and Colaba Police digital-arrest fraud

## Record status

- Case ID: `SEIAI-0164`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0164-01 | T1 | bail_order | Banoth Sudheer Singh v. State of Telangana, 13 July 2026 |

Source URL: https://indiankanoon.org/doc/99597540/

## Procedural posture

- Court / authority: High Court for the State of Telangana
- Case / FIR: Criminal Petition No.10352/2026; Crime No.1038/2026, Cyber Crimes P.S. Medchal-Malkajgiri
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Anticipatory-bail proceeding in July 2026; underlying investigation remained pending.

## Neutral case summary

A Telangana complainant received a call from a person claiming to represent the Data Protection Board of India, was told that his wife's Aadhaar was linked to a Colaba Police matter and illegal terrorism funding, and was moved to a WhatsApp video interaction. Following strict instructions under the purported investigation, he transferred INR 2,750,747. Part of the funds were traced to a company account associated with the applicant.

## Reconstruction

### 1. Target

The focal target is coded as `individual` in the sector `household / personal banking`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant received a phone call from a person claiming to be an official of the Data Protection Board of India.

### 4. Pretext

The caller alleged misuse of the complainant's wife's Aadhaar, a Colaba Police case and illegal terrorism funding, then moved the interaction to WhatsApp video and offered assistance if instructions were followed strictly.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `yes`
- Repeated contact: `yes`

### 6. Requested action

Follow the purported official's directions and transfer money for the supposed investigation.

### 7. Victim action

The complainant transferred INR 2,750,747.

### 8. Consequence

- Reported focal financial loss: INR 2750747
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Beneficiary-account trail including a payment to Digital Bevy Pvt. Ltd.

## Actor and attribution analysis

### SEIAI-0164-A01: Data Protection Board / Colaba Police impersonation operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0164-A02: Banoth Sudheer Singh
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged association with Digital Bevy Pvt. Ltd. and receipt of part of the victim's funds.
- Limitation: The source does not establish that he operated the Data Protection Board or police impersonation.
- Alternative explanation: A beneficiary-company role may be separate from the victim-facing digital-arrest operation.

### Incident-level attribution assessment

- Attribution target: Unresolved government/police impersonators and an applicant linked to a beneficiary company account.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The applicant is linked through the company/payment endpoint, not through direct evidence that he made the initial government-impersonation call.
- Alternative explanation: The beneficiary-company linkage may reflect a financial role narrower than operation of the victim-facing digital-arrest persona.

## Primary evidentiary gap

Authenticated WhatsApp/video-call account records and device evidence tying the impersonation to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Victim-facing and financial attribution are deliberately separated.
