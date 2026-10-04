# SEIAI-0105: IGL account-upgrade phishing and credit-card fraud

## Record status

- Case ID: `SEIAI-0105`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0105-01 | T1 | interim_order | Manmohan Nayak v. State Bank of India Anr Ors, 16 September 2026 |

Source URL: https://indiankanoon.org/doc/198578583/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: W.P.(C) 4801/2026; FIR No.10/2026
- Primary source stage: `interim_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi petitioner reported a phishing call and link presented as an IGL account upgrade. After using the link, an unauthorized INR 354,690 credit-card transaction was made and a merchant EMI facility was activated without his knowledge. The public order concerns interim relief in the resulting banking dispute and does not identify the phishing operator.

## Reconstruction

### Initial contact

On 6 January 2026 the petitioner reported receiving a phishing call and link in connection with a purported IGL account upgrade.

### Pretext

The communication presented the link as part of an IGL account-upgrade process; an unauthorized credit-card transaction and merchant EMI activation followed.

### Requested action

Open/use the purported IGL account-upgrade link and follow the requested account-update process.

### Victim action and consequence

The petitioner used the link; an unauthorized credit-card transaction of INR 354,690 was then carried out and a merchant EMI facility was activated without his consent.

- Reported financial loss: INR 354690
- Payment method: `card`

## Evidence map

- Phone / SIM: `not_reported`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `not_reported`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0105-A01: Unknown IGL phishing-call/link operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0105-A02: Unknown downstream merchant/payment recipient(s)
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **limited**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Unknown phishing-call/link operator(s) and downstream merchant/payment endpoint(s).
- Primary basis: `witness_or_statement`
- Secondary basis: `not_reported`
- Attribution strength: **unclear**
- Limitations: The interim writ order establishes the reported phishing event and disputed card transaction but does not identify the human operator or provide technical attribution of the link.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Provider, URL/domain, device and payment-recipient records identifying the phishing infrastructure and human operator.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

Focal loss is the unauthorized INR 354,690 card transaction. Subsequent bank recovery/deduction figures in the writ proceeding are not coded as additional fraud loss.
