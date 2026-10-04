# SEIAI-0100: Google-rating work-from-home task scam

## Record status

- Case ID: `SEIAI-0100`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0100-01 | T1 | bail_order | Amit Sharma v. State, 12 October 2023 |

Source URL: https://indiankanoon.org/doc/127607615/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN.3422/2023; FIR No.72/2023
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Delhi High Court dismissed Amit Sharma’s anticipatory-bail application on 12 October 2023, while clarifying that the observations were not findings on merits.

## Neutral case summary

A WhatsApp offer for paid Google-rating work moved a victim into a Telegram and web-portal task scheme that used a small initial payout to establish trust before escalating prepaid tasks, causing INR 799,850 in loss. The bail applicant was linked to a downstream account, not independently identified as the original operator.

## Reconstruction

### Initial contact

On 16 June 2023, Oweas Khan received a WhatsApp message offering online part-time income for rating items on Google.

### Pretext

The operators promised small per-rating/login income, paid a small joining bonus, created an account on a task portal and escalated from low-value prepaid tasks to increasingly large deposits framed as commission-generating tasks and corrections.

### Requested action

Join Telegram task groups, use the online portal and make repeated prepaid deposits to unlock commissions/profits.

### Victim action and consequence

The complainant made repeated deposits, including escalating task payments, and lost INR 799,850.

- Reported financial loss: INR 799850
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

Other evidence: No additional evidence coded from the reviewed source.

## Actor and attribution analysis

### SEIAI-0100-A01: Google-rating task-scam operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the task-scam communications, portal and escalating deposit demands.
- Limitation: Human identities behind the messaging and portal are unresolved.

### SEIAI-0100-A02: Amit Sharma
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Alleged downstream receipt/handling of victim funds.
- Limitation: The source does not establish that he originated the victim-facing WhatsApp/Telegram deception.



### Incident-level attribution assessment

- Attribution target: Unresolved task-scam operators and Amit Sharma’s alleged beneficiary/account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **moderate**
- Limitations: The bail order records that an alleged amount was transferred to an account connected with the applicant but does not establish that he originated the WhatsApp/Telegram deception.
- Alternative explanation: Applicant-specific knowledge and control of the wider scam infrastructure remained issues for investigation/trial.

## Primary evidentiary gap

Authenticated platform/device records resolving the WhatsApp/Telegram/portal operators and fuller account-control evidence linking downstream recipients to the focal deception.

## Legal/procedural notes

IPC 420

## Coding decisions

Focal loss is the complainant’s INR 799,850, not wider account activity.
