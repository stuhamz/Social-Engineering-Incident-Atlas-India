# SEIAI-0153: Vigilance and Anti-Corruption officer digital-arrest fraud

## Record status

- Case ID: `SEIAI-0153`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-04
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0153-01 | T1 | bail_order | Anandu v. State of Tamil Nadu, 21 July 2026 |

Source URL: https://indiankanoon.org/doc/16027561/

## Procedural posture

- Court / authority: Madras High Court, Madurai Bench
- Case / FIR: CRL OP(MD) No.14428/2026; Crime No.59/2026, CCD-III P.S. Thanjavur
- Primary source stage: `bail_order`
- Public case status: `investigation`
- Conviction status: `not_yet_adjudicated`
- Disposition: Bail proceeding on 21 July 2026; investigation was still in progress and principal accused Mohammed Hakim was stated to be absconding.

## Neutral case summary

A Tamil Nadu prosecution alleged that Mohammed Hakim impersonated a Vigilance and Anti-Corruption Officer, told a victim that his credentials were linked to money laundering and placed him under digital arrest. The victim transferred INR 5 million through multiple accounts. The bail record separates this alleged victim-facing role from first-layer financial accounts and petitioner Anandu's disputed credential-facilitation role.

## Reconstruction

### Initial contact

The prosecution alleged that Mohammed Hakim, posing as a Vigilance and Anti-Corruption Officer, contacted and manipulated the defacto complainant.

### Pretext

The victim was told that personal credentials were linked to a money-laundering case and was placed under a purported digital arrest.

### Requested action

Comply with the purported anti-corruption/money-laundering investigation and transfer funds through accounts used by the accused network.

### Victim action and consequence

Believing the representations, the complainant transferred INR 5,000,000 through various bank accounts including first-layer accounts.

- Reported focal financial loss: INR 5000000
- Payment method: `bank_transfer`

### Social-engineering mechanisms

- Authority: `yes`
- Fear: `yes`
- Urgency: `yes`
- Trust: `yes`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: not reported

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

Other evidence: Aadhaar, bank-account and other personal credentials allegedly used within the scheme; first-layer account-holder investigation.

## Actor and attribution analysis

### SEIAI-0153-A01: Mohammed Hakim
- Identity resolution: `identified`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Direct victim contact: `yes`
- Attribution basis: `witness_or_statement`
- Attribution strength: **moderate**
- Conduct assessed: Allegedly impersonating a Vigilance and Anti-Corruption Officer, placing the complainant under digital arrest and inducing the transfer.
- Limitation: The source is a bail-stage prosecution recital and the principal accused was absconding; no final guilt finding exists.
- Alternative explanation: Victim-facing authorship remains an allegation pending investigation/trial.

### SEIAI-0153-A02: First-layer beneficiary-account holders A1/A2
- Identity resolution: `actor_cluster`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Direct victim contact: `no`
- Attribution basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Conduct assessed: Receiving the defrauded amount through first-layer accounts before onward siphoning.
- Limitation: Account receipt does not establish operation of the anti-corruption persona.
- Alternative explanation: Account holders may have had narrower financial roles.

### SEIAI-0153-A03: Anandu (A5)
- Identity resolution: `identified`
- Role layer: `organisational`
- Victim-facing function: `no`
- Financial function: `uncertain`
- Direct victim contact: `no`
- Attribution basis: `witness_or_statement`
- Attribution strength: **limited**
- Conduct assessed: Allegedly handing complainant credentials to the principal accused or otherwise assisting friends; substantial financial benefit was disputed.
- Limitation: The source does not show victim-facing contact or direct receipt of the focal funds by Anandu.
- Alternative explanation: He claimed he assisted without knowing the consequences.


### Incident-level attribution assessment

- Attribution target: Mohammed Hakim as alleged victim-facing impersonator, first-layer account holders, and petitioner Anandu's alleged credential-facilitation role.
- Primary basis: `witness_or_statement`
- Secondary basis: `bank_account_or_money_flow`
- Attribution strength: **moderate**
- Limitations: The source is a bail order, the principal accused was still absconding, and petitioner Anandu's role was disputed and narrower than the victim-facing impersonation.
- Alternative explanation: Anandu asserted that he merely assisted friends without understanding the consequences and received no substantial benefit.

## Primary evidentiary gap

Authenticated communications/device evidence linking Mohammed Hakim to the victim-facing digital-arrest channel and clarifying how the victim credentials were obtained and used.

## Legal/procedural notes

BNS 316(2), 318(4); IT Act 66D

## Coding decisions

The source does not state the contact channel for the digital-arrest interaction, so the primary channel is coded unknown rather than assuming phone or video.
