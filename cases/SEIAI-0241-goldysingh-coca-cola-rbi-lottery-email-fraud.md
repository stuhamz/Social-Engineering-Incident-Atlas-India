# SEIAI-0241: Coca-Cola lottery and RBI/World Bank email fraud

## Record status

- Case ID: `SEIAI-0241`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0241-01 | T1 | appellate_judgment | Goldysingh S/o Daleetsingh v. State, 10 June 2025 |

Source URL:
- https://indiankanoon.org/doc/18568168/

## Procedural posture

- Court / authority: High Court of Karnataka, Kalaburagi Bench
- Case: CRL.RP No.200069/2020; C.C.No.2825/2012
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `convicted`
- Disposition: The High Court maintained the conviction, allowed the revision only in part on sentence, treated custody already undergone as sufficient imprisonment, enhanced the fine and directed compensation to the complainant.

## Neutral case summary

A fake email claimed the complainant had won an online lottery and used Coca-Cola, Reserve Bank of India and World Bank identities to make the scheme appear legitimate. The complainant transferred INR 16,000. The trial conviction survived first appeal and High Court revision. The High Court treated the documentary record as establishing the forged communication, induced payment and Goldysingh's criminal responsibility.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal / online communications.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

The complainant received a fake email congratulating him as a winner of an online lottery bonanza.

### 4. Pretext

Forged promotional and financial-authority material represented that the complainant had won prize money and had to transfer funds to claim the prize.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `yes`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Transfer INR 16,000 to the supplied account in order to claim the purported lottery prize.

### 7. Victim action

The complainant transferred INR 16,000 believing the fake lottery and authority representations.

### 8. Consequence

- Reported focal financial loss: INR 16000
- Payment method: `bank_transfer`
- Credential compromise: `no`
- Device compromise: `no`

## Timeline

Structured date fields:
- incident_start_date: ``
- incident_end_date: ``
- incident_year: `not_reported`

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
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other evidence: Forged promotional and authority documents and documentary evidence of the transfer.

## Actor and attribution analysis

### SEIAI-0241-A01: Goldysingh

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `yes`
- Attribution basis: `message_or_email_content` / `bank_account_or_money_flow`
- Attribution strength: **strong**
- Conduct assessed: Creating or using the fake lottery and authority communications and inducing receipt of INR 16,000.
- Limitation: The revision judgment summarizes the lower-court documentary record rather than reproducing all original technical evidence.
- Alternative explanation: None separately coded.


### Incident-level attribution assessment

- Attribution target: Goldysingh as the creator/user of the forged lottery and authority communications
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **strong**
- Limitations: The High Court judgment is a criminal revision and does not reproduce every underlying digital-forensic step from the trial record.
- Alternative explanation: No material alternative operator theory was accepted in the final revision.

## Primary evidentiary gap

Complete provider-side email metadata and full lower-court digital evidence are not reproduced in the revision judgment.

## Legal/procedural notes

IPC 420; IPC 465; IPC 468; IPC 471; IT Act 66D

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The revision judgment does not state a reliable exact incident date or year, so incident_year is coded not_reported rather than inferred from C.C.No.2825/2012.
