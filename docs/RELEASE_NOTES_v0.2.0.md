# Release Notes v0.2.0

## Full corpus re-audit release

v0.2.0 is a substantive methodology and data-quality release of the Social Engineering Incident Atlas India.

### Active corpus

- 74 reviewed incidents
- 196 reviewed actor-role records
- 82 registered active sources
- 96 screening candidates
- 74 active case narratives

### Main changes

- Full source-to-code re-audit across the 75-ID history.
- `SEIAI-0060` retired as an exact duplicate of `SEIAI-0029`; later IDs remain stable.
- Non-exclusive victim-facing and financial actor-function coding added.
- Human identity-resolution rules tightened and four definite actor rows corrected.
- Unsupported incident-date precision removed or corrected.
- Cases 51-75 harmonized with the earlier schema for case number, target sector, platform and impersonation detail.
- Four adjudicatory sources normalized from `other` to `court_judgment`.
- New case audit, source audit, actor correction and retired-ID logs.
- New strict full-audit validator.

### Validation

`validate_dataset.py`: 0 errors, 0 warnings  
`validate_actors.py`: 0 errors, 0 warnings  
`validate_full_audit.py`: 0 errors, 0 warnings

### Interpretation

This remains a purposively sampled, retrieval-driven research corpus. It is not suitable for national prevalence estimates, state rankings, attack-frequency estimates, average-loss estimates or conviction-rate estimates.
