# SEIAI-0109: Fake Randstad part-time job and crypto-task fraud

## Record status

- Case ID: `SEIAI-0109`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0109-01 | T1 | bail_order | Rohit Kumar v. State of Haryana, 25 October 2024 |

Source URL: https://indiankanoon.org/doc/198463287/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: CRM-M-41722-2024; FIR No.21/2024
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Haryana complainant was contacted on Telegram by a purported Randstad recruiter offering paid hotel-rating work. A small payment established trust before he was moved into crypto/investment tasks and induced to transfer INR 1,451,710. The bail record provides a detailed bank trail to downstream actors while the original recruiter identity remains unresolved.

## Reconstruction

### Initial contact

On 9 April 2024 the complainant received a Telegram message from a person calling herself Suman and presenting herself as a recruiter for Randstad India, offering part-time work.

### Pretext

The recruiter paid INR 1,500 for hotel-rating tasks, then moved the complainant into Telegram channels and a purported crypto-trading platform, promising larger returns on deposits.

### Requested action

Complete rating tasks, join the Telegram channel and deposit progressively larger sums for purported crypto/investment tasks.

### Victim action and consequence

After a small trust-building payout, the complainant transferred multiple sums totalling INR 1,451,710. When he sought returns, he was asked to deposit another INR 500,000 as income tax.

- Reported financial loss: INR 1451710
- Payment method: `multiple`

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

### SEIAI-0109-A01: Suman / Telegram recruiter-task operator cluster
- Identity resolution: `partially_identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0109-A02: Downstream beneficiary and cash-out network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Telegram recruiter/task operators and downstream account/cash-out actors.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The source documents petitioner-linked movement and withdrawal of portions of the funds, but the named recruiter persona is not resolved to that petitioner.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Platform/device evidence resolving the recruiter and task-channel operators and proving knowledge/control across the financial chain.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The further INR 500,000 'income tax' demand was not paid and is not included in financial_loss_inr.
