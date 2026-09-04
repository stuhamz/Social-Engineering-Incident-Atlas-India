# Actor Coding Protocol v0.2.0

## Purpose

Version 0.2.0 separates three questions that were too easy to conflate in earlier Atlas releases:

1. **Who or what is visible in the public record?**
2. **What function is that actor linked to?**
3. **How strongly does the source support the conduct attribution?**

The research principle remains:

> **Reconstruct broadly. Attribute conservatively.**

## 1. `role_layer` is descriptive, not exclusive

The legacy `role_layer` field is retained for backward compatibility and descriptive use. It is a storage taxonomy, not a mutually exclusive analytical outcome.

An actor may perform more than one function even if one legacy layer is selected.

## 2. Victim-facing function

`victim_facing_function = yes` when the source links the actor to one or more of the following in the focal incident:

- directly communicating deceptive, coercive, manipulative or pretextual content to the victim;
- operating the relevant persona, caller identity, social account, messaging account or channel used to deliver that deception;
- directly delivering the social-engineering interaction.

Values:

- `yes`
- `no`
- `uncertain`
- `not_assessed`

A person merely mentioned in a conspiracy, account trail, SIM record, device record or financial path is not automatically victim-facing.

## 3. Financial function

`financial_function = yes` when the source links the actor to one or more of the following:

- receiving or controlling fraud proceeds;
- supplying or controlling a beneficiary/payment account;
- routing, transferring, withdrawing or cashing out proceeds;
- operating the payment endpoint or payment path.

Values:

- `yes`
- `no`
- `uncertain`
- `not_assessed`

Merely telling a victim to pay, without evidence of payment-path or proceeds involvement, does not by itself establish a financial function.

## 4. Functions can overlap

An actor can be:

- victim-facing `yes`, financial `no`;
- victim-facing `no`, financial `yes`;
- `yes` on both;
- or uncertain/not assessed on either.

This is intentional.

## 5. Human identity resolution

`identified`
: Public material resolves the actor to a specific real-world human with sufficiently clear identity and actor-specific linkage.

`partially_identified`
: Public material points toward a specific real-world person, but the role-to-person linkage is incomplete, contested, indirect or otherwise materially limited.

`actor_cluster`
: The source resolves a numbered/defined group or cluster but not a specific real-world human.

`unknown`
: No specific real-world human is resolved.

Rules:

- a persona, alias, first name or asserted profile name alone is not human identity resolution;
- a numbered but unnamed accused remains `actor_cluster`;
- bank account, SIM, device, IP or platform endpoint association does not automatically identify the person who performed a different function;
- generic conspiracy language does not automatically identify the victim-facing operator;
- `identified` or `partially_identified` does **not** mean guilty.

## 6. Attribution strength is separate from identity resolution

A source may identify a real person but weakly support the specific conduct being assessed. Conversely, a source may strongly establish that a defined actor cluster performed a function without resolving the humans behind it.

Keep `identity_resolution` and `attribution_strength` separate.

## 7. Procedural posture

Bail, anticipatory-bail, charge-stage, interim and investigative materials must be described as allegations, prosecution assertions, prima facie observations or other procedurally accurate formulations.

Final civil or consumer liability findings do not automatically resolve criminal offender identity.

Acquittal does not mean the underlying social-engineering event did not occur. It means the adjudicated criminal case did not establish the charged guilt to the required standard.

## 8. v0.2.0 re-audit

All active incident and actor records were rechecked against this protocol on 4 September 2026. The full case audit and actor correction logs are in `docs/`.
