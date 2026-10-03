# SEIAI-0086: Hugo Loan app contact-harvesting and image-blackmail fraud

## Record status

- Case ID: `SEIAI-0086`
- Coding version: `0.2.2`
- Coder: Hamzah
- Date coded: 2026-10-03
- Status: **reviewed**

> This note is a researcher-created reconstruction from public material. Allegations, prima facie findings, defence claims and final criminal findings are not treated as interchangeable.

## Source register

| Source ID | Tier | Stage | Source |
|---|---|---|---|
| SRC-SEIAI-0086-01 | T1 | bail_order | Wan Chenghua v. State of U.T. Chandigarh, 22 May 2023 |

Source URL: https://indiankanoon.org/doc/82323157/

## Procedural posture

The High Court granted Wan Chenghua bail on 22 May 2023 after more than eight months of pre-trial custody. The order records that investigation had been completed and a charge sheet filed. The merits remained for trial.

## Neutral case summary

A Chandigarh complainant received an SMS link that installed the Hugo Loan app. Believing the requested permissions were routine, he allowed access to contacts and gallery and entered personal details to check loan eligibility, but did not take a loan. He later received repeated threats by phone and WhatsApp using morphed obscene images of himself and family, with threats to circulate them to his contacts. He paid INR 5,545 in two transfers. The bail record describes a much larger loan-app network, telecom and bank traces, and cash recovered from Wan Chenghua, but it does not identify him as the focal victim-facing operator.

## Reconstruction

### Target and initial contact
The complainant received an SMS containing a URL. Clicking it installed the Hugo Loan application. The app requested contacts and gallery access, which he granted believing this was routine for loan applications.

### Pretext and coercion
The app presented itself as a quick-loan service and showed INR 3,500 eligibility after the complainant entered personal details. Although he did not take the loan, later callers used harvested photographs and contacts to threaten dissemination of morphed obscene images of him and family.

### Requested action and outcome
The operators demanded money to prevent distribution of the images. The complainant paid INR 2,045 on 24 August 2022 and INR 3,500 on 30 August 2022, for a focal loss of **INR 5,545**.

## Evidence map

The bail record describes CAF/CDR material, UPI and bank-account tracing, electronic-gadget linkage checks through I4C, co-accused statements and cash recovery. These materials are strong for reconstructing the network and payment layer but do not directly resolve the focal app/SMS/WhatsApp operator.

## Actor and attribution analysis

### SEIAI-0086-A01: Hugo Loan victim-facing operator cluster
- Identity resolution: `actor_cluster`
- Victim-facing function: `yes`
- Financial function: `uncertain`
- Attribution strength: `moderate`
- Limitation: the source does not map the focal SMS, app account or threatening communications to specific real-world humans.

### SEIAI-0086-A02: Wan Chenghua
- Identity resolution: `identified`
- Victim-facing function: `no`
- Financial function: `yes`
- Attribution strength: `moderate`
- Basis: the prosecution status report recited in the order says an intermediary identified Wan as the person from whom INR 1,131,000 was to be collected and that this cash was recovered from him.
- Limitation: that evidence does not establish that Wan sent the focal SMS, operated Hugo Loan or made the threatening calls/messages.

## Primary evidentiary gap

Authenticated app/platform, device and telecom records connecting the focal SMS, Hugo Loan infrastructure and threatening WhatsApp/phone identities to specific humans, and then connecting those operators to the payment network.

## Coding decisions

- Exact incident start/end dates are left blank because payment dates do not establish the initial SMS date or final threat date.
- Focal loss is **INR 5,545**. The INR 1,131,000 recovered from Wan Chenghua and the much larger network flows are not treated as this victim's loss.
- Cross-border coding reflects the prosecution record describing loan-app operation from China and overseas routing. It is not a final finding about individual guilt or nationality-based attribution.
