# SEIAI-0150: Manba fake IPO investment application fraud

## Record status

- Case ID: `SEIAI-0150`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0150-01 | T1 | bail_order | Ashvini Pal v. State of U.P., 21 May 2025 |

Source URL: https://indiankanoon.org/doc/60100122/

## Procedural posture

- Court / authority: Allahabad High Court
- Case / FIR: Criminal Misc. Bail Application No.1402/2025; Case Crime No.136/2024, P.S. Cyber Crime, Agra
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular bail proceeding after investigation and charge-sheet activity; underlying merits remained pending.

## Neutral case summary

An Agra victim was approached over WhatsApp for a purported Manba IPO, directed to a third-party investment application, asked to complete KYC and told to deposit money into changing accounts. The reported loss was INR 1.85 million. Investigation recovered extensive phones, SIMs and banking instruments from the wider accused network, while applicant-specific victim-facing attribution remained weak.

## Reconstruction

### Initial contact

Unknown persons contacted the victim on WhatsApp and drew the victim into an investment/IPO group.

### Pretext

The operators offered participation in a purported Manba IPO, sent a third-party application link outside the Play Store, required KYC and instructed deposits into changing bank accounts.

### Requested action

Install/register on the supplied app, complete KYC and transfer IPO/investment funds to accounts supplied by the operators.

### Victim action and consequence

The victim transferred a total of INR 1,850,000 and later could not withdraw the displayed investment value.

- Reported focal financial loss: INR 1850000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `yes`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: IPO-allocation framing and an app-based investment interface created investment legitimacy.

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Nine mobile phones, laptop, SIMs, debit/credit cards, chequebooks and PAN material recovered from accused network according to the source.

## Actor and attribution analysis

### SEIAI-0150-A01: Manba WhatsApp/app operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Presenting the IPO opportunity, directing app installation/KYC and supplying deposit accounts.
- Limitation: The public order does not resolve the humans behind the WhatsApp/app identities.
- Alternative explanation: Several operators may have shared victim-facing and technical functions.

### SEIAI-0150-A02: Beneficiary-account / instrument cluster
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Providing or controlling changing accounts and banking instruments used to receive and route investment deposits.
- Limitation: Financial/account evidence does not identify the original WhatsApp/app operator.
- Alternative explanation: Some account holders may have acted as mules or intermediaries.

### SEIAI-0150-A03: Ashvini Pal
- Identity resolution: `identified`
- Role layer: `unknown`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `co_accused_link`
- Attribution strength: **limited**
- Conduct assessed: Alleged participation arising during investigation; the reviewed bail order gives limited focal conduct detail beyond network association.
- Limitation: No direct focal fund receipt or victim-facing communication by the applicant is established in the reviewed source.
- Alternative explanation: The applicant may have had a narrower network role than alleged.


### Incident-level attribution assessment

- Attribution target: Unknown WhatsApp/app operators, beneficiary-account cluster and applicant Ashvini Pal's alleged downstream role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `device_possession_or_forensics`
- Attribution strength: **limited**
- Limitations: The applicant's name arose during investigation through co-accused material and the public order does not establish receipt in his own account or operation of the victim-facing app/group.
- Alternative explanation: The applicant may have a narrower or indirect role within the wider account/device network.

## Primary evidentiary gap

Authenticated WhatsApp/app control evidence and applicant-specific money-flow/device evidence tying him to the focal inducement or beneficiary path.

## Legal/procedural notes

BNS 319(2), 318(4), 338, 336(3), 340(2), 3(5); IT Act 66D

## Coding decisions

Changing beneficiary account numbers after deposits is treated as a money-mule/layering indicator, not proof that every account holder operated the investment pretext.
