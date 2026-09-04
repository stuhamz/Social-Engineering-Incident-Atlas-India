# GitHub Hotfix Guide for v0.2.1

v0.2.1 fixes one repository-tree inconsistency in the already-published v0.2.0 release. The structured data do not change.

## Required deletion

In the existing local clone, remove the stale retired narrative explicitly:

```powershell
git rm cases/SEIAI-0060-olx-buyer-qr-and-upi-payment-manipulation-fraud.md
```

This explicit `git rm` matters because copying replacement files over an existing clone does not delete tracked files that are absent from the replacement package.

## Apply the v0.2.1 package

Copy the contents of the v0.2.1 GitHub-ready folder over the existing clone. Do **not** delete `.git`.

Then run:

```powershell
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
```

Expected full-audit summary:

```text
Full audit validator: 74 cases, 74 narratives, 196 actors, 82 sources, 96 screening candidates
Errors: 0
Warnings: 0
```

Then review and commit:

```powershell
git status
git add -A
git status
git commit -m "Hotfix Atlas repository integrity for v0.2.1"
git push origin main
```

Create a new tag rather than moving the published v0.2.0 tag:

```powershell
git tag -a v0.2.1 -m "Social Engineering Incident Atlas India v0.2.1 repository-integrity hotfix"
git push origin v0.2.1
```

Suggested GitHub release title:

`Social Engineering Incident Atlas India v0.2.1`

Suggested release summary:

> Repository-integrity hotfix over the unchanged v0.2.0 coded dataset. Removes the retired SEIAI-0060 duplicate narrative that remained in the Git tree after the v0.2.0 working-tree replacement, and strengthens the full-audit validator to enforce a one-to-one match between active case IDs and public case narratives. Structured incident, actor, source and screening data are unchanged.

No new workbook is required. The v0.2.0 workbook remains the authoritative workbook for these unchanged data.
