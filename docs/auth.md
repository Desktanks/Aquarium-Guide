# Authentication & Accounts — Aquarium Guide (v1)

**Stance:** No external accounts or logins required.

## Why no auth?
- All features run inside ChatGPT with local data (templates, sources, `data/links.csv`).
- We don't store PII or user history; nothing to “link” to an external identity.

## What happens if we add partners later?
If a future feature needs a sponsor or retailer API, we will:
1) Use OAuth 2.1 with PKCE (no secrets in the client).
2) Request the minimum scopes required (read-only where possible).
3) Show a clear consent screen and an equally clear “disconnect” option.
4) Fail closed: if auth fails, the feature disables gracefully.

## Security notes
- HTTPS for all external calls.
- No credential storage by Aquarium Guide. Tokens (if ever used) are short-lived and scoped.

## Support
Questions: **info@jamesdelong.com**
