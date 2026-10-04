# SEIAI-0126: World Bank saffron procurement and offshore-bank fraud

## Record status

- Case ID: `SEIAI-0126`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0126-01 | T1 | bail_order | Chizobam Krist @ Christopherchizobam @ Krist v. State of Odisha, 23 March 2026 |

Source URL: https://indiankanoon.org/doc/186827781/

## Procedural posture

- Court / authority: Orissa High Court
- Case / FIR: BLAPL No.1770/2025; CID CB Cyber Crime P.S. Case No.10/2024; CT Case No.391/2024
- Primary source stage: `bail_order`
- Public case status: `bail_or_interim`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

An Odisha informant received an email purportedly from an ex-bureaucrat offering a profitable Iranian-saffron supply arrangement for the World Bank. He deposited INR 27 million for saffron and USD 53,000 into a purported offshore bank before a further insurance demand exposed the fraud. Investigation later focused on bank withdrawals and an alleged account-selling network.

## Reconstruction

### Initial contact

The informant, who had a prior acquaintance with an Odisha ex-bureaucrat, received an email stated to be from him concerning supply of Iranian saffron to the World Bank headquarters.

### Pretext

The operators supplied a purported World Bank purchase order, induced procurement/deposit of funds for saffron, then required an offshore account at Vault Off-Shore Bank and later demanded an additional insurance payment.

### Requested action

Fund the purported saffron procurement/World Bank transaction, open the designated offshore account and pay additional insurance charges.

### Victim action and consequence

The informant supplied/deposited INR 27 million for 110 kg of saffron and deposited USD 53,000 into the purported offshore bank account; a later USD 77,550 insurance demand triggered recognition of the fraud.

- Reported financial loss: INR 27000000
- Payment method: `multiple`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `yes`
- Chat / message: `not_reported`
- Email: `yes`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0126-A01: Ex-bureaucrat / World Bank procurement impersonator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0126-A02: Alleged account-selling and cash-out network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `financial_withdrawal_or_cashout`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Email/World Bank procurement impersonator cluster and alleged account-selling/cash-out network.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `co_accused_link`
- Attribution strength: **moderate**
- Limitations: The order records allegations against a Nigerian petitioner and co-accused, including account-selling/cash withdrawal activity, but the petitioner disputed the INR 27 million transfer linkage and guilt remains unadjudicated.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Email/domain and device evidence identifying the person who authored the ex-bureaucrat/World Bank communications and tying that operator to the financial endpoints.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

financial_loss_inr codes only the source-stated INR 27 million domestic saffron/payment component because the source gives the USD 53,000 separately and no exchange-rate date is normalized. The additional USD 77,550 demand was not paid.
