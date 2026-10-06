# SEIAI-0244: ICICI NRE-account phishing and Uday Enterprises transfer fraud

## Record status

- Case ID: `SEIAI-0244`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0244-01 | T1 | appellate_judgment | ICICI Bank Limited v. Uma Shankar Sivasubramanian, 9 November 2022 |

Source URL:
- https://indiankanoon.org/doc/43741476/

## Procedural posture

- Court / authority: Madras High Court
- Case: C.M.A.No.2863/2019; Cyber Appeal No.1/2010
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: The Madras High Court dismissed ICICI Bank's civil miscellaneous appeal and left the underlying adjudicatory finding of bank liability intact.

## Neutral case summary

An NRI ICICI customer entered banking credentials into an ICICI-branded phishing link. Seven unauthorized transfers moved INR 646,000 to an account in the name of Uday Enterprises, after which INR 460,000 was withdrawn. The bank later described the event as an Actual Infinity Phishing Fraud. The Madras High Court dismissed the bank's appeal from the IT adjudicatory process. The phishing and financial path are well documented, but the human phishing operator remains unresolved.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: NRI / retail banking.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

An NRI ICICI customer received an email link using an ICICI-branded domain and entered his user ID, password, debit-card number and PIN.

### 4. Pretext

The email presented itself as a genuine ICICI Bank communication requiring banking information. Unauthorized transfers followed shortly afterward.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Enter ICICI internet-banking and card credentials into the supplied bank-branded link.

### 7. Victim action

The complainant entered his credentials. Seven transactions then transferred INR 646,000 to an account in the name of Uday Enterprises.

### 8. Consequence

- Reported focal financial loss: INR 646000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `no`

## Timeline

Structured date fields:
- incident_start_date: `2007-09-02`
- incident_end_date: `2007-09-07`
- incident_year: `2007`

## Evidence map

- Phone / SIM evidence: `not_reported`
- CDR evidence: `not_reported`
- Bank evidence: `yes`
- IP / login evidence: `yes`
- Device evidence: `not_reported`
- Message / chat evidence: `not_reported`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other evidence: Account statements, phishing email, bank investigation, beneficiary KYC and subsequent self-cheque withdrawals.

## Actor and attribution analysis

### SEIAI-0244-A01: Unknown ICICI phishing operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Attribution basis: `message_or_email_content` / `ip_or_login_record`
- Attribution strength: **limited**
- Conduct assessed: Sending the ICICI-branded phishing communication and eliciting internet-banking and card credentials.
- Limitation: The adjudicatory proceedings concern bank liability and do not identify the human email operator.
- Alternative explanation: The phishing sender may have been different from the downstream beneficiary-account controller.

### SEIAI-0244-A02: Uday Enterprises beneficiary-account controller

- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving and withdrawing the proceeds of the phishing-enabled transfer.
- Limitation: The business and account identity does not resolve the human who authored the phishing email or personally executed every withdrawal.
- Alternative explanation: The account may have been controlled or used by persons distinct from the phishing sender.


### Incident-level attribution assessment

- Attribution target: Unknown phishing operator and the downstream Uday Enterprises beneficiary-account layer
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The civil/IT adjudications establish the phishing event and beneficiary path but do not finally resolve the human phishing operator. Uday Enterprises is an account/business identity rather than a proved victim-facing human.
- Alternative explanation: The phishing sender and the person controlling or withdrawing from the Uday Enterprises account may have been different actors.

## Primary evidentiary gap

Human-level attribution linking the phishing email, internet-banking session and beneficiary withdrawals.

## Legal/procedural notes

Information Technology Act Sections 43, 46, 57 and 62; civil liability proceedings

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The gross unauthorized transfer was INR 646,000. INR 150,171 remaining in the beneficiary account was later transferred back, and the adjudicating authority used INR 495,829 as the net financial loss. The Atlas uses the gross focal unauthorized transfer in financial_loss_inr and preserves recovery in this note.
