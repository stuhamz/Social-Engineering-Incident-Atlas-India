#!/usr/bin/env python3
"""Add the public Atlas interface link to README.md without replacing the README."""
from pathlib import Path

root = Path(__file__).resolve().parents[2]
path = root / "README.md"
text = path.read_text(encoding="utf-8")
marker = "## Public Atlas interface"
if marker in text:
    print("README already contains the public Atlas section; no change made.")
    raise SystemExit(0)

anchor = "A structured research dataset and analytical framework for studying **social-engineering-enabled cybercrime, digital evidence, and attribution in India**."
section = """

## Public Atlas interface

The research repository now has a browser-based exploration layer for people who do not work directly with CSVs or GitHub.

**Explore the public Atlas:** https://stuhamz.github.io/Social-Engineering-Incident-Atlas-India/

The interface provides case search and filtering, actor-role exploration, evidence views, source navigation and interactive corpus charts. It is a read-only layer generated from the authoritative research CSVs. The same sampling and attribution limitations documented in this repository apply to every visualization.
"""
if anchor not in text:
    raise SystemExit("README anchor not found. No change made; add the public Atlas link manually.")
text = text.replace(anchor, anchor + section, 1)
path.write_text(text, encoding="utf-8")
print("Added public Atlas section to README.md")
