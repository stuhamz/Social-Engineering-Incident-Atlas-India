# GitHub Update Guide for v0.1.1

Repository:

`https://github.com/stuhamz/Social-Engineering-Incident-Atlas-India`

This package is intended to update the existing repository from the ten-case v0.1.0 release to the reviewed thirty-case v0.1.1 release.

## Recommended update

From your existing local clone:

```powershell
git pull origin main
```

Replace the repository files with the contents of the v0.1.1 GitHub-ready package, preserving the local `.git/` directory.

Then run:

```powershell
git status
git add -A
git status
git commit -m "Expand Atlas to 30 reviewed cases"
git push origin main
```

Do not force-push.

## Tag

After the push:

```powershell
git tag -a v0.1.1 -m "Social Engineering Incident Atlas India v0.1.1"
git push origin v0.1.1
```

If `v0.1.1` already exists in your remote repository, **do not move it**. Use the next unused patch version instead and update the release title accordingly.

## GitHub Release

Suggested title:

`Social Engineering Incident Atlas India v0.1.1 - 30-case expanded validation set`

Suggested summary:

`Expands the Atlas from 10 to 30 reviewed social-engineering-enabled cybercrime incidents. Cases 11-30 were collected under a versioned retrieval protocol with candidate logging, duplicate rules, a diversity constraint and a fixed stopping rule. The combined dataset remains a methodology/schema-validation set and is not representative of Indian cybercrime.`

Attach the reviewed Excel coding workbook as a release asset rather than committing it to Git.

## Pre-push check

Confirm that the repository root contains:

- `README.md`
- `data/`
- `cases/`
- `references/`
- `methodology/`
- `schemas/`
- `analysis/`
- `docs/`

The local Excel workbook should not be tracked by Git.
