# SEIAI-0091: Bank-to-police digital arrest against retired Army officer

## Record status

- Case ID: `SEIAI-0091`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0091-01 | T1 | bail_order | Mool Chand v. State of Haryana, 4 September 2024 |

Source URL: https://indiankanoon.org/doc/77271329/

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / FIR: CRM-M-42340-2024; FIR No.57/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Punjab and Haryana High Court granted Mool Chand regular bail on 4 September 2024 while investigation remained ongoing; the complainant stated that the money had been returned.

## Neutral case summary

A retired Army officer was moved from a bank-call pretext into a police/CBI digital-arrest scheme using a purported money-laundering case, forged official material and secrecy threats, and transferred INR 1 million. The bail record separately alleges an account-procurement network in which Mool Chand acted as an intermediary rather than as the victim-facing caller.

## Reconstruction

### Initial contact

On 20 June 2024, retired Army officer Davasis Chaudhary received a call from a person claiming to be from his bank concerning his credit card and was routed into a purported police process.

### Pretext

A caller posing as Bandra Police said the victim’s son had been arrested in a money-laundering case, sent purported Enforcement Directorate/Supreme Court-stamped material, threatened the couple with arrest and escalated the interaction to purported CBI personnel.

### Requested action

Remain secret/cooperative with the purported investigation, follow links/instructions and transfer INR 1,000,000 as directed.

### Victim action and consequence

The complainant followed the communications and transferred INR 1,000,000 by RTGS to an account specified by the operators.

- Reported financial loss: INR 1000000
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `yes`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `yes`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: The bail order describes a beneficiary-account chain, account/ATM/SIM handoffs and co-accused disclosure statements concerning alleged account procurement.

## Actor and attribution analysis

### SEIAI-0091-A01: Bank/police/CBI impersonator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the layered bank/law-enforcement digital-arrest deception and directing payment.
- Limitation: The source reconstructs the deception but does not independently resolve the operators.

### SEIAI-0091-A02: Mool Chand
- Identity resolution: `identified`
- Role layer: `organisational`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `co_accused_link` + `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Alleged collection and forwarding of mule-account materials to downstream coordinators.
- Limitation: No focal victim payment entered his own account and he was not alleged to have made the victim-facing calls.
- Alternative explanation: He denied deception, beneficiary status and challenged reliance on co-accused disclosures.


### Incident-level attribution assessment

- Attribution target: Unresolved victim-facing bank/police/CBI impersonators and Mool Chand’s alleged account-material intermediary role.
- Primary basis: `co_accused_link`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The petitioner was not alleged to have made the victim-facing calls and no victim funds were shown entering his own account; his role was alleged principally through co-accused disclosure statements concerning collection/transfer of account materials.
- Alternative explanation: The petitioner denied deception or receipt of victim funds and challenged reliance on co-accused disclosure statements.

## Primary evidentiary gap

Direct evidence linking the victim-facing identities to human operators and independent corroboration of the petitioner’s alleged intermediary/account-procurement role.

## Legal/procedural notes

BNS 318(4); BNS 336(3); BNS 338; BNS 340; BNS 61

## Coding decisions

Victim-facing attribution is kept separate from downstream account-material allegations against the bail applicant.
