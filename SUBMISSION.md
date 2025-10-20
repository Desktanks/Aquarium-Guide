# Aquarium Guide — ChatGPT Store Submission Packet

**Version:** 1.1  
**Date:** Oct 10, 2025  
**Developer:** James DeLong  
**Support:** info@jamesdelong.com  
**Category:** Home & Hobbies  

---

## 🐠 Overview
Aquarium Guide helps people design and maintain aquariums with accurate, humane, and fully cited guidance.  
It generates verified setup plans, care routines, and troubleshooting steps that follow responsible husbandry standards and real-world gear data.

**Key Modules**
- **Build / Setup Plan** — equipment list, water targets, cycling guide, and maintenance schedule  
- **Care & Troubleshooting** — causes, numbered fixes, prevention tips, and gear options  

---

## 🌊 Value
- Direct, step-by-step answers for any aquarium type  
- Humane, science-based standards (no risky shortcuts)  
- Sponsored links disclosed; unsponsored options always included  
- No login, tracking, or personal data required  
- Consistent, cited responses that scale from beginner to advanced users  

---

## 🧱 Technical Summary
- Built with the ChatGPT **Apps SDK**  
- Two main modules: `build_setup.json` and `care_troubleshoot.json`  
- Structured templates, citation layer, and tone configuration  
- Anonymous metrics optional and off by default (`src/config.json`)  
- No external authentication (`src/auth_config.json`)  

---

## 🧍‍♀️ Safety & Ethics
- Rejects harmful, unsafe, or illegal care requests (`src/safety_rules.json`)  
- Follows humane livestock standards and ethical stocking guidelines  
- Each factual statement cites a trusted source from the approved whitelist  
- Includes user-visible safety and support footer with contact info  

---

## 🔒 Privacy
- No personally identifiable information collected or stored (`docs/privacy.md`)  
- Optional anonymous usage analytics (opt-in only)  
- Product links resolved locally; no third-party tracking or cookies  

---

## 💬 Tone & UX
- Direct, clear, grounded voice (`src/voice_strings.json`)  
- Consistent layout with clear section headers (`src/layout_ux.json`)  
- Example outputs verified during internal testing (`docs/test_report.md`)  

---

## 🛠️ Store Assets
Located in `/store/`  
- **Tagline:** “Smart aquarium planning and care — clear, humane, and reliable.”  
- **Description:** See `store/description.md`  
- **Icon:** `store/icon-notes.md`  
- **Screenshots:** `store/screenshots.md`  
- **Demo Script:** `store/demo_script.md`  

---

## ✅ QA Status
- Internal test flight completed (see `docs/test_report.md`)  
- All JSON validated in GitHub Actions  
- Contact verified: info@jamesdelong.com  
- Remaining todos: finalize demo clip and confirm public repo visibility  

---

## 📦 Submission URL / Repo
GitHub Repo: [[https://github.com/desktanks/aquaria](https://github.com/desktanks/aquaria)](https://github.com/Desktanks/Aquarium-Guide.git)

---

**Definition of Done:**  
Aquaria runs successfully in ChatGPT via the Apps SDK, passes safety and privacy checks, and includes complete documentation and store assets for submission.
