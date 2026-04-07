# Stripe Checkout for Coaching Sessions

## Summary

Add Stripe Payment Links to the existing `/coaching` page so visitors can purchase coaching sessions directly. A new `/coaching/thanks` page confirms the purchase and sets expectations for next steps.

## Approach

Use Stripe Payment Links — pre-built hosted checkout pages created in the Stripe Dashboard. No backend code, no new dependencies. The site remains fully static.

## What Changes

### 1. Update `/coaching` page (`src/pages/coaching.md`)

- Replace the intro paragraph (currently advertising free training calls) with copy describing paid coaching offerings.
- Add CTA button(s) linking to Stripe Payment Link URL(s). Use placeholder URLs until real links are created in Stripe.
- Keep the "My perspective on coaching" section unchanged.
- Optionally retain an email link for people who want to discuss before buying.

### 2. Create `/coaching/thanks` page

- New file: `src/pages/coaching/thanks.md` (or `.astro`)
- Content: thank-you message, confirmation that payment was received, next steps (e.g., "I'll email you within 24 hours to schedule").
- This URL is configured as the success redirect in each Stripe Payment Link's settings.

### 3. Stripe Dashboard setup (manual, not code)

- Create a Stripe account (if needed).
- Create one or more Payment Links for coaching offerings (single session, packages, etc.).
- Set each Payment Link's success URL to `https://travisnorthcutt.com/coaching/thanks`.
- Pricing and packages can be added, changed, or removed at any time in the dashboard — no code changes required.

## What Does Not Change

- No serverless functions or API routes.
- No new npm dependencies.
- No changes to the build or deployment pipeline.
- Site remains fully static on Netlify.

## Future Options

When more control is needed (dynamic pricing UI, conversion tracking, scheduling integration), upgrade to Stripe Checkout Sessions via a Netlify serverless function. The success/thanks page and coaching page structure built now carry forward into that approach.
