# Real Madrid Inspired Website Template

## ⚠️ IMPORTANT LEGAL NOTICE

**This template is inspired by the visual structure of the official Real Madrid website for educational and development purposes only.**

- Do NOT use trademarked logos, copyrighted photography, or proprietary content in production without proper permission.
- Replace all placeholder images and content with licensed assets prior to any public deployment.
- This is a front-end template demonstrating layout and design patterns only.
- All Real Madrid trademarks, logos, and copyrighted materials belong to Real Madrid C.F.

## 🎯 Project Overview

A modern, responsive web template inspired by Real Madrid's official website structure. Built with React, TypeScript, Tailwind CSS, and Vite for optimal performance.

**Features:**
- ✅ Fully responsive design (mobile-first approach)
- ✅ Semantic HTML5 structure
- ✅ Accessible navigation with ARIA support
- ✅ Multiple pages: Home, Team, Schedule, News, Shop, Bernabéu
- ✅ Professional sports website aesthetics
- ✅ Modern component architecture

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx          # Main layout with header & footer
│   └── ui/                 # Reusable UI components (shadcn)
├── pages/
│   ├── Index.tsx           # Homepage with hero, stats, news
│   ├── Team.tsx            # Squad roster with filters
│   ├── Schedule.tsx        # Fixtures and results
│   ├── News.tsx            # News listing
│   ├── Article.tsx         # Single article template
│   ├── Shop.tsx            # Store landing page
│   └── Bernabeu.tsx        # Stadium tour information
├── index.css               # Design system & CSS variables
└── App.tsx                 # Main app with routing
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:8080`

## 🎨 Design System

The template uses a comprehensive design system defined in `src/index.css`:

### Color Palette
- **Primary (Navy)**: `hsl(220, 25%, 12%)` - Main brand color
- **Gold Accent**: `hsl(45, 100%, 50%)` - Accent color for CTAs
- **Background**: `hsl(0, 0%, 100%)` - Clean white background
- **Secondary**: `hsl(220, 15%, 96%)` - Light gray for sections

### Typography
- Font family: System fonts with fallbacks
- Heading scales from text-xl to text-6xl
- Professional, clean typography

### Spacing Scale
Consistent spacing using CSS variables:
- `--spacing-xs` to `--spacing-3xl`

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with call-to-action
- Statistics showcase (trophies, fans, etc.)
- Next match card with match details
- Latest news grid
- Shop promotion section

### First Team (`/team`)
- Squad header with filters by position
- Player cards grid with placeholder images
- Coaching staff section

### Schedule (`/schedule`)
- Fixtures and results list
- Competition filters
- Match cards with venue and time details
- Buy tickets CTAs

### News (`/news`)
- Featured article section
- News grid with category filters
- Article cards with timestamps

### Article (`/news/article`)
- Full article layout
- Share buttons
- Related articles section

### Shop (`/shop`)
- Product grid with categories
- Product cards with pricing
- Featured banner
- Store information

### Bernabéu (`/bernabeu`)
- Stadium hero section
- Tour information
- Pricing and schedules
- Booking options

## 🔧 Customization Guide

### Replacing Placeholder Content

1. **Images**: Replace placeholder backgrounds in components with real images
   - Store images in `public/images/` or use external URLs
   - Update background URLs in JSX

2. **Text Content**: Update all lorem ipsum and placeholder text
   - Player names in `Team.tsx`
   - News articles in `News.tsx` and `Article.tsx`
   - Match details in `Schedule.tsx`

3. **Colors**: Modify the design system in `src/index.css`
   - Update HSL values in `:root` CSS variables
   - Colors automatically apply throughout the app

4. **Branding**: Add your logo
   - Replace the "RM" placeholder in `Layout.tsx`
   - Add logo image to `public/` folder

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Layout.tsx`

## 🛠️ Built With

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool
- **React Router** - Client-side routing
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## ✅ Production Readiness Checklist

Before deploying to production:

- [ ] Replace all placeholder images with licensed assets
- [ ] Update all text content with real information
- [ ] Add proper meta tags for SEO (title, description, OG tags)
- [ ] Optimize images (compress, use WebP format)
- [ ] Test responsive design on real devices
- [ ] Add analytics tracking (Google Analytics, etc.)
- [ ] Configure CDN for static assets
- [ ] Add proper error boundaries
- [ ] Implement loading states
- [ ] Set up proper environment variables
- [ ] Add 404 page handling
- [ ] Test accessibility (screen readers, keyboard navigation)
- [ ] Ensure WCAG 2.1 compliance

## 📚 Reference Links

This template's layout was inspired by the following pages (for reference only):
- https://www.realmadrid.com/ (homepage)
- https://www.realmadrid.com/en-US/football/first-team (first team)
- https://www.realmadrid.com/en-US/schedule (schedule)

**Note**: These links are provided for structural reference only. Do not copy copyrighted content from these pages.

## 🤝 Contributing

This is an educational template. Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Fork for your own projects

## 📝 License

This template is provided for educational purposes. All Real Madrid trademarks and copyrights belong to their respective owners.

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

---

**Created for educational purposes** | Not affiliated with Real Madrid C.F.
