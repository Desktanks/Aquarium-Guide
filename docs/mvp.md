# Aquaria — MVP Definition (CFT 1)

**Owner:** You
**Date:** Oct 10, 2025
**Rule:** Done = Published. Drafts don’t count.

---

## 1) Problem & Target Users

* **Who:** New and intermediate home aquarists; small pet shop staff; classroom hobby tanks.
* **Core pain:** Overwhelmed by scattered advice and gear choices; uncertainty about water parameters and troubleshooting.
* **Moment of need:** “I want a healthy, pretty tank and I don’t want to harm fish or waste money.”

## 2) One-line Value

*A calm, cited plan for building and caring for a specific aquarium, plus fast fixes when things go sideways.*

## 3) MVP Scope (v1)

Two modules, in-chat, built on ChatGPT Apps SDK UI blocks:

1. **Build / Setup Plan** — equipment list, water targets, cycling plan, maintenance schedule, shopping links (with non-sponsored alternative), and safety notes.
2. **Care & Troubleshooting** — likely causes, step-by-step fixes, prevention, gear suggestions, and citations.

**Out of scope (v1):**

* Live inventory/pricing APIs; water test kit image recognition; custom photo analysis; advanced aquascaping design; push notifications; multi-language.

## 4) Success Criteria

* User can follow a **single page** plan to: (a) acquire the right gear, (b) cycle the tank, (c) complete the first water change.
* Troubleshooting answers are **actionable, humane, and cited.**
* 90% of answers render cleanly on mobile.

**Helpful metrics (opt-in only):** completion of plan, clicks on “Shop the build,” thumbs-up rate, repeat use (7-day).

## 5) Canonical Prompts (golden paths)

1. “Design a **10-gallon shrimp-only, low-tech** tank for a beginner.”
2. “**Cloudy water** on day 5 of cycling. What should I do today?”
3. “Quiet **filter** for a **20-gallon** in a bedroom. Build me a full setup plan.”
4. “**Algae bloom** with living plants; I don’t want to dose copper. Safer options?”
5. “**Betta** in a 5-gallon; heater yes/no; water parameters and water-change schedule?”

## 6) Output Contract (how answers are shaped)

Every response follows this order:

* **Overview** (2–3 lines)
* **Equipment List** (model-level, with short why)
* **Water Targets** (temp, pH, GH/KH, ammonia/nitrite/nitrate)
* **Step-by-Step** (numbered commands for next 7 days)
* **Maintenance** (weekly/monthly)
* **Useful Gear** (affiliate + non-sponsored alternative)
* **Prevention** (if troubleshooting)
* **Citations** (inline; domain-whitelisted)
* **Support footer** (contact + humane-care reminder)

## 7) Safety & Care Principles (v1)

* Humane standards first; refuse harmful or illegal requests.
* No medical diagnosis for humans; no advice encouraging animal suffering.
* Always include a safer alternative if any chemical treatment is suggested.
* If data is uncertain, say so and give a conservative path.

## 8) Research & Citations

* **Whitelist** (initial):

  * SeriouslyFish, Aquarium Co-Op knowledge base, FishBase, RSPCA/ASPCA pet guidance, US EPA water guidelines, academic journals, manufacturer manuals.
* **Rule:** Every factual claim about species, parameters, or safety must carry a citation object. If no source → don’t claim.

## 9) Links & Monetization

* `links.csv` drives product links with fields: `category,brand,model,specs,affiliate_url,sponsor_flag,priority`.
* Resolver includes **one non-sponsored alternative** for every sponsored link.
* Disclose sponsorship in-line.

## 10) Privacy & Data

* No PII storage.
* Anonymous usage analytics **off by default**; one-toggle consent.
* Support email published in footer of every answer.

## 11) Technical Notes

* ChatGPT Apps SDK scaffold; minimal UI blocks; strict tests for the two modules.
* Intent router: `build_setup` vs `care_troubleshoot` (keyword + pattern).
* Config files: `/docs/research.md`, `/docs/safety.md`, `/store/` assets, `/checklists/`.

## 12) Risks & Mitigations

* **Risk:** Conflicting sources.
  **Mitigation:** Prefer peer-reviewed or expert consensus; state uncertainty.
* **Risk:** Over-broad scope.
  **Mitigation:** Ship only the two modules; backlog the rest.
* **Risk:** Review delays.
  **Mitigation:** Clear safety/privacy docs and reachable support.

## 13) Backlog (post-MVP)

* Photo analysis of algae/disease (strictly opt-in).
* Local water-quality presets by city.
* Multi-language; community-verified tank templates.
* Classroom mode with printable maintenance charts.

---

### Definition of Done (for CFT 1)

* This page is published.
* Repo will include this at `/docs/mvp.md`.
* Next: CFT 2 = scaffold the Apps SDK project + README + “hello-tank” tool.

---
