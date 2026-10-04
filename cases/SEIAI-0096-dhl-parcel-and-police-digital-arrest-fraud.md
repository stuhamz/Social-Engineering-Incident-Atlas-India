# SEIAI-0096: DHL parcel and police digital-arrest fraud

## Record status

- Case ID: `SEIAI-0096`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0096-01 | T1 | bail_order | Krishan Kumar v. State of Haryana, 9 July 2026 |

Source URL: https://indiankanoon.org/doc/21512281/

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / FIR: CRM-M-16756-2026; FIR No.134/2024
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Punjab and Haryana High Court granted Krishan Kumar regular bail on 9 July 2026 after extended custody; the challan had been filed and charges were yet to be framed.

## Neutral case summary

A DHL parcel pretext escalated into police impersonation and a digital-arrest style “safe custody” scheme that kept Anil Vig under pressure for about nine days and induced INR 9,999,299 in transfers. The bail applicant’s alleged role was a downstream mule-account/commission role, not the original deception.

## Reconstruction

### Initial contact

On 2 May 2024, Anil Vig received a call from a person claiming to represent DHL about a returned parcel said to contain passports and Aadhaar cards.

### Pretext

After the complainant denied sending the parcel, the caller connected him to a purported police officer who claimed his identity was being misused and that money had to be transferred for “software analysis” and “safe custody.”

### Requested action

Remain in the purported investigation and transfer funds for software analysis/safe custody.

### Victim action and consequence

Under continuous intimidation for about nine days, the complainant transferred INR 9,999,299 to several accounts.

- Reported financial loss: INR 9999299
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

Other evidence: No additional evidence coded from the reviewed source.

## Actor and attribution analysis

### SEIAI-0096-A01: DHL/police digital-arrest operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the DHL-to-police deception and directing transfers.
- Limitation: Human operators remain unresolved.

### SEIAI-0096-A02: Krishan Kumar
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Allegedly providing a bank account for receipt/routing of fraud proceeds for commission.
- Limitation: Bail-stage allegation; source does not link him to victim-facing contact and guilt remained for trial.



### Incident-level attribution assessment

- Attribution target: Unknown DHL/police impersonators and Krishan Kumar’s alleged mule-account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The bail order describes the prosecution allegation that the petitioner supplied a mule account and received INR 25,000 commission; it does not establish that he made the victim-facing calls or prove guilt.
- Alternative explanation: The petitioner denied the prosecution account and sought bail based on prolonged custody and trial delay.

## Primary evidentiary gap

Direct provider/device evidence resolving the DHL/police identities and fuller evidence establishing account control, knowledge and intent of the alleged mule network.

## Legal/procedural notes

BNS 318; BNS 61; IT Act 66-D

## Coding decisions

Applicant-specific attribution is confined to the alleged financial layer.
