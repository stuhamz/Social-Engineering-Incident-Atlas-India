# SEIAI-0092: PNP Polytex corporate SIM-swap and Bank of Baroda account takeover

## Record status

- Case ID: `SEIAI-0092`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0092-01 | T1 | final_judgment | PNP Polytex Private Limited v. Reserve Bank of India & Ors., 28 April 2026 |

Source URL: https://indiankanoon.org/doc/12184940/

## Procedural posture

- Court / authority: Bombay High Court
- Case / FIR: Writ Petition No.2791/2023; CR No.20/2020
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: Bombay High Court decided PNP Polytex’s writ petition on 28 April 2026 concerning customer liability for the 2020 unauthorized transactions and SIM-swap incident.

## Neutral case summary

PNP Polytex lost INR 12.4 million through 14 unauthorized Bank of Baroda transfers after fraudsters procured replacement of the company’s registered mobile SIM without consent, diverting OTPs and banking alerts. The final Bombay High Court judgment provides strong evidence of the SIM-swap and transaction sequence but does not resolve the human identity of the replacement-SIM requester.

## Reconstruction

### Initial contact

The source records that an unknown fraudster obtained replacement of PNP Polytex’s registered mobile SIM through a telephonic request without the company’s consent.

### Pretext

By taking over the registered mobile number, the fraudsters diverted OTPs and banking alerts to a duplicate SIM and used the access to operate the company’s Bank of Baroda online accounts.

### Requested action

Induce the telecom provider to replace the registered company SIM so OTPs and banking alerts would be delivered to the fraudsters.

### Victim action and consequence

Vodafone Idea replaced the registered SIM without PNP Polytex’s consent; the fraudsters then added beneficiaries and transferred INR 12,400,000 through 14 unauthorized transactions.

- Reported financial loss: INR 12400000
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `yes`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `not_reported`
- Platform/provider records: `yes`
- Forensic examination: `not_reported`

Other evidence: Bank statements documented 14 unauthorized transactions on 12-13 January 2020 to seven beneficiary accounts; the judgment records that Vodafone confirmed the SIM replacement occurred without the company’s consent and that funds later moved through a broader set of accounts.

## Actor and attribution analysis

### SEIAI-0092-A01: Replacement-SIM requester
- Identity resolution: `unknown`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `sim_or_subscriber_record` + `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Impersonating/posing as an authorized subscriber requester to obtain the replacement SIM.
- Limitation: Human identity of the requester is unresolved and the judgment is not a criminal attribution proceeding.

### SEIAI-0092-A02: Downstream beneficiary-account network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving and routing proceeds from the corporate bank-account takeover.
- Limitation: The judgment does not individually determine knowledge or criminal guilt of each downstream account controller.



### Incident-level attribution assessment

- Attribution target: Unknown replacement-SIM requester and downstream beneficiary-account network.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The final civil/writ judgment establishes the SIM-replacement event and unauthorized transfer sequence for customer-liability purposes but does not identify the human requester or establish criminal guilt of each downstream beneficiary.
- Alternative explanation: The banking respondents disputed liability and argued that multiple security layers had been passed; this does not resolve who controlled the replacement SIM.

## Primary evidentiary gap

Human identification of the SIM-replacement requester and device/login evidence linking the replacement SIM to specific online-banking sessions and beneficiaries.

## Legal/procedural notes

Constitution of India Article 226; RBI customer-protection framework for unauthorised electronic banking transactions

## Coding decisions

Candidate discovery surfaced an Indian Kanoon fragment; review used the canonical parent judgment. Focal loss is INR 12.4 million; broader account routing is not substituted for victim loss.
