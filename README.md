# Next-Gen Learning Dashboard

A futuristic, high-performance student dashboard built for the Next-Gen Learning Platform challenge.

## Architectural Choices & Server/Client Split

I went with **Next.js 15 (App Router)** as the foundation because it allows for an incredibly clean separation of concerns between data fetching and interactive UI. 

### Server Components (RSC)
All of the data fetching happens on the server in `app/page.tsx`. By leveraging Supabase's `@supabase/ssr` package, I'm able to fetch the active courses directly during the initial server render. This means the client receives HTML with the data already baked in, avoiding the dreaded "loading spinner waterfall." It's faster, better for SEO, and reduces client-side JS.

### Client Components
For the highly interactive parts of the UI, I extracted those into specific Client Components (`"use client"`). The `Sidebar`, `HeroTile`, `ActivityTile`, and `CourseCard` components handle their own Framer Motion animations. By pushing `"use client"` down the component tree as far as possible, we keep the main page as a Server Component, minimizing the JavaScript bundle size.

## Animations & Performance

A big part of the rubric was achieving a "premium" feel with zero layout shifts. 
- **Framer Motion:** I used spring physics (`stiffness: 300, damping: 20`) for hover states on the Bento tiles. It gives the UI a snappy but natural feel.
- **Hardware Acceleration:** All animations strictly use `transform` (scale, translate) and `opacity`. This ensures they are handed off to the GPU and avoids triggering expensive browser repaints, keeping the framerate buttery smooth.
- **Layout Animations:** The sidebar uses `layoutId` from Framer Motion to snap the active indicator between nav items seamlessly.

## Challenges Faced

1. **Supabase SSR setup:** Ensuring the cookies were properly passed from the server components to Supabase using `@supabase/ssr` took a quick read of their latest docs, as the API has evolved recently compared to older `@supabase/auth-helpers-nextjs` patterns. I had to ensure the async `cookies()` API in Next 15 was handled correctly.
2. **Animation vs. Layout Shifts:** Initially, adding a border on hover caused a 1px layout shift that pushed adjacent grid items. I solved this by keeping the border persistent (`border-white/5`) and animating a `box-shadow` instead, ensuring the layout remains totally rigid during interactions.

## Setup Instructions

1. Clone the repo and install dependencies (`npm install`).
2. Copy `.env.example` to `.env.local`.
3. Add your Supabase project URL and anon key.
4. Run `npm run dev`.

**Database Schema:**
You'll need a `courses` table in Supabase:
- `id` (uuid, primary key)
- `title` (text)
- `progress` (int)
- `icon_name` (text, e.g. "code", "terminal")
- `created_at` (timestamp)
