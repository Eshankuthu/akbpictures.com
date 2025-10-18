# 🎬 AKB Pictures - Movie Portfolio Website

A stunning, modern movie production portfolio website built from scratch with Next.js 15, React 19, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎥 **Sliding Movie Carousel**
- Full-screen cinematic hero slider
- Smooth transitions with Framer Motion
- Arrow navigation and dot indicators
- Auto-playing with manual controls
- Displays movie title, year, director, category, and description
- "Watch Trailer" and "Learn More" CTAs

### 📖 **About Section**
- Company overview and mission statement
- Stats showcase (150+ Films, 45 Awards, 200+ Team Members, 15+ Years)
- Services breakdown (Pre-Production, Production, Post-Production)
- Animated scroll-based reveals
- Professional team quote/mission statement

### 📬 **Contact Form**
- Full-featured contact form with validation
- Name, Email, Subject dropdown, and Message fields
- Success/error state handling
- Contact information display (Email, Phone, Location)
- Social media links
- Responsive two-column layout

### 🎨 **Design Highlights**
- **Dark cinematic theme** with amber/gold accents
- **Responsive design** - mobile, tablet, and desktop optimized
- **Smooth animations** powered by Framer Motion
- **Custom scrollbar** with amber accent
- **Glassmorphism effects** on navigation and buttons
- **Gradient overlays** for depth and readability

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
akbpictures.com/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage (combines all sections)
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── MovieCarousel.tsx   # Hero slider with movie showcase
│   ├── About.tsx           # Company info, stats, and services
│   ├── Contact.tsx         # Contact form and info
│   ├── Navigation.tsx      # Sticky header with smooth scroll
│   └── Footer.tsx          # Footer with copyright
├── data/
│   └── movies.ts           # Movie data (8 sample films)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

---

## 🎨 Tech Stack

- **Framework**: Next.js 15.5.6
- **React**: 19.0.0
- **TypeScript**: 5.7.2
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 11.15.0
- **Icons**: React Icons 5.5.0

---

## 🎬 Movie Data

The website showcases **8 sample movies** with the following details:
- Title
- Year
- Category (Feature Film, Sci-Fi Short, Documentary, etc.)
- Director name
- High-quality thumbnail image (via Unsplash)
- Description

Edit `/data/movies.ts` to add your own films!

---

## 🎨 Color Palette

```css
Primary Background: #0a0a0a (Near Black)
Secondary Background: #171717 (Neutral 950)
Card Background: #262626 (Neutral 900)

Primary Accent: #f59e0b (Amber 500)
Hover Accent: #fbbf24 (Amber 400)

Text Primary: #fafafa (White)
Text Secondary: #d4d4d4 (Gray 300)
Text Muted: #a3a3a3 (Gray 400)
```

---

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with mobile-first design.

---

## 🎞️ Component Features

### MovieCarousel
- Full-screen cinematic display
- Framer Motion page transitions
- Navigation arrows (left/right)
- Dot indicators for quick navigation
- Animated scroll indicator
- Gradient overlays for text readability

### About
- Scroll-triggered animations
- Icon-based stats with numbers
- Service cards with hover effects
- Blockquote styling for mission statement

### Contact
- Form validation (required fields)
- Subject dropdown (Film, Commercial, Music Video, Other)
- Submit animation
- Success/error feedback
- Contact info cards with icons
- Social media placeholder links

### Navigation
- Sticky header with backdrop blur
- Smooth scroll to sections
- Mobile hamburger menu with slide-in animation
- Active state detection
- "Let's Talk" CTA button

---

## 🔧 Customization

### Add Your Movies

Edit `/data/movies.ts`:

```typescript
export const movies: Movie[] = [
  {
    id: 1,
    title: "Your Movie Title",
    year: "2024",
    category: "Feature Film",
    director: "Your Name",
    thumbnail: "/path/to/image.jpg",
    description: "Movie description here...",
  },
  // Add more movies...
];
```

### Change Colors

Edit `tailwind.config.ts` or `/app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #fafafa;
}
```

### Update Contact Info

Edit `/components/Contact.tsx` - lines with email, phone, and address.

---

## 📦 Dependencies

```json
{
  "next": "^15.1.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "framer-motion": "^11.15.0",
  "react-icons": "^5.5.0",
  "tailwindcss": "^3.4.17"
}
```

---

## 🌐 Deployment

### Deploy to Vercel

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Environment Variables

No environment variables required for basic setup.

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🎯 Features Roadmap

- [ ] Movie detail pages
- [ ] Video player integration
- [ ] Blog/news section
- [ ] Team member profiles
- [ ] Client testimonials
- [ ] Awards gallery
- [ ] Behind-the-scenes photo gallery

---

## 🤝 Contributing

Feel free to fork, customize, and use this template for your own production house or portfolio!

---

## 📞 Support

For questions or issues, contact: **hello@akbpictures.com**

---

**Built with ❤️ for filmmakers and storytellers**
