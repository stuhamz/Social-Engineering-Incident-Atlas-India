# SEIAI-0143: WhatsApp INR 25 lakh lucky-draw advance-fee fraud

## Record status

- Case ID: `SEIAI-0143`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0143-01 | T1 | bail_order | Sawitry Devi @ Savitri Devi v. State of Jharkhand, 19 February 2026 |

Source URL: https://indiankanoon.org/doc/178036223/

## Procedural posture

- Court / authority: Jharkhand High Court
- Case / FIR: A.B.A. 933/2026; Kersai P.S. Case No.39/2022
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Anticipatory-bail proceeding concerning a petitioner still under investigation; charge sheet had been submitted against other accused.

## Neutral case summary

A Jharkhand victim was told over WhatsApp that he had won INR 25 lakh and was induced to make repeated advance payments, ultimately losing INR 160,000. The money was directed to a named SBI account. The reviewed anticipatory-bail order distinguishes the unresolved caller and beneficiary layer from petitioner Sawitry Devi, whose alleged role was limited to envelope delivery.

## Reconstruction

### Initial contact

The informant received a WhatsApp call from an unknown number stating that a lucky draw of INR 25 lakh had taken place in his name.

### Pretext

The caller said advance payments were required to receive the prize, first demanding INR 15,000 and then INR 30,000, with further calls requesting more money.

### Requested action

Transfer advance amounts into a named SBI account to receive the purported INR 25 lakh prize.

### Victim action and consequence

The informant transferred INR 15,000, then INR 30,000, and further amounts after repeated calls, for a total of INR 160,000.

- Reported focal financial loss: INR 160000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
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

### SEIAI-0143-A01: Lucky-draw WhatsApp caller(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Claiming the victim had won INR 25 lakh and repeatedly directing advance payments.
- Limitation: The caller identity is unresolved.
- Alternative explanation: One or multiple callers may have operated the number.

### SEIAI-0143-A02: Dipti Das named beneficiary-account layer
- Identity resolution: `partially_identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Receiving the initial INR 15,000 and INR 30,000 payments in the SBI account named in the FIR recital.
- Limitation: The account name does not establish who controlled the account or knew the wider scheme.
- Alternative explanation: The named holder may have had a narrower mule or intermediary role.

### SEIAI-0143-A03: Sawitry Devi @ Savitri Devi
- Identity resolution: `identified`
- Role layer: `organisational`
- Victim-facing function: `no`
- Financial function: `no`
- Direct victim contact: `no`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Allegedly delivering envelopes to addressees; no victim-facing call or focal fund receipt is established in the reviewed order.
- Limitation: The petitioner's alleged conduct is peripheral to the focal manipulation and her involvement remained under investigation.
- Alternative explanation: She said she only delivered envelopes to the named addressees.


### Incident-level attribution assessment

- Attribution target: Unknown lucky-draw caller(s), the named beneficiary-account layer and petitioner Sawitry Devi's alleged courier role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `unclear`
- Attribution strength: **limited**
- Limitations: The source identifies the beneficiary account name and says charge sheet was filed against other accused, but does not identify the caller; the petitioner's only alleged role was delivering envelopes.
- Alternative explanation: The petitioner denied cybercrime membership and said she merely delivered envelopes to named addressees.

## Primary evidentiary gap

Subscriber/device evidence linking the WhatsApp number to the caller and account-control evidence resolving who controlled the beneficiary account.

## Legal/procedural notes

IPC 419, 420, 120B; IT Act 66C, 66D

## Coding decisions

No controlled Atlas prize/lottery category exists, so the primary attack category is coded other rather than forcing social-media impersonation or investment fraud.
