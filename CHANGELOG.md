# Changelog

## v0.1.4 - 2026-08-26

- expanded the reviewed incident corpus from 40 to 50 cases
- expanded actor-role coverage from 116 to 148 reviewed records
- added the first primary `smishing` and `identity_theft_deception` cases
- added executive/Managing-Director, court-influence, electricity-utility and government-official spoofing cases
- added a final acquittal centered on Section 65-B/electronic-evidence and SIM-attribution failures
- increased geographic diversity with Maharashtra, West Bengal, Goa, Punjab, Assam, Kerala and Telangana additions in the 41–50 batch
- retained the v0.1.2 actor schema without breaking changes
- completed second-pass incident, actor, procedural-posture and privacy audits for SEIAI-0041 through SEIAI-0050
- validation completed with zero structural errors and zero warnings

## v0.1.3 - 2026-08-26

- expanded the reviewed incident corpus from 30 to 40 cases
- expanded the actor-role table from 90 to 116 reviewed records
- added the first `business_email_compromise` cases and the first `social_media_impersonation` primary case
- added two new `bank_impersonation` records, including a final criminal appellate conviction
- added final/appellate consumer and commercial adjudicatory sources to reduce reliance on bail orders
- retained the v0.1.2 actor schema without breaking changes
- added 15 screening-log candidates, including explicit deferrals under the category-diversity stopping rule
- completed incident, actor, procedural-posture and privacy second-pass audits for SEIAI-0031 through SEIAI-0040
- validation completed with zero structural errors and zero warnings

## v0.1.2 - 2026-08-26

- Added `data/actors.csv` with 90 reviewed actor-role attribution records across all 30 incidents.
- Added actor-level coding protocol, controlled vocabulary, JSON schema and validator.
- Separated identity resolution from attribution strength.
- Defined attribution strength as conduct-specific rather than person-wide.
- Retained all v0.1.1 incident records without breaking field changes.
- Deferred proposition-level `source_claims.csv` pending evidence that it is necessary.

## 0.1.1 - 2026-08-26
- Expanded the Atlas from 10 to 30 incident records for schema/method validation.
- Added a versioned retrieval protocol with documented search families, duplicate handling, category-diversity constraint and stopping rule.
- Added 20 new primary judicial/adjudicatory sources and corresponding reconstruction notes.
- Expanded the screening log with included, excluded, duplicate and deferred/pending candidates.
- Corrected the stale SEIAI-0002 research note to reflect seven distinct beneficiary accounts.
- Completed second-pass source, coding, procedural-posture and privacy audit of SEIAI-0011 through SEIAI-0030.
- Promoted all 30 dataset records to `reviewed`.
- Conservatively corrected credential-compromise coding in SEIAI-0016, taxonomy in SEIAI-0029, and forensic-examination coding in SEIAI-0030.
- Added `docs/v0.1.1_release_audit.md` and current release notes.


## 0.1.0
- Completed source-by-source pre-publication audit of all ten pilot records.
- Promoted all ten records from `draft` to `reviewed`.
- Corrected SEIAI-0002 distinct beneficiary-account count from 8 to 7.
- Conservatively revised cross-border/reconnaissance/credential fields in SEIAI-0002, SEIAI-0004, SEIAI-0009, and SEIAI-0010.
- Added final v0.1 release audit and release notes.
- Added CC BY 4.0 licence for the compiled dataset and research documentation.
- Rewrote README for public v0.1 release.

## 0.0.3
- Completed the ten-case v0.1 methodology pilot dataset.
- Added SEIAI-0002 through SEIAI-0010 and their source records, screening entries, and narrative case notes.
- Expanded the attack taxonomy with `family_impersonation` and `sextortion`.
- Added a first ten-case methodology audit.
- At this stage all ten records were still draft pending the final source review.

## 0.0.2
- Added SEIAI-0001: Ramakrishna Mission Gwalior digital arrest fraud.
- Registered six public sources, including five Madhya Pradesh High Court orders.
- Added screening-log inclusion decision and full reconstruction/evidence/attribution note.
- At this stage SEIAI-0001 remained draft pending the later release audit.

## 0.0.1
- Initial methodology scaffold.
- Added case schema, source registry, screening log, coding protocols, and validation tooling.
- No research cases released yet.
