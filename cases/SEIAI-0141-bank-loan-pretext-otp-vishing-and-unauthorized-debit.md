# SEIAI-0141: Bank-loan pretext OTP vishing and unauthorized debit

## Record status

- Case ID: `SEIAI-0141`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0141-01 | T1 | bail_order | Tinku Kumar v. State of Jharkhand, 20 September 2022 |

Source URL: https://indiankanoon.org/doc/18728294/

## Procedural posture

- Court / authority: Jharkhand High Court
- Case / FIR: Criminal Revision No.749/2022; Latehar P.S. Case No.98/2021; E.R. No.12/2022
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: Criminal revision concerned rejection of bail to a juvenile accused; underlying guilt remained unadjudicated.

## Neutral case summary

A Jharkhand victim received a phone call using a bank-loan pretext and disclosed account, ATM and OTP information. INR 75,086 was then debited. The public juvenile-revision order establishes the manipulation sequence but leaves granular caller attribution unresolved.

## Reconstruction

### Initial contact

An unknown caller contacted the victim by phone under the pretext of arranging or processing a bank loan.

### Pretext

The caller used the loan narrative to induce disclosure of the victim's account number, ATM details and OTP.

### Requested action

Disclose bank-account, ATM and OTP information for the purported loan process.

### Victim action and consequence

The victim disclosed the requested information and INR 75,086 was debited from the account.

- Reported focal financial loss: INR 75086
- Payment method: `other`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not reported

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not reported

## Actor and attribution analysis

### SEIAI-0141-A01: Bank-loan pretext caller
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Calling the victim under a loan pretext and eliciting account, ATM and OTP information.
- Limitation: The caller is not identified in the reviewed order.
- Alternative explanation: The caller may be a different person from downstream account or juvenile accused actors.

### SEIAI-0141-A02: Dalchand Mandal / calling-number-linked co-accused
- Identity resolution: `partially_identified`
- Role layer: `unknown`
- Victim-facing function: `uncertain`
- Financial function: `not_assessed`
- Direct victim contact: `unknown`
- Attribution basis: `sim_or_subscriber_record`
- Attribution strength: **limited**
- Conduct assessed: Defence material associated the calling mobile number with a co-accused, but the source does not establish who physically made the focal call.
- Limitation: The source does not reproduce certified subscriber/device evidence proving caller operation.
- Alternative explanation: Subscriber association may not equal physical use at the time of the fraud.


### Incident-level attribution assessment

- Attribution target: Unknown loan-pretext caller; a co-accused was said by the defence to be associated with the calling mobile number.
- Primary basis: `sim_or_subscriber_record`
- Secondary basis: `unclear`
- Attribution strength: **limited**
- Limitations: The juvenile-revision order does not set out a complete subscriber/device attribution chain and does not establish that the juvenile petitioner made the call.
- Alternative explanation: The calling number was attributed by the defence to co-accused Dalchand Mandal rather than the juvenile petitioner.

## Primary evidentiary gap

Certified subscriber/CDR/device evidence and transaction records mapping the caller number to the operator and financial beneficiary.

## Legal/procedural notes

IPC 419, 420; IT Act 66B, 66C, 66D

## Coding decisions

The impersonated institution is not stated, so the identity category is left unknown rather than inferred as a specific bank.
