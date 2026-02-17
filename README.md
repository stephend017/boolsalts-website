# bool salts — Next.js Clone

A faithful Next.js 14 clone of [boolsalts.com](https://boolsalts.com/) — a premium hydration salts brand site.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: CSS animations + Framer Motion
- **Fonts**: Barlow Condensed (display) + DM Sans (body) via Google Fonts
- **TypeScript**: Full type safety

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
bool-salts/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── globals.css         # Global styles, CSS variables, animations
│   ├── page.tsx            # Homepage
│   └── shop/
│       └── page.tsx        # Shop page
├── components/
│   ├── Navbar.tsx          # Sticky navigation with cart drawer
│   ├── Hero.tsx            # Hero with animated cycling words
│   ├── Science.tsx         # Formula/ingredient breakdown
│   ├── Testimonials.tsx    # Auto-playing review carousel
│   ├── Osmosis.tsx         # Science explanation section
│   ├── Products.tsx        # Product showcase "Pick Your Fuel"
│   ├── BuiltDifferent.tsx  # Stats section on orange background
│   └── Footer.tsx          # Footer with links
├── tailwind.config.ts      # Custom colors, animations
├── next.config.js          # Next.js config with image domains
└── package.json
```

## Pages Implemented

- `/` — Homepage (all sections)
- `/shop` — Product listing page

## Key Features

- **Animated hero**: Cycling words (WORKDAYS / WORKOUTS / WEEKENDS) with smooth transitions
- **Cart drawer**: Slide-in cart with empty state
- **Product cards**: Hover animations with color-reactive glow effects
- **Testimonials carousel**: Auto-playing with manual controls
- **Marquee banners**: Infinite scroll text animations
- **Sticky navbar**: Transparent → frosted glass on scroll
- **Scroll animations**: Elements animate in on intersection
- **Grain overlay**: Subtle noise texture for premium feel

## Color System

```css
--bool-orange: #FF5C1A  /* Primary accent */
--bool-black:  #0A0A0A  /* Background */
--bool-cream:  #F5F0E8  /* Light accent */
```

## Extending

To add a product detail page, create:
```
app/product/[slug]/page.tsx
```

To add more pages (about, FAQ, etc.):
```
app/about/page.tsx
app/faq/page.tsx
```
