# CODED Juniors Design System

The one design system for **CODED Juniors** slides and materials: camps, weekend programs and partner programs for kids aged 6–13 in Kuwait.

It records the camp-deck style used in the real Juniors decks: **Juniors red and soft white, Manrope ExtraBold in Title Case, multi-coloured keywords, Codey the robot, glossy 3D icons and Arabic value stickers.**

**Browse it:** open [`index.html`](index.html) in a browser (or turn on GitHub Pages for this repo) to see every colour and all 40 components as live previews.

> School Program (BSK) decks use the separate BSK Program design system.

---

## Quick reference

| | |
|---|---|
| **Hero colour** | Juniors Red `#FB3A3B` (hero, divider and split slides) |
| **Content background** | Content White `#F6F6F6` with white cards |
| **Text** | Ink `#1A1A1A` · muted `#5B6170` |
| **Keyword colours** (in this order) | Red `#FB3A3B` → Blue `#2474BA` → Amber `#E8890C` → Purple `#7C3AED` |
| **On red slides** | White, Yellow `#FFD15C`, Lavender `#DCD3FF` only |
| **Font** | [Manrope](https://fonts.google.com/specimen/Manrope) 800 for titles, 700 for body · Vazirmatn for Arabic |
| **Slide sizes (1920×1080)** | Dividers 180 · hero titles 150 · statements 120 · headings 84 · subtitles 64 · lists 54 · body 48 · cards 40 · pills 30–34 · **never under 30** |
| **Layout** | 120px side margins · headings at y=150 · 2px bottom rule 70px up · split panels 845px |
| **Cards** | White, 32px corners, shadow `0 14px 36px rgba(20,36,63,0.10)` |

## The rules that come first

1. Two backgrounds per deck: Juniors Red and Content White.
2. Manrope ExtraBold, Title Case, nothing under 30px.
3. Colour 1–3 key words per sentence (red → blue → amber).
4. One idea per slide, about 20 words. Question slide first, definition second.
5. Codey on every hero and split slide, in the pose that matches the slide's job.
6. Logos never move. CODED Juniors logo alone, or the partner lockup on partner programs (for example KFH).
7. "Ask your mentor if you're good to go!" before every AI step; "How to Use AI!" before every AI tool.
8. Speaker notes on every slide.
9. Never put passwords, class codes, game PINs, or kids' names or photos on slides.

Full details: [docs/brand-book.md](docs/brand-book.md).

## What's inside

```
├── index.html              Gallery: colours + live previews of every component
├── docs/
│   ├── brand-book.md       Voice, colour, type, layout, Codey, icons, logos
│   ├── slide-templates.md  The 31 layouts and the session flows (camp, weekend, partner)
│   ├── quality-checklist.md
│   └── skins-and-partners.md
├── tokens/
│   ├── tokens.json         All design tokens (colour, type, spacing, radius, shadow, tilt)
│   └── tokens.css          The same as CSS variables + type classes
├── components/
│   ├── <Name>Slide/        31 slide layouts: README.md · preview.html · slide.html
│   ├── LogoLockup/ …       9 building blocks: logos, keywords, pills, cards, Codey poses…
│   └── Cover/              The design-system cover
└── assets/
    ├── Logos/              CODED Juniors (red/white/winter), CODED Juniors | KFH lockups, KFH
    ├── Mascot/             Codey poses + the 3 "How to Use AI" badges
    ├── Stickers/           Arabic value stickers (إبتكار · برمجة · بطل · بطلة · إبداع · وناسة), Super Coder
    ├── Icons3D/            Glossy 3D icons
    ├── Decor/              Stars, sparkles, clouds, the pink question mark, shooting star
    ├── Tiles/ Imagery/ Brand/ Icons/
```

Each asset folder has a README saying when to use what.

## Using a slide layout

Every slide component has three files:

- **`README.md`**: when to use it, what to change, and a SAY / ASK / TIME script for the speaker notes.
- **`preview.html`**: open it in a browser to see the slide.
- **`slide.html`**: the slide source (a 1920×1080 `<section>` with inline styles), ready to copy into a Claude Slides deck or to rebuild in Google Slides. Image paths point to this repo's `assets/` folder; upload the images to your deck and swap the paths.

Replace every `[bracket]` with real lesson content. Keep the layout, sizes and colours.

## Session flow (short)

**Start** (cover → title → ice breaker → "You Are a…" → "Today you will…") →
**Teach** (step divider → question → definition → fun fact → How?! → tool reveal → How to Use AI) →
**Build** (Activity Time → step screenshots → prompt template → challenge → game / break) →
**Close** (Where Did We Stop / Recap Stars on Day 2 → Show & Tell → What Did We Learn → Coming Up Next → THANKS!).

Details and the weekend vs camp differences: [docs/slide-templates.md](docs/slide-templates.md).

## Not included

- **CODED_TYPE** (Neufile Grotesk), the brand-guide print font, is a licensed font and is not in this public repo. Slides use Manrope, which is free on Google Fonts.
- The JR-25 Brand Guide pages and the BSK crest are kept out of this repo.

## Usage rights

The CODED Juniors name, logos, Codey and all brand artwork belong to **CODED**. The KFH logo belongs to Kuwait Finance House. They are shared here for CODED Juniors work only and are **not** licensed for reuse elsewhere.
