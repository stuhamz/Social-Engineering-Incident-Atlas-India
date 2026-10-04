# SEIAI-0090: Aligarh retired professor digital-arrest fraud

## Record status

- Case ID: `SEIAI-0090`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0090-01 | T1 | bail_order | Amresh Kumar Singh v. State of U.P., 20 May 2025 |

Source URL: https://indiankanoon.org/doc/53028961/

## Procedural posture

- Court / authority: Allahabad High Court
- Case / FIR: Criminal Misc. Bail Application No.9981/2025; Case Crime No.38/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Allahabad High Court rejected Amresh Kumar Singh’s bail application on 20 May 2025 while investigation remained ongoing.

## Neutral case summary

A retired professor in Aligarh was drawn from a phone-service shutdown pretext into a Mumbai Police digital-arrest scheme, accused of involvement in a money-laundering case and induced to transfer INR 7.5 million. The bail record also describes an alleged downstream account-opening and transfer-facilitation network, but the original impersonating operators remain unresolved.

## Reconstruction

### Initial contact

On 28 September 2024, a retired Aligarh University professor received calls saying her mobile number was being shut down and that suspicious activity was linked to it; she was then connected to a purported police process and received a Mumbai Police WhatsApp video call.

### Pretext

The callers alleged that accounts had been opened using her Aadhaar and that she was implicated in a money-laundering case associated with Naresh Goyal, using purported account/case material and threats to maintain control.

### Requested action

Cooperate with the purported investigation, provide identity information and transfer money as directed under the claimed criminal-investigation pretext.

### Victim action and consequence

The complainant sent Aadhaar information through WhatsApp and transferred a total of INR 7,500,000 across four transfers between 30 September and 7 October 2024.

- Reported financial loss: INR 7500000
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `yes`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `yes`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: The bail record recounts the victim narrative and an alleged downstream account-opening/money-transfer facilitation network.

## Actor and attribution analysis

### SEIAI-0090-A01: Telecom/police digital-arrest operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Operating the phone/WhatsApp digital-arrest pretext and directing victim transfers.
- Limitation: No provider/device evidence in the bail order resolves the human operators.

### SEIAI-0090-A02: Amresh Kumar Singh
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `witness_or_statement` + `co_accused_link`
- Attribution strength: **limited**
- Conduct assessed: Alleged onboarding/account-opening and money-transfer facilitation within downstream network.
- Limitation: Applicant-specific link is bail-stage and contested; source does not identify him as the caller or clearly map focal victim funds to him.
- Alternative explanation: He described his Jan Seva Kendra work and business arrangement as legitimate and denied knowledge of fraud.


### Incident-level attribution assessment

- Attribution target: Unresolved victim-facing police/telecom impersonators and Amresh Kumar Singh’s alleged downstream facilitation role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The source is a bail order. It does not identify the original caller through independent provider/device evidence, and the applicant disputed knowledge of fraudulent funds and described his work as legitimate Jan Seva Kendra/account-opening facilitation.
- Alternative explanation: The applicant argued that he entered a purported investment/business arrangement and did not know that funds were linked to fraud.

## Primary evidentiary gap

Authenticated telecom/WhatsApp/device evidence resolving the original impersonators and transaction-level evidence establishing the knowledge and intent of downstream facilitators.

## Legal/procedural notes

BNS 318(4); BNS 308(2); BNS 61(2); IT Act 66-D

## Coding decisions

Focal loss is INR 7.5 million. Applicant-specific allegations are kept separate from the unresolved victim-facing operators.
