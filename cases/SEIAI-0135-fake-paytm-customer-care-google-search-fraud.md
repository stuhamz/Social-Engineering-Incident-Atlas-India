# SEIAI-0135: Fake Paytm customer-care Google search fraud

## Record status

- Case ID: `SEIAI-0135`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0135-01 | T1 | interim_order | Mukhtar Singh @ Mukhtar Ansari @ Mukhtar v. State of Bihar, 20 April 2026 |

Source URL: https://indiankanoon.org/doc/72913316/

## Procedural posture

- Court / authority: Patna High Court
- Case / FIR: Criminal Miscellaneous No.14551/2026; Cyber P.S. Gaya Case No.60/2025
- Primary source stage: `interim_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: On 20 April 2026 the Patna High Court kept the matter heard in part and directed production of further investigation details.

## Neutral case summary

A Gaya informant searching Google for Paytm support called a fraudulent customer-care number and then received several follow-up calls. Believing the callers were Paytm officials, he disclosed bank details. INR 300,800 was withdrawn across his and his wife's accounts. The public interim order does not resolve the human operator or explain the petitioner's specific role.

## Reconstruction

### Initial contact

After a Paytm connection problem, the informant searched Google, found a purported customer-care number and called it. Several callers then contacted him from other numbers.

### Pretext

The callers presented themselves as Paytm officials handling the service problem and obtained details of the informant and his wife's bank accounts.

### Requested action

Provide bank-account details to the purported Paytm support representatives.

### Victim action and consequence

The informant provided bank details believing the callers were Paytm officials; INR 99,000 was withdrawn from his account and INR 201,800 from his wife's account.

- Reported focal financial loss: INR 300800
- Payment method: `other`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Search-result legitimacy transferred trust to a fraudulent customer-support number.

## Evidence map

- Phone / SIM: `not_reported`
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

### SEIAI-0135-A01: Fake Paytm customer-care operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Operating the fraudulent customer-care numbers, presenting as Paytm support and eliciting bank details.
- Limitation: The order identifies phone numbers and the victim narrative but not the humans controlling the customer-care operation.
- Alternative explanation: The same human may have operated more than one number.

### SEIAI-0135-A02: Investigation-linked petitioner
- Identity resolution: `identified`
- Role layer: `unknown`
- Victim-facing function: `not_assessed`
- Financial function: `not_assessed`
- Direct victim contact: `unknown`
- Attribution basis: `documentary_record`
- Attribution strength: **unclear**
- Conduct assessed: The petitioner's name surfaced during investigation, but the reviewed order does not specify focal conduct.
- Limitation: The order does not provide actor-specific telecom, device or money-flow evidence tying the petitioner to the focal incident.
- Alternative explanation: The petitioner may have a narrower or unrelated role within a wider cybercrime investigation.


### Incident-level attribution assessment

- Attribution target: The unresolved fake-Paytm caller cluster and an investigation-linked petitioner whose name later surfaced.
- Primary basis: `unclear`
- Secondary basis: `unclear`
- Attribution strength: **unclear**
- Limitations: The order reconstructs the victim-facing calls but does not explain how the petitioner was linked to those calls, numbers or withdrawals.
- Alternative explanation: The petitioner may have a downstream or unrelated role; the interim order expressly sought further investigation details.

## Primary evidentiary gap

Subscriber, device, platform and bank-flow records tying a specific human operator to the customer-care numbers and the withdrawals.

## Legal/procedural notes

No additional statutory coding is necessary beyond the source/case metadata for this wave.

## Coding decisions

The source is an interim/heard-in-part order, not a final bail determination. Attribution is therefore intentionally coded unclear.
