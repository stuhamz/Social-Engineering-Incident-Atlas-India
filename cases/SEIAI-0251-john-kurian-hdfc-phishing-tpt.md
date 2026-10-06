# SEIAI-0251: HDFC deceptive-email and TPT beneficiary fraud

## Record status

- Case ID: `SEIAI-0251`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0251-01 | T1 | appellate_judgment | HDFC Bank v. John Kurian, 29 October 2024 |

Source URL:
- https://indiankanoon.org/doc/166322925/

## Procedural posture

- Court / authority: Kerala State Consumer Disputes Redressal Commission
- Case: Appeal No.686/2015; C.C.No.423/2010
- Primary source stage: `appellate_judgment`
- Public case status: `appeal`
- Conviction status: `not_applicable`
- Disposition: The Kerala State Commission allowed HDFC Bank appeal and set aside the District Commission finding of deficiency.

## Neutral case summary

John Kurian received a deceptive HDFC-branded email seeking account details, recognized it as suspicious and alerted the bank. Soon afterward, a beneficiary named Deepak was added and INR 495,000 was transferred through TPT. The appellate record concluded that the bank system had not been hacked and that credentials had been obtained through phishing or another illegal means. The case is retained because the deceptive email and financial path are visible, while the exact credential-compromise mechanism and human operator remain uncertain.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: retail banking.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

John Kurian received an HDFC-branded email on 3 January 2008 seeking account details and immediately notified HDFC that the message looked suspicious.

### 4. Pretext

The email appeared to be a bank communication. Although the complainant recognized it as deceptive, his customer ID and password were later used to add a beneficiary and make a transfer.

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

Disclose account information through the bank-branded email flow.

### 7. Victim action

The complainant reported the deceptive message rather than knowingly complying, but the account credentials were later compromised by phishing or another illegal means and INR 495,000 was transferred to a beneficiary named Deepak.

### 8. Consequence

- Reported focal financial loss: INR 495000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: `2008-01-03`
- incident_end_date: `2008-01-07`
- incident_year: `2008`

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
- Other evidence: Email correspondence, beneficiary addition, TPT records, bank statements and complaint records.

## Actor and attribution analysis

### SEIAI-0251-A01: Unknown HDFC-branded deceptive-email operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Attribution basis: `message_or_email_content` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Sending the deceptive HDFC-branded email seeking account information.
- Limitation: The victim recognized the message as deceptive and warned the bank, so the source does not prove that this exact email yielded the later-used credentials.
- Alternative explanation: Credentials may have been stolen through another phishing or illegal mechanism.

### SEIAI-0251-A02: Deepak beneficiary identity / account

- Identity resolution: `partially_identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving and withdrawing the unauthorized transfer.
- Limitation: Only a beneficiary name and account identity is visible in the appellate record; it does not establish that Deepak authored the phishing communication.
- Alternative explanation: Beneficiary or cash-out actor may be distinct from the credential-theft operator.


### Incident-level attribution assessment

- Attribution target: Unknown credential-compromise operator and the partially identified beneficiary Deepak
- Primary basis: `message_or_email_content`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Limitations: The appellate record does not establish that the victim actually disclosed credentials through the deceptive email; it states the credentials were acquired through phishing mail or some other illegal means. Deepak is visible as a beneficiary identity but the record does not prove he authored the phishing.
- Alternative explanation: Credential theft may have occurred through a mechanism other than the observed deceptive email, and the beneficiary may have been distinct from the phishing operator.

## Primary evidentiary gap

Technical evidence connecting the deceptive email to the actual credential compromise and resolving the beneficiary account to the victim-facing operator.

## Legal/procedural notes

Consumer Protection Act proceedings

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The beneficiary withdrew INR 450,000 shortly after receipt and the remaining amount soon afterward. Because the victim had identified the email as deceptive before the transfer, the Atlas does not state that he entered credentials into that email.
