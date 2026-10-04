# SEIAI-0147: Toyota managing-director premium-customer vishing payment diversion

## Record status

- Case ID: `SEIAI-0147`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0147-01 | T1 | bail_order | Arun Kumar v. State of Himachal Pradesh, 29 September 2023 |

Source URL: https://indiankanoon.org/doc/156845514/

## Procedural posture

- Court / authority: Himachal Pradesh High Court
- Case / FIR: CrMP(M) 2330/2023; FIR No.90/2022, P.S. Sadar Solan
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Anticipatory bail dismissed on 29 September 2023; investigation was stated to be continuing.

## Neutral case summary

A PNB manager in Solan received a call from someone impersonating a real premium customer, Vishal Anand of Anand Toyota Auto Care. Truecaller displayed the same name, and WhatsApp/email pressure reinforced the request. The manager transferred INR 1.274 million before the real customer reported the unauthorized debit. Investigation mapped the money through beneficiary accounts and alleged a wider cyber-fraud network.

## Reconstruction

### Initial contact

A PNB manager received a call from a person claiming to be Vishal Anand, MD of Anand Toyota Auto Care, whose name also appeared on Truecaller.

### Pretext

The impersonator said he wanted to invest in mutual funds, requested an account statement and instructed the manager to transfer funds to a third-party account, promising an authority letter.

### Requested action

Provide the account statement and transfer two amounts to the account of Kunwar Singh pending a promised authority letter.

### Victim action and consequence

Believing the caller was the premium customer, the bank manager transferred INR 878,300 and INR 395,700, totalling INR 1,274,000.

- Reported focal financial loss: INR 1274000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Exploitation of an existing premium-customer relationship, caller-ID naming and pressure through WhatsApp/email.

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `yes`
- Email: `yes`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: Account-opening and transaction records; alleged destroyed mobile/SIM; recovery of INR 290,000.

## Actor and attribution analysis

### SEIAI-0147-A01: Vishal Anand impersonating caller
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Impersonating the real Toyota executive/premium customer and instructing the bank manager to make transfers.
- Limitation: The focal caller is not resolved to a named human in the public order.
- Alternative explanation: The caller may be one member of the wider alleged network.

### SEIAI-0147-A02: Arun Kumar
- Identity resolution: `identified`
- Role layer: `hybrid`
- Victim-facing function: `uncertain`
- Financial function: `yes`
- Direct victim contact: `unknown`
- Attribution basis: `co_accused_link`
- Attribution strength: **moderate**
- Conduct assessed: Alleged participation with Prajwal/Kunal in cyber frauds using bank accounts and fake-ID phone numbers; INR 290,000 was reportedly recovered.
- Limitation: The source supports alleged network involvement but does not directly tie the focal Vishal Anand call/session to Arun Kumar.
- Alternative explanation: The petitioner may have participated in related infrastructure without making this particular call.

### SEIAI-0147-A03: Kunwar Singh / downstream beneficiary-account layer
- Identity resolution: `partially_identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Providing/holding the account that received the focal INR 1.274 million before funds were routed through further accounts and cash withdrawals.
- Limitation: Account receipt and onward flow do not establish authorship of the executive impersonation.
- Alternative explanation: The account holder said another person controlled the account.


### Incident-level attribution assessment

- Attribution target: Unknown Vishal Anand impersonator and alleged Arun Kumar/Prajwal cyber-fraud network with beneficiary-account infrastructure.
- Primary basis: `co_accused_link`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The status report alleged that Arun Kumar and Prajwal contacted auto showrooms and committed fraud, but the public order does not map the focal call, WhatsApp account or email to a specific device/user.
- Alternative explanation: A person linked to the wider network may not necessarily have made this particular bank-manager call.

## Primary evidentiary gap

Recovered/authenticated caller, WhatsApp and email account artefacts tying the Vishal Anand persona to a specific accused in the network.

## Legal/procedural notes

IPC 417, 419, 420, 201, 120B

## Coding decisions

The case resembles payment-diversion/BEC logic but began with voice impersonation rather than a compromised business mailbox, so the primary category is vishing.
