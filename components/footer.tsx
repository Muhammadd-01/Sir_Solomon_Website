"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ArrowRight, Send } from "lucide-react"
import { SCHOOL_INFO, NAVIGATION_ITEMS } from "@/lib/constants"
import { use } from "react"

export default function Footer() {
  const openInGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Sir+Solomon's+Secondary+School+Block+7+Clifton+Karachi+Pakistan",
      "_blank"
    )
  }

  return (
    <footer className="bg-[#11110F] text-white">
      <div className="border-b border-[#222220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400">Subscribe to our newsletter for the latest news and updates</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-[#222220] border border-[#333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="btn-shine bg-[#A6FF57] text-[#11110F] px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-start space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A6FF57] to-[#8fdb44] rounded-xl flex items-center justify-center font-bold text-[#11110F] text-xl">
                SS
              </div>

              {/* School Info on Separate Lines */}
              <div className="flex flex-col">
                <span className="font-bold text-xl">{SCHOOL_INFO.name}</span>
                <span className="font-bold text-sm">{SCHOOL_INFO.title}</span>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">{SCHOOL_INFO.tagline}</p>

            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/solomonient" },
                { icon: Instagram, href: "https://www.instagram.com/solomons_coaching_center/" },
                { icon: Youtube, href: "https://youtube.com/@sirsolomons7620?si=Hr6emV3ArsyObUFI" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#222220] rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#A6FF57] hover:text-[#11110F] transition-all duration-300 hover:scale-110"
                  aria-label={`Visit our ${social.icon.name}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#A6FF57] transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {NAVIGATION_ITEMS.slice(4).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#A6FF57] transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                {/* <Link
                  href="/admissions"
                  className="text-gray-400 hover:text-[#A6FF57] transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                  Careers
                </Link> */}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#A6FF57] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#222220] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A6FF57] group-hover:text-[#11110F] transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="break-all text-sm">{SCHOOL_INFO.email}</span>
              </a>

              {/* Phones */}
              <a
                href={`tel:${SCHOOL_INFO.phone1}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#A6FF57] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#222220] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A6FF57] group-hover:text-[#11110F] transition-all duration-300">
                  <Phone size={18} />
                </div>
                <span>{SCHOOL_INFO.phone1}</span>
              </a>
              <a
                href={`tel:${SCHOOL_INFO.phone2}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-[#A6FF57] transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-[#222220] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A6FF57] group-hover:text-[#11110F] transition-all duration-300">
                  <Phone size={18} />
                </div>
                <span>{SCHOOL_INFO.phone2}</span>
              </a>
<button
  onClick={openInGoogleMaps}
  className="flex items-center gap-3 text-gray-400 hover:text-[#A6FF57] transition-all duration-300 group no-underline"
>
  <div className="w-10 h-10 bg-[#222220] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#A6FF57] group-hover:text-[#11110F] transition-all duration-300">
    <MapPin size={18} />
  </div>

  <span className="text-sm leading-normal text-left flex items-center">
    Sir Solomon's Secondary School, KDA-Employees, Karachi, Pakistan
  </span>
</button>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#222220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 {SCHOOL_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-[#A6FF57] transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-[#A6FF57] transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-[#A6FF57] transition-colors duration-300">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
