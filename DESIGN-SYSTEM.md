# The Issac House Style — Suite Design Blueprint

*A shared design language for the Issac Realty mini-app family. Prepared as a
design-consultant blueprint — approve this before any app is restyled.*

**Status:** Blueprint for sign-off · **Owner:** Rosh Issac · **Date:** 2026-06-22
**Canonical reference:** the Rosh & Sheena business cards (this repo + `SheenaCard`)

---

## 0. The one-line brief

> **One family, many faces.** Every app opens with its own *dark, cinematic
> hero* — a distinct first impression — then settles into a *light, calm
> workspace* for the real task. A small set of shared signals (the brokerage
> band, the type system, the orange-on-black discipline, the motion grammar)
> makes them unmistakably siblings. **Coherence, not uniformity.**

This is the 2026 "quiet luxury" playbook applied to a tool suite: warm,
restrained, editorial — but still fast, mobile-first, and zero-CDN on first
paint (the card's hard rule, kept).

---

## 1. The apps in scope — the full family (nobody left behind)

Grouped as Rosh organized them. The grouping is meaningful: apps in a group share
a *motif family* and adjacent accents, so the suite reads in "chapters."

| # | App | Group | Job to be done | Status |
|---|---|---|---|---|
| **A-1** | Open-house sign-in | A · Door/sign-in | Greet & capture walk-ins | 🔧 Restyle |
| **A-2** | Rental viewing sign-in | A · Door/sign-in | Check in a viewing | 🔧 Restyle |
| **B-3** | Affordability calculator | B · Number tools | "What can I afford?" | 🔧 Restyle (proof app) |
| **B-4** | Rental investment analysis | B · Number tools | Deal read / returns | 🔧 Restyle |
| **B-5** | Rent vs Ownership comparison | B · Number tools | Buy-or-rent decision | 🔧 Restyle |
| **C-6** | Buyer intake form | C · Field & leads | Qualify a buyer | 🔧 Restyle |
| **C-7** | Door-knock tracking | C · Field & leads | Log a canvassing route | 🔧 Restyle |
| **D-8** | Google review request | D · Reputation | Ask for a review | 🔧 Restyle |
| **E-9** | Business card — Rosh | E · Reference | Share contact / capture | ✅ Reference — keep look |
| **E-10** | Business card — Sheena | E · Reference | Share contact | ✅ Reference — keep look |

The two cards (E) are the **tuning fork**. Everything else is tuned to them — not
the reverse.

---

## 2. The architecture: three-tier tokens

Borrowed from how mature multi-product systems (Atlassian et al.) stay coherent
while letting each product feel its own: **global → semantic → per-app**. Each
app stays a single self-contained `index.html` (no shared CDN — the card ethos),
but every app pastes the **same token block** at the top of `:root`, then sets
**one line** to declare its identity.

```
GLOBAL          the raw brand constants — identical in every app
  --c-ink, --c-paper, --c-card, --c-orange, --c-gold, --c-white …

SEMANTIC        what the global means in context — identical in every app
  --bg, --surface, --text, --accent, --cta, --hairline …
  (--accent intentionally points at a per-app variable, see below)

PER-APP         the ONE knob each app turns — its signature
  --app-accent:  <the app's hue>     ← the only required override
  --app-hero-art: <the hero motif>   ← optional, per app
```

So restyling a new app = paste the kit, set `--app-accent`, drop in the hero
motif. That is the whole "belonging" contract.

---

## 3. Palette — orange & black, disciplined

Inherited verbatim from the card so the family reads as one. Brand orange stays
the soul; **gold is reserved for primary CTAs only** (the card's rule — it keeps
the orange from getting noisy).

### Shared constants (every app)

| Token | Value | Role |
|---|---|---|
| `--c-paper` | `#09090b` | Near-black — hero background |
| `--c-card` | `#16151b` | Charcoal — raised surfaces on dark |
| `--c-ink` | `#f4eee2` | Warm-white — text on dark (never pure white) |
| `--c-ivory` | `#f3efe9` | **Workspace background (light half)** |
| `--c-ivory-card`| `#fbf9f5` | Raised surface on the light workspace |
| `--c-charcoal` | `#1c1b20` | Text on the light workspace |
| `--c-muted` | `#a79f91` | Warm-grey secondary text |
| `--c-orange` | `#ee8a4e` | Brand accent (default) |
| `--c-gold` | `#c9a25e` | Champagne — **CTA buttons only** |
| `--c-hair-d` | `rgba(244,238,226,.10)` | Hairline on dark |
| `--c-hair-l` | `rgba(28,27,32,.10)` | Hairline on light |

> **New vs. the card:** the card is dark *top to bottom*. The apps add a
> **light ivory workspace** (`--c-ivory`) below the hero so forms, sliders and
> numbers are effortless to read in daylight, on-site, one-handed. The ivory and
> warm-white are deliberately the same temperature — the seam should feel like
> dawn, not a hard cut.

### Per-app signature accent (the "many faces")

Each app shifts the brand orange a controlled few degrees around the same hue
family — same warmth, same energy, just enough to give each its own pulse. All
remain legible as "orange-ish on black," so the family never breaks.

| # | App | `--app-accent` | Feeling |
|---|---|---|---|
| E-9/10 | Cards (reference) | `#ee8a4e` brand orange | The tuning fork |
| A-1 | Open house | `#f0825a` **coral** | Bright, welcoming — a doorway |
| A-2 | Rental viewing | `#cf6b3e` **ember** | Decisive, settled — an appointment |
| B-3 | Affordability | `#e3a049` **amber/gold** | Money, optimism, warmth |
| B-4 | Investment analysis | `#d8973f` **honey** | Deeper gold — serious money |
| B-5 | Rent vs Own | `#c98a4a` **bronze** | Balanced, comparative |
| C-6 | Buyer intake | `#d97047` **terracotta** | Grounded, trustworthy |
| C-7 | Door-knock | `#c56a44` **clay** | Field-tough, utilitarian |
| D-8 | Review request | `#ef9a52` **coral-gold** | Warm gratitude |

Gold CTA, warm-white text, near-black hero: **constant**. Only the accent moves.
That single shifting note is what lets each hero feel custom while the chord
stays the same.

---

## 4. Typography — sans + one display voice

Per your call: **system-sans does ~95% of the work** (matches the cards 1:1, no
webfont tax on the body), and **one characterful display face appears exactly
once per app** — on the single hero moment that defines that screen.

- **Body / UI:** the card's stack —
  `-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, Roboto, Helvetica, Arial, sans-serif`.
- **Display accent face (recommended): _Fraunces_** — a modern high-contrast
  editorial serif, open-source (SIL OFL), variable, with optical sizing. It's
  the quintessential "quiet-luxury / architecture-magazine" voice, and because
  it's OFL we **self-host one `woff2`** in each repo — *zero CDN, first-paint
  safe.* (Alternatives if you want to audition: *Recoleta*, *PP Editorial New*
  — both commercial.)
- **Rule:** the display face is for **one element per app only** — the hero's
  defining word or number. Everywhere else, sans. Restraint is the luxury.

### Where the one display moment lands per app

| App | The single display moment |
|---|---|
| Affordability calc | The **affordability number** ("$642,000") — big, set in Fraunces, the emotional payoff |
| Buyer intake | The hero **headline** ("Let's find your home.") |
| Open house | The **property address / "Welcome"** line over the dark hero |
| Rental viewing | The **date/time** of the confirmed viewing |
| Cards | (Stay as-is — all-sans. The cards are the one place the display face is *absent*, which is fine; they're the calling card, not a landing page.) |

---

## 5. The shared anatomy — dark hero → light workspace

Every app is one vertical scroll with the same three zones. This *is* the
family resemblance.

```
┌──────────────────────────────┐  ← --c-paper (near-black)
│   ●  HERO  (cinematic)        │
│                               │     • the ONE display-face moment
│   <app's signature motif>     │     • soft orange glow = --app-accent
│   one line of intent          │     • measured into --hero-h
│                               │
│   ╲  dawn seam (gradient)  ╱  │  ← paper → ivory, ~24px feather
├──────────────────────────────┤  ← --c-ivory (light workspace)
│                               │
│   WORKSPACE                   │     • the actual task lives here
│   forms · sliders · results   │     • ivory cards, charcoal text
│   gold CTA                    │     • high legibility, daylight-proof
│                               │
├──────────────────────────────┤  ← sticky --c-paper band
│  ▣ Dreamhouse Realty Ltd. · © │  ← RECA brokerage band (shared, required)
└──────────────────────────────┘
```

**Shared, non-negotiable signals (the "same regiment" markers):**

1. **Dark cinematic hero** with a soft `--app-accent` radial glow.
2. **The dawn seam** — a ~24px paper→ivory gradient feather. Same transition
   everywhere; it's a signature in its own right.
3. **Sticky brokerage band** — `Dreamhouse Realty Ltd.` logo + © — reused from
   the card verbatim. *(RECA: where any team/brokerage name appears it must read
   "Sheena & Rosh Issac Property Group — Associates of Dreamhouse Realty Ltd."
   Never the team name alone.)*
4. **Gold pill CTA** — identical shape, radius, and motion in every app.
5. **Measured bars** — keep the card's `fitBars()` wiring (`--hero-h`,
   `--band-h`) so the layout is exact on every device.

**Per-app, distinct (the "own identity"):**

- The **hero motif** (§6) and the **signature accent** (§3) — that's the moderate
  distinctiveness you chose: same frame, different soul.

---

## 6. Per-app hero motifs

Moderate distinctiveness = each hero gets a motif that says *what this tool is*
in one glance, rendered in that app's accent. All are CSS/SVG/inline — no heavy
assets, no CDN.

- **A-1 Open house** — *the marquee.* Address set large with a date·time strip
  and a soft coral "porch-light" glow. The most inviting hero — it greets walk-ins.
- **A-2 Rental viewing** — *the appointment.* A focused slot/clock motif in ember;
  the booked time is the display moment. Calm, decisive.
- **B-3 Affordability** — *the living number.* A large Fraunces figure that
  re-tallies as the sliders move below — the number is hero *and* result.
- **B-4 Investment analysis** — *the verdict.* A big cap-rate %, with a compact
  three-metric strip (cash flow / cap / cash-on-cash). A quick deal read.
- **B-5 Rent vs Own** — *the crossover.* A small five-year bar climb in the hero
  ("owning pulls ahead in year 4"); two A/B columns in the workspace.
- **C-6 Buyer intake** — *the threshold.* A quiet keyline arch behind the
  headline + a step progress ribbon. Feels like being welcomed in.
- **C-7 Door-knock** — *the route tally.* Doors / spoke / follow-up counts in the
  hero; a status-pinned address list below. The most utilitarian, still on-family.
- **D-8 Review request** — *the five stars.* An oversized serif quote mark and a
  five-star row; a one-tap Google button. Warm, grateful, ~20 seconds.

---

## 7. Components — one kit, reused

Shared primitives, identical across apps (defined once, pasted in):

- **Pill CTA** — gold gradient, `--radius` pill, press-scale 0.98, subtle lift.
- **Secondary button** — ghost on ivory / hairline border, accent text.
- **Input / field** — ivory-card fill on light, generous 44px+ tap target,
  accent focus ring, inline validation states (`--ok`, `--err` from the card).
- **Slider** (calculator) — accent track fill, gold thumb.
- **Stepper / progress ribbon** (intake) — accent fill on hairline rail.
- **Card / panel** — `--c-ivory-card`, soft shadow, `--radius-md`.
- **Brokerage band** — copied wholesale from `index.html`.
- **Toast / inline status** — reuse the card's `--ok-soft` / `--err-soft`.

Radii & shadows: inherit the card's `--radius / --radius-md / --radius-sm` and
shadow tokens unchanged.

---

## 8. Motion grammar

Subtle, shared, "interactions so quiet they feel like breathing" (the 2026
luxury-motion note). Same easing everywhere ties the family together.

- **Easing:** `cubic-bezier(.22,.61,.36,1)` (gentle ease-out) for everything.
- **Hero entrance:** content fades up 8px over ~500ms on load.
- **Dawn seam:** the accent glow drifts ~2% on a slow loop (optional, respectful).
- **CTA:** 120ms press-scale + shadow lift.
- **Calculator number:** ~400ms count-tween on change.
- **Respect `prefers-reduced-motion`** — collapse all of the above to instant.

---

## 9. Guardrails (inherited from the card, kept)

- **Zero third-party calls on first paint.** Self-host the one `woff2`; inline
  all CSS/SVG. Anything heavy = lazy, on demand only.
- **Mobile-first, one-handed, on-site.** These get used in driveways and
  kitchens — daylight legibility (hence the ivory workspace) is the point.
- **Accessibility:** AA contrast on every text/accent pairing (the accent hues
  in §3 are tuned for warm-white on near-black and charcoal on ivory); 44px tap
  targets; visible focus; reduced-motion honored.
- **RECA compliance:** brokerage disclosure on every surface (§5.3).
- **Cards' photo hero is frozen (Rosh's note):** the business cards (E-9/E-10)
  keep their *current* photo/portrait hero exactly as it is today. Even the
  optional token-backport (§10.5) must **not** restyle the card's hero image,
  ring, or avatar treatment — name/photo/CTA stay verbatim. The cards lend their
  DNA to the suite; the suite does not re-skin the cards.
