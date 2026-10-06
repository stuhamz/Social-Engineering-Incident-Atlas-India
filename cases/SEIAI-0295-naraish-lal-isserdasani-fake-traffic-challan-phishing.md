# SEIAI-0295: Naraish Lal Isserdasani fake traffic-challan phishing

## Record status

- Case ID: `SEIAI-0295`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-06
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0295-01 | T1 | final_judgment | Naraish Lal Isserdasani fake traffic-challan phishing |

Source URL:
- https://www.casemine.com/judgement/in/6a691f5885964f1b5fd63906

## Procedural posture

- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `not_applicable`
- Disposition: Final consumer merits judgment ordered reimbursement plus compensation.

## Neutral case summary

A fake overdue traffic-challan SMS linked to a phishing site; a false OTP-failed message induced a second OTP and two high-value transactions occurred one second apart. The Atlas preserves the procedural posture of the source and does not infer criminal guilt from consumer or civil liability findings. Where the source identifies financial, telecom, device or platform endpoints without resolving the victim-facing human operator, those functions remain analytically separate.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: retail banking.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No additional pre-contact reconnaissance is inferred.

### 3. Initial contact

A fake overdue traffic-challan SMS linked to a phishing site

### 4. Pretext

Overdue traffic challan with threatened extra charges/legal action.

### 5. Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`

### 6. Requested action

Pay a purported INR 590 challan and enter card/OTP data.

### 7. Victim action

The victim entered two OTPs after a false error; INR 358,108 was charged in two transactions and he denied them on the bank verification call.

### 8. Consequence

- Reported focal financial loss: INR 358108
- Payment method: `card`
- Credential compromise: `yes`
- Device compromise: `not_reported`

## Timeline

- incident_year: `2025`
- Exact dates are left blank unless the structured record has source-supported day-level precision.

## Evidence map

- Phone / SIM evidence: `not_reported`
- Bank evidence: `yes`
- Device evidence: `not_reported`
- Chat/message evidence: `not_reported`
- Email evidence: `not_reported`
- Social-media evidence: `not_reported`
- Other evidence: See primary T1 merits source and narrative reconstruction.

## Actor and attribution analysis

### SEIAI-0295-A01: Unknown traffic-challan phishing operator

- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Limitation: The public merits source supports the incident reconstruction but does not justify inferring conduct beyond the specific actor-role evidence described in the judgment.
- Alternative explanation: Financial, telecom, device or platform endpoints may reflect downstream or facilitating roles rather than the person who delivered the victim-facing deception.

## Primary evidentiary gap

Direct actor-specific evidence linking the victim-facing communication to a resolved human operator where that identity is not already adjudicated.

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function and financial function are not collapsed into one finding.

Research note: Final 300-incident expansion. Coded conservatively from the registered T1 merits source; exact dates, actor overlap and endpoint ownership are left unasserted where the source does not resolve them.
