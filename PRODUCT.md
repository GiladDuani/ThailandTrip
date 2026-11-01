# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + TypeScript + Vite + Tailwind CSS + shadcn/ui + Framer Motion (mobile-first responsive RTL Hebrew web application)

## Users

Gilad and Hadar, an Israeli Shabbat-observant couple traveling on their 23-day honeymoon in Thailand (November 22 to December 14, 2026). They use this application primarily on their smartphones before departure (to finalize domestic flights, track free-cancellation deadlines, verify bed types, and manage the Mae Hong Son Loop vs. Chiang Mai backup decision) and on the ground in Thailand (to navigate day-by-day schedules, hotels, Shabbat Chabad house anchors, and interactive maps).

## Product Purpose

A comprehensive, mobile-first Hebrew (RTL) honeymoon command center and itinerary companion for Thailand 2026. Success means Gilad and Hadar can immediately see:
1. Every day's exact schedule, locations, and transitions across the updated route: Bangkok Airport (Nov 22–23) -> Phuket Coconut Island (Nov 23–27) -> Phuket Patong for Shabbat 1 (Nov 27–29) -> Railay Beach, Krabi (Nov 29–Dec 3) -> Chiang Mai for Shabbat 2 / Hanukkah (Dec 3–6) -> Mae Hong Son Loop: Pai (Dec 6–7), Mae Hong Son (Dec 7–9), Mae Sariang (Dec 9–10), Chiang Mai return (Dec 10–11) [with separate backup reservation at The Empress Hotel Dec 6–11] -> Bangkok for Shabbat 3 and departure (Dec 11–14).
2. All 10 booked hotels (+ 1 backup hotel) with exact check-in/out dates, who booked (Gilad / Hadar), platform (Booking / Agoda), exact prices in THB/USD and estimated ILS, payment status (paid vs. scheduled charge dates vs. cash supplement on arrival), bed confirmations, and exact Israel-time cancellation deadlines.
3. Open urgent action items: booking the 3 domestic flights based on Gilad's recommendations, verifying bed type at Railay Village Resort & Spa from room screenshot, and deciding on The Empress Hotel backup cancellation before Shabbat enters (since both Railay Nov 14 18:59 and Empress Dec 5 18:59 fall on Shabbat).
4. Interactive two-month calendar (November & December 2026), interactive route map, 3 Shabbat anchors at Chabad houses, and personal per-day notes/checklist persisted in localStorage.

## Positioning

Unlike generic travel templates, this application combines a live operational ledger of real bookings, currency conversion estimates (THB/USD to ILS with 5% Agoda FX buffer warnings), Israel-time cancellation countdowns with Shabbat conflict alerts, and a day-by-day honeymoon field guide tailored for Shabbat-observant travelers.

## Operating Context

Used in Hebrew (RTL) on mobile phones and desktop browsers. Must work offline/instantly with local persistence for task checkboxes, custom tasks, and daily notes.

## Capabilities and Constraints

- All hotel dates, prices, booking platforms, bookers (Gilad / Hadar), payment rules, and cancellation deadlines in Israel time must be preserved verbatim from Gilad Duani's November 1, 2026 update.
- Domestic flights are NOT booked yet and must be highlighted as open action items with Gilad's recommended options (Bangkok Airways Nov 23, Thai AirAsia Dec 3 options 13 & 14, Thai Airways Dec 11 option 7).
- Le Méridien was cancelled at 0 THB cost and replaced by Barceló Coconut Island.
- Shabbat deadline warnings must be prominently surfaced for Railay Village Resort & Spa (free cancellation ends Saturday Nov 14 at 18:59 IL time — decision required before Friday candle lighting) and The Empress Hotel backup (free cancellation ends Saturday Dec 5 at 18:59 IL time — decision required before Friday candle lighting).

## Evidence on Hand

- Confirmed international flights via Etihad Airways (TLV-AUH-BKK Nov 22, BKK-AUH-TLV Dec 14 02:55 AM).
- 10 active hotel bookings + 1 backup booking (The Empress Hotel Dec 6–11) with exact prices in THB, USD, and ILS estimates.
- 3 recommended domestic flight transitions with exact flight times, airlines, baggage rules, and couple prices in USD/ILS.
- Exchange rate references: `https://exa.ai/library/markets/forex/THBILS` and `https://exa.ai/library/markets/forex/USDILS`.

## Product Principles

1. **Operational Precision First:** Every price, currency note, scheduled charge date, bed confirmation status, and Israel-time cancellation deadline is scannable at a glance without hunting through nested menus.
2. **Shabbat-Aware Logistics:** Shabbat entry times, Chabad walking distances, and cancellation deadlines that fall on Saturday are treated as first-class structural constraints.
3. **Mobile-First Tactile Flow:** Designed for one-handed mobile operation in RTL Hebrew with smooth scrollchoreography, sticky quick-filters, and zero horizontal overflow.
4. **Honest Status Separation:** Clearly distinguish between Paid bookings, Scheduled Agoda charges, Unbooked flight recommendations, and Separate Loop Backup reservations.
