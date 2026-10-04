# SEIAI-0160: ICICI Bank employee WhatsApp impersonation fraud

## Record status

- Case ID: `SEIAI-0160`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0160-01 | T1 | bail_order | Pappu Yadav v. State of Madhya Pradesh, 4 November 2025 |

Source URL: https://indiankanoon.org/doc/138858722/

## Procedural posture

- Court / authority: High Court of Madhya Pradesh, Gwalior Bench
- Case / FIR: MCRC-47276-2025; Crime No.47/2024, Crime Branch Gwalior
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular-bail application dismissed on 4 November 2025.

## Neutral case summary

A Gwalior complainant was drawn into a WhatsApp scheme in which participants posed as ICICI Bank employees and induced transfers totalling INR 2,801,800. The investigation traced part of the proceeds into an account associated with the applicant. That financial link does not by itself establish that the applicant operated the victim-facing ICICI identities.

## Reconstruction

### 1. Target

The focal target is coded as `individual` in the sector `personal banking / investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant was engaged through a WhatsApp group in which participants presented themselves as ICICI Bank employees.

### 4. Pretext

The operators borrowed ICICI Bank's identity and authority to induce transfers into accounts presented as legitimate for the offered financial activity.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Transfer funds into beneficiary accounts specified by the purported ICICI Bank representatives.

### 7. Victim action

The complainant transferred INR 2,801,800; part of the money was subsequently traced through downstream accounts.

### 8. Consequence

- Reported focal financial loss: INR 2801800
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `not_reported`
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

Other evidence: Bank-account trail and cybercrime-report information concerning downstream accounts.

## Actor and attribution analysis

### SEIAI-0160-A01: Unresolved bank-impersonation operator(s)
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

### SEIAI-0160-A02: Pappu Yadav
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Control/association with an account that received part of the focal fraud proceeds.
- Limitation: Receipt of funds does not establish operation of the ICICI Bank victim-facing persona.
- Alternative explanation: The account may have been used for a downstream financial function.

### Incident-level attribution assessment

- Attribution target: Unresolved ICICI-impersonating WhatsApp operators and applicant Pappu Yadav's downstream bank-account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The source supports receipt of part of the proceeds into the applicant's account but does not establish that he authored the ICICI Bank impersonation.
- Alternative explanation: A downstream account holder can be financially linked without being the person who delivered the victim-facing deception.

## Primary evidentiary gap

Authenticated WhatsApp-account and device evidence tying the ICICI employee personas to specific human operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Large transaction volumes and references to other cybercrime complaints associated with downstream accounts are contextual only and are not coded as focal loss.
