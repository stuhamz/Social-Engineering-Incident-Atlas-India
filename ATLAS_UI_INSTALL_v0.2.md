# Install Public Atlas UI v0.2

This patch updates only the public interface and its derived-data builder. It does not replace or edit the audited research CSVs.

## 1. Copy the patch

Extract the ZIP and copy its contents into the root of your existing `Social-Engineering-Incident-Atlas-India` repository. Allow the v0.2 files to overwrite the earlier public-interface files.

Do not delete the repository's existing research folders or `.git` directory.

## 2. Re-run the research validators

```powershell
python analysis/scripts/validate_dataset.py
python analysis/scripts/validate_actors.py
python analysis/scripts/validate_full_audit.py
```

Expected research counts remain:

- 74 active cases
- 196 actor-role records
- 82 active sources
- 96 screening candidates
- 0 errors
- 0 warnings

## 3. Build the public data

```powershell
python analysis/scripts/build_public_atlas.py
```

Expected output includes:

```text
Cases: 74 | Actors: 196 | Sources: 82
Map points: 21 | Evidence matrix rows: 18
```

## 4. Inspect Git status

```powershell
git status
```

The important v0.2 changes are under:

- `atlas/`
- `analysis/scripts/build_public_atlas.py`
- `docs/atlas_interface.md`
- `docs/atlas_ui_v0.2.md`

No authoritative research CSV should have changed merely because of this UI patch.

## 5. Commit and push

```powershell
git add atlas analysis/scripts/build_public_atlas.py docs/atlas_interface.md docs/atlas_ui_v0.2.md
git commit -m "Upgrade public Atlas research interface to v0.2"
git push origin main
```

The existing `Deploy public Atlas` GitHub Actions workflow should rebuild and redeploy the site automatically.

## 6. After deployment

Open:

`https://stuhamz.github.io/Social-Engineering-Incident-Atlas-India/`

Test at minimum:

- map marker -> filtered cases
- direct case URL, for example `#case/SEIAI-0043`
- copy case link
- select 2 cases -> compare -> refresh comparison URL
- evidence matrix cell -> filtered cases
- filtered CSV download
- Method page
- mobile navigation
