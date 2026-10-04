# SEIAI-0107: Handy Loan app image-blackmail extortion

## Record status

- Case ID: `SEIAI-0107`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0107-01 | T1 | bail_order | Qalandar Mohammed Rafique Shaikh v. State of Maharashtra, 1 August 2023 |

Source URL: https://indiankanoon.org/doc/197577549/

## Procedural posture

- Court / authority: Bombay High Court
- Case / FIR: ABA Nos.1794 and 1796 of 2023; C.R.No.02/2022
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: The cited public source is a procedural bail/interim proceeding; the underlying cyber-fraud merits and offender guilt are not treated as finally adjudicated.

## Neutral case summary

A Maharashtra complainant downloaded the Handy Loan app, supplied identity and banking details and received a INR 7,147 loan. He then received calls and WhatsApp threats using morphed photographs and paid INR 96,000 to prevent their circulation. The anticipatory-bail order records CDR and co-accused material but leaves the precise victim-facing operator unresolved.

## Reconstruction

### Initial contact

While browsing online, the complainant found and downloaded the Handy Loan app and entered bank, Aadhaar, PAN and photograph details to obtain a small loan.

### Pretext

After INR 7,147 was credited, callers and WhatsApp users threatened to circulate morphed photographs of the complainant on social media unless he deposited money into specified accounts.

### Requested action

Pay money into accounts supplied in WhatsApp chats to prevent publication of morphed photographs.

### Victim action and consequence

Fearing publication of the morphed photographs, the complainant deposited INR 96,000 into the account specified in the WhatsApp chats.

- Reported financial loss: INR 96000
- Payment method: `bank_transfer`

## Evidence map

- Phone / SIM: `yes`
- CDR / telecom: `yes`
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

### SEIAI-0107-A01: Handy Loan threatening operator(s)
- Identity resolution: `unknown`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Initiating or sustaining the deceptive victim-facing contact, pretext, persuasion or coercion described in the focal incident.
- Limitation: The source supports the victim-facing conduct and persona but does not necessarily resolve the online/telephone identity to a verified real-world human.
- Alternative explanation: A named online persona, phone identity, brand or group label may not correspond to the true human operator.

### SEIAI-0107-A02: Account/telecom-linked accused network
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `cdr_or_telecom_record`
- Attribution strength: **moderate**
- Conduct assessed: Receiving, routing, controlling or cashing out funds associated with the focal incident, to the extent supported by the cited source.
- Limitation: Receipt, routing, account control or telecom linkage does not by itself prove knowledge of the full social-engineering scheme or authorship of the original deception.
- Alternative explanation: A downstream recipient or account holder may have a narrower facilitation role or may dispute knowing participation.


### Incident-level attribution assessment

- Attribution target: Handy Loan threatening operator(s) and persons linked by CDR/co-accused evidence.
- Primary basis: `cdr_or_telecom_record`
- Secondary basis: `co_accused_link`
- Attribution strength: **moderate**
- Limitations: The order records prima facie CDR/co-accused linkage to applicants but does not prove that either applicant authored the focal threats or controlled the payment endpoint.
- Alternative explanation: Downstream financial, telecom or organisational linkage does not by itself establish authorship of the original social-engineering contact; accused-specific guilt remains unadjudicated.

## Primary evidentiary gap

Device and messaging-platform records tying the threatening WhatsApp identities and loan-app infrastructure to identified operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Allegations against accused persons are not converted into final findings of guilt.

## Coding decisions

The INR 7,147 loan disbursal is not added to fraud loss; INR 96,000 is the focal extortion payment.
