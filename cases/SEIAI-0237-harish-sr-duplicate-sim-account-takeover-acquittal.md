# SEIAI-0237: Duplicate-SIM takeover and unresolved OTP-transfer attribution

## Record status

- Case ID: `SEIAI-0237`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prosecution theories and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0237-01 | T1 | final_judgment | Cyber Crime Police Station v. Harish S.R., 28 March 2026 |

Source URL:
- https://indiankanoon.org/doc/55606317/

## Procedural posture

- Court / authority: XLV Addl. Chief Judicial Magistrate, Bengaluru
- Case: C.C.No.6821/2024
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `acquitted`
- Disposition: Harish S.R. was acquitted on 28 March 2026. The court highlighted hostile/weak witness evidence, missing forensic results and failures to establish device and recipient-account ownership.

## Neutral case summary

The complainant reported that his mobile number was locked, a duplicate SIM was obtained and OTP access was then used to transfer money from his bank account. Harish S.R. was prosecuted as the alleged operator. At trial the complainant said he had never seen the accused before court, the seizure witness did not support the prosecution, the seized phone's ownership was not established, the FSL report was unavailable and the transfer amount and recipient-account owner had not been investigated. The final judgment acquitted the accused, making the case a clear example of a visible SIM-takeover mechanism without resolved human attribution.

## Reconstruction

### Target

Target type: `individual`. Sector/context: personal banking / telecom subscriber.

### Reconnaissance

Reconnaissance present: `not_reported`. The attack required use of the complainant's specific mobile number, but the source does not explain how that information was obtained.

### Initial contact

On 10 May 2017 an unknown person caused the complainant's mobile number to be locked and a duplicate SIM to be obtained; the exact telecom-facing contact channel is not reported.

### Pretext

The unknown requester allegedly assumed authority over the legitimate subscriber number, enabling receipt of OTPs and subsequent unauthorized bank transfers.

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `not_reported`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: Subscriber-identity substitution at the telecom-service layer.

### Requested action

Issue or activate a duplicate SIM for the complainant's registered mobile number.

### Victim action

The telecom service replaced the SIM; the complainant later discovered that money had been transferred from his bank account. The complainant did not knowingly comply with the attacker.

### Consequence

- Financial loss: not coded
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

- incident_start_date: `2017-05-10`
- incident_end_date: `2017-05-16`
- incident_year: `2017`

## Evidence map

- Phone / SIM evidence: `yes`
- CDR evidence: `not_reported`
- Bank evidence: `not_reported`
- IP / login evidence: `not_reported`
- Device evidence: `yes`
- Message / chat evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `yes`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `yes`
- Evidence-integrity issue reported: `yes`
- Other evidence: A Vivo mobile and purse were seized; an FSL acknowledgment was marked, but the forensic report itself was unavailable at trial.

## Actor and attribution analysis

### SEIAI-0237-A01: Duplicate-SIM / telecom-impersonation operator

- Identity resolution: `unknown`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `no`
- Attribution basis: `witness_or_statement` / `sim_or_subscriber_record`
- Attribution strength: **limited**
- Conduct assessed: Obtaining or causing issuance of a duplicate SIM for the complainant's registered mobile number.
- Limitation: The judgment does not reproduce the telecom request/KYC trail identifying the requester, and the alleged requester was not resolved to a specific human.
- Alternative explanation: The requester and the later OTP/banking operator may have been different persons.
### SEIAI-0237-A02: Online-banking / transfer operator

- Identity resolution: `unknown`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Using diverted OTP or number control to execute or facilitate the unauthorized bank transfer.
- Limitation: The amount, recipient-account owner and human banking-session operator were not established in the final trial record.
- Alternative explanation: The financial operator may have been distinct from the duplicate-SIM requester and from Harish S.R.
### SEIAI-0237-A03: Harish S.R., alleged duplicate-SIM and OTP operator

- Identity resolution: `identified`
- Role layer: `technical`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Attribution basis: `device_possession_or_forensics` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Alleged control of the duplicate-SIM/device and use of OTP access in the unauthorized transfer.
- Limitation: The victim had never seen the accused before court, mobile ownership was not established, the seizure witness was hostile, the FSL report was unavailable and the recipient account was not investigated.
- Alternative explanation: Harish may not have controlled the duplicate SIM, seized mobile or recipient account.

### Incident-level attribution assessment

- Attribution target: Harish S.R. as the alleged duplicate-SIM and OTP-transfer operator
- Primary basis: `device_possession_or_forensics`
- Secondary basis: `witness_or_statement`
- Attribution strength: **unclear**
- Limitations: The complainant had never seen the accused before court; the seizure pancha did not support the prosecution; ownership of the seized mobile was not established; the FSL report was unavailable; and investigators did not establish the transfer amount or ownership of the recipient account.
- Alternative explanation: The duplicate-SIM requester, seized-device user and bank-transfer operator may have been different persons, and the trial record did not establish that Harish S.R. performed those functions.

## Primary evidentiary gap

Telecom replacement records, completed forensic results and bank-account evidence linking the duplicate SIM, OTP use and recipient account to an identified human operator.

## Legal/procedural notes

Legal provisions: IT Act 66C; IT Act 66D; IPC 419; IPC 420

The primary source is a final criminal judgment. The Atlas codes the underlying manipulation sequence separately from the court's finding that the charged guilt of the named accused was not proved beyond reasonable doubt.

## Coding decisions

The duplicate-SIM requester is coded as a technical/social-engineering layer with victim_facing_function = no, matching the Atlas treatment of telecom-facing impersonation. The financial transfer operator and the identified acquitted defendant are kept separate.

Research note: No financial_loss_inr is coded because the final judgment does not state a reliable transfer amount. The source identifies a 10 to 16 May 2017 offence period.
