# SEIAI-0065: KKR deepfake investment impersonation across WhatsApp and social media

## Record status

- Case ID: `SEIAI-0065`
- Coding version: `0.1.5`
- Coder: Hamzah
- Date coded: 2026-09-04
- Status: **reviewed**

> This is a research reconstruction from public judicial/adjudicatory material. Allegations, investigative assertions, charge-stage findings and bail observations are not converted into findings of guilt. Final judgments are described only for the proposition actually decided.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0065-01 | T1 | final_judgment | Akshay Tanna v. John Doe & Ors., 5 December 2024 |

Full URLs and source-level notes are in `references/sources.csv`.

## Procedural posture

- Court / authority: Delhi High Court
- Case / proceeding: not normalized
- Public status coded: `judgment`
- Disposition: Final civil decree and permanent injunction; platforms directed to remove/block impersonating accounts and groups.

## Neutral case summary

The Delhi High Court passed a final decree against impersonating defendants who used WhatsApp, Telegram, Facebook and Instagram identities plus a deepfake investment-advice video to deceive the public by claiming association with KKR and the plaintiff.

## Reconstruction

### Target

- Target type: `investor`
- Sector/context: not normalized
- Target selection known: `not_reported`

### Reconnaissance

- Coded: `not_reported`
- Detail: No specific reconnaissance detail is established in the reviewed public material.

### Initial contact

Fraudulent WhatsApp groups, Telegram/Facebook/Instagram identities and accounts used the plaintiff's name, photograph and claimed association with KKR.

### Pretext

The operators circulated a deepfake video falsely depicting the plaintiff giving investment advice and represented accounts/groups as authorized financial services.

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `not_reported`
- Urgency: `not_reported`
- Trust / legitimacy: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not separately coded

### Requested action

Join fraudulent investment groups and rely on the impersonated identity for financial/investment decisions.

### Victim action / consequence

Members of the public were misled into believing the groups and advice were associated with the plaintiff/KKR; the source does not normalize individual victim losses.

- Financial loss coded: `not normalized / not reported`
- Payment method: `not_applicable`

## Evidence map

- Phone/SIM evidence: `not_reported`
- CDR/telecom evidence: `not_reported`
- Bank/transaction evidence: `not_reported`
- IP/login evidence: `not_reported`
- Device evidence: `not_reported`
- Chat/message evidence: `yes`
- Email evidence: `not_reported`
- Social-media evidence: `yes`
- CCTV evidence: `not_reported`
- Platform-provider records: `yes`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other reported evidence: WhatsApp/Telegram groups; Facebook/Instagram pages; deepfake video; platform notices and service records.

## Attribution analysis

### Attribution target

Defendant account/group operator(s) responsible for the impersonation

### Basis

- Primary: `message_or_email_content`
- Secondary: `platform_provider_record`

### Incident-level attribution strength

**moderate**

### Limitations

The civil decree treats uncontroverted allegations against the relevant defendant as admitted and identifies platform accounts, but it is not a criminal forensic attribution of every account administrator.

### Alternative explanation

No separate alternative explanation is established in the structured record.

### Actor-role decomposition

- **KKR/individual impersonating social-media group operator(s)**: `victim_facing` / `platform_account_operator`; strength `moderate`. Conduct assessed: Operating WhatsApp/Telegram/social-media identities that used the plaintiff's name/image and represented investment advice as genuine. Limitation: The final civil decree resolved impersonation against the relevant defendant, but it does not forensically attribute every related account/group to a natural person.
- **Deepfake content producer/distributor**: `technical` / `technical_infrastructure_operator`; strength `unclear`. Conduct assessed: Creating or circulating a deepfake video falsely depicting the plaintiff giving investment advice. Limitation: The source proves circulation of the fabricated content but does not identify who generated the deepfake.

## Primary evidentiary gap

Provider registration, IP/login and device records establishing the human controller of each fraudulent account/group.

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
