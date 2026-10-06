# SEIAI-0254: NASSCOM phishing and fictitious recruitment-email identities

## Record status

- Case ID: `SEIAI-0254`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0254-01 | T1 | final_judgment | National Association of Software and Service Companies v. Ajay Sood & Ors., 23 March 2005 |

Source URL:
- https://indiankanoon.org/doc/1804384/

## Procedural posture

- Court / authority: Delhi High Court
- Case: CS(OS) No.285/2005; IA 2351/2005
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: The Delhi High Court accepted the compromise, recorded the defendants acknowledgment of the illegal conduct and entered the agreed civil decree and injunction.

## Neutral case summary

Fraudulent recruitment emails masquerading as NASSCOM used fictitious identities to extract personal data from third parties. A Local Commissioner seized two hard disks from the defendants office and found offending emails, including messages dated 10 January 2003 and 11 January 2005. The compromise identified employee Tithypoorna Ganguli as the creator of the fictitious identities and sender of the emails. The Delhi High Court accepted the settlement and entered the civil decree.

## Reconstruction

### 1. Target

Target type: `professional`. Sector/context: software employment / recruitment.

### 2. Reconnaissance

Reconnaissance present: `no`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

Fraudulent emails were transmitted from the defendants office while masquerading as NASSCOM and using fictitious identities.

### 4. Pretext

The senders presented themselves as NASSCOM or NASSCOM-linked recruitment identities in order to extract personal data from third parties for head-hunting.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Provide personal data to the purported NASSCOM-linked recruitment communication.

### 7. Victim action

Third parties were induced to provide or were targeted for collection of personal recruitment data; the civil record does not quantify monetary loss.

### 8. Consequence

- Reported focal financial loss: not coded
- Payment method: `not_applicable`
- Credential compromise: `yes`
- Device compromise: `no`

## Timeline

Structured date fields:
- incident_start_date: `2003-01-10`
- incident_end_date: `2005-01-11`
- incident_year: `2003`

## Evidence map

- Phone / SIM evidence: `not_reported`
- CDR evidence: `not_reported`
- Bank evidence: `not_reported`
- IP / login evidence: `not_reported`
- Device evidence: `yes`
- Message / chat evidence: `not_reported`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `yes`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other evidence: Two hard disks seized by a Local Commissioner contained offending emails dated 10 January 2003 and 11 January 2005.

## Actor and attribution analysis

### SEIAI-0254-A01: Tithypoorna Ganguli

- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `no`
- Attribution basis: `confession_or_admission` / `device_possession_or_forensics`
- Attribution strength: **strong**
- Conduct assessed: Creating fictitious recruitment-email identities and using NASSCOM identity to extract personal data.
- Limitation: The case ended in compromise, so the record does not provide a full criminal-style reconstruction of every recipient and downstream use.
- Alternative explanation: The court noted that the broader organisational purpose behind the head-hunting operation would not fully surface because of settlement.


### Incident-level attribution assessment

- Attribution target: Tithypoorna Ganguli as the employee identified in the compromise as creating fictitious email identities and sending NASSCOM-branded emails
- Primary basis: `device_possession_or_forensics`
- Secondary basis: `confession_or_admission`
- Attribution strength: **strong**
- Limitations: The matter ended in a civil compromise rather than criminal trial, so the record does not fully reconstruct every recipient, data item or downstream use.
- Alternative explanation: The court noted that the full purpose and organisational direction of the head-hunting activity would not surface because the parties had compromised.

## Primary evidentiary gap

Recipient-by-recipient data and a complete record of how extracted personal information was subsequently used.

## Legal/procedural notes

Order 23 Rule 3 CPC; passing-off and civil injunction proceedings

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: This is a civil final judgment, not a criminal conviction. The source is historically important because it records a phishing-style Indian case with offending emails dating back to 2003.
