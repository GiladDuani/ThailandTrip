# Design System: Thailand 2026 Honeymoon Command Center

<!-- impeccable:design-schema 1 -->

## Identity & Aesthetic Direction
- **World:** Swiss Tropical Operations Ledger (Luxury Resort Field Manual)
- **Direction:** Tactile, high-contrast operational clarity paired with warm Thai limestone and deep canopy emerald surfaces. Designed for RTL Hebrew mobile and desktop use.

## Color Tokens
- **Ground (`--ground`):** `#FAF7F2` (Warm Alabaster Sand)
- **Surface (`--surface`):** `#FFFFFF` with `#E6DFD3` 1px warm limestone border
- **Muted Surface (`--surface-muted`):** `#F3EFE6`
- **Primary Brand (`--emerald-deep`):** `#0B4F4A` (Deep Canopy Emerald)
- **Primary Ink (`--ink`):** `#142321`
- **Secondary Ink (`--ink-secondary`):** `#4A5D5A`
- **Semantic Region Tokens:**
  - Phuket & Coconut Island: `#0284C7` (Andaman Turquoise)
  - Railay & Krabi: `#0D9488` (Krabi Lagoon Teal)
  - Chiang Mai: `#0B4F4A` (Canopy Emerald)
  - Northern Loop (Pai, Mae Hong Son, Mae Sariang): `#C2410C` (Mountain Terracotta)
  - Bangkok: `#4338CA` (Royal Indigo)
  - Shabbat & Hanukkah Anchors: `#B45309` (Candlelight Gold)
  - Critical Shabbat Deadline Alerts: `#B91C1C` (Crimson Alert)

## Typography
- **Display & Headings:** `Rubik` (600, 700, 800), `-0.02em` tracking
- **Body & UI Controls:** `Assistant` (400, 500, 600, 700)
- **Numeric Data:** `font-variant-numeric: tabular-nums` on all prices (ILS, THB, USD), dates, flight times, and cancellation hours.

## Component Architecture
- Built on **shadcn/ui** primitives (`Tabs`, `Card`, `Badge`, `Button`, `Dialog`, `Checkbox`, `Input`, `Accordion`) with 44px minimum mobile touch targets and full keyboard focus rings.
- **Motion:** Framer Motion scroll-linked top progress bar, viewport-triggered card entrances, and interactive calendar cell micro-interactions.
