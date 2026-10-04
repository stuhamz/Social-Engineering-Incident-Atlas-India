# SEIAI-0175: Fake CBI ASI Vijay Khanna digital-arrest fraud

## Record status

- Case ID: `SEIAI-0175`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0175-01 | T1 | bail_order | Varkha @ Verkha v. State of Punjab, 19 February 2026 |

Source URL: https://indiankanoon.org/doc/3524909/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: CRM-M-68942-2025; FIR No.19 dated 03.09.2025, Cyber Crime P.S. Bathinda
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular-bail application dismissed on 19 February 2026 after conclusion of investigation.

## Neutral case summary

A Bathinda victim was contacted by a person claiming to be ASI Vijay Khanna of the CBI, threatened with arrest in a money-laundering case and kept under a purported digital arrest for several days. The victim transferred INR 9,000,000. CCTV and cash-withdrawal material linked the petitioner to a downstream financial role, while the original CBI impersonator remained unresolved.

## Reconstruction

### 1. Target

The focal target is coded as `individual` in the sector `personal banking`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

On 19 August 2025 the victim received a WhatsApp message and call from a person claiming to be ASI Vijay Khanna of the CBI.

### 4. Pretext

The caller alleged a money-laundering case, threatened arrest and kept the victim under a purported digital arrest for several days.

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

Remain under the purported CBI supervision and transfer funds into accounts specified by the caller.

### 7. Victim action

Between 19 August and 1 September 2025 the victim transferred a total of INR 9,000,000.

### 8. Consequence

- Reported focal financial loss: INR 9000000
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
- CCTV / video: `yes`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: ATM/CCTV and bank material concerning an alleged downstream cash-out role.

## Actor and attribution analysis

### SEIAI-0175-A01: ‘ASI Vijay Khanna’ CBI impersonation operator(s)
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

### SEIAI-0175-A02: Varkha @ Verkha
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `cctv_or_location` / `financial_withdrawal_or_cashout`
- Attribution strength: **moderate**
- Conduct assessed: Alleged cash withdrawal/cash-out role supported by ATM/CCTV and financial evidence.
- Limitation: The source does not establish that she used the CBI persona or communicated with the victim.
- Alternative explanation: Cash-out participation is distinct from victim-facing impersonation.

### Incident-level attribution assessment

- Attribution target: Unresolved Vijay Khanna/CBI impersonator and petitioner Varkha's alleged cash-out role.
- Primary basis: `cctv_or_location`
- Secondary basis: `financial_withdrawal_or_cashout`
- Attribution strength: **moderate**
- Limitations: The evidence links the petitioner to downstream cash withdrawal but not to the original CBI impersonation.
- Alternative explanation: A cash-out actor may participate at a later financial layer without operating the victim-facing digital-arrest persona.

## Primary evidentiary gap

Telecom/platform evidence identifying the person who used the Vijay Khanna CBI identity.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Victim-facing and cash-out functions are deliberately coded separately.
