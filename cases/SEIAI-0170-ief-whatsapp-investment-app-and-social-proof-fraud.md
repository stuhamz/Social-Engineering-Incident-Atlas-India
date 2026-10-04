# SEIAI-0170: IEF WhatsApp investment app and social-proof fraud

## Record status

- Case ID: `SEIAI-0170`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0170-01 | T1 | bail_order | Jayant Ahirwar v. State of Chhattisgarh, 20 April 2026 |

Source URL: https://indiankanoon.org/doc/101571611/

## Procedural posture

- Court / authority: High Court of Chhattisgarh
- Case / FIR: MCRC No.2114/2026; Crime No.388/2024, P.S. Urla, Raipur
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail rejected on 20 April 2026.

## Neutral case summary

A Raipur victim was drawn into a WhatsApp investment group claiming to represent IEF / International Equity Fund and a SEBI-registered FPI. Months of apparent success screenshots built trust before the victim invested INR 1,294,700 through an application. The app showed fictitious gains, but withdrawal failed and the victim was removed. The applicant's alleged role concerned the SIM used in the operation rather than proven authorship of the investment messaging.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `retail investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The victim was contacted through a WhatsApp investment group claiming association with IEF / International Equity Fund.

### 4. Pretext

The operators borrowed the legitimacy of a purported SEBI-registered foreign portfolio investor, used months of social-proof screenshots and then directed the victim to an IEF application.

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

Invest through the IEF application and transfer funds to supplied bank accounts.

### 7. Victim action

The victim transferred INR 1,294,700; the app later displayed INR 2,938,112, but withdrawal failed and the administrators stopped responding and removed the victim.

### 8. Consequence

- Reported focal financial loss: INR 1294700
- Payment method: `bank_transfer`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: SIM/subscriber trail and investigation material concerning the phone number used in the scheme.

## Actor and attribution analysis

### SEIAI-0170-A01: Unresolved victim-facing investment operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0170-A02: Jayant Ahirwar
- Identity resolution: `identified`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `no`
- Direct victim contact: `no`
- Attribution basis: `sim_or_subscriber_record` / `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Alleged registration/supply of the SIM used in the online investment operation.
- Limitation: SIM association does not itself prove operation of the IEF WhatsApp group.
- Alternative explanation: He may have supplied a SIM without personally delivering the investment pretext.

### Incident-level attribution assessment

- Attribution target: Unresolved IEF victim-facing operators and applicant Jayant Ahirwar's alleged SIM-supply role.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The source links the applicant to the SIM and records an allegation that it was supplied for online fraud, but does not establish that he personally delivered the investment pretext.
- Alternative explanation: SIM provision can be distinct from operation of the victim-facing WhatsApp account.

## Primary evidentiary gap

Device and WhatsApp account evidence tying the IEF group and application communications to the human operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The displayed INR 2,938,112 is not treated as realised money or added to financial loss.
