# SEIAI-0240: ICICI Lombard fictitious-entity and fake-email refund fraud

## Record status

- Case ID: `SEIAI-0240`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0240-01 | T1 | final_judgment | East CEN Crime PS v. A4 Anubhav Sharma, 30 April 2026 |

Source URL:
- https://indiankanoon.org/doc/45226042/

## Procedural posture

- Court / authority: XLV Addl. Chief Judicial Magistrate, Bengaluru
- Case: C.C.No.45006/2025
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `mixed`
- Disposition: The court found Anubhava Sharma guilty under IT Act 66D and IPC 420, acquitted him on the remaining charged offences, and released him on probation instead of imposing immediate imprisonment.

## Neutral case summary

A fictitious motor-broking entity was used to enter an insurance-company business workflow, and fake internal email approvals were recorded in the refund process. The prosecution alleged INR 88,983,100 in refunds to the associated account. The final court found Anubhava Sharma guilty of cheating and cheating by personation but acquitted him on hacking, identity-theft, criminal-breach-of-trust and forgery counts. The judgment contains internal date and header inconsistencies, which are preserved rather than normalized away.

## Reconstruction

### 1. Target

Target type: `business`. Sector/context: insurance / corporate finance operations.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

A fictitious entity presented as S.N. Finance Limited Services approached ICICI Lombard for insurance-lead business and a cash-depository arrangement.

### 4. Pretext

The entity was presented as a legitimate motor-broking business. The judgment further records fake internal email approvals used in refund processing, after which large sums were routed to the associated HDFC account.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `no`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Create and use a cash-depository relationship for the purported business entity and process refunds under apparently valid internal approvals.

### 7. Victim action

The company onboarded the entity and processed refunds into the associated account; the prosecution alleged refunds totalling INR 88,983,100.

### 8. Consequence

- Reported focal financial loss: INR 88983100
- Payment method: `bank_transfer`
- Credential compromise: `unknown`
- Device compromise: `unknown`

## Timeline

Structured date fields:
- incident_start_date: `2023-09-01`
- incident_end_date: `2024-02-26`
- incident_year: `2023`

## Evidence map

- Phone / SIM evidence: `not_reported`
- CDR evidence: `not_reported`
- Bank evidence: `yes`
- IP / login evidence: `not_reported`
- Device evidence: `not_reported`
- Message / chat evidence: `not_reported`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `no`
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `yes`
- Other evidence: Bank statements and KYC records, internal enquiry material, seizure/search records, undertaking affidavit and a Section 65B certificate.

## Actor and attribution analysis

### SEIAI-0240-A01: S.N. Finance fictitious-entity operator / Sudarshan M.A. layer

- Identity resolution: `partially_identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `documentary_record` / `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Presenting the fictitious motor-broking entity and inducing creation or use of the cash-depository relationship.
- Limitation: The human is named in the prosecution narrative but actor-specific conduct was not finally adjudicated in this trial.
- Alternative explanation: Other company or external actors may have participated in entity creation and onboarding.

### SEIAI-0240-A02: Anubhava Sharma

- Identity resolution: `identified`
- Role layer: `organisational`
- Victim-facing function: `uncertain`
- Financial function: `uncertain`
- Attribution basis: `confession_or_admission` / `documentary_record`
- Attribution strength: **strong**
- Conduct assessed: Participation in the cheating/personation scheme and associated corporate loss for which he accepted repayment liability.
- Limitation: The operative conviction is clear, but the judgment contains internal date and header anomalies and does not isolate which operational steps he personally performed.
- Alternative explanation: Other actors may have carried the external entity presentation, fake email approvals and beneficiary-account handling.


### Incident-level attribution assessment

- Attribution target: Anubhava Sharma as the accused found guilty of cheating and cheating by personation
- Primary basis: `documentary_record`
- Secondary basis: `confession_or_admission`
- Attribution strength: **strong**
- Limitations: The judgment is internally inconsistent: its header says the accused is acquitted, while the operative order convicts under IPC 420 and IT Act 66D. The undertaking reproduced in the judgment also contains dates later than the stated judgment date, and the exact operational role of each participant is not fully resolved.
- Alternative explanation: Different people may have handled the external fictitious entity, internal email approvals and downstream receipt of funds; the final judgment does not map every operational act to the accused.

## Primary evidentiary gap

A clean actor-by-actor mapping between fictitious-entity creation, internal fake-email approvals, system access and beneficiary-account control.

## Legal/procedural notes

IT Act 43; IT Act 66; IT Act 66C; IT Act 66D; IPC 408; IPC 420; IPC 468

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The judgment's formal incident period is 1 September 2023 to 26 February 2024. The text states refunds of INR 88,983,100 and elsewhere a witness refers to about INR 110,000,000. The structured loss field uses the specific prosecution figure. The header says 'Accused is acquitted' but the operative order convicts under IPC 420 and IT Act 66D.
