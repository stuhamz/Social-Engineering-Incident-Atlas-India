# SEIAI-0235: ICICI phishing email and disputed IP/device attribution

## Record status

- Case ID: `SEIAI-0235`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prosecution theories and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0235-01 | T1 | final_judgment | State by Cyber Crime P.S. v. Nikhil Dhingra & Anr., 6 March 2015 |

Source URL:
- https://indiankanoon.org/doc/190003100/

## Procedural posture

- Court / authority: I Addl. Chief Metropolitan Magistrate, Bangalore
- Case: CC No.37986/2010
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `acquitted`
- Disposition: Accused Nos.1 and 2 were acquitted on 6 March 2015; the original file was preserved because split-up proceedings against accused Nos.3 to 5 remained pending.

## Neutral case summary

A prosecution alleged that an ICICI Bank phishing email induced an NRI account holder to disclose login particulars, after which INR 400,000 was transferred to two Kolkata beneficiary accounts. The final trial judgment acquitted the two accused before the court. The court emphasized mismatched phishing and transaction IP evidence, non-examination of the victim and complainant, deficient seizure proof, incomplete beneficiary investigation and a Truth Lab report that found no phishing or transaction material on the seized laptop. The incident is therefore coded as a clear phishing sequence with unresolved human attribution.

## Reconstruction

### Target

Target type: `individual`. Sector/context: retail banking / NRI banking.

### Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### Initial contact

The prosecution alleged that an ICICI Bank-branded phishing email induced the NRI account holder to provide login particulars under an account-update pretext.

### Pretext

A sender presented the message as an ICICI Bank communication requiring account details to be updated, after which unauthorized access and transfers were alleged.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### Requested action

Provide ICICI Bank login particulars in response to the purported account-update communication.

### Victim action

The source states that the account holder furnished login particulars and INR 400,000 was then transferred from the account to two beneficiary accounts.

### Consequence

- Financial loss: INR 400000
- Payment method: `bank_transfer`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

- incident_start_date: `2009-04-17`
- incident_end_date: `2009-04-18`
- incident_year: `2009`

## Evidence map

- Phone / SIM evidence: `yes`
- CDR evidence: `yes`
- Bank evidence: `yes`
- IP / login evidence: `yes`
- Device evidence: `yes`
- Message / chat evidence: `not_reported`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- Platform/provider records: `yes`
- Forensic examination reported: `yes`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `yes`
- Evidence-integrity issue reported: `yes`
- Other evidence: Truth Lab forensic report, domain-name lookup material, pay-in slips, cheque material and seizure records.

## Actor and attribution analysis

### SEIAI-0235-A01: Unknown ICICI phishing-email operator

- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Attribution basis: `message_or_email_content` / `ip_or_login_record`
- Attribution strength: **limited**
- Conduct assessed: Sending the bank-impersonation phishing communication and inducing disclosure of login particulars.
- Limitation: The source documents the phishing communication but the relevant IP trail did not resolve the human sender and did not establish that either tried accused sent it.
- Alternative explanation: The sender may have been an unresolved third party distinct from the tried accused and beneficiary-account holders.
### SEIAI-0235-A02: Nikhil Dhingra, alleged phishing operator

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `uncertain`
- Financial function: `no`
- Attribution basis: `ip_or_login_record` / `documentary_record`
- Attribution strength: **unclear**
- Conduct assessed: Alleged authorship of the phishing email and participation in the ICICI deception.
- Limitation: The accused-linked IP was not shown to conduct the transactions; the phishing and transaction IPs differed; no incriminating material was seized from him; and the trial ended in acquittal.
- Alternative explanation: The source leaves open that another person controlled the phishing infrastructure.
### SEIAI-0235-A03: Saupam Das, alleged unauthorized-account-access operator

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Attribution basis: `device_possession_or_forensics` / `bank_account_or_money_flow`
- Attribution strength: **unclear**
- Conduct assessed: Alleged unauthorized access to the victim account and transfer of funds to downstream beneficiary accounts.
- Limitation: No phishing email or transaction material linked to the accused was found on the examined laptop; no direct victim-to-accused transaction was shown; and the accused was acquitted.
- Alternative explanation: A different technical or banking-session operator may have used the compromised credentials.
### SEIAI-0235-A04: Subrato Mukherjee, named beneficiary-account holder

- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Beneficiary-account association with half of the focal transferred amount.
- Limitation: The source does not establish that the account holder operated the phishing email, controlled the bank session or knowingly participated in the full scheme; split-up proceedings were preserved.
- Alternative explanation: The account could have been used by or for another operator; account ownership alone does not prove authorship of the deception.
### SEIAI-0235-A05: Sanjay Singh, named beneficiary-account holder

- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Beneficiary-account association with half of the focal transferred amount.
- Limitation: The source does not establish that the account holder operated the phishing email, controlled the bank session or knowingly participated in the full scheme; split-up proceedings were preserved.
- Alternative explanation: The account could have been used by or for another operator; account ownership alone does not prove authorship of the deception.

### Incident-level attribution assessment

- Attribution target: Nikhil Dhingra and Saupam Das as the alleged phishing and unauthorized-account-access operators
- Primary basis: `ip_or_login_record`
- Secondary basis: `device_possession_or_forensics`
- Attribution strength: **unclear**
- Limitations: The phishing-email IP differed from the transaction IP; the accused-linked IP was not shown to conduct the transactions; the victim and complainant were not examined; seizure proof was deficient; and the Truth Lab report found no phishing, transaction or inter-accused communication material on the examined laptop.
- Alternative explanation: The named beneficiary-account holders or other unresolved operators may have controlled the phishing or transaction path; the source does not establish overlap between those roles and the two tried accused.

## Primary evidentiary gap

Authenticated end-to-end linkage from the phishing email, login session and transaction IPs to identified human operators, together with a completed beneficiary-account investigation.

## Legal/procedural notes

Legal provisions: IT Act 66C; IT Act 66D; IPC 417; IPC 34

The primary source is a final criminal judgment. The Atlas codes the underlying manipulation sequence separately from the court's finding that the charged guilt of the named accused was not proved beyond reasonable doubt.

## Coding decisions

This record deliberately separates the phishing sender, the alleged account-access operator and the two named beneficiary-account holders. The acquittal is not coded as evidence that no phishing occurred. It is coded as a final merits finding that the prosecution failed to connect the tried accused to the operational chain.

Research note: The judgment header lists 22 April 2009 as the date of offence, while the reasons identify the illegal transactions as occurring on 17 and 18 April 2009 and describe the complaint as filed on 22 April. The structured incident dates use the more specific transaction dates stated in the reasons. Four transaction-related IP addresses were reported as belonging to the USA, so cross_border_dimension is coded suspected rather than yes.
