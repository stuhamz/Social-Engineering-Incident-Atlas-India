# SEIAI-0028: Matrimonial relationship with alleged Army-officer impersonation

## Record status

- Case ID: `SEIAI-0028`
- Coding version: `0.2.0`
- Coder: Hamzah
- Date coded: 2026-08-26
- Status: **reviewed**

> This note reconstructs a public-source incident. Bail/interim orders often reproduce prosecution allegations, defence submissions and prima facie observations without finally determining guilt. Those categories are kept separate below.

## Source register

| Source ID | Tier | Stage | Source | URL |
|---|---|---|---|---|
| SRC-SEIAI-0028-01 | T1 | `bail_order` | Aniruddhsinh P Kshatriya v. State of Himachal Pradesh, 25 July 2025 | https://indiankanoon.org/doc/173381761/ |

## Procedural posture

**Case status:** `trial`. Interim anticipatory-bail protection made absolute on 25 July 2025 after the applicant joined investigation and charge sheet was filed.

## Neutral case summary

A matrimonially introduced relationship involved allegations that the applicant falsely presented himself as an Army officer, used uniform photographs/videos and marriage intentions to build trust, and repeatedly sought money. The source is analytically useful precisely because the financial figures conflict between the complaint and police status reports and the court left key relationship/deception questions for trial. The Atlas therefore does not normalize a single loss amount or overstate attribution.

## Reconstruction

### 1. Target

Target type: `individual`. Sector/context: matrimonial relationship.

### 2. Reconnaissance

**Yes.** The parties were introduced through a matrimonial context and the applicant allegedly supplied detailed personal/property/professional representations and Army-uniform media to build trust.

### 3. Initial contact

The complainant, who had created a matrimonial profile, was introduced to the applicant as a divorced man looking to remarry and was contacted on 1 October 2024.

### 4. Pretext

The complainant alleged the applicant represented himself as an Army officer/former officer on special assignments, shared photographs/videos in uniform, made property/business claims and expressed a desire to marry, then repeatedly requested money for hotel/business needs.

### 5. Social-engineering mechanisms

- Authority: **Yes**
- Fear: **Yes**
- Urgency: **Not reported**
- Trust: **Yes**
- Isolation: **No**
- Repeated contact: **Yes**
- Other: Military prestige, marriage intent, asserted assets and personal vulnerability formed the trust structure; later allegations included pressure/blackmail.

### 6. Requested action

Provide money for alleged business/financial needs and continue the relationship on the stated marriage premise.

### 7. Victim action

The complaint alleged INR 8.15 lakh provided in cash and electronic payments; police status reports later described INR 4.15 lakh through Google Pay/cheque and return of that amount.

### 8. Consequence

Financial loss field: **Not normalized in `financial_loss_inr` for this record.**

Credential compromise: **Not reported**. Device compromise: **Not reported**.

## Evidence map

| Evidence | What it supports | What it does NOT establish by itself | Source |
|---|---|---|---|
| Bank / financial records | Movement of funds, beneficiary layers and timing where reported | Identity of the original social-engineering operator or knowledge of every account holder | SRC-SEIAI-0028-01 |
| Telecom / SIM / CDR material | Subscriber/device associations and communication patterns where reported | Call content, intent or physical user identity without corroboration | SRC-SEIAI-0028-01 |
| Devices / chats / platform artefacts | Account/device use and communications where recovered | Broader conspiracy role unless the content and provenance support it | SRC-SEIAI-0028-01 |
| Victim/source narrative | Initial contact, pretext, pressure and consequential actions | Technical identity of the person behind an online account or phone number | SRC-SEIAI-0028-01 |

Additional evidence recorded: Mobile sent to RFSL; service-provider subscriber information; missing hotel CCTV because backup retained only 15 days; Army dress sought for recovery.

## Attribution analysis

### Attribution target

Applicant’s alleged personal identity representations and relationship conduct.

### Primary basis

`witness_or_statement`; secondary: `documentary_record`.

### Alternative explanation

The applicant characterized the matter as a civil/relationship dispute, said money had been repaid and disputed criminal intent; the court made anticipatory-bail protection absolute.

### Attribution strength

**`unclear`**

### Limitations

The public source contains a material conflict between the complaint’s INR 8.15 lakh figure and the police status report’s INR 4.15 lakh electronic transfer figure, while core deception/relationship issues were explicitly left for trial.

### v0.2.0 functional actor coding

- **Alleged Army-officer matrimonial persona actor**: identity `identified`; victim-facing function `yes`; financial function `no`. Atlas victim_facing layer
- **Relationship-linked money-request/recipient actor**: identity `identified`; victim-facing function `yes`; financial function `yes`. Atlas financial layer; paper functional override: victim-facing conduct

## Primary evidentiary gap

Completed RFSL/device analysis and independent evidence resolving the claimed Army identity/professional representations and the disputed financial chronology.

## Legal / procedural notes

Source-reported provisions: BNS 69, 204, 318(4); zero FIR also referenced BNS 316(2), 318(4), 61, 64(2)(m).

The source stage is `bail_order`. The Atlas does not convert bail-stage allegations into findings of guilt.

## Coding decisions

- Primary category: `romance_fraud`; secondary: `government_impersonation`.
- Attribution strength is based only on the public material reviewed for this incident.
- `unknown` and `not_reported` are preserved rather than inferred.
- financial_loss_inr intentionally blank because complaint states INR 815,000 while police status report states INR 415,000 through Google Pay/cheque and says it was returned. The conflict is preserved rather than reconciled by researcher inference.

## Follow-up sources to locate

- [ ] Official court-hosted copy or certified copy where practicable
- [ ] Additional orders/judgments from the same focal FIR where they materially add source-stage or attribution evidence


## Audit status

Second-pass source, coding, procedural-posture and privacy audit completed on 26 August 2026. The record was promoted from `draft` to `reviewed` after the audit.
