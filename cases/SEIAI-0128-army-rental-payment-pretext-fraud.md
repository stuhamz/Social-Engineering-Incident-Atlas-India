# SEIAI-0128: Army rental-payment pretext fraud

## Record status

- Case ID: `SEIAI-0128`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0128-01 | T1 | bail_order | Mohd. Shareef v. State of Uttarakhand, 18 July 2023 |

Source URL: https://indiankanoon.org/doc/188218318/

## Procedural posture

- Court / authority: Uttarakhand High Court
- Case / FIR: First Bail Application No.1676/2022; Case Crime No.07/2022
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Dehradun woman advertising a house for rent was contacted by a man calling himself Bablu Kumar and then by a purported Army-office superior. Invoking Army payment rules, the callers induced her to transfer INR 1.246 million before rent could supposedly be credited. The incident combines marketplace targeting with authority impersonation.

## Reconstruction

### Initial contact

A woman who had advertised her house for rent received a call from a man calling himself Bablu Kumar, who said he wanted to rent the property.

### Pretext

A second caller claiming to be Bablu Kumar’s boss from an Army office invoked Army payment rules and instructed the victim to deposit money before rent could be credited.

### Requested action

Transfer money to the supplied accounts as a purported prerequisite under Army payment rules for receiving rent.

### Victim action and consequence

The complainant transferred a total of INR 1,246,000 into three Federal Bank accounts under the false payment-processing pretext.

- Reported financial loss: INR 1246000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0128-A01: Bablu Kumar / purported Army-office caller cluster
- Identity resolution: `partially_identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0128-A02: Federal Bank recipient-account network
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

- Attribution target: Army-renter impersonator(s) and recipient-account network.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The source reconstructs the phone pretext and payment accounts but does not publicly map the caller identities to identified humans with device/provider evidence.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Subscriber/device evidence connecting the two calling numbers and the Federal Bank account controllers to the same fraud operation.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The focal loss is the total transfer stated in the judicial source; account-controller knowledge remains unadjudicated.
