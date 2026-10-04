# SEIAI-0139: Momentum Stock WhatsApp institutional-account investment fraud

## Record status

- Case ID: `SEIAI-0139`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0139-01 | T1 | final_judgment | Dr. Arunima Baruah v. State of Assam and 3 Others, 17 July 2026 |

Source URL: https://indiankanoon.org/doc/163962186/

## Procedural posture

- Court / authority: Gauhati High Court
- Case / FIR: WP(C) 2605/2024; related Surat Cyber Crime FIR LA-28/2024
- Primary source stage: `final_judgment`
- Public case status: `reported`
- Conviction status: `not_applicable`
- Disposition: The Gauhati High Court decided the account-freeze writ on 17 July 2026; the underlying Momentum fraud offender identities were not adjudicated.

## Neutral case summary

An Assam investor was added to a WhatsApp group named Momentum Stock and induced to open a purported institutional trading account. He invested over INR 1.2 crore and saw the displayed value rise to around INR 3 crore, but was removed from the group and locked out when he sought withdrawal. The writ judgment documents the victim narrative but not offender identity.

## Reconstruction

### Initial contact

The petitioner's husband, who traded in stocks, was unexpectedly added to a WhatsApp group called Momentum Stock.

### Pretext

The group induced him to open a purported Institutional Account, invest funds and rely on an account display that showed his holdings growing to roughly INR 3 crore.

### Requested action

Open the purported institutional trading account and make repeated stock-market/IPO investments.

### Victim action and consequence

The victim invested over INR 1.2 crore. When he tried to withdraw, he was removed from the WhatsApp group and the account was suspended; only INR 29,100 was received back.

- Reported focal financial loss: INR 12000000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Artificial portfolio growth and an institutional-account framing made the investment activity appear legitimate.

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not reported

## Actor and attribution analysis

### SEIAI-0139-A01: Momentum Stock WhatsApp operator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Adding the victim to the investment group, presenting the trading opportunity and sustaining the investment pretext.
- Limitation: The writ record does not identify the humans behind the WhatsApp group.
- Alternative explanation: The group may have been operated by multiple persons.

### SEIAI-0139-A02: Purported institutional-account/payment operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `uncertain`
- Financial function: `yes`
- Direct victim contact: `unknown`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Operating the purported institutional trading account and payment pathway through which the victim's funds and displayed balance were managed.
- Limitation: The source documents the payment and account display but does not resolve the controller or beneficiary chain.
- Alternative explanation: The institutional account may have been a front-end display separate from downstream beneficiary accounts.


### Incident-level attribution assessment

- Attribution target: Unresolved Momentum Stock WhatsApp and institutional-account operators.
- Primary basis: `unclear`
- Secondary basis: `unclear`
- Attribution strength: **unclear**
- Limitations: The writ proceeding concerns a frozen bank account and reconstructs the fraud from the petitioner's account; it does not identify or forensically attribute the Momentum operators.
- Alternative explanation: The proceeding does not adjudicate offender guilt and includes separate trading scams that may involve different operators.

## Primary evidentiary gap

Platform, hosting, beneficiary-account and device records resolving the Momentum WhatsApp group and institutional-account controller(s).

## Legal/procedural notes

No additional statutory coding is necessary beyond the source/case metadata for this wave.

## Coding decisions

The same source describes separate losses through Stock Frontline and other WhatsApp groups. Those are not merged into this focal Momentum Stock incident. INR 12,000,000 is coded as an approximate floor because the source says “over”/“about” INR 1.2 crore.
