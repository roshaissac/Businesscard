# Rosh Issac — Digital Business Card

**Live card:** https://roshaissac.github.io/Businesscard

A mobile-first, NFC-ready digital business card for **Rosh Issac, Realtor® | Issac Realty Team** (Associates of Dreamhouse Realty Ltd.).

---

## What it does

- **Add to Contacts** — one tap downloads a `.vcf` file with full contact details
- **Exchange form** — visitors submit their name, email, phone, and a note; leads flow into the CRM via Formspree → Zapier
- **Social links** — direct to WhatsApp, LinkedIn, and issacrealty.com
- **PWA ready** — visitors can add the card to their iPhone home screen

## Tech stack

| Layer | Tool |
|---|---|
| Styling | Tailwind CSS (Play CDN) |
| Icons | Font Awesome 6 |
| Form backend | Formspree (`mqejqgll`) |
| CRM pipeline | Zapier (Formspree trigger) |
| Hosting | GitHub Pages |
| Profile photo | Gravatar |

## NFC setup

Program your NFC sticker with:
```
https://roshaissac.github.io/Businesscard
```

## Zapier field mapping

The form uses these `name` attributes — Zapier will detect them automatically:

| Field | Name attribute |
|---|---|
| Full name | `full_name` |
| Email | `email_address` |
| Phone | `phone_number` |
| Message | `message` |

---

© 2025 Issac Realty Inc · Brokered by Dreamhouse Realty Ltd.
