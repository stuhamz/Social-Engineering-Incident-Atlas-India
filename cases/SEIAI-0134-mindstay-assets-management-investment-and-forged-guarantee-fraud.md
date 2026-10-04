# SEIAI-0134: Mindstay Assets Management investment and forged-guarantee fraud

## Record status

- Case ID: `SEIAI-0134`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0134-01 | T1 | bail_order | Shashikant Aravind Mule v. State of Punjab, 19 March 2025 |

Source URL: https://indiankanoon.org/doc/79766615/

## Procedural posture

- Court / authority: High Court of Punjab and Haryana
- Case / FIR: CRM-M-54903-2024; FIR No.14/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Punjab complainant was recruited into a large Mindstay Assets Management WhatsApp group and promised monthly investment returns backed by purported Bank of India guarantees. Small profit payments seeded trust before he invested INR 2 million. The guarantees were later found to be forged and he was removed from the group when he pursued the promised returns.

## Reconstruction

### Initial contact

The complainant Hem Raj received calls from Mindstay representatives and a WhatsApp link leading to a company group with about 700 members.

### Pretext

The company promised monthly returns of roughly 3–4%, sent bank-account details through WhatsApp, issued purported Bank of India guarantees and made small initial profit payments to reinforce legitimacy.

### Requested action

Invest funds into the Mindstay account on the strength of promised monthly returns and purported bank guarantees.

### Victim action and consequence

The complainant invested INR 1,000,000, then INR 500,000 and another INR 500,000 after small profit payments. The purported Bank of India guarantees were later found to be forged and he was removed from the group after asking for the remaining profit.

- Reported financial loss: INR 2000000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `yes`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Forged Bank of India guarantee documents; corporate/director records; status-report material.

## Actor and attribution analysis

### SEIAI-0134-A01: Mindstay victim-facing representative/WhatsApp operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0134-A02: Mindstay organisational/financial infrastructure
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Mindstay victim-facing/organisational operator cluster and company financial infrastructure.
- Primary basis: `documentary_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The prosecution status report linked the petitioner to company directorship and group membership, but the defence disputed his knowledge and the Court considered the possibility that a director could lack knowledge of the alleged fraud.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Authenticated device/account evidence showing who sent the investment representations, forged guarantees and removal messages, and what each director knew.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

INR 2,000,000 codes the gross investment transferred. Small INR 29,333 and INR 6,000 trust-seeding payments are not netted out because the source frames the principal investment as the cheated amount. The petitioner’s individual knowledge remains disputed.
