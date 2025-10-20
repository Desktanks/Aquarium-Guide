# 🪙 Aquarium Guide — Affiliate & Sponsorship SOP  
**Version:** 1.0  
**Last updated:** 2025-10-11  
**Owner:** James DeLong  
**Contact:** info@jamesdelong.com  

---

## 🧩 Overview  
Aquarium Guide includes two ethical monetization layers:  

1. **Affiliate System** – uses partner tracking links (e.g., Amazon, BucePlant) to earn small commissions.  
2. **Sponsorship System** – for paid brand placements (e.g., UNS, FZONE) that appear in “🛒 Shop the Build.”  

Both layers require **transparent disclosure**, **non-sponsored alternatives**, and **traceable configuration files**.  

---

## 📂 Core Files

| File | Purpose |
|------|----------|
| `data/links.csv` | Main gear catalog. Contains affiliate & sponsored links used by the resolver. |
| `data/partners.json` | Lists all affiliate programs and potential sponsors (directory view). |
| `data/sponsors.json` | Tracks active sponsorship contracts, terms, and disclosure text. |
| `src/link_resolver.json` | Logic rules for how affiliate/sponsored links are shown & disclosed. |
| `src/templates/build_setup_plan.json` | References `"disclosure_from_rules": true"` for automatic transparency. |

---

## ⚙️ 1. Updating `data/links.csv`

This file is the live product reference table used in “Shop the Build.”

**Columns:**
| Column | Description |
|--------|--------------|
| `category` | Gear type (Tank, Filter, Light, etc.) |
| `brand` | Brand name |
| `model` | Product name or SKU |
| `specs` | Key attributes (size, wattage, etc.) |
| `affiliate_url` | Your affiliate link (Amazon, Shrimp Farm, etc.) |
| `sponsor_flag` | `true` = paid placement; `false` = affiliate or neutral |
| `priority` | 1 = preferred; higher = fallback |
| `non_sponsored_alt` | Alternate product (brand/model) |
| `why_this` | Short note about why this item is recommended |
| `last_verified` | ISO date you last checked the link |

### How to Add or Update Products
1. **Affiliate gear:**
   - Add or update `affiliate_url` with your tagged link.
   - Keep `sponsor_flag = false`.
   - Update `last_verified` to today’s date.

2. **Sponsored gear:**
   - Set `sponsor_flag = true`.
   - Make sure **at least one** `sponsor_flag=false` item exists in the same category.
   - Update `last_verified`.

3. **Test your change:**
   - Run a build prompt (e.g., “Design a 10-gallon shrimp tank”).
   - Confirm “🛒 Shop the Build” includes your new gear and correct disclosure.

4. **Commit example:**
   ```
   Update links.csv with BucePlant affiliate URLs and verify dates
   ```

---

## 🌐 2. Managing `data/partners.json`  
Tracks affiliate programs and future sponsorship candidates.

### Structure
```json
{
  "version": "1.1",
  "last_updated": "2025-10-11",
  "affiliates": [ ... ],
  "potential_sponsors": [ ... ],
  "disclosure": { ... }
}
```

### How to Add a New Affiliate Program
1. Open `data/partners.json`.
2. Add a new object under `"affiliates"`:

```json
{
  "id": "buceplant",
  "brand": "BucePlant",
  "program_url": "https://buceplant.refersion.com/",
  "notes": "Trusted aquascaping retailer; sells UNS gear, plants, substrates, and hardscape.",
  "active": true,
  "priority": 3
}
```

3. Save and commit:
   ```
   Add BucePlant affiliate program to partners.json
   ```
4. Add their links to `data/links.csv` later.

### How to Track Future Sponsor Leads
Add new entries under `"potential_sponsors"`.  
These are brands you’d like to contact or monitor (e.g., UNS, FZONE, ADA / DOOA).

---

## 💼 3. Managing `data/sponsors.json`  

Tracks active, paying sponsorships.  
Even with no sponsors, the file should exist to future-proof the app.

### Structure
```json
{
  "version": "1.0",
  "last_updated": "2025-10-11",
  "sponsors": [ ... ],
  "rules": {
    "maxSponsoredCategoryRatio": 0.5,
    "requireNonSponsoredAlt": true,
    "capOneSponsoredPerCategory": true,
    "specCheckMustPass": true
  }
}
```

### Adding a New Sponsor (when a contract is signed)
Each sponsor object includes terms, categories, and automatic disclosure text.

