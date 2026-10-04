# SEIAI-0155: USTD online-trading platform and WhatsApp investment fraud

## Record status

- Case ID: `SEIAI-0155`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0155-01 | T1 | bail_order | Jagdish Kumar Malviya v. State of Madhya Pradesh, 9 September 2026 |

Source URL: https://indiankanoon.org/doc/198411347/

## Procedural posture

- Court / authority: High Court of Madhya Pradesh, Gwalior Bench
- Case / FIR: MCRC-42020-2026; Crime No.106/2026, Cyber Cell Gwalior
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Regular-bail application dismissed on 9 September 2026; investigation remained pending.

## Neutral case summary

A Gwalior complainant was induced through WhatsApp and an online trading platform to transfer funds over several months on the promise of investment returns. The court record states a combined focal loss of INR 210,792,000, including an associated INR 200,000 UPI payment. The applicant was linked to part of the downstream financial trail, but the public bail order does not establish that he operated the victim-facing WhatsApp account or trading platform.

## Reconstruction

### 1. Target

The focal target is coded as `investor` in the sector `retail investment`. The public source does not establish a separate reconnaissance phase unless otherwise stated.

### 2. Reconnaissance

No specific reconnaissance is reported in the public source reviewed.

### 3. Initial contact

The complainant was contacted and guided through WhatsApp into an online trading arrangement using the USTD/tradecboeus.cc platform.

### 4. Pretext

The operators represented that deposits would be used for profitable online trading and displayed apparent returns through the trading interface.

### 5. Social-engineering mechanisms

- Authority: `no`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`

### 6. Requested action

Continue transferring funds by NEFT, RTGS and UPI into accounts specified by the purported trading operators.

### 7. Victim action

The complainant transferred large sums over several months; an associated payment of INR 200,000 was also made by UPI.

### 8. Consequence

- Reported focal financial loss: INR 210792000
- Payment method: `multiple`
- Credential compromise: `not_reported`
- Device compromise: `not_reported`

## Evidence map

- Phone / SIM: `not_reported`
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

Other evidence: Online trading website/interface and prosecution bank-trail material.

## Actor and attribution analysis

### SEIAI-0155-A01: Unresolved victim-facing investment operator(s)
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content` / `witness_or_statement`
- Attribution strength: **unclear**
- Conduct assessed: Delivering the deceptive or coercive victim-facing pretext and payment/investment instructions described in the focal incident.
- Limitation: The public source reconstructs the victim-facing conduct but does not fully resolve the operator identity to a verified real-world human.
- Alternative explanation: The apparent persona, group, brand or contact identity may not correspond to the true human operator.

### SEIAI-0155-A02: Jagdish Kumar Malviya
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Alleged downstream beneficiary-account involvement in movement of part of the fraud proceeds.
- Limitation: The source does not establish that he authored the WhatsApp investment pitch or controlled the USTD trading platform.
- Alternative explanation: A downstream account/controller role can be distinct from the victim-facing social-engineering operator.

### Incident-level attribution assessment

- Attribution target: Unresolved victim-facing trading operators and an applicant linked to a downstream beneficiary account.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **limited**
- Limitations: The bail record supports a financial link between the applicant and part of the proceeds but does not establish that he authored the WhatsApp inducement or controlled the trading platform.
- Alternative explanation: The applicant disputed knowing participation and said the account linkage did not prove his involvement in the deception.

## Primary evidentiary gap

Authenticated platform, device and messaging records tying the victim-facing WhatsApp and trading-platform identities to specific human operators.

## Legal/procedural notes

The primary public source is coded at the procedural stage shown above. Accused-specific allegations are not converted into final findings of guilt.

## Coding decisions

The focal loss follows the source-stated combined amount. Larger account or network turnover figures, if any, are not substituted for the victim loss.
