# Moaz Haider - Kitchen Remodeling SEO Expert Portfolio

A modern, conversion-focused website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion, showcasing kitchen remodeling SEO services.

## 🚀 Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe code for better developer experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Smooth animations and transitions
- **Google Fonts** - Poppins for headings, Inter for body text
- **SEO Optimized** - Complete metadata, Open Graph tags, and JSON-LD schemas
- **Responsive Design** - Mobile-first approach, works on all devices
- **Accessibility** - WCAG compliant with proper ARIA labels

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx          # Fixed header with navigation
│   ├── Hero.tsx            # Hero section with lead form
│   ├── TrustMetrics.tsx    # Metrics and client logos
│   ├── Services.tsx        # Services overview grid
│   ├── PainPoints.tsx      # Pain points and solutions
│   ├── CaseStudy.tsx       # Case study highlight
│   ├── USP.tsx             # Unique selling points
│   ├── Process.tsx         # 7-step SEO process timeline
│   ├── IndustryFocus.tsx   # Who you help section
│   ├── GlobalReach.tsx     # Countries and cities served
│   ├── Testimonials.tsx    # Client testimonials carousel
│   ├── Comparison.tsx      # Comparison table
│   ├── FAQ.tsx             # FAQ accordion with JSON-LD
│   └── Footer.tsx          # Footer with CTA and links
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies

```

## 🎨 Design System

### Colors
- **Primary (Teal)**: Used for CTAs, accents, and highlights
- **Accent (Purple)**: Secondary accent color
- **Dark**: Background colors (900-950 range)

### Typography
- **Headings**: Poppins (bold, modern)
- **Body**: Inter (clean, readable)

### Components
- Gradient backgrounds for premium look
- Card-based layouts with hover effects
- Smooth scroll animations
- Glassmorphism effects

## 🔧 Customization

### Update Contact Information
Edit `components/Footer.tsx` and `components/Hero.tsx` to add your:
- Email address
- Phone number
- Physical address
- Social media links

### Modify Color Scheme
Edit `tailwind.config.ts` to change colors:
```typescript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Add Real Images
Replace placeholder text in:
- Client logos (`components/TrustMetrics.tsx`)
- Case study images (`components/CaseStudy.tsx`)

### Update Content
All content is contained within component files. Edit text, metrics, and testimonials directly in each component.

## 📊 SEO Implementation

### Metadata
- Comprehensive title and description
- Open Graph tags for social sharing
- Twitter Card metadata
- Canonical URLs

### Structured Data (JSON-LD)
- WebSite schema
- WebPage schema
- Person schema (Moaz Haider)
- ProfessionalService schema
- Service schemas
- FAQPage schema

### Performance
- Optimized fonts with `next/font`
- Server components for static content
- Client components only where needed
- Lazy loading with Framer Motion

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Other Platforms
```bash
npm run build
npm start
```

## 📝 Next Steps

1. **Install dependencies**: Run `npm install`
2. **Add your contact info**: Update Footer and Hero components
3. **Customize content**: Edit text, metrics, and testimonials
4. **Add images**: Replace placeholder content with real images
5. **Set up form handling**: Integrate with your CRM or email service
6. **Deploy**: Push to Vercel, Netlify, or your hosting provider

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Google Fonts](https://fonts.google.com/) - Typography

## 📄 License

All rights reserved © 2025 Moaz Haider

---

Built with ❤️ for kitchen remodeling businesses
