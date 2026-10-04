# SEIAI-0171: Instagram forex and commodity trading fraud with SIM-supply trail

## Record status

- Case ID: `SEIAI-0171`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0171-01 | T1 | bail_order | P. Satyanagamurti v. State of Chhattisgarh, 25 March 2026 |

Source URL: https://indiankanoon.org/doc/5904959/

## Procedural posture

- Court / authority: High Court of Chhattisgarh
- Case / FIR: MCRC No.1938/2026; Crime No.08/2025, Cyber Police Range Durg / P.S. Bhilai Nagar
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail rejected on 25 March 2026.

## Neutral case summary

A Chhattisgarh victim was contacted by phone and Instagram about forex and commodity trading, made an initial payment, received a small return and then was induced to transfer progressively larger amounts. The source states a focal loss of INR 4,867,500. Investigation used CAF, CDR, SIM, WhatsApp and banking evidence to map infrastructure, but the victim-facing operator and SIM-supply roles remain analytically distinct.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `forex and commodity trading`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

On 29 August 2025 the victim received a phone call and an Instagram link inviting participation in forex and commodity/gold trading.

### 4. Pretext

The operators promised profitable trading, made a small trust-seeding payment and then induced repeated transfers into multiple accounts.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Make initial and then escalating deposits for purported forex and commodity trading.

### 7. Victim action

After an initial INR 17,500 UPI payment and a small INR 2,200 return, the victim made repeated transfers and the source states a total cheated amount of INR 4,867,500.

### 8. Consequence

- Reported focal financial loss: INR 4867500
- Payment method: `multiple`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `yes`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `yes`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: CAF/CDR material, SIM-registration evidence, WhatsApp messages and bank-account trail.

## Actor and attribution analysis

### SEIAI-0171-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0171-A02: P. Satyanagamurti
- Identity resolution: `identified`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `sim_or_subscriber_record` / `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Alleged role in the SIM-supply chain supporting the investment-fraud communications.
- Limitation: The source does not establish that he authored the victim-facing trading messages.
- Alternative explanation: Technical facilitation may be separate from the social-engineering operator.

### Incident-level attribution assessment

- Attribution target: Unresolved trading operators and applicants linked to the SIM-supply chain and downstream banking infrastructure.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `message_or_email_content`
- Attribution strength: **moderate**
- Limitations: SIM registration and supply support technical linkage but do not by themselves prove that a particular applicant authored the victim-facing investment messages.
- Alternative explanation: A SIM supplier may have a narrower facilitation role than the social-engineering operator.

## Primary evidentiary gap

Device forensics and platform-account records resolving who used the SIM and messaging accounts during the victim interaction.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Large transaction volumes in accounts associated with the wider network are contextual only and are not coded as victim loss.
