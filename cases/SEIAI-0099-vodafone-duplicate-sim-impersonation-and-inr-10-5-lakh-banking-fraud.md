# SEIAI-0099: Vodafone duplicate-SIM impersonation and INR 10.5 lakh banking fraud

## Record status

- Case ID: `SEIAI-0099`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0099-01 | T1 | appellate_judgment | Vodafone India Limited v. Prashant Mahadeorao Buradkar and Ors., 12 September 2024 |

Source URL: https://indiankanoon.org/doc/17652328/

## Procedural posture

- Court / authority: Telecom Disputes Settlement & Appellate Tribunal
- Case / FIR: Cyber Appeal Nos.6 and 7 of 2014; Cyber Complaint No.14/2013
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: TDSAT dismissed the telecom and bank appeals on 12 September 2024 and upheld/considered compensation liability arising from the 2011 replacement-SIM fraud; the proceeding did not determine criminal guilt of the unknown impostor.

## Neutral case summary

A person using the name Kaustubh Das presented himself at a Vodafone store as Prashant Buradkar's authorized representative and obtained a replacement SIM on 23 July 2011. Buradkar later alleged INR 1.05 million was siphoned from his SBI account. The TDSAT appellate judgment reconstructs the SIM-replacement documents, police information requests and banking loss while addressing telecom/bank liability. The human behind the impostor identity remains unresolved.

## Reconstruction

### Initial contact

On 23 July 2011 an impostor visited a Vodafone store at Vashi, represented himself as the complainant's authorized representative and requested a replacement SIM for the complainant's registered mobile number.

### Pretext

The impostor used a purported authorization letter and subscriber identity to obtain and activate a replacement SIM, which was then associated with unauthorized banking access and siphoning from the complainant's SBI account.

### Requested action

Issue and activate a replacement SIM on the basis of the purported subscriber authorization.

### Victim action and consequence

Vodafone issued and activated the replacement SIM. The complainant later alleged INR 1,050,000 was siphoned from his SBI Mahal Branch account.

- Reported financial loss: INR 1050000
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

Other evidence: SIM replacement form and submitted authorization/identity documents; police Section 91 request and telecom response; bank transaction material discussed in the adjudicatory record.

## Actor and attribution analysis

### SEIAI-0099-A01: Replacement-SIM impersonator
- Identity resolution: `unknown`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `sim_or_subscriber_record` + `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Using a false authorized-representative identity and documents to induce Vodafone to issue/activate a replacement SIM.
- Limitation: The replacement request and false representation are documented, but the human behind the identity remains unresolved and the judgment does not map that person to every banking transaction.

### SEIAI-0099-A02: Downstream banking/beneficiary cluster
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Receiving/routing the INR 1.05 million allegedly siphoned after the replacement-SIM event.
- Limitation: The financial consequence is documented for liability purposes, but actor-specific criminal attribution for the downstream recipients is not developed in the reviewed judgment.
- Alternative explanation: A beneficiary endpoint need not be the same actor who performed the SIM impersonation.


### Incident-level attribution assessment

- Attribution target: Unknown replacement-SIM impostor and downstream banking/beneficiary network.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The TDSAT judgment establishes the fraudulent replacement-SIM event and loss allegation for service-provider liability, but it does not identify the impostor as a resolved real-world human or map every downstream banking actor to that person.
- Alternative explanation: A recipient/beneficiary role in the financial trail would not by itself prove the same person made the in-person SIM-replacement request.

## Primary evidentiary gap

Human identification of the impostor through store/device/CCTV or other corroboration, and transaction/login evidence linking the replacement SIM to specific online-banking sessions and beneficiaries.

## Legal/procedural notes

Information Technology Act Sections 43, 43A, 46 and 61

## Coding decisions

The focal loss is INR 1,050,000 as stated in the adjudicatory record. Compensation figures awarded against service providers are not coded as victim loss.
