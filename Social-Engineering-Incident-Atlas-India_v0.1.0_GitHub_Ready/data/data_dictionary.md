# Data Dictionary

| Field | Section | Definition | Status |
|---|---|---|---|
| `case_id` | Identifier | Unique ID in format SEIAI-0001. | required |
| `record_status` | Provenance | draft, reviewed, or verified. | required |
| `coding_version` | Provenance | Methodology version used for coding. | required |
| `coder` | Provenance | Coder name or initials. | required |
| `date_coded` | Provenance | ISO date YYYY-MM-DD. | required |
| `case_title` | Identity | Short neutral researcher-assigned title. | required |
| `incident_start_date` | Time | Earliest documented incident date, ISO. | optional |
| `incident_end_date` | Time | Latest documented incident date, ISO. | optional |
| `incident_year` | Time | Incident year as YYYY. | required |
| `state` | Geography | Primary Indian state/UT materially connected to incident. | required |
| `city` | Geography | Primary city if reported. | optional |
| `cross_border_dimension` | Geography | Whether a material cross-border element is reported. | required |
| `primary_source_id` | Sources | Source ID of the principal source. | required |
| `primary_source_tier` | Sources | T1 judicial, T2 official, T3 journalism. | required |
| `source_stage` | Sources | Procedural/publication stage of primary source. | required |
| `court_or_authority` | Sources | Court, police body, regulator, or other authority. | optional |
| `case_number` | Sources | Public case/FIR/court identifier when available. | optional |
| `case_status` | Procedure | Publicly documented procedural status. | required |
| `attack_category_primary` | Attack | Primary controlled attack category. | required |
| `attack_category_secondary` | Attack | Optional secondary controlled category. | optional |
| `contact_channel_primary` | Attack | Principal or first documented contact channel. | required |
| `contact_channels_other` | Attack | Other controlled channels, semicolon separated. | optional |
| `platform_primary` | Attack | Named platform/service if reported. | optional |
| `impersonated_identity_category` | Attack | Controlled category of impersonated role. | required |
| `impersonated_identity_detail` | Attack | Specific identity or institution described by source. | optional |
| `target_type` | Target | Controlled target category. | required |
| `target_sector` | Target | Sector or occupational context if relevant. | optional |
| `target_selection_known` | Target | Whether source explains why target was selected. | required |
| `reconnaissance_present` | Attack | Whether pre-contact reconnaissance is documented. | required |
| `reconnaissance_description` | Attack | What reconnaissance is documented. | optional |
| `initial_contact_summary` | Attack | Neutral summary of first contact. | required |
| `pretext_summary` | Attack | False or misleading scenario used. | required |
| `authority_mechanism` | Mechanism | Authority used to influence compliance. | required |
| `fear_mechanism` | Mechanism | Threat or feared consequence used. | required |
| `urgency_mechanism` | Mechanism | Time pressure used. | required |
| `trust_mechanism` | Mechanism | Trust/credibility mechanism used. | required |
| `scarcity_mechanism` | Mechanism | Scarcity mechanism used. | required |
| `reciprocity_mechanism` | Mechanism | Reciprocity/obligation mechanism used. | required |
| `isolation_mechanism` | Mechanism | Target isolated from outside verification/help. | required |
| `repeated_contact_mechanism` | Mechanism | Repeated contact used to sustain compliance. | required |
| `other_psychological_mechanism` | Mechanism | Other documented mechanism. | optional |
| `requested_action` | Outcome | What offender asked target to do. | required |
| `victim_action` | Outcome | What target actually did. | required |
| `credential_compromise` | Outcome | Whether credentials/OTP/authentication secrets were compromised. | required |
| `device_compromise` | Outcome | Whether device compromise/control is reported. | required |
| `remote_access_tool` | Outcome | Named remote-access software if reported. | optional |
| `financial_loss_inr` | Outcome | Numeric INR loss, no commas/symbols. | optional |
| `payment_method` | Outcome | Controlled payment method. | required |
| `money_mule_reported` | Outcome | Whether mule/intermediary accounts are reported. | required |
| `known_account_count` | Outcome | Number of known receiving/intermediary accounts if stated. | optional |
| `phone_or_sim_evidence` | Evidence | Whether phone/SIM evidence is reported. | required |
| `cdr_evidence` | Evidence | Whether call-detail/telecom records are reported. | required |
| `bank_evidence` | Evidence | Whether bank/transaction evidence is reported. | required |
| `ip_or_login_evidence` | Evidence | Whether IP/login/account-access records are reported. | required |
| `device_evidence` | Evidence | Whether seized or examined device evidence is reported. | required |
| `chat_message_evidence` | Evidence | Whether chat/message records are reported. | required |
| `email_evidence` | Evidence | Whether email evidence is reported. | required |
| `social_media_evidence` | Evidence | Whether social-platform evidence is reported. | required |
| `cctv_evidence` | Evidence | Whether CCTV/video evidence is reported. | required |
| `platform_provider_records` | Evidence | Whether provider/platform records are reported. | required |
| `forensic_examination_reported` | Evidence | Whether forensic examination is reported. | required |
| `other_evidence` | Evidence | Other reported evidence. | optional |
| `electronic_evidence_authentication_discussed` | Evidence | Whether source discusses authentication/foundation of electronic evidence. | required |
| `chain_of_custody_discussed` | Evidence | Whether source discusses custody/provenance. | required |
| `evidence_integrity_issue_reported` | Evidence | Whether an integrity issue is reported. | required |
| `attribution_target` | Attribution | Person/role/entity whose conduct is being assessed. | optional |
| `attribution_basis_primary` | Attribution | Primary controlled basis. | optional |
| `attribution_basis_secondary` | Attribution | Secondary controlled basis. | optional |
| `attribution_strength` | Attribution | Strong/moderate/limited/unclear/not_assessed. | required |
| `attribution_limitations` | Attribution | What the evidence cannot establish. | required |
| `alternative_explanation` | Attribution | Plausible non-culpable or alternative interpretation where relevant. | optional |
| `primary_evidentiary_gap` | Attribution | Most important missing evidence for stronger reconstruction/attribution. | required |
| `legal_provisions` | Legal | Sections/statutes as stated in public source; semicolon separated. | optional |
| `accused_count` | Procedure | Number of accused publicly identified in relevant proceeding if stated. | optional |
| `arrest_reported` | Procedure | Whether arrest is publicly reported. | required |
| `charge_sheet_reported` | Procedure | Whether charge sheet/complaint is publicly reported. | required |
| `conviction_status` | Procedure | Controlled outcome value. | required |
| `disposition` | Procedure | Short case disposition/procedural note. | optional |
| `case_summary` | Narrative | Neutral structured case summary. | required |
| `research_notes` | Narrative | Ambiguities, coding decisions, approximations. | optional |