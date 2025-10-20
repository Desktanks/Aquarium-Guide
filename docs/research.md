# Research & Citations — Aquarium Guide (v1.2)

**Goal:** Every factual claim about species, parameters, safety, or treatments is backed by a traceable source.

---

## Rules
1) If a fact matters to animal welfare, equipment safety, water chemistry, or medication → it **must** have a citation.  
2) Prefer expert sources; if sources conflict, say so and choose the conservative path.  
3) Never copy manufacturer claims without independent confirmation.  
4) Quote snippets ≤ 25 words only when essential; otherwise paraphrase.  
5) If no source is available, label the statement as opinion or avoid it.  
6) Layout, style, or method descriptions must cite the original or authoritative source when they claim ecological, safety, or procedural facts (e.g., Walstad soil chemistry, Dry Start humidity control).  
   Aesthetic summaries (e.g., “Iwagumi emphasizes stone balance”) do **not** require citations unless they include biological or safety claims.

---

## Source Tiers (pick highest available)
- **Tier A:** Peer-reviewed journals, academic texts, regulatory bodies.  
- **Tier B:** Established databases and humane organizations.  
- **Tier C:** Reputable practitioner guides with transparent authorship.  
- **Tier D (avoid):** Anonymous forums, promotional pages without data.

---

## Whitelist (initial + expanded)
- seriouslyfish.com  
- fishbase.se  
- rspca.org.uk / aspca.org  
- aquariumcoop.com (knowledge base)  
- epa.gov (water guidance)  
- manufacturer PDFs/manuals (e.g., seachem.com, fluvalaquatics.com)  
- green-aqua.com (educational aquascaping guides)  
- tropica.com (plant data and care sheets)  
- aquasabi.com (technical planted tank articles)  
- plantedtank.net (long-running practitioner forum – Tier C)  
- YouTube educational creators (e.g., MD Fish Tanks, George Farmer) only when cross-checked with a Tier A or B source.

---

## How to Attach Citations
Each answer includes a `citations` array matching `/src/citation_schema.json`.

Each citation object should include:  
- `title`  
- `url`  
- `publisher`  
- `retrieved` (ISO date)  
- `tier` (A–C)

---

## Units & Conversions
1) Use clear, dual units where practical:  
   - **Length:** millimeters (mm) with inches in parentheses.  
   - **Volume:** liters (L) with U.S. gallons in parentheses.  
   - **Temperature:** °F with °C in parentheses.  
   - **Concentration:** parts per million (ppm) or mg/L interchangeably.  
2) When citing a source that uses only one system, convert to the other and show both.  
3) Round sensibly — two significant digits for small dimensions; nearest tenth for volumes.  
4) Never mix measurement systems inside a single table or range.  
5) If a product’s packaging uses one system exclusively (e.g., “20-gallon”), note it in parentheses without conversion.

---

## Citation Examples
```json
{
  "title": "Ecology of the Planted Aquarium",
  "url": "https://example.com/walstad_reference",
  "publisher": "Echinodorus Press",
  "retrieved": "2025-10-11",
  "tier": "B"
}
{
  "title": "Dry Start Method for Planted Tanks",
  "url": "https://www.green-aqua.com/en/blog/dry-start-guide",
  "publisher": "Green Aqua",
  "retrieved": "2025-10-11",
  "tier": "C"
}
{
  "title": "Dry Start Method for Planted Tanks",
  "url": "https://www.green-aqua.com/en/blog/dry-start-guide",
  "publisher": "Green Aqua",
  "retrieved": "2025-10-11",
  "tier": "C"
}