**Template Example:**
```json
{
  "id": "uns",
  "name": "Ultum Nature Systems",
  "website": "https://ultumnaturesystems.com",
  "contact": { "name": "Partner Manager", "email": "partners@ultumnaturesystems.com" },
  "categories": ["Tank", "Filter", "Light"],
  "exclusivity": ["Tank"],
  "brand_aliases": ["uns", "ultum nature systems"],
  "contract_start": "2026-01-01",
  "contract_end": "2026-06-30",
  "disclosure_text": "Some products are provided by Ultum Nature Systems. Non-sponsored alternatives are always included.",
  "utm": { "source": "aquaria", "medium": "sponsor", "campaign": "uns_core_2026h1" },
  "notes": "Lead with UNS where specs match; always include a non-sponsored alternative."
}
```

### Field Guide
| Field | Meaning |
|--------|----------|
| `id` | Short unique key (lowercase brand name) |
| `categories` | Categories the sponsor covers |
| `exclusivity` | Categories where they have exclusive display |
| `contract_start` / `contract_end` | ISO dates defining active window |
| `disclosure_text` | Exact message shown in “Shop the Build” |
| `utm` | Optional campaign tracking parameters |
| `notes` | Internal usage guidance |

### Contract & Disclosure Rules
- Always include a **non-sponsored alternative** in each sponsored category.  
- Never show more than **50% sponsored** categories per build.  
- Respect contract start/end dates — the resolver hides expired sponsors.  
- Each sponsor must provide a **unique disclosure text**.  

### Commit example
```
Add UNS sponsorship contract (Q1–Q2 2026)
```

---

## 🧠 4. `src/link_resolver.json` — Disclosure Logic  

This file automatically chooses which disclosure text to show.  
It reads `links.csv`, `sponsors.json`, and `partners.json`.

### Core disclosure rules:
```json
{
  "disclosure": {
    "default": "Some links may support Aquaria. A non-sponsored alternative is always included.",
    "affiliate": "Some links may support Aquaria through affiliate programs at no extra cost to you. A non-sponsored alternative is always included.",
    "sponsor": "Some products are provided through sponsorships. A non-sponsored alternative is always included.",
    "combined": "Some links may support Aquaria through affiliate programs or sponsorships. A non-sponsored alternative is always included.",
    "sponsor_specific": {
      "uns": "Some products are provided by Ultum Nature Systems. A non-sponsored alternative is always included.",
      "fzone": "Some lighting and CO₂ links are sponsored by FZONE. A non-sponsored alternative is always included."
    }
  }
}
```

| Condition | Disclosure Used |
|------------|----------------|
| Only affiliate links found | `affiliate` |
| Only sponsored links found | `sponsor` (or brand-specific) |
| Mix of both | `combined` |
| None | `default` |

---

## 🔁 5. Quarterly Maintenance Checklist

| Task | Frequency | File(s) |
|------|------------|---------|
| Verify all affiliate URLs still work | Quarterly | `links.csv` |
| Refresh affiliate program statuses | Quarterly | `partners.json` |
| Review sponsorship contract dates | Quarterly | `sponsors.json` |
| Check for expired sponsors (remove or archive) | Quarterly | `sponsors.json` |
| Update disclosure text if policy changes | As needed | `link_resolver.json` |
| Confirm `last_verified` dates are current | Ongoing | `links.csv` |

---

## 🧾 6. Example Git Workflow

1. **Edit file** in GitHub or locally.  
2. **Commit message** examples:
   - `Add BucePlant affiliate`
   - `Update UNS sponsorship contract`
   - `Refresh affiliate URLs and verification dates`
3. **Pull changes locally** (if using the Apps SDK).
4. **Run test prompt** → verify disclosure + link display.

---

## 📦 7. Folder Reference Summary

```
/data/
  ├── links.csv              ← live gear list
  ├── partners.json          ← affiliate + potential sponsors
  ├── sponsors.json          ← active sponsorships (future)
  
/src/
  ├── link_resolver.json     ← link logic + disclosure rules
  └── templates/             ← includes “Shop the Build” and other sections
  
/docs/
  └── affiliate_sponsorship_SOP.md  ← this file
```

---

## ✅ 8. Key Principles

1. **Transparency:** every affiliate or sponsor must have a clear disclosure.  
2. **Alternatives:** always include at least one non-sponsored option.  
3. **Accuracy:** update links and contracts promptly.  
4. **Safety & Ethics:** Aquaria will never promote unsafe or inhumane practices, even if sponsored.  
5. **Traceability:** every change is logged and version-controlled.

---

### Ready-to-use commit message for this SOP
```
Add affiliate & sponsorship SOP (v1.0) — defines link, partner, and sponsor workflows
```
