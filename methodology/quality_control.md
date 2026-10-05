# Quality Control

The Atlas uses source-linked review, explicit uncertainty coding, cross-file validation, and release checks to reduce avoidable coding and repository errors.

## Source-to-code review

Before an incident is marked `reviewed`:

- the focal incident must be distinguishable from surrounding network or aggregate claims
- the primary source must be registered
- procedural posture must be recorded
- exact dates must be source-supported
- financial loss must refer to the focal incident rather than aggregate network flows
- actor functions must be separated where the evidence supports separation
- attribution limitations must be recorded conservatively

## Uncertainty rules

The project uses explicit uncertainty values rather than filling gaps through inference.

Examples include `unknown`, `actor_cluster`, `not_reported`, `not_assessed`, and `uncertain`.

When evidence supports only association with an account, device, SIM, IP address, transaction, or co-accused, the coding should not automatically escalate to attribution of the victim-facing conduct.

## Duplicate control

Candidate screening and stable IDs are used to prevent the same underlying incident from entering the active corpus more than once.

Retired IDs are never recycled.

## Automated validation

The repository includes validators for incident schema, actor schema, one narrative per active case, source and actor ownership, duplicate IDs, retired IDs, cross-case duplicate source URLs, date rules, actor-function values, and required source/actor relationships.

Run:

```bash
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
```

## Release check

Before a tagged release:

1. run all validators
2. regenerate the public Atlas
3. inspect corpus counts
4. confirm the screening log and source registry are synchronized
5. review `git diff --check`
6. update release notes and the changelog

Quality control makes the coding trail inspectable and internally consistent. It does not convert the purposive corpus into a representative sample.
