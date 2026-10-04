# SEIAI-0152: Online job deception and socially engineered fund-transfer intermediary

## Record status

- Case ID: `SEIAI-0152`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0152-01 | T1 | procedural_order | Tapas Ranjan Moharana v. State of Odisha and Others, 18 August 2025 |

Source URL: https://indiankanoon.org/doc/43924460/

## Procedural posture

- Court / authority: Orissa High Court
- Case / FIR: CRLMP No.589/2025
- Primary source stage: `procedural_order`
- Public case status: `reported`
- Conviction status: `not_yet_adjudicated`
- Disposition: The Orissa High Court disposed of the CRLMP on 18 August 2025 after reviewing the police inquiry and left the petitioner free to approach the jurisdictional Magistrate.

## Neutral case summary

An Odisha petitioner said online job recruiters first offered simple YouTube-related tasks and then turned the role into receiving and forwarding funds for commissions. He paid INR 1,000 and moved money through two accounts before they were frozen because fraud proceeds had entered them. A later police inquiry found fraud-linked receipts in his account, creating a valuable unresolved question of whether he was a knowing participant or a socially engineered mule.

## Reconstruction

### Initial contact

The petitioner received a WhatsApp message from a +1 number identifying the sender as Krisha and offering simple paid work involving YouTube and shopping/fashion content.

### Pretext

After initial task incentives, personas called Sita and Shyla, said to be UNOCOIN employees, instructed the petitioner to receive funds into his bank accounts and forward them to other accounts for daily commissions.

### Requested action

Perform online tasks, pay an initial amount, receive money into personal accounts and forward it to accounts supplied by the operators.

### Victim action and consequence

The petitioner paid INR 1,000, then received and forwarded funds through SBI and Union Bank accounts until 23 May 2023. His accounts were later frozen after fraud-linked funds were detected.

- Reported focal financial loss: INR 1000
- Payment method: `multiple`

### Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `yes`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: Small task incentives and daily commissions normalised increasingly consequential fund-transfer activity.

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

### SEIAI-0152-A01: Krisha / Sita / Shyla online-job persona cluster
- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `yes`
- Direct victim contact: `yes`
- Attribution basis: `message_or_email_content`
- Attribution strength: **unclear**
- Conduct assessed: Offering the job, providing task incentives and directing the petitioner to receive and forward funds to supplied accounts.
- Limitation: The personas and claimed UNOCOIN identities are not resolved to real-world humans.
- Alternative explanation: The names may be aliases controlled by one or multiple operators.

### SEIAI-0152-A02: Tapas Ranjan Moharana
- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Receiving fraud-linked funds in personal accounts and forwarding money as instructed while receiving commissions.
- Limitation: The financial conduct is documented, but knowledge and criminal intent are unresolved; he claimed he was himself deceived by the job operators.
- Alternative explanation: He may have been an unwitting/socially engineered mule rather than a knowing conspirator.


### Incident-level attribution assessment

- Attribution target: Unknown Krisha/Sita/Shyla job operators and petitioner Tapas Ranjan Moharana's documented fund-transfer role.
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `message_or_email_content`
- Attribution strength: **limited**
- Limitations: The petitioner claimed he was deceived into the transfer role, while a police inquiry found fraud-linked money received in his account. The source does not resolve his knowledge or intent.
- Alternative explanation: The petitioner may have been socially engineered into functioning as an unwitting money mule rather than knowingly participating in the underlying fraud.

## Primary evidentiary gap

Authenticated chats/platform records and full transaction tracing showing what the online operators told the petitioner and whether he knew the funds were fraud proceeds.

## Legal/procedural notes

No additional statutory coding is necessary beyond the source/case metadata for this wave.

## Coding decisions

Only the petitioner's INR 1,000 outgoing payment is coded as his focal loss. INR 12,800 in a third-party complaint and INR 147,599/2,000 found in account layers are fraud-linked flows, not his personal loss. A +1 contact number supports only a suspected, not confirmed, cross-border dimension.
