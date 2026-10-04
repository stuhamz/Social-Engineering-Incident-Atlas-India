# SEIAI-0108: Online loan app morphed-image extortion against borrower family

## Record status

- Case ID: `SEIAI-0108`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0108-01 | T1 | bail_order | Rabindra Kumar v. State of Andhra Pradesh, 23 June 2025 |

Source URL: https://indiankanoon.org/doc/145020245/

## Procedural posture

- Court / authority: Andhra Pradesh High Court
- Case / FIR: Criminal Petition No.5788/2025; Crime No.53/2025
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

An Andhra Pradesh loan-app matter describes a small loan followed by WhatsApp-based coercion using morphed obscene images. The borrower’s family was threatened with dissemination and the complainant made a INR 2,000 PhonePe payment. The public bail order supports the social-engineering sequence more strongly than individual human attribution.

## Reconstruction

### Initial contact

The prosecution record concerns a small online-loan transaction followed by WhatsApp contact with the borrower’s wife.

### Pretext

After the small loan, operators allegedly used morphed obscene images and threats of dissemination to pressure the complainant family into payment.

### Requested action

Make payment through the supplied digital-payment route to stop dissemination of morphed images.

### Victim action and consequence

The complainant made a payment of INR 2,000 through PhonePe under the threat campaign described in the prosecution case.

- Reported financial loss: INR 2000
- Payment method: `upi`

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

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0108-A01: Loan-app / WhatsApp extortion operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0108-A02: Downstream digital-payment recipient network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Unresolved loan-app/WhatsApp extortion operator(s) and downstream payment network.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The bail record is sufficient to reconstruct the coercive technique but provides limited public detail resolving the victim-facing operator to a specific human.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated app, WhatsApp, device and payment-account records tying the coercive identity to an operator.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The case is coded to the focal family extortion episode only. The judicial source is a bail-stage record and allegations remain unadjudicated.
