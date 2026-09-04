# GitHub Update Guide for v0.2.0

This package replaces the public v0.1.5 working tree with the fully re-audited v0.2.0 Atlas.

## What v0.2.0 contains

- 74 active reviewed incident records
- 196 active reviewed actor-role records
- 82 active registered sources
- 96 screening candidates retained as audit history
- 74 active case narratives
- one retired stable ID: `SEIAI-0060`, duplicate of `SEIAI-0029`
- non-exclusive victim-facing and financial actor-function coding
- full case, source, actor-correction and retired-ID audit logs
- three validators, all passing with zero errors and zero warnings

## Replace the local working tree

Do **not** delete the `.git` directory in your existing local clone.

1. Make sure your current repository has no uncommitted work you need to preserve:

```powershell
git status
```

2. Extract the v0.2.0 GitHub-ready ZIP to a separate folder.

3. In your existing local clone, delete the repository files and folders **except `.git`**.

4. Copy everything from inside the extracted v0.2.0 folder into the existing local clone.

5. Run all validators:

```powershell
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
```

All three should report zero errors and zero warnings.

## Review and commit

```powershell
git status
git add -A
git status
git commit -m "Full Atlas re-audit and v0.2.0 release"
git push origin main
```

If your default branch is not `main`, replace `main` with the branch shown by:

```powershell
git branch --show-current
```

## Tag the release

```powershell
git tag -a v0.2.0 -m "Social Engineering Incident Atlas India v0.2.0 full re-audit"
git push origin v0.2.0
```

## GitHub release

Create a release from tag `v0.2.0`.

Suggested title:

`Social Engineering Incident Atlas India v0.2.0`

Suggested release summary:

> Full source-to-code re-audit of the Social Engineering Incident Atlas India. The release contains 74 active reviewed incidents and 196 actor-role records. SEIAI-0060 is retired as an exact duplicate of SEIAI-0029 without renumbering later IDs. v0.2.0 adds non-exclusive victim-facing and financial actor-function coding, tightens human identity-resolution rules, removes unsupported incident-date precision, harmonizes the Cases 51-75 corrective batch, and adds stricter cross-file validation. All three validators return zero errors and zero warnings. The corpus remains purposively sampled and retrieval-driven and should not be used for national prevalence estimates.

Attach the reviewed v0.2.0 Excel workbook as the research release asset. GitHub automatically provides source ZIP/tar archives for the tag, so the repository-ready ZIP does not need to be uploaded as a release asset.
