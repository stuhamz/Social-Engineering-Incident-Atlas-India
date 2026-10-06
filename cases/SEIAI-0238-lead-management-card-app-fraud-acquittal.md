# SEIAI-0238: Lead Management service impersonation and card/app fraud

## Record status

- Case ID: `SEIAI-0238`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prosecution theories and final judicial findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0238-01 | T1 | final_judgment | State by R.T. Nagar Police Station v. Rakesh Kumar K.A. & Anr., 18 July 2025 |

Source URL:
- https://indiankanoon.org/doc/17206987/

## Procedural posture

- Court / authority: VIII Addl. Chief Judicial Magistrate, Bengaluru City
- Case: C.C.No.27944/2019; Crime No.292/2018
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `acquitted`
- Disposition: Rakesh Kumar K.A. and Raghavendra @ Raghu were acquitted on 18 July 2025 after the court found the prosecution had not connected the visitors, apps, card details, OTP path or transaction proceeds to them with cogent evidence.

## Neutral case summary

Two men allegedly entered a Bengaluru transport business claiming to represent a lead-management company, offered business leads, took the complainant's phone, downloaded applications and insisted that a nominal INR 200 payment be made by card. The complainant later saw four unauthorized debits totalling INR 63,000. Although bank and card statements were produced, investigators did not seize the relevant phones, obtain app or wallet evidence, trace IP or communication records, or prove that the proceeds reached the accused or their associates. The final trial judgment acquitted both accused.

## Reconstruction

### Target

Target type: `business`. Sector/context: transport / courier small business.

### Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### Initial contact

Two men came to Mayur Angadi's transport office claiming to work for a lead-management company that could provide transport and courier business opportunities.

### Pretext

The visitors said a small INR 200 registration or service payment had to be made by card, took the complainant's phone and cards, downloaded applications and represented failed card swipes as part of the service process.

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `no`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `no`
- Repeated contact: `no`
- Other: Business-opportunity pretext combined with a nominal registration/payment step.

### Requested action

Allow the purported service employees to access the mobile phone, install applications and process a nominal INR 200 card payment.

### Victim action

The complainant handed over his phone, allowed applications to be installed and provided a Citibank credit card and SBI debit card for swiping. The next day he received debit messages totalling INR 63,000.

### Consequence

- Financial loss: INR 63000
- Payment method: `card`
- Credential compromise: `unknown`
- Device compromise: `unknown`

## Timeline

- incident_start_date: `2018-09-17`
- incident_end_date: `2018-09-18`
- incident_year: `2018`

## Evidence map

- Phone / SIM evidence: `not_reported`
- CDR evidence: `not_reported`
- Bank evidence: `yes`
- IP / login evidence: `not_reported`
- Device evidence: `no`
- Message / chat evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `no`
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `yes`
- Other evidence: SBI and credit-card statements, complaint, victim testimony and voluntary statements; the relevant phones, wallet/application records and beneficiary evidence were not secured.

## Actor and attribution analysis

### SEIAI-0238-A01: Rakesh Kumar K.A., alleged in-person service operator

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Allegedly presenting the business-service pretext, obtaining access to the phone/cards and participating in the app/card sequence.
- Limitation: The complaint did not name or describe the accused, relevant phones/apps were not seized, and no beneficiary or wallet trail linked the later transactions to him.
- Alternative explanation: The in-person visitor and later digital transaction operator may have been different persons.
### SEIAI-0238-A02: Raghavendra @ Raghu, alleged in-person service operator

- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Allegedly presenting the lead-management pretext and participating in the phone/card handling sequence.
- Limitation: Raghavendra was not named in the original complaint, the claimed ID verification was not recorded there, and no device/app/payment endpoint evidence tied him to the unauthorized debits.
- Alternative explanation: The in-person visitor and later digital transaction operator may have been different persons.
### SEIAI-0238-A03: Unknown card/wallet transaction operator

- Identity resolution: `unknown`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Executing or receiving the unauthorized card/account transactions totalling INR 63,000.
- Limitation: The prosecution did not establish transfer to either accused or a known associate and did not secure the relevant wallet or app evidence.
- Alternative explanation: An unresolved third party may have executed the transactions.

### Incident-level attribution assessment

- Attribution target: Rakesh Kumar K.A. and Raghavendra @ Raghu as the alleged in-person, card and app operators
- Primary basis: `witness_or_statement`
- Secondary basis: `documentary_record`
- Attribution strength: **limited**
- Limitations: The complaint did not name or describe the accused, no CCTV existed, the complainant's phone and the accused phones were not seized, app/wallet evidence and IP/network evidence were not collected, and no transfer to the accused or a known associate was proved.
- Alternative explanation: The in-person visitors and the unknown operator responsible for the later unauthorized card/account transactions may not have been the same persons; the financial endpoint was unresolved.

## Primary evidentiary gap

Device/app logs, card/wallet transaction provenance and beneficiary records linking the in-person visitors to the unauthorized INR 63,000 transactions.

## Legal/procedural notes

Legal provisions: IPC 419; IPC 420; IPC 34; IT Act 66C; IT Act 66D

The primary source is a final criminal judgment. The Atlas codes the underlying manipulation sequence separately from the court's finding that the charged guilt of the named accused was not proved beyond reasonable doubt.

## Coding decisions

The two in-person defendants are coded separately from the unresolved digital/card transaction operator. Their identified human identities do not convert the later unauthorized transaction conduct into proved attribution.

Research note: The source gives the incident as 17/18 September 2018. financial_loss_inr records the four victim-reported debits totalling INR 63,000. The payment_method is coded card because the source ties the attack to the complainant's credit/debit cards, while the precise downstream wallet or online settlement path remained unproved.
