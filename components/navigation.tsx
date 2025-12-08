"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { NAVIGATION_ITEMS, SCHOOL_INFO } from "@/lib/constants"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Filter out News item
  const filteredNavItems = NAVIGATION_ITEMS.filter(item => item.label !== "News")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-[#e5e5e5]"
          : "bg-white border-b border-[#e5e5e5]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
{/* Logo */}
<Link href="/" className="flex items-center space-x-3 group">
  {/* Logo Image */}
  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-500 group-hover:shadow-lg group-hover:scale-105 group-hover:rotate-3">
    <Image
      src="/sir-solomons-logo.jpeg"   // Replace with your actual logo path
      alt="School Logo"
      width={48}
      height={48}
      className="object-cover w-full h-full"
    />
  </div>

  {/* School Name & Title */}
  <div className="hidden sm:block">
    <span className="font-bold text-xl text-[#11110F] tracking-tight block">
      {SCHOOL_INFO.name}
    </span>
    <span className="text-xs text-[#666666] block">
      {SCHOOL_INFO.title}
    </span>
  </div>
</Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {filteredNavItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2.5 rounded-xl font-medium transition-all duration-300 relative group ${
                    isActive
                      ? "text-[#11110F] bg-[#A6FF57]"
                      : "text-[#11110F] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {item.label}
                  {!isActive && (
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#A6FF57] transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%] rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/admissions"
              className="btn-shine bg-gradient-to-r from-[#11110F] to-[#333] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 inline-block"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-xl hover:bg-[#f5f5f5] transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 space-y-2">
            {filteredNavItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#A6FF57] text-[#11110F]"
                      : "text-[#11110F] hover:bg-[#f5f5f5] hover:translate-x-2"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              href="/admissions"
              className="block mt-4 bg-gradient-to-r from-[#11110F] to-[#333] text-white text-center py-4 px-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
