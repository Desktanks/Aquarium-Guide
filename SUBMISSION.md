# Aquaria — ChatGPT Store Submission Packet (CFT 15)

**Version:** 1.0  
**Date:** Oct 10 2025  
**Developer:** James DeLong  
**Support:** info@jamesdelong.com  
**Category:** Home & Hobbies  

---

## 🐠 Overview
Aquaria helps people design and maintain aquariums calmly and correctly.  
It creates cited build plans and humane troubleshooting guides using verified sources and transparent gear links.

**Key modules**
- **Build / Setup Plan** — gear list, water targets, cycling steps, maintenance schedule  
- **Care & Troubleshooting** — likely causes, numbered fixes, prevention, useful gear  

---

## 🌊 Value
- Clear, cited instructions for any tank type  
- Humane and ethical standards (no risky hacks)  
- Sponsored links disclosed; unsponsored options always included  
- No login or personal data required  

---

## 🧱 Technical summary
- Built for the ChatGPT Apps SDK  
- Two core modules (`build_setup.json`, `care_troubleshoot.json`)  
- Structured templates + tone strings + safety & privacy policies  
- Analytics off by default (`src/config.json`)  
- No external authentication required (`src/auth_config.json`)  

---

## 🧍‍♀️ Safety & Ethics
- Refuses harmful or illegal advice (`src/safety_rules.json`)  
- Uses calm refusal messages and support footer  
- Every factual statement cites a source from the vetted whitelist  
- Complies with humane-care and content standards  

---

## 🔒 Privacy
- No PII collection or storage (`docs/privacy.md`)  
- Optional anonymous usage analytics (opt-in)  
- Sponsored links resolved locally; no external tracking  

---

## 💬 Tone & UX
- Calm, factual, lightly friendly voice (`src/voice_strings.json`)  
- Consistent layout with bold section headers (`src/layout_ux.json`)  
- Example outputs validated during internal test flight (`docs/test_report.md`)  

---

## 🛠️ Store Assets
Located in `/store/`  
- **Tagline:** “Build and care for your tank — calm, cited, humane.”  
- **Description:** See `store/description.md`  
- **Icon:** `store/icon-notes.md`  
- **Screenshots:** `store/screenshots.md`  
- **Demo Script:** `store/demo_script.md`  

---

## ✅ QA Status
- Internal test flight completed (see `docs/test_report.md`)  
- All JSON validated in GitHub  
- Email confirmed: info@jamesdelong.com  
- Remaining todos: replace placeholder URLs, record demo clip  

---

## 📦 Submission URL / Repo
GitHub Repo: https://github.com/desktanks/aquaria  

---

**Definition of Done:** App is complete, documented, and ready for submission when ChatGPT Store submissions open.
