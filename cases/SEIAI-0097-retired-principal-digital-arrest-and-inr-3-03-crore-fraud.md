# SEIAI-0097: Retired principal digital arrest and INR 3.03 crore fraud

## Record status

- Case ID: `SEIAI-0097`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0097-01 | T1 | bail_order | Bapi Das v. State of Haryana & Anr., 12 May 2026 |

Source URL: https://indiankanoon.org/doc/196424908

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / FIR: CRM-M-6144-2026; FIR No.0038/2025
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Punjab and Haryana High Court dismissed Bapi Das’s anticipatory-bail petition on 12 May 2026; investigation qua him had been completed and challan filed.

## Neutral case summary

A retired principal was isolated through phone and WhatsApp video calls, told that criminal complaints and money-laundering activity were linked to her, and kept under digital arrest until she transferred INR 30.3 million. A first-layer INR 4.5 million transfer was traced to Bapi Das’s proprietorship account, but his knowledge remained contested.

## Reconstruction

### Initial contact

On 3 January 2025, retired principal Dr Anita received a phone call stating that complaints and an FIR had been registered against her and that several mobile numbers would shortly be blocked.

### Pretext

Subsequent WhatsApp video callers claimed a bank account had been opened in her name for a money-laundering suspect, threatened 14 years’ imprisonment, harm to family and account freezes, forbade disclosure and kept her under digital arrest.

### Requested action

Remain isolated under the purported investigation and transfer funds to accounts specified by the callers.

### Victim action and consequence

The complainant transferred a total of INR 30,300,000 to multiple accounts while under the digital-arrest coercion.

- Reported financial loss: INR 30300000
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `yes`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Investigation traced INR 4.5 million to a first-layer ICICI account of M/s Gajanan Fish Suppliers, whose proprietor was Bapi Das; challan was later filed against him.

## Actor and attribution analysis

### SEIAI-0097-A01: Digital-arrest operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the digital-arrest coercion and directing repeated transfers.
- Limitation: Human operators and accounts are not fully resolved in the bail record.

### SEIAI-0097-A02: Bapi Das
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `confession_or_admission`
- Attribution strength: **moderate**
- Conduct assessed: Alleged control of a first-layer beneficiary account receiving part of the proceeds.
- Limitation: He denied knowing participation and claimed his account had itself been compromised.
- Alternative explanation: Claimed to be a cyber-fraud victim and denied benefiting from the transfer.


### Incident-level attribution assessment

- Attribution target: Unknown digital-arrest operators and Bapi Das’s alleged first-layer beneficiary-account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `confession_or_admission`
- Attribution strength: **moderate**
- Limitations: Bail-stage allegations link the petitioner to a first-layer account and record a disclosure statement, but he disputed knowing participation and claimed that his account had itself been compromised.
- Alternative explanation: Bapi Das claimed he was also a cyber-fraud victim, had reported compromise of his account and did not benefit from the incoming funds.

## Primary evidentiary gap

Provider/device evidence resolving the victim-facing callers and independent account-control/transaction evidence establishing the petitioner’s knowledge and control at the time of the focal transfer.

## Legal/procedural notes

BNS 318(4); BNS 319; BNS 308(2); BNS 336(3); BNS 338; BNS 340; BNS 61(2); BNS 241; IT Act 66C; IT Act 66D

## Coding decisions

INR 4.5 million is a traced first-layer subset, not the focal loss.
