# SEIAI-0166: STEMCOR MAX HEDGE high-return investment website fraud

## Record status

- Case ID: `SEIAI-0166`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0166-01 | T1 | procedural_order | Bhumireddi Avinash v. State of Telangana, 23 April 2024 |

Source URL: https://indiankanoon.org/doc/179214536/

## Procedural posture

- Court / authority: High Court for the State of Telangana
- Case / FIR: Criminal Petition No.8171/2022; C.C. No.70/2022
- Primary source stage: `procedural_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: High Court declined to quash the prosecution on 23 April 2024; triable issues remained.

## Neutral case summary

A Telangana victim found an online advertisement for STEMCOR MAX HEDGE, contacted UK-listed numbers and was promised extraordinary daily and referral returns through email, WhatsApp and a website. He invested INR 160,000, received INR 15,320 and was left with a net source-framed loss of INR 144,680. The later quashing proceeding preserved a dispute over whether the petitioner was merely a freelance web developer or a knowing participant.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `online investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The victim saw a Google advertisement for STEMCOR MAX HEDGE and contacted the listed UK numbers.

### 4. Pretext

The operators, communicating by email and WhatsApp, promised a 5% daily commission for up to 60 working days and a 10% referral commission.

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

Invest money through the website/payment gateway to earn unusually high daily returns.

### 7. Victim action

The victim invested INR 160,000 and received INR 15,320 before the remaining funds were not returned.

### 8. Consequence

- Reported focal financial loss: INR 144680
- Payment method: `multiple`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `yes`
- Email: `yes`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Website-development, payment and charge-sheet material.

## Actor and attribution analysis

### SEIAI-0166-A01: Unresolved victim-facing investment operator(s)
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

### SEIAI-0166-A02: Bhumireddi Avinash
- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `documentary_record` / `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Prosecution alleged development/support of the fraudulent website and receipt of funds.
- Limitation: The source is a quashing proceeding and the petitioner's knowledge and intent remained for trial.
- Alternative explanation: He said he was a freelance web designer and did not know the site was fraudulent.

### Incident-level attribution assessment

- Attribution target: Website/operator cluster and petitioner Bhumireddi Avinash's alleged technical/financial role.
- Primary basis: `documentary_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The quashing record contains prosecution allegations that the petitioner helped develop the site and received money, but guilt remained for trial.
- Alternative explanation: The petitioner said he was only a freelance web designer and denied knowing participation in fraud.

## Primary evidentiary gap

Server, domain, payment-gateway and communications evidence linking site administration and representations to specific operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

Financial loss is coded as the source-framed net amount after the INR 15,320 returned to the victim. Cross-border dimension is coded `suspected` because foreign contact numbers are reported but operator location is not conclusively resolved.
