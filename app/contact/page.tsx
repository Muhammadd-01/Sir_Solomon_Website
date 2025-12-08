"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, Send, Users, MessageSquare, HelpCircle } from "lucide-react"
import { SCHOOL_INFO } from "@/lib/constants"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    purpose: "general",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for reaching out! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", purpose: "general" })
  }

  const contactReasons = [
    { icon: Users, title: "Admissions", desc: "Learn about enrollment process" },
    { icon: MessageSquare, title: "General Inquiry", desc: "Ask us anything" },
    { icon: HelpCircle, title: "Support", desc: "Get help with any issues" },
  ]

  // Your Google Maps API Key (must be in .env.local)
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""

  // BEST 3D EMBED LINK FOR YOUR SCHOOL (2025 Working – Real Buildings + Tilt)
  const mapEmbedSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.975!2d67.10668!3d24.83052!2m3!1f0!2f45!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x3eb33b90b78872e3:0x9d41ab10a423f63a!2sSir Solomon's Secondary School!5e1!3m2!1sen!2s!4v1737000000000${API_KEY ? `&key=${API_KEY}` : ""}`

  const openInGoogleMaps = () => {
    window.open("https://www.google.com/maps/search/?api=1&query=Sir+Solomon's+Secondary+School+Block+7+Clifton+Karachi+Pakistan", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-[#e8ffe0]/50" />
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-[#A6FF57]/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A6FF57]/10 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-medium mb-6">
            We're Here to Help
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#11110F] mb-6 text-balance">
            Get In{" "}
            <span className="text-[#11110F] relative">
              Touch
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#A6FF57" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-[#666] max-w-2xl mx-auto leading-relaxed">
            Have questions about admissions, academics, or anything else? Our team is ready to assist you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactReasons.map((reason, index) => (
              <div
                key={index}
                className="group p-8 bg-[#f9f9f7] rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#A6FF57] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="text-[#11110F]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#11110F] mb-2">{reason.title}</h3>
                <p className="text-[#666]">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#e5e5e5]">
              <h2 className="text-3xl font-bold text-[#11110F] mb-2">Send us a Message</h2>
              <p className="text-[#666] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#11110F] mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f9f9f7] border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#11110F] mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f9f9f7] border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#11110F] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f9f9f7] border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#11110F] mb-2">Purpose of Contact</label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f9f9f7] border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admission">Admission Information</option>
                      <option value="tour">Campus Tour Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#11110F] mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f9f9f7] border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#11110F] mb-2">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-[#f9f9f7] border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#11110F] text-white py-4 rounded-xl font-semibold hover:bg-[#333] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#11110F] mb-6">Contact Information</h2>
                <p className="text-[#666] text-lg leading-relaxed">
                  Reach out to us through any of the following channels. We're always happy to hear from prospective families and community members.
                </p>
              </div>

              <div className="space-y-4">
                <div className="group p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-[#11110F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#11110F] mb-1">Email Us</h3>
                    <a href={`mailto:${SCHOOL_INFO.email}`} className="text-[#666] hover:text-[#A6FF57] transition-colors duration-300">
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

              <div className="group p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-lg transition-all duration-300 flex items-center gap-4">
  <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
    <Phone className="text-[#11110F]" size={24} />
  </div>

  <div>
    <h3 className="font-bold text-[#11110F] mb-1">Call Us</h3>

    <a
      href={`tel:${SCHOOL_INFO.phone1}`}
      className="text-[#666] hover:text-[#A6FF57] transition-colors duration-300 block"
    >
      {SCHOOL_INFO.phone1}
    </a>

    <a
      href={`tel:${SCHOOL_INFO.phone2}`}
      className="text-[#666] hover:text-[#A6FF57] transition-colors duration-300 block"
    >
      {SCHOOL_INFO.phone2}
    </a>
  </div>
</div>


                <div className="group p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-[#11110F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#11110F] mb-1">Visit Us</h3>
                    <p className="text-[#666]">Sir Solomon's Secondary School<br />Block 7, Clifton, Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="text-[#11110F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#11110F] mb-1">Office Hours</h3>
                    <p className="text-[#666]">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-[#666]">Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM 3D MAP SECTION – REAL BUILDINGS + TILT + ENGAGING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#11110F] mb-4">
              Explore Our Campus in <span className="text-[#A6FF57]">Real 3D</span>
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto">
              Tilt with two fingers • See actual buildings & streets • Zoom & rotate freely
            </p>
          </div>

          {/* 3D Interactive Card */}
          <div className="relative max-w-5xl mx-auto">
            {/* Floating Pin Label */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
              <div className="bg-white/98 backdrop-blur-xl px-8 py-5 rounded-3xl shadow-2xl border border-white/60 flex items-center gap-5 animate-pulse">
                <div className="w-16 h-16 bg-[#A6FF57] rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-[#11110F]" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-[#11110F] text-xl">Sir Solomon's Secondary School</p>
                  <p className="text-sm font-medium text-[#444]">Allahwala Town, Karachi</p>
                </div>
              </div>
              <div className="w-1 h-32 bg-gradient-to-b from-[#A6FF57] to-transparent mx-auto mt-4" />
            </div>

            {/* 3D Tilt Card + Map */}
            <div 
              className="group relative rounded-3xl overflow-hidden shadow-2xl border border-[#e5e5e5] cursor-pointer"
              style={{ transformStyle: "preserve-3d", perspective: "2000px" }}
              onClick={openInGoogleMaps}
            >
              {/* REAL 3D MAP (5e1 + 2f45 = 3D Buildings + Tilt) */}
              <iframe
                src={mapEmbedSrc}
                width="100%"
                height="520"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-1000 group-hover:brightness-110 group-hover:scale-[1.02]"
                title="Sir Solomon's School - 3D Map"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 text-center">
                  <p className="text-white text-3xl font-bold bg-[#11110F]/90 px-10 py-6 rounded-3xl backdrop-blur-sm border border-white/20">
                    Click for Full 3D Experience
                  </p>
                  <p className="text-white/80 mt-3 text-sm">Two fingers to tilt on mobile</p>
                </div>
              </div>

              {/* Glow Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44] rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 -z-10" />
            </div>

            {/* Get Directions Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={openInGoogleMaps}
                className="inline-flex items-center gap-4 px-12 py-6 bg-[#11110F] text-white text-xl font-bold rounded-3xl hover:bg-[#A6FF57] hover:text-[#11110F] transition-all duration-500 shadow-2xl hover:shadow-[#A6FF57]/50 hover:scale-110 group"
              >
                <MapPin className="w-8 h-8 group-hover:animate-bounce" />
                Get Directions on Google Maps
              </button>
            </div>

            <p className="text-center text-sm text-[#888] mt-6">
              Pro Tip: Scroll to zoom • Drag to rotate • Two fingers to tilt
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-[#11110F]/80 mb-8 max-w-2xl mx-auto">
            Schedule a campus tour and discover why families choose Sir Solomon's.
          </p>
          <a href="/admissions" className="inline-block bg-[#11110F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#333] transition-all hover:scale-105">
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  )
}