# Actor-Level Coding Protocol v0.1.2

## Purpose

The actor companion table exists because a single incident can contain several different operational roles: victim-facing caller, persona operator, account provider, beneficiary-account controller, money mule, cash-out actor, SIM/device user, platform operator, technical-infrastructure operator, organiser, or coordinator.

The incident table answers **what happened**. The actor table asks:

> **What specific conduct can the reviewed public evidence connect to a particular actor, role, or actor cluster?**

## Core rule

**Attribution strength is scored against `conduct_assessed`, not against a person generally.**

Create a separate actor-role row where role, evidentiary basis, attribution strength, or human identity materially differs. Do not create separate rows merely because a source names multiple accused.

## Unknown operators

Unknown roles are valid where conduct is reconstructable but identity is unresolved. Do not turn a persona name, SIM subscriber, account holder, device owner, or IP subscriber into a resolved human operator without supporting evidence.

## Neutral labels

Use role labels rather than names by default. Examples: `Original police-impersonation operator`, `Beneficiary-account-linked actor`, `Cash-out actor cluster`.

## Identity resolution

- `identified`: a specific person/entity is identified as relevant to the role
- `partially_identified`: public material points toward a person/entity, but the role-to-identity link remains incomplete
- `unknown`: the conduct is reconstructable but the operator is unresolved
- `actor_cluster`: a group/network/layer cannot responsibly be decomposed into individuals

Identity resolution is not a culpability score.

## Attribution scale

Use the existing Atlas scale, but apply it to the stated conduct. When uncertain, use the weaker code.

## Allegation discipline

Bail orders can contain prosecution assertions, defence claims and prima facie observations. Actor coding does not convert those propositions into findings. Prefer `alleged`, `reported`, `the order describes`, and `the public material does not establish`.

## Migration status

Draft rows are promoted to `reviewed` only after checking the role description, basis, strength, limitations and source IDs directly against the registered source material. For v0.1.2, all 30 existing cases were migrated into the actor layer and checked against the reviewed case reconstruction and registered source evidence. `reviewed` at actor level means the role description, conduct, attribution basis, strength, limitations and source link were checked for consistency with the project’s source-audited case record. It does not convert allegations into findings.
