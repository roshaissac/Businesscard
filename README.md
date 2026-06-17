# Rosh Issac — Digital Business Card

**Live card:** https://roshaissac.github.io/Businesscard

A mobile-first, NFC-ready digital business card for **Rosh Issac, Realtor® | Issac Realty Team** (Associates of Dreamhouse Realty Ltd.). Built as a single, self-contained `index.html` with **no build step and no render-blocking CDNs** — it deploys exactly as written on GitHub Pages.

---

## What it does

- **Save My Contact** — one tap shares a `.vcf`; on iOS it opens the native "Add to Contacts" sheet (Web Share), elsewhere it downloads the file
- **Exchange form** — visitors submit name, email, phone, a note (+ consent); leads flow into the CRM via Formspree → Zapier. Prospect / Professional modes, inline validation, spam honeypot
- **Social links** — WhatsApp, LinkedIn, issacrealty.com
- **Share sheet** — QR code + Copy Link + native AirDrop/Share
- **Capture Mode** (Rosh only — FAB or `?cap`) — scan a card (QR + OCR), paste a vCard, or enter manually, tag, and save to CRM
- **Installable PWA** — real `manifest.json` + service worker for instant repeat loads and offline availability

## Architecture (Phase 1 — "zero flab")

| Concern | Approach |
|---|---|
| CSS | Hand-authored, inlined in `<head>`; design tokens at the top of `:root` — **no Tailwind runtime** |
| Icons | Inline SVG sprite — **no icon font / no Font Awesome CDN** |
| Fonts | Modern system stack (serif `ui-serif/Georgia` for the name, `system-ui` for body) — **no Google Fonts** |
| Photo | Gravatar requested at display size (drop a local `portrait.jpg` to self-host) |
| Heavy libs | QR (`qrcodejs`), OCR (`tesseract.js`), `jsQR` are **lazy-loaded only on demand**, never on first paint |
| Hosting | GitHub Pages |
| Form backend | Formspree (`mqejqgll`) → Zapier |

The only network requests on first paint are the page itself and the Gravatar photo. Everything else is inline or deferred.

## Editing

Open `index.html` and edit the **`ME` object** in the `<script>` (name, phone, email, links, Formspree ID). That's the only block you normally touch. Tweak brand colors via the CSS custom properties in `:root` near the top.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire card (HTML + CSS + JS) |
| `manifest.json` | PWA install metadata |
| `sw.js` | Service worker (network-first page, cache fallback). Bump `CACHE` to force an update |
| `icon.svg` | Maskable monogram icon |
| `dreamhouse-logo.png` | Brokerage bar logo (RECA compliance) |

## NFC setup

Program your NFC sticker with:
```
https://roshaissac.github.io/Businesscard
```

## Zapier field mapping

| Field | Name attribute |
|---|---|
| Full name | `full_name` |
| Email | `email_address` |
| Phone | `phone_number` |
| Message | `message` |
| Type | `contact_type` (`client` / `professional`) |
| Source | `contact_source` (`digital_card` / `capture_mode`) |
| Industry | `industry` |
| Company | `company` |

---

© 2025 Issac Realty Inc · Brokered by Dreamhouse Realty Ltd.
