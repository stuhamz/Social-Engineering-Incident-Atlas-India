# SEIAI-0095: Maharashtra Police terrorism-pretext digital-arrest fraud

## Record status

- Case ID: `SEIAI-0095`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0095-01 | T1 | bail_order | Sanal Venugopal Menon v. State Govt. of NCT of Delhi & Anr., 23 September 2026 |

Source URL: https://indiankanoon.org/doc/126589943

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN.4027/2026; FIR No.139/2025
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Delhi High Court dismissed Sanal Venugopal Menon’s anticipatory-bail application on 23 September 2026, describing the investigation as nascent.

## Neutral case summary

Unknown callers posing as Maharashtra Police used an Aadhaar/terrorist-funding pretext to place a complainant under digital arrest and induce INR 10,640,840 in transfers. A substantial first-layer amount reached a company account associated with the bail applicant, but both the original caller identities and the applicant’s knowledge remained contested.

## Reconstruction

### Initial contact

The complainant received a WhatsApp call from unknown persons impersonating Maharashtra Police officials.

### Pretext

The callers claimed the complainant’s Aadhaar had been used for terrorist funding and other illegal activities, threatened dire consequences and used a digital-arrest modus operandi.

### Requested action

Comply with the purported police process and transfer funds to accounts specified by the operators.

### Victim action and consequence

The complainant transferred INR 10,640,840 before reporting the fraud on NCRP.

- Reported financial loss: INR 10640840
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

Other evidence: Investigation traced INR 3,920,280 to a first-layer ICICI account of Mobility Fulfilment Services Private Limited, for which the petitioner was an authorised signatory, with further transfers to second-layer accounts.

## Actor and attribution analysis

### SEIAI-0095-A01: Maharashtra Police impersonator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the digital-arrest threat and directing transfers.
- Limitation: No provider/device evidence in the source resolves the callers.

### SEIAI-0095-A02: Sanal Venugopal Menon
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `account_control` + `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Alleged control of a first-layer beneficiary account receiving a portion of victim funds.
- Limitation: Knowledge and authorization were contested and second-layer investigation remained incomplete.
- Alternative explanation: He claimed his phone/account had been compromised and that he had independently reported/frozen it.


### Incident-level attribution assessment

- Attribution target: Unknown Maharashtra Police impersonators and Sanal Venugopal Menon’s alleged first-layer account role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `account_control`
- Attribution strength: **moderate**
- Limitations: This is a bail-stage record. It does not identify the victim-facing WhatsApp operators. The petitioner claimed his phone/account had been compromised and investigation into onward transfers and second-layer beneficiaries remained ongoing.
- Alternative explanation: The petitioner asserted that his phone had been stolen, that transactions were unauthorized, and that he had himself reported the compromise and sought an account freeze.

## Primary evidentiary gap

Authenticated WhatsApp/provider/device evidence resolving the impersonators and complete account-control/transaction evidence establishing who authorized the first- and second-layer transfers.

## Legal/procedural notes

BNS 308; BNS 318(4); BNS 319; BNS 340

## Coding decisions

INR 3,920,280 is a traced first-layer subset, not the focal victim loss.
