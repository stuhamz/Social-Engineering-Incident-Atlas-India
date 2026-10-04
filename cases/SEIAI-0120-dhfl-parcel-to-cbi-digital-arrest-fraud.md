# SEIAI-0120: DHFL parcel-to-CBI digital-arrest fraud

## Record status

- Case ID: `SEIAI-0120`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0120-01 | T1 | bail_order | Hareesh Chaudhry v. State of Madhya Pradesh, 25 June 2026 |

Source URL: https://indiankanoon.org/doc/10480692/

## Procedural posture

- Court / authority: Madhya Pradesh High Court, Gwalior Bench
- Case / FIR: MCRC No.20375/2026; Crime No.37/2024
- Primary source stage: `bail_order`
- Public case status: `charge_sheet`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Gwalior complainant was told by a purported DHFL caller that a parcel in her name contained narcotics and passports. She was moved to Telegram, shown a staged police setting and fabricated warrants, and later confronted by a fake CBI officer alleging human trafficking and money laundering. She liquidated fixed deposits and transferred INR 3.8 million.

## Reconstruction

### Initial contact

On 9 April 2024 Dr Sujata Bapat received a call from a person calling himself Rajiv Gupta from DHFL, claiming a parcel in her name to Myanmar contained MDMA, laptops and passports.

### Pretext

The caller disclosed personal details, directed her to Telegram, connected her to a staged police station and fabricated warrants, then a purported CBI officer alleged human-trafficking and money-laundering links and demanded transfer of funds for verification/settlement.

### Requested action

Install/use Telegram, remain engaged with the purported investigation and transfer funds to accounts designated for verification/settlement.

### Victim action and consequence

The complainant prematurely encashed ten fixed deposits, transferred INR 3.5 million to a PNB account and later another INR 300,000 to a Kotak Mahindra Bank account.

- Reported financial loss: INR 3800000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `not_reported`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `not_reported`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0120-A01: Parcel/police/CBI impersonator cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0120-A02: Chaudhary Construction / downstream account network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Parcel/police/CBI impersonator cluster and downstream account controllers.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `witness_or_statement`
- Attribution strength: **moderate**
- Limitations: The applicant’s account received the INR 3.5 million tranche and the money trail is concrete, but the public order does not show that he made the initial calls or video impersonation.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Telegram/provider/device evidence resolving the staged police/CBI identities and connecting them to the downstream account network.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

Focal loss includes both INR 3.5 million and INR 300,000 transfers. The source notes that the INR 3.5 million tranche entered the applicant-linked account.
