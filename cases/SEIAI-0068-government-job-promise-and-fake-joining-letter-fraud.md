# SEIAI-0068: Government-job promise and fake joining-letter fraud

## Record status

- Case ID: `SEIAI-0068`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0068-01 | T1 | bail_order | Amit Kumar Mehta v. State of Haryana, 12 February 2026 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Punjab and Haryana High Court
- Case / proceeding: not normalized
- Public status coded: `bail_or_interim`
- Disposition: Anticipatory-bail proceedings; merits not finally adjudicated.

## Neutral case summary

A Punjab and Haryana High Court anticipatory-bail order describes an alleged government-job fraud involving a direct promise of influence, staged payments and a fake joining letter sent through WhatsApp. The petitioner disputed the allegations and claimed that he too had been deceived by another job-fraud operator.

## Reconstruction

### Target

- Target type: `job_seeker`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

The complainant met the petitioner, who asked whether he wanted a government job and claimed connections with influential persons in the government setup.

### Pretext

The petitioner allegedly demanded INR 250,000, later sent a fake joining letter through WhatsApp and directed additional Google Pay transfers.

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

Pay money in stages in exchange for arranging a government job.

### Victim action / consequence

The complainant allegedly paid INR 200,000 in cash/Google Pay before discovering that the joining letter did not secure employment.

- Financial loss coded: `200000`
- Payment method: `multiple`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `yes`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- CCTV evidence: `not_reported`
- Platform-provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: Fake joining letter; WhatsApp transmission; Google Pay records; complaint documents.

## Attribution analysis

### Attribution target

Petitioner's alleged direct inducement, receipt of money and transmission of fake joining letter

### Basis

- Primary: `witness_or_statement`
- Secondary: `message_or_email_content`

### Incident-level attribution strength

**moderate**

### Limitations

The source is a bail-stage order and the petitioner advanced an alternative explanation that he was himself a victim of an upstream fraud. Guilt remained for trial.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **Bail applicant alleged government-job intermediary**: `victim_facing` / `social_engineering_operator`; strength `moderate`. Conduct assessed: Promising a government job, collecting staged payments and sending a fake joining letter to the complainant. Limitation: The source is anticipatory-bail stage and the applicant claimed he was himself deceived by an upstream job-fraud operator.
- **Upstream job-fraud operator described by applicant**: `organisational` / `organiser`; strength `limited`. Conduct assessed: Allegedly posing as a well-connected recruitment facilitator and supplying the fake joining-letter pathway used by the applicant. Limitation: This role is based on the applicant's defence narrative and was not finally adjudicated.

## Primary evidentiary gap

Authenticated WhatsApp/email records, payment-account records and forensic linkage establishing who created the fake joining letter and controlled the payment destinations.

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
