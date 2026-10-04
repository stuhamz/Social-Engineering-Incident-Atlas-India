# SEIAI-0103: WhatsApp and Telegram part-time investment-task fraud

## Record status

- Case ID: `SEIAI-0103`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0103-01 | T1 | bail_order | Shamikh Shahbaz Shaikh v. State Govt. of NCT of Delhi, 14 May 2025 |

Source URL: https://indiankanoon.org/doc/189595537/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN.731/2025; FIR No.30/2023
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Delhi High Court dismissed Shamikh Shahbaz Shaikh’s anticipatory-bail application on 14 May 2025 while emphasizing that observations were prima facie only.

## Neutral case summary

A Delhi complainant lost INR 1,795,000 after WhatsApp and Telegram contacts induced him into investment-based part-time tasks. Investigation traced funds through several accounts and Rapipay infrastructure linked to the bail applicant, but the original victim-facing operators remained unresolved.

## Reconstruction

### Initial contact

Pradeep Kumar Behera was induced through WhatsApp and Telegram to participate in an online part-time job/task scheme.

### Pretext

The operators framed repeated payments as investment-based tasks that would produce income/returns, inducing transfers from several bank accounts.

### Requested action

Perform purported part-time investment tasks and transfer money to designated accounts.

### Victim action and consequence

The complainant transferred INR 1,795,000, including INR 900,000 to an account of M/s Sanofi Enterprises.

- Reported financial loss: INR 1795000
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `not_reported`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `yes`
- Device: `not_reported`
- Chats/messages: `yes`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Funds were traced through multiple accounts/Rapipay; investigation cited IP logs, virtual-account complaints, WhatsApp chats and links among the applicant and co-accused.

## Actor and attribution analysis

### SEIAI-0103-A01: Part-time investment-task operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the task-scam communications and inducement.
- Limitation: Human operators remain unresolved.

### SEIAI-0103-A02: Shamikh Shahbaz Shaikh
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `ip_or_login_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged facilitation/routing of proceeds through Rapipay/account infrastructure.
- Limitation: The source does not establish that he authored the original WhatsApp/Telegram inducement and findings are bail-stage only.
- Alternative explanation: He alleged misuse and denied knowing involvement.


### Incident-level attribution assessment

- Attribution target: Unknown task-scam operators and Shamikh Shahbaz Shaikh’s alleged Rapipay/fund-routing role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `ip_or_login_record`
- Attribution strength: **moderate**
- Limitations: The applicant was linked to downstream Rapipay/account infrastructure and co-accused, but the source does not establish that he authored the original WhatsApp/Telegram inducement.
- Alternative explanation: The applicant pleaded innocence and misuse of his account; the bail court treated these as matters requiring further investigation.

## Primary evidentiary gap

Provider/device evidence resolving the original task-scam operators and fuller evidence establishing the applicant’s knowledge/control over the focal fund route.

## Legal/procedural notes

IPC 419; IPC 420

## Coding decisions

Applicant-specific coding is confined to downstream financial/infrastructure conduct.
