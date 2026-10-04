# SEIAI-0124: RBL Securities WhatsApp trading-app fraud

## Record status

- Case ID: `SEIAI-0124`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0124-01 | T1 | bail_order | Rahul Kumar Nishad v. State of NCT of Delhi, 11 March 2026 |

Source URL: https://indiankanoon.org/doc/133598950/

## Procedural posture

- Court / authority: Delhi High Court
- Case / FIR: BAIL APPLN. 4852/2025; FIR No.480/2024
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Delhi senior complainant was added to WhatsApp investment groups by a persona calling herself Ishani Mehta and claiming to assist RBL Securities. A trading-app link and investment representations induced a reported INR 63.871 million loss. The bail record describes significant bank, telecom and Google/IP investigative material.

## Reconstruction

### Initial contact

On 13 August 2024 a complainant in his sixties was added to a WhatsApp group by a woman calling herself Ishani Mehta and presenting herself as an assistant of RBL Securities.

### Pretext

The operators added the complainant to further groups, shared a trading-application link and induced large transfers for purported investment activity.

### Requested action

Use the trading application and transfer investment funds to accounts supplied through the scheme.

### Victim action and consequence

The complainant reported a total loss of INR 63,871,010.

- Reported financial loss: INR 63871010
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `not_reported`
- Bank / transaction: `yes`
- IP / login: `yes`
- Device: `not_reported`
- Chat / message: `yes`
- Email: `not_reported`
- Social media: `not_reported`
- CCTV / video: `not_reported`
- Platform records: `yes`
- Forensic examination: `not_reported`

Other evidence: not_reported

## Actor and attribution analysis

### SEIAI-0124-A01: Ishani Mehta / RBL-impersonating WhatsApp operator cluster
- Identity resolution: `partially_identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0124-A02: Downstream beneficiary and technical-infrastructure network
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

- Attribution target: RBL-impersonating WhatsApp operators and downstream account/infrastructure network.
- Primary basis: `ip_or_login_record`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The public record supports technical and financial tracing but does not establish that every downstream person controlled the Ishani Mehta identity or original WhatsApp groups.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

End-to-end device/provider attribution tying the victim-facing WhatsApp identities and trading app to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

No implication is made that RBL Securities itself was involved; the brand was used as an impersonation pretext.
