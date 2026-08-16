# Coding Protocol

## General rules

1. Code only what the source supports.
2. Use controlled vocabulary where defined.
3. Use `unknown` or `not_reported` rather than guessing.
4. Preserve allegations as allegations.
5. Prefer concise factual descriptions over interpretation.
6. Record uncertainty explicitly.
7. Re-check all attribution fields before a record is marked `reviewed`.

## Dates

Use ISO format `YYYY-MM-DD` where an exact date is known.

If only the year is available, populate `incident_year` and leave exact date fields blank.

## Multi-channel incidents

Use `contact_channel_primary` for the first or principal channel. Record other documented channels in `contact_channels_other` using semicolon-separated controlled values.

## Psychological mechanisms

Mechanism fields describe documented attack techniques, not post-hoc assumptions about the victim.

Example:

- code `fear_mechanism = yes` when threats of arrest, loss, exposure, harm, account blocking, or comparable consequences are documented.
- do not code fear merely because a victim later said they were frightened unless the communication itself used fear as a compliance mechanism.

## Financial loss

Use numeric INR with no commas or currency symbol.

If the source gives an approximate amount, enter the numeric amount and explain approximation in `research_notes`.

## Evidence fields

Evidence fields answer whether that form of evidence is reported in the public case material, not whether the researcher has personally examined the underlying evidence.

## Case summary

Write a neutral summary that separates:

- alleged or established social-engineering sequence
- victim action
- resulting harm
- investigative evidence
- attribution limitations
- procedural status

Avoid rhetorical language.

## Record status

- `draft`: initially coded
- `reviewed`: source checked again and coding revised
- `verified`: methodology-level quality check completed
