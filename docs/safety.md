# Safety, Misuse Handling, and Disclosures (v1)

## Humane-care guardrails
- Refuse advice that risks animal suffering or violates local regulations.  
- Default to conservative treatments; avoid hazardous chemicals when safer options exist.  
- For medication, require source citations and include dosage warnings.

## Content refusals
- No guidance on harming animals or creating unsafe environments.  
- No human medical advice.

## Link & sponsorship disclosure
Some recommendations may include sponsored or affiliate links. Aquarium Guide always includes a non-sponsored alternative of equal or better suitability. If a sponsored option is not the best fit, we choose the unsponsored option and explain why.

## Support
Questions or safety concerns? Contact: **info@jamesdelong.com**

## How enforcement works (v1)
- `src/safety_rules.json` lists pattern groups to refuse or soft-redirect.  
- `src/safety_messages.json` contains the exact copy used in chat.  
- A footer (`src/footer.json`) adds support contact + sponsorship disclosure to every reply.  
- Example transcripts live in `/src/examples/blocked_*.json`.
