import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingButtons from "@/components/floating-buttons"
import ScrollToTop from "@/components/scroll-to-top"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Sir Solomon's School - Premium Education Excellence Since 1999",
    template: "%s | Sir Solomon's School",
  },
  description:
    "Experience world-class CBSE education at Sir Solomon's School. 25+ years of academic excellence, state-of-the-art facilities, holistic development, and 100% board results. Admissions open for 2025-26.",
  keywords: [
    "school",
    "CBSE",
    "education",
    "academics",
    "Sir Solomon's School",
    "best school",
    "admission",
    "holistic development",
  ],
  authors: [{ name: "Sir Solomon's School" }],
  creator: "Sir Solomon's School",
  publisher: "Sir Solomon's School",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sirsolomon.edu",
    siteName: "Sir Solomon's School",
    title: "Sir Solomon's School - Premium Education Excellence",
    description:
      "Experience world-class education at Sir Solomon's School. Excellence in academics, character building, and holistic development since 1999.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sir Solomon's School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sir Solomon's School - Premium Education Excellence",
    description: "Experience world-class education at Sir Solomon's School.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#A6FF57",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-sans bg-white text-[#11110F] antialiased`}>
        <ScrollToTop />
        <Navigation />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
