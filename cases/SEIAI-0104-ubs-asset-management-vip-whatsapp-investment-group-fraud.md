# SEIAI-0104: UBS Asset Management VIP WhatsApp investment-group fraud

## Record status

- Case ID: `SEIAI-0104`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0104-01 | T1 | final_judgment | V-Mart Retail Limited v. Nodal Cyber Cell Officer of Tamil Nadu and Ors., 3 November 2025 |

Source URL: https://indiankanoon.org/doc/36272070/

## Procedural posture

- Court / authority: Madras High Court
- Case / FIR: W.P.Crl.No.474/2025; NCRP No.32901250002138
- Primary source stage: `final_judgment`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Madras High Court decided V-Mart's account-freeze challenge on 3 November 2025, restricting/proportioning the freeze while recording the underlying NCRP investment-fraud complaint and preliminary money trail; the judgment did not adjudicate the fraud operators' guilt.

## Neutral case summary

A complainant reported joining a WhatsApp group styled 'UBS Asset Management VIP exclusive group' and investing INR 14.8 million before realizing that no repayment was forthcoming and more money was being demanded. Police preliminary tracing followed a specific INR 2.2 million subset through several bank layers, with INR 4,194 reaching a V-Mart retail account. The High Court proceeding concerned proportionality of freezing that remote-layer account, so the record supports the attack and financial path more strongly than human attribution.

## Reconstruction

### Initial contact

The complainant reported joining a WhatsApp group called 'UBS Asset Management VIP exclusive group' for trading.

### Pretext

The group induced the complainant to invest on a trading/investment pretext, provided no repayment and demanded further payments for additional reasons.

### Requested action

Invest through the purported UBS-branded WhatsApp trading group and continue making payments.

### Victim action and consequence

The complainant reported investing INR 14,800,000 and receiving no repayment. Preliminary investigation specifically traced a subset of INR 2,200,000 through layered bank accounts, including INR 4,194 reaching a V-Mart HDFC account at a remote layer.

- Reported financial loss: INR 14800000
- Payment method: `bank_transfer`

## Evidence map

- Phone/SIM: `not_reported`
- CDR/telecom: `not_reported`
- Bank/transaction: `yes`
- IP/login: `not_reported`
- Device: `not_reported`
- Chats/messages: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: NCRP complaint and preliminary bank-layer tracing: INR 2.2 million to an IDFC account, then portions through ICICI, PNB and a V-Mart HDFC account; the V-Mart account appeared in numerous NCRP complaints but was asserted to be a legitimate retail pass-through account.

## Actor and attribution analysis

### SEIAI-0104-A01: UBS WhatsApp investment-group operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement` + `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Operating the WhatsApp investment pretext and inducing continued payments under the purported UBS-branded trading scheme.
- Limitation: The complaint and court record establish the victim-facing pretext, but no provider/device evidence identifies the human operators.

### SEIAI-0104-A02: Downstream beneficiary-account network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` + `documentary_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving and routing a traced subset of the complainant's investment-fraud payments through layered accounts.
- Limitation: The payment path is concrete, but the source does not establish knowledge/intent for every account and does not map the full INR 14.8 million reported loss.
- Alternative explanation: At remote layers, legitimate merchant/pass-through transactions are possible, as illustrated by V-Mart's account-freeze challenge.


### Incident-level attribution assessment

- Attribution target: Unknown WhatsApp investment-group operators and downstream beneficiary-account network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitations: The judgment is primarily an account-freeze proportionality dispute. It records the complainant's reported investment loss and a specific traced payment subset, but does not identify the WhatsApp operators or establish that remote-layer legitimate merchant accounts knowingly participated.
- Alternative explanation: Receipt of INR 4,194 in V-Mart's retail collection account can reflect a legitimate customer purchase or pass-through rather than knowing participation in the investment fraud; the High Court treated blanket freezing as disproportionate.

## Primary evidentiary gap

Authenticated WhatsApp group/provider/device records identifying the operators, plus complete transaction-level tracing of the reported INR 14.8 million loss to human-controlled endpoints.

## Legal/procedural notes

No additional legal provisions coded.

## Coding decisions

Financial loss codes the complainant-reported INR 14.8 million total. INR 2.2 million is a specifically traced subset, not a replacement for the reported total. V-Mart is not coded as a fraud actor merely because a small remote-layer amount reached its account.