- **PWA-ready:** each app keeps its own `manifest.json` + `theme-color #09090b`
  so installs look like one suite on the home screen.

---

## 10. Rollout sequence (when you say go)

1. **Build the kit** — extract the token block, shell, band, and components from
   the card into a copy-paste `KIT.md` / snippet (lives in this repo).
2. **Proof app: Affordability calculator** — highest-traffic, best showcase for
   the "living number" hero and the dark→light split. Ship it, you react.
3. **Tune** the kit from what we learn on the proof.
4. **Roll** to Buyer intake → Open house → Rental viewing, one PR each.
5. **Backport (optional):** fold the shared tokens into the two cards' `:root`
   so the *names* match the suite — **without touching their look.**

Each step is its own reviewable PR. Nothing ships to an app until you've seen it.

---

## 11. What I need from you to start building

When you're ready to move from blueprint to pixels:

1. **Sign-off** on this document (or redlines).
2. **Display face:** Fraunces (free, self-hostable) — yes, or audition a
   commercial face (Recoleta / PP Editorial New)?
3. **Add the four app repos to this session** so I can read and restyle them.
4. **Start with the calculator** as the proof — confirm, or pick a different
   first app.

---

*Prepared in design-consultant mode. References: 2026 luxury real-estate web
trends (DMR Media, Placester, Housingwire), Figma 2026 web-design trends, and
multi-product design-system practice (Onething, UXPin, zeroheight 2026 report).
Brand DNA sourced from the live Rosh & Sheena cards.*
