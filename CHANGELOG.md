# Changelog

## v0.2.1 - 2026-09-04

- repository-integrity hotfix over the unchanged v0.2.0 coded dataset
- removes the retired `SEIAI-0060` duplicate narrative from `cases/`; active narratives now match the 74 active case rows one-to-one
- strengthens `validate_full_audit.py` to fail on missing active narratives, duplicate narrative IDs, retired IDs, or any orphan/non-active `SEIAI-####` narrative
- no incident, actor, source, screening, or coding values changed from v0.2.0
- published as a new tag rather than moving the already-published v0.2.0 tag

## v0.2.0 - 2026-09-04

- completed a full source-to-code re-audit of the 75-ID Atlas history, covering every incident record, every active actor row and registered source relationships
- retired `SEIAI-0060` as an exact semantic duplicate of the earlier `SEIAI-0029` record; active IDs were not renumbered
- corrected active corpus counts to 74 incidents, 196 actor-role records and 82 registered sources
- preserved all 96 screening candidates and changed `CAND-0079` from include to duplicate of `SEIAI-0029`
- separated the legacy descriptive `role_layer` taxonomy from non-exclusive `victim_facing_function` and `financial_function` coding
- tightened human identity resolution so aliases, personas, numbered accused and endpoint associations do not automatically resolve a real-world human
- corrected identity-resolution coding in `SEIAI-0019-A01`, `SEIAI-0048-A01`, `SEIAI-0065-A01` and `SEIAI-0071-A01`
- corrected false or unsupported incident-date precision, including records where detection, FIR or judgment dates had been encoded as attack dates
- harmonized the 51-75 expansion with the earlier schema by backfilling source-supported case numbers, target sectors, platform details, impersonated-identity detail and secondary categories
- normalized four consumer/adjudicatory records that had been incorrectly stored with `source_type=other`
- added full case-audit, actor-correction and retired-ID logs
- added stricter cross-file validation for duplicate source URLs, retired IDs, source ownership, date ordering and actor-function coding
- all three validators return zero errors and zero warnings

## v0.1.5 - 2026-09-04

- expanded the reviewed incident corpus from 50 to 75 cases
- expanded actor-role coverage from 148 to 198 reviewed records
- increased registered sources from 57 to 83 and screening candidates from 69 to 96
- added 10 final-judgment and 10 appellate-judgment primary sources in the 25-case corrective batch
- reduced primary bail-order concentration from 33/50 (66.0%) to 37/75 (49.3%)
- increased final/appellate primary-source share from 13/50 (26.0%) to 33/75 (44.0%)
- reduced categories confined to a single source stage from 10/17 to 5/18
- added the first primary `vishing` record
- expanded coverage of SIM-swap/account takeover, phishing, smishing, marketplace/customer-support manipulation, job/government impersonation and deepfake/social-media investment impersonation
- retained the v0.1.2 actor schema without breaking changes
- preserved explicit duplicate and exclusion decisions, including a rediscovered SEIAI-0037 source and a network-level call-centre record without a sufficiently clean focal incident
- completed source-to-code, actor, procedural-posture and privacy audits for SEIAI-0051 through SEIAI-0075
- both incident and actor validators return zero errors and zero warnings
- documented that 71/75 cases still have exactly one registered source, so source corroboration remains a major limitation
- confirmed the conservative financial-versus-victim-facing attribution pattern persists across 47 dual-layer cases: 36 financial stronger, 11 equal, 0 victim-facing stronger


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
- completed a 50-case analytical stability audit covering source-stage concentration, single-source dependence, geographic/temporal concentration, actor-layer behavior and sparse fields
- documented that 47/50 cases currently have one registered source and flagged `accused_count` for pre-v0.2 review

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
