# Sir Solomon's School Website

A premium, production-ready school website built with Next.js 16, TypeScript, and shadcn/ui components. Fully responsive with smooth animations and excellent performance.

## 🚀 Features

- **Pages**: Home, About, Academics, Admissions, Gallery, News, and Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Animations**: Smooth transitions, hover effects, and scroll animations using Framer Motion utilities
- **Performance Optimized**: Next.js Image optimization, efficient CSS, minimal bundle
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation
- **Theme System**: Easy customization via CSS variables in globals.css
- **Component Library**: Built with shadcn/ui for consistent design

## 📋 Getting Started

### Prerequisites

- Node.js 18+ or pnpm 8+
- Modern web browser

### Installation

1. **Download the project** from the Code Project interface

2. **Install dependencies** using the provided shadcn CLI command:
\`\`\`bash
npm install
# or
pnpm install
\`\`\`

3. **Run the development server**:
\`\`\`bash
npm run dev
# or
pnpm dev
\`\`\`

4. **Open in browser**: Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
sir-solomons-school/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── globals.css             # Global styles and theme variables
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── academics/
│   │   └── page.tsx            # Academics page
│   ├── admissions/
│   │   └── page.tsx            # Admissions page
│   ├── gallery/
│   │   └── page.tsx            # Gallery page
│   ├── news/
│   │   └── page.tsx            # News page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── navigation.tsx          # Navbar component
│   ├── footer.tsx              # Footer component
│   ├── hero.tsx                # Hero section
│   ├── stats.tsx               # Stats counter section
│   ├── features.tsx            # Features section
│   ├── testimonials.tsx        # Testimonials carousel
│   └── news-preview.tsx        # News preview on home
├── lib/
│   └── constants.ts            # Configuration and dummy data
├── public/
│   └── [static files]
├── package.json
├── tsconfig.json
└── next.config.mjs
\`\`\`

## 🎨 Customization Guide

### Changing Colors & Theme

Edit `app/globals.css` to update the color theme:

\`\`\`css
@theme inline {
  --color-background: #ffffff;      /* Change background color */
  --color-primary: #a6ff57;         /* Change primary/accent color */
  --color-secondary: #11110f;       /* Change text/dark color */
  --color-accent: #8b34b9;          /* Change accent color */
}
\`\`\`

### Adding Your Logo

1. Replace the "SS" placeholder in `components/navigation.tsx` with your logo
2. Update the logo in the footer similarly
3. For image logos, use Next.js `<Image>` component

### Updating School Information

Edit `lib/constants.ts` to update:
- School name and tagline
- Contact information
- Mission statement
- Features, programs, teachers
- News articles, gallery images
- Testimonials and fees

Example:
\`\`\`typescript
export const SCHOOL_INFO = {
  name: "Your School Name",
  tagline: "Your tagline here",
  email: "your@email.com",
  phone: "+1 (555) 123-4567",
  address: "Your address",
};
\`\`\`

### Adding Teachers

In `lib/constants.ts`, add to the `TEACHERS` array:
\`\`\`typescript
{
  id: 5,
  name: "Teacher Name",
  subject: "Subject",
  bio: "Bio text",
  image: "/placeholder.svg?height=300&width=300",
}
\`\`\`

### Adding News Articles

In `lib/constants.ts`, add to the `NEWS_ARTICLES` array:
\`\`\`typescript
{
  id: 4,
  title: "Article Title",
  excerpt: "Short description",
  date: "Month Year",
  category: "Events/Sports/Facilities",
  image: "/placeholder.svg?height=200&width=400",
}
\`\`\`

### Adding Gallery Images

In `lib/constants.ts`, add to the `GALLERY_IMAGES` array:
\`\`\`typescript
{
  id: 7,
  title: "Image Title",
  image: "/placeholder.svg?height=400&width=600",
}
\`\`\`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository at [vercel.com](https://vercel.com)
3. Vercel automatically detects Next.js and deploys

### Deploy to Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify deploy --prod`

### Deploy to Static Hosting (GitHub Pages, AWS S3)

Build static export:
\`\`\`bash
npm run build
\`\`\`

The `out/` folder contains static files ready for deployment.

## 📱 Performance Tips

- Images are automatically optimized with Next.js Image component
- CSS is minified and bundled
- Lazy loading on images improves initial load time
- Use production builds for deployment: `npm run build`

## 🔧 Advanced Features

### Adding Animations

Components already include smooth animations. To add more, use Tailwind animation utilities or add custom animations in `globals.css`.

### Adding Dark Mode

Extend the `@theme` block in `globals.css` with dark mode variants using Tailwind CSS v4.

### Adding Search Functionality

Implement a search component in the News page by adding state management with useState hooks.

## 📞 Support & Maintenance

- Update content regularly in `lib/constants.ts`
- Keep dependencies updated: `npm update`
- Test on multiple devices before deploying
- Monitor performance using Lighthouse

## 📝 License

This project is provided as-is for educational and commercial use.

## 🎯 Next Steps

1. Customize colors and branding
2. Update school information
3. Add real images (replace placeholders)
4. Connect to a backend for dynamic content (optional)
5. Set up email notifications for contact forms
6. Deploy to production

---

**Last Updated**: November 2024
**Version**: 1.0.0
