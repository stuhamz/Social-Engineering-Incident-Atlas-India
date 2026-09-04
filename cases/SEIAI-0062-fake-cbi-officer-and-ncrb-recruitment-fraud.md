# SEIAI-0062: Fake CBI officer and NCRB recruitment fraud

## Record status

- Case ID: `SEIAI-0062`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0062-01 | T1 | final_judgment | CBI v. Nitesh Chugh, 13 May 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi District Court, Rouse Avenue
- Case / proceeding: not normalized
- Public status coded: `judgment`
- Disposition: Accused convicted for impersonation/cheating and IT Act personation offences; judgment also addressed forged documents.

## Neutral case summary

A Delhi trial court convicted Nitesh Chugh for impersonating a CBI officer and running a fake NCRB recruitment scheme. The judgment discusses WhatsApp transmission of a fake CBI ID, forged offer letters, email accounts, bank transfers, phone usage, IP/access evidence and Section 65B-backed electronic records.

## Reconstruction

### Target

- Target type: `job_seeker`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The accused approached former colleagues and represented himself as a CBI officer, then said NCRB recruitment was taking place and asked them to refer friends.

### Pretext

He used a fake CBI ID card, fake NCRB offer letters, email accounts and interview calls to make the recruitment scheme appear genuine.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `yes`
- Other: not separately coded

### Requested action

Pay recruitment/interview charges and supply referrals for other job seekers.

### Victim action / consequence

Victims paid cash and bank transfers, supplied referrals and relied on the forged recruitment documents; one complainant paid INR 20,000 in total.

- Financial loss coded: `20000`
- Payment method: `multiple`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `yes`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `yes`
- Electronic-evidence authentication discussed: `yes`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Fake CBI ID; fake NCRB offer letters; email access logs; bank records; phone records; Section 65B certificates.

## Attribution analysis

### Attribution target

Identified accused's CBI/NCRB impersonation and recruitment conduct

### Basis

- Primary: `multiple_independent_sources`
- Secondary: `message_or_email_content`

### Incident-level attribution strength

**strong**

### Limitations

The conviction strongly attributes the charged conduct to the accused, although the normalized loss field reflects the focal complainant rather than aggregate payments from all victims.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Convicted CBI/NCRB impersonation operator**: `hybrid` / `social_engineering_operator`; strength `strong`. Conduct assessed: Impersonating a CBI officer, soliciting NCRB recruitment payments, circulating fake ID/offer letters and conducting communications with victims. Limitation: The final conviction strongly resolves the charged conduct; the limitation is mainly that aggregate conduct across every referred victim is broader than the focal normalized loss.
- **Accused-controlled recruitment email/phone/bank infrastructure**: `technical` / `technical_infrastructure_operator`; strength `strong`. Conduct assessed: Operating email/phone identities and banking channels used to send recruitment material and receive payments. Limitation: The final judgment links the infrastructure to the convicted accused through witness, bank, email access and phone evidence.

## Primary evidentiary gap

No material gap for attribution of the convicted conduct in the focal prosecution; broader victim totals would require complete victim-by-victim payment records.

## Coding decisions / research notes

v0.1.5 corrective expansion; source-to-code review completed 2026-09-04.

## Manual review checklist

- [x] Re-open primary T1 source
- [x] Confirm focal incident and loss/attempt status
- [x] Confirm procedural stage and outcome language
- [x] Re-check manipulation mechanisms
- [x] Re-check actor/attribution statements
- [x] Remove raw phone, account and personal-identifier strings from researcher-created public text
- [x] Mark reviewed after second source-to-code pass
