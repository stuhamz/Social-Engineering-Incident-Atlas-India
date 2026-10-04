# SEIAI-0093: CBI and Mumbai Crime Branch digital-arrest fraud with forged court material

## Record status

- Case ID: `SEIAI-0093`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0093-01 | T1 | bail_order | Surajsinh Kuldeepsinh Chauhan v. State of Gujarat, 22 September 2026 |

Source URL: https://indiankanoon.org/doc/96696646

## Procedural posture

- Court / authority: Gujarat High Court
- Case / FIR: R/CR.MA/19167/2026; C.R. No.11191067250110/2025
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: Gujarat High Court rejected the successive regular-bail application on 22 September 2026 after charge sheet, noting ongoing investigation and digital evidence.

## Neutral case summary

Unknown persons impersonating CBI and Mumbai Crime Branch officers used a money-laundering pretext, forged warrants and purported court material to place a victim under digital arrest and induce INR 3,894,382 in transfers. The bail record separately links Surajsinh Chauhan to downstream funds and cryptocurrency conversion, while his direct victim-facing role remains unsupported.

## Reconstruction

### Initial contact

Between 18 August and 1 September 2025, unknown persons contacted the complainant using mobile numbers while impersonating CBI and Mumbai Crime Branch officers.

### Pretext

The operators alleged misuse of a forged UID and a Canara Bank account in a money-laundering case linked to Naresh Goyal and claimed enormous laundering activity, then subjected the complainant to digital arrest using forged warrants/court material.

### Requested action

Remain under the purported digital-arrest process and transfer funds by RTGS to accounts directed by the operators.

### Victim action and consequence

The complainant transferred INR 3,894,382 to multiple accounts.

- Reported financial loss: INR 3894382
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `yes`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `yes`
- Chats/messages: `yes`
- Platform/provider records: `not_reported`
- Forensic examination: `yes`

Other evidence: The court records alleged bank routing to the applicant, WhatsApp/electronic communications with co-accused and a seized phone sent to FSL for extraction/decryption.

## Actor and attribution analysis

### SEIAI-0093-A01: CBI/Mumbai Crime Branch impersonator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the digital-arrest deception and directing RTGS transfers.
- Limitation: Individual operators remain unresolved in the bail record.

### SEIAI-0093-A02: Surajsinh Kuldeepsinh Chauhan
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Alleged downstream receipt/conversion of cyber-fraud proceeds into cryptocurrency.
- Limitation: Applicant denied knowing involvement and described crypto activity as legitimate; FSL extraction and further investigation were ongoing.
- Alternative explanation: Legitimate pre-existing USD/cryptocurrency conversion business.


### Incident-level attribution assessment

- Attribution target: Unresolved CBI/Mumbai Crime Branch impersonators and Surajsinh Chauhan’s alleged downstream cryptocurrency-conversion role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **moderate**
- Limitations: The source is a bail order and the applicant denied participation in the digital arrest, describing his crypto/USDT activity as legitimate. The FSL work and further investigation were still ongoing.
- Alternative explanation: The applicant asserted that transfers and cryptocurrency conversion arose from a pre-existing legitimate business rather than knowing laundering of cyber-fraud proceeds.

## Primary evidentiary gap

Provider/device evidence resolving the original victim-facing operators and completed forensic/transaction evidence establishing the applicant’s knowledge and coordination.

## Legal/procedural notes

BNS 338; BNS 336(3); BNS 340(2); BNS 318(4); BNS 319(2); BNS 204; BNS 3(5); IT Act 66C; IT Act 66D

## Coding decisions

The alleged INR 457 crore laundering figure belongs to the pretext, not victim loss.
