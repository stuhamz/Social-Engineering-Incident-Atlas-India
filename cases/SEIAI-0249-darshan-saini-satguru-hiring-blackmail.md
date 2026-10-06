# SEIAI-0249: Satguru Hiring blackmail proceeds and beneficiary-operator attribution failure

## Record status

- Case ID: `SEIAI-0249`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-05
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, civil findings, prosecution theories and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0249-01 | T1 | final_judgment | State by Cyber Crime Police Station v. Darshan Singh Saini, 27 January 2017 |

Source URL:
- https://indiankanoon.org/doc/110432589/

## Procedural posture

- Court / authority: I Addl. Chief Metropolitan Magistrate, Bengaluru
- Case: C.C.No.16051/2014
- Primary source stage: `final_judgment`
- Public case status: `judgment`
- Conviction status: `acquitted`
- Disposition: Darshan Singh Saini was acquitted on 27 January 2017.

## Neutral case summary

The prosecution alleged that unidentified principal actors blackmailed the complainant by phone and induced a transfer of INR 53,800 into a Satguru Hiring current account linked to Darshan Singh Saini. Saini was tried for misappropriating the proceeds, but the court found the prosecution had not proved the actor-specific financial conduct or linked him to the victim-facing blackmail. The case is therefore coded as a strong example of financial visibility without proved deception authorship.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: personal / extortion.

### 2. Reconnaissance

Reconnaissance present: `not_reported`. No distinct pre-contact reconnaissance stage is established in the source.

### 3. Initial contact

The prosecution alleged that accused Nos.1 and 2 blackmailed the complainant through telephone numbers including international-format numbers.

### 4. Pretext

The callers allegedly used blackmail to induce the complainant to remit money into a Satguru Hiring current account.

### 5. Social-engineering mechanisms

- Authority: `not_reported`
- Fear: `yes`
- Urgency: `yes`
- Trust: `not_reported`
- Scarcity: `not_reported`
- Reciprocity: `not_reported`
- Isolation: `not_reported`
- Repeated contact: `not_reported`
- Other: None separately coded.

### 6. Requested action

Remit INR 53,800 to the supplied Satguru Hiring current account.

### 7. Victim action

The complainant remitted INR 53,800 to the account identified in the prosecution case.

### 8. Consequence

- Reported focal financial loss: INR 53800
- Payment method: `bank_transfer`
- Credential compromise: `no`
- Device compromise: `not_reported`

## Timeline

Structured date fields:
- incident_start_date: ``
- incident_end_date: ``
- incident_year: `2012`

## Evidence map

- Phone / SIM evidence: `yes`
- CDR evidence: `yes`
- Bank evidence: `yes`
- IP / login evidence: `not_reported`
- Device evidence: `not_reported`
- Message / chat evidence: `not_reported`
- Email evidence: `yes`
- Social-media evidence: `not_reported`
- Platform/provider records: `not_reported`
- Forensic examination reported: `not_reported`
- Electronic-evidence authentication discussed: `not_reported`
- Chain of custody discussed: `not_reported`
- Evidence-integrity issue reported: `not_reported`
- Other evidence: Bank remittance counterfoil, cheques, CDR requests, telecom-provider and Google information requests.

## Actor and attribution analysis

### SEIAI-0249-A01: Unknown principal blackmail caller(s)

- Identity resolution: `actor_cluster`
- Role layer: `victim_facing`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution basis: `witness_or_statement` / `cdr_or_telecom_record`
- Attribution strength: **limited**
- Conduct assessed: Delivering the blackmail interaction and directing payment of INR 53,800.
- Limitation: The principal operators were not before the court in the trial of accused No.3.
- Alternative explanation: Their exact identities and relationship to the beneficiary account remain unresolved.

### SEIAI-0249-A02: Darshan Singh Saini / Satguru Hiring account

- Identity resolution: `identified`
- Role layer: `financial`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution basis: `bank_account_or_money_flow` / `documentary_record`
- Attribution strength: **limited**
- Conduct assessed: Beneficiary-account association and alleged withdrawal or misappropriation of the INR 53,800.
- Limitation: The court acquitted Saini and did not find that receipt or account association proved participation in the blackmail scheme.
- Alternative explanation: The account may have been used by or for the principal callers without Saini operating the deception.


### Incident-level attribution assessment

- Attribution target: Darshan Singh Saini as the person linked to the Satguru Hiring beneficiary account
- Primary basis: `bank_account_or_money_flow`
- Secondary basis: `documentary_record`
- Attribution strength: **unclear**
- Limitations: The trial concerned accused No.3 only. The prosecution did not establish that Darshan Singh Saini operated the blackmail calls or that the focal INR 53,800 was knowingly misappropriated by him; accused Nos.1 and 2 were not charge-sheeted in this trial.
- Alternative explanation: The beneficiary account could have been used by separate blackmail operators, and account association did not prove authorship or knowledge of the victim-facing scheme.

## Primary evidentiary gap

A reliable chain from the blackmail calls to the focal deposit and then to actor-specific withdrawal/control by the tried accused.

## Legal/procedural notes

IPC 403 read with IPC 37; IT Act 66

## Coding decisions

This record follows the Atlas principle **Reconstruct broadly. Attribute conservatively.** Human identity resolution, victim-facing function, financial function and conduct attribution are coded separately.

Research note: The complaint was received on 7 December 2012. The source does not provide a clean exact offence date, so only incident_year=2012 is encoded.
