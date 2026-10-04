# SEIAI-0094: WhatsApp and Telegram Bitcoin investment task fraud

## Record status

- Case ID: `SEIAI-0094`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0094-01 | T1 | bail_order | Nirmal Kumar Mishra v. State Govt. of NCT of Delhi, 28 February 2025 |

Source URL: https://indiankanoon.org/doc/74071476/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN.4548/2024; FIR No.041/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Delhi High Court dismissed Nirmal Kumar Mishra’s anticipatory-bail application on 28 February 2025 and vacated interim protection; investigation remained incomplete.

## Neutral case summary

A Delhi complainant was drawn through WhatsApp and Telegram into a purported high-return Bitcoin investment scheme and transferred INR 1,707,389 across nine transactions. Investigation developed a downstream mule-account theory around Nirmal Kumar Mishra, but the original victim-facing operators were not independently identified in the bail record.

## Reconstruction

### Initial contact

The complainant Shilpa Sharma was enticed into a purported Bitcoin investment scheme through a WhatsApp group and then added to a Telegram group.

### Pretext

The scheme promised high returns on Bitcoin/investment activity and directed the complainant to make repeated transfers to multiple accounts.

### Requested action

Join the investment groups and transfer funds for purported Bitcoin investment/high-return activity.

### Victim action and consequence

Between 31 May and 5 June 2024, the complainant transferred INR 1,707,389 in nine transactions to seven accounts.

- Reported financial loss: INR 1707389
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `not_reported`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `yes`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Investigation traced INR 80,000 into a YES Bank account and alleged account/ATM/credentials/SIM handoff and broader mule-account routing.

## Actor and attribution analysis

### SEIAI-0094-A01: Bitcoin investment-group operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating investment-group communications and directing repeated transfers.
- Limitation: No independent provider/device attribution identifies the humans behind the groups.

### SEIAI-0094-A02: Nirmal Kumar Mishra
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Alleged control/use and circulation of mule-account infrastructure receiving fraud proceeds.
- Limitation: Victim did not identify him as the inducer; knowledge/control allegations remained for investigation.



### Incident-level attribution assessment

- Attribution target: Unknown investment-group operators and Nirmal Kumar Mishra’s alleged mule-account coordination role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The complainant did not identify the applicant as the victim-facing operator. Applicant-specific allegations rely on account-control evidence, co-accused statements and investigation claims; investigation remained pending.
- Alternative explanation: The applicant disputed the prosecution’s theory and the final knowledge/intent behind account use remained for investigation/trial.

## Primary evidentiary gap

Authenticated WhatsApp/Telegram/provider/device records resolving the victim-facing operators and independent evidence mapping applicant control/knowledge to the focal transactions.

## Legal/procedural notes

IPC 420

## Coding decisions

Focal loss is INR 1,707,389. Broader account throughput is not treated as victim loss.
