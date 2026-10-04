# SEIAI-0137: Eircom broadband-refund impersonation and Indian call-centre trail

## Record status

- Case ID: `SEIAI-0137`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0137-01 | T1 | bail_order | Ramesh Prasad Baranwal v. Union of India through Assistant Director, Directorate of Enforcement, 7 October 2025 |

Source URL: https://indiankanoon.org/doc/54644833/

## Procedural posture

- Court / authority: Patna High Court
- Case / FIR: Criminal Miscellaneous No.11780/2025; ECIR PTZO/27/2023; Special Trial No.3/2024
- Primary source stage: `bail_order`
- Public case status: `trial`
- Conviction status: `not_yet_adjudicated`
- Disposition: PMLA bail proceeding; underlying trial and money-laundering merits remained pending.

## Neutral case summary

An Irish Eircom customer was called by a woman offering a EUR 250 broadband refund and provided bank details. EUR 950 was then taken from her credit card and moved through a Rewire account to an Indian company. Later ED proceedings alleged a Kolkata/Bolpur fake-call-centre network and extensive downstream proceeds, but the focal caller identity remains unresolved.

## Reconstruction

### Initial contact

Irish national Carmel Fox received a call from a woman identifying herself as Stephanie from Eircom Technological Service.

### Pretext

The caller said the victim was due a EUR 250 broadband refund and requested bank-account details to process it.

### Requested action

Provide bank-account details to receive the purported Eircom refund.

### Victim action and consequence

The victim provided banking details; EUR 950, stated by the source as INR 84,941.40, was taken from her credit card and transferred through a Rewire account into India.

- Reported focal financial loss: INR 84941.40
- Payment method: `card`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not reported

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `yes`

Other evidence: ED search material and analysis of a co-accused iPhone; records concerning Leconix and related entities.

## Actor and attribution analysis

### SEIAI-0137-A01: “Stephanie” Eircom support persona
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Calling the Irish victim as purported Eircom technical support and eliciting bank details through a refund pretext.
- Limitation: The public source reconstructs the call but does not identify the human operator.
- Alternative explanation: The persona name may be fictitious and does not establish human identity.

### SEIAI-0137-A02: Alleged Kolkata/Bolpur call-centre and financial network
- Identity resolution: `actor_cluster`
- Role layer: `hybrid`
- Victim-facing function: `uncertain`
- Financial function: `yes`
- Direct victim contact: `unknown`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Operating or managing alleged fake-call-centre activity and receiving/routing proceeds associated with cyber fraud against foreign nationals.
- Limitation: Network and money-flow evidence does not establish which human delivered the focal Eircom call.
- Alternative explanation: Some persons may have had narrower financial or employment roles.


### Incident-level attribution assessment

- Attribution target: The unresolved Eircom impersonator and the alleged Kolkata/Bolpur call-centre and financial network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `device_possession_or_forensics`
- Attribution strength: **moderate**
- Limitations: The source links an alleged Indian call-centre and money-flow network to cyber fraud against foreign nationals but does not prove that the petitioner or a named network member personally made Carmel Fox's call.
- Alternative explanation: The petitioner characterised his role as commission-based work and disputed criminal involvement.

## Primary evidentiary gap

Call-provider or device records linking the Stephanie/Eircom call session to a specific operator in the alleged Indian call centre.

## Legal/procedural notes

PMLA Section 4; predicate allegations under IPC 411, 419, 420 and IT Act provisions including 66D

## Coding decisions

Only the focal EUR 950 loss, converted in the source to INR 84,941.40, is coded. Much larger PMLA proceeds and account totals are network-level context and are not transferred to this incident.
