# Aquaria Internal Test Flight — CFT 14

**Date:** Oct 10, 2025  
**Tester:** You  
**Goal:** Verify completeness, consistency, and readiness for submission.

---

## 1. Structure sanity
☑ `/docs`, `/src`, `/data`, `/tools`, `/store` folders exist  
☑ No placeholder text missing (“example.com” acceptable for mock links)  
☑ Checklist complete through CFT 13  

---

## 2. Content checks
☑ Every JSON file opens without syntax errors in GitHub  
☑ Footer and safety messages show correct email (info@jamesdelong.com)  
☑ All examples use humane, factual language  
☑ Sponsored links always include a non-sponsored alternative  
☑ Privacy.md and Safety.md reference correct support email  

---

## 3. UX checks
☑ Layout examples follow `layout_ux.json` (headings bold, spacing single line)  
☑ Tone consistent with `voice_strings.json`  
☑ Example outputs render clearly in raw Markdown preview  

---

## 4. Review readiness
☑ Store folder contains tagline, description, screenshots, and demo plan  
☑ No external authentication required (`auth_config.json`)  
☑ Analytics off by default (`config.json`)  
☑ Safety and privacy docs exist and align  

---

## 5. Known issues / todos
_(List anything that needs cleanup before submission)_
- [ ] Fix any outdated emails or URLs  
- [ ] Replace placeholder links with real ones when sponsors confirmed  
- [ ] Record 30s demo clip (optional)  

---

**Status:** ✅ Functional skeleton verified  
**Next step:** CFT 15 — assemble `SUBMISSION.md` for ChatGPT Store packet
