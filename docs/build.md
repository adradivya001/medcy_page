# Medcy Landing Page: Build Document

## 1. Technical Stack
The Medcy landing page is built using a modern, high-performance web stack optimized for rapid iteration and premium aesthetics.

- **Framework**: [Next.js 16.2.3](https://nextjs.org/) (App Router)
- **Library**: [React 19.2.4](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion 12.38.0](https://www.framer.com/motion/)
- **Database/Backend**: [Supabase](https://supabase.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **WebGL Engine**: [OGL](https://github.com/o-gl/ogl) (For `SoftAurora` shaders)

## 2. Project Structure

```bash
medcy-landing/
├── app/                  # Next.js App Router (Layout, Page, Styles)
│   ├── globals.css       # Tailwind 4 Design System & Keyframes
│   ├── layout.tsx        # Font registration & Metadata
│   └── page.tsx          # Main assembly of sections
├── components/           # Shared UI Components
│   ├── ui/               # Primary components (Navbar, Button, etc.)
│   └── LeadModal.tsx     # Partnership inquiry system
├── sections/             # Core page blocks
│   ├── HeroSection.tsx
│   ├── ProblemSolutionSection.tsx
│   ├── PortfolioSection.tsx
│   ├── TechnologySection.tsx
│   └── CTASection.tsx
├── lib/                  # Utilities and Configuration
│   └── constants.ts      # Single source of truth for all copy
└── docs/                 # Technical documentation suite
```

## 3. Local Development Setup

### 3.1. Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### 3.2. Installation
```bash
# Install all dependencies
npm install

# Start the development server
npm run dev

# Note: If environment-specific 'npm install' issues occur, verify 
# that 'ogl' is correctly indexed in package.json or manually 
# provided via static asset injection.
```

### 3.3. Environment Variables
To enable lead capture, create a `.env.local` file with:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
```

## 4. Build & Deployment

### 4.1. Production Build
```bash
# Generate optimized production build
npm run build

# Start the built application
npm run start
```

### 4.2. Linting
```bash
# Run ESLint validation
npm run lint
```

## 5. Deployment Recommendation
Deploy via **Vercel** for indigenous Next.js optimizations and automated CI/CD pipelines. Ensure all environment variables are synced in the Vercel dashboard.
