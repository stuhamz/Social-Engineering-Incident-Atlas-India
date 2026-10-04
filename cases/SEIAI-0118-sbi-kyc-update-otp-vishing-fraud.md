# SEIAI-0118: SBI KYC-update OTP vishing fraud

## Record status

- Case ID: `SEIAI-0118`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0118-01 | T1 | bail_order | Gulshan Kumar v. State of Bihar, 23 September 2026 |

Source URL: https://indiankanoon.org/doc/59596367/

## Procedural posture

- Court / authority: Patna High Court
- Case / FIR: Cr. Misc. No.42525/2026; Buxar Cyber P.S. Case No.24/2023
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Buxar informant received a call from a person posing as an SBI employee and was induced to share OTPs under a KYC-update pretext. INR 420,000 was then withdrawn. The bank confirmed that no genuine SBI employee had made the call.

## Reconstruction

### Initial contact

The informant received a phone call from an unknown person posing as an SBI employee.

### Pretext

The caller said KYC needed to be updated and induced the victim to share OTPs; the bank later confirmed no such call had been made by an employee.

### Requested action

Share OTPs to complete the purported SBI KYC update.

### Victim action and consequence

The informant disclosed OTPs, after which INR 420,000 was fraudulently withdrawn from his SBI account.

- Reported financial loss: INR 420000
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

### SEIAI-0118-A01: SBI-impersonating caller
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

### SEIAI-0118-A02: Downstream withdrawal/account network
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

- Attribution target: SBI-impersonating caller and downstream withdrawal/account network.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The public bail order supports the phone/KYC/OTP sequence; full device/platform evidence tying the caller identity to a human operator is not reproduced.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Subscriber/device and bank-session evidence resolving the caller and linking OTP use to the beneficiary/cash-out actor.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

Focal loss is the complainant’s INR 420,000 withdrawal; no broader network values are coded.
