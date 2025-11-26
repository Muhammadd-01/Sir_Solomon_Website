# Sir Solomon's School Website

A premium, modern, and responsive website for Sir Solomon's School, built with Next.js, Tailwind CSS, and Framer Motion. This project features a brilliant UI/UX with deep localization for Karachi, Pakistan.

## 🌟 Features

*   **Premium UI/UX**: A visually stunning design with a rich green color palette, glassmorphism effects, and smooth animations.
*   **Responsive Design**: Fully optimized for all devices, from mobile phones to large desktop screens.
*   **Deep Localization**: Content tailored for Karachi, Pakistan, including currency (PKR), contact details, and cultural context.
*   **Advanced Animations**:
    *   **Entrance Animations**: `fadeInUp`, `slideInLeft`, `slideInRight`, `zoomIn`.
    *   **Hover Effects**: `hover-tilt`, `hover-magnetic`, `hover-border-glow`, `img-zoom`.
    *   **Page Transitions**: Smooth transitions between pages using `framer-motion`.
    *   **Typing Effect**: Dynamic typing animation in the Hero section.
*   **Interactive Elements**:
    *   **Gallery**: Filterable image gallery with lightbox and masonry/grid view modes.
    *   **Admissions**: Downloadable fee structure (PDF/Print) and interactive application form.
    *   **Contact**: Functional contact form (frontend) and interactive map placeholder.
*   **Performance Optimized**: Fast loading times with Next.js image optimization and efficient code splitting.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/), [Tailwind Animate](https://github.com/jamiebuilds/tailwindcss-animate)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Fonts**: Inter (Sans), Poppins (Heading)

## 🚀 Getting Started

### Prerequisites

*   Node.js 18.17 or later
*   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/sir-solomon-website.git
    cd sir-solomon-website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
├── app/                  # Next.js App Router directory
│   ├── about/            # About page
│   ├── academics/        # Academics page
│   ├── admissions/       # Admissions page
│   ├── contact/          # Contact page
│   ├── gallery/          # Gallery page
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── template.tsx      # Page transition template
├── components/           # Reusable UI components
│   ├── ui/               # shadcn/ui primitive components
│   ├── features.tsx      # Features section component
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section component
│   └── navigation.tsx    # Navigation bar component
├── lib/                  # Utility functions and constants
│   ├── constants.ts      # Site-wide constants (School info, fees, etc.)
│   └── utils.ts          # Helper functions
└── public/               # Static assets (images, fonts, etc.)
```

## 🎨 Customization

### Colors
The color palette is defined in `app/globals.css`. The primary brand color is a vibrant green (`#A6FF57`) combined with a dark charcoal (`#11110F`) for contrast.

### Content
Most site content can be easily updated in `lib/constants.ts`. This includes:
*   `SCHOOL_INFO`: Name, address, phone, email, social links.
*   `NAVIGATION_ITEMS`: Menu links.
*   `FEES`: Fee structure data.
*   `TEACHERS`: Faculty information.
*   `PROGRAMS`: Academic programs.

### Images
Images are sourced from Unsplash for demonstration purposes. To use your own images:
1.  Place your images in the `public/` directory.
2.  Update the `src` paths in the respective components (e.g., `app/page.tsx`, `app/about/page.tsx`).

## 📄 License

This project is licensed under the MIT License.

---

**Sir Solomon's School** - *Nurturing Future Leaders Since 1999*
