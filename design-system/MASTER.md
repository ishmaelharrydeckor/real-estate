# Heritage Homes Realty — Master Design System

A premium design system bridging boutique Ghanaian architectural warmth with Stripe/Linear-grade UX precision.

---

## 1. Brand Identity & Aesthetic
* **Aesthetic Directive**: "Sophisticated warmth." Trustworthy, upscale, and clean, avoiding clinical corporate layouts.
* **Inspiration**: Stripe-level layout fluidity, Vercel-level typographic contrast, and warm organic textures reflecting high-end Accra residential properties.

---

## 2. Typographic System

Headings use a refined, high-contrast serif typeface, while body copy uses a geometric sans-serif with excellent legibility.

* **Display/Heading Font**: **Cormorant Garamond** (Google Fonts Serif)
  * CSS Variable: `--font-serif`
  * Styling: Tight letter-spacing (`tracking-tight`), semi-bold or medium weights, italic accents.
* **Body/UI Font**: **Plus Jakarta Sans** (Google Fonts Sans-serif)
  * CSS Variable: `--font-sans`
  * Styling: Standard tracking, clean height scale.

### Type Scale
| Token | Font Family | Size (px/rem) | Tracking | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`text-h1`** | Cormorant Garamond | 64px / 4rem | `-0.03em` | `1.1` | Main Hero Headers |
| **`text-h2`** | Cormorant Garamond | 40px / 2.5rem | `-0.02em` | `1.2` | Section Titles |
| **`text-h3`** | Cormorant Garamond | 28px / 1.75rem | `-0.01em` | `1.3` | Card Titles, Details |
| **`text-body`** | Plus Jakarta Sans | 16px / 1rem | `0` | `1.6` | Paragraphs, Descriptions |
| **`text-ui`** | Plus Jakarta Sans | 14px / 0.875rem | `0.02em` | `1.5` | Labels, Buttons, Badges |

---

## 3. Color Tokens
Using Tailwind CSS variables mapped to a bespoke upscale palette.

```css
:root {
  /* Brand Anchors */
  --primary-deep: #05241C;   /* Deep Forest Green (Oklch: 20% 0.05 160) */
  --primary-light: #0D3E31;  /* Soft Emerald/Forest Green Accent */
  
  /* Backgrounds & Fills */
  --bg-warm: #FAF8F5;        /* Premium Warm Cream (Oklch: 98% 0.01 70) */
  --bg-card: #FFFFFF;        /* Pure White */
  --bg-border: #EAE6DF;      /* Cream Border */
  
  /* Primary Accent (For critical CTAs only) */
  --accent-gold: #C99738;    /* Amber Gold (Oklch: 68% 0.12 85) */
  --accent-gold-hover: #B8852B; 
  
  /* Text colors */
  --text-dark: #1E2321;      /* Charcoal Green-Black */
  --text-muted: #626A66;     /* Slate Muted */
}
```

---

## 4. Spacing & Rhythm
We employ generous spacing rules to let pages breathe.
* **Section Padding**: Minimum `py-24` (96px) on mobile, scaling up to `py-32` (128px) on desktop.
* **Layout Margins**: Grid gap values must be set to `gap-8` (32px) or `gap-12` (48px) rather than smaller default margins.
* **Max Width**: Containers are capped at `max-w-7xl` (1280px) for centered visual symmetry.

---

## 5. Depth, Borders, and Shadows
* **Shadow System**: Avoid heavy default shadows. Instead, use thin borders coupled with soft, ultra-low opacity depth shadows.
  * **Card Shadow**: `shadow-[0_24px_60px_-15px_rgba(5,36,28,0.05)]`
  * **Dropdown Shadow**: `shadow-[0_12px_40px_rgba(5,36,28,0.08)]`
* **Border Definition**: `1px solid var(--bg-border)` or Tailwind `border-[#EAE6DF]`.

---

## 6. Micro-Interactions & Motion
* **Hover Elevation**: On cards and buttons, trigger a translate offset upward (`-translate-y-1.5`) and transition shadows.
* **Image Hover**: Card hover triggers a scale transition (`scale-105`) on the image within an `overflow-hidden` container.
* **Scroll-Triggered Entry**: GSAP entry animations must follow a strict **fade + 16px upward slide** duration (`0.8s`) with staggered delays (`0.05s` increments per list item).
* **CTA Button Pulse**: Accent CTAs and the floating WhatsApp widget include a subtle breathing keyframe animation on their borders.
