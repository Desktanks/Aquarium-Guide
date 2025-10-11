# Research & Citations — Aquaria (v1)

**Goal:** Every factual claim about species, parameters, safety, or treatments is backed by a traceable source.

---

## Rules
1) If a fact matters to animal welfare, equipment safety, water chemistry, or medication → it **must** have a citation.  
2) Prefer expert sources; if sources conflict, say so and choose the conservative path.  
3) Never copy manufacturer claims without independent confirmation.  
4) Quote snippets ≤ 25 words only when essential; otherwise paraphrase.  
5) If no source is available, label the statement as opinion or avoid it.

---

## Source Tiers (pick highest available)
- **Tier A:** Peer-reviewed journals, academic texts, regulatory bodies.  
- **Tier B:** Established databases and humane organizations.  
- **Tier C:** Reputable practitioner guides with transparent authorship.  
- **Tier D (avoid):** Anonymous forums, promotional pages without data.

---

## Whitelist (initial)
- seriouslyfish.com  
- fishbase.se  
- rspca.org.uk / aspca.org  
- aquariumcoop.com (knowledge base)  
- epa.gov (water guidance)  
- manufacturer PDFs/manuals (e.g., seachem.com, fluvalaquatics.com)

---

## How to attach citations
Each answer includes a `citations` array with objects that match `/src/citation_schema.json`.  
Citations should include:
- `title`
- `url`
- `publisher`
- `retrieved` (ISO date)
- `tier` (A–C)

---

## Units & Conversions
1) Use clear, dual units where practical:
   - Length: millimeters (mm) with inches in parentheses.  
   - Volume: liters (L) with U.S. gallons in parentheses.  
   - Temperature: °F with °C in parentheses.  
   - Concentration: parts per million (ppm) or mg/L interchangeably.  

2) When citing a source that uses only one system, convert to the other and show both.  

3) Round sensibly — two significant digits for small dimensions; nearest tenth for volumes.  

4) Never mix measurement systems inside a single table or range.  

5) If a product’s packaging uses one system exclusively (e.g., “20-gallon”), note it in parentheses without conversion.  

---

_End of document — version 1.1 (2025-10-10)_
