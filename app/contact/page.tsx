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

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#A6FF57]/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A6FF57]/10 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-medium mb-6 animate-fadeInDown">
            We're Here to Help
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#11110F] mb-6 text-balance animate-fadeInUp">
            Get In{" "}
            <span className="text-[#11110F] relative">
              Touch
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="#A6FF57" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-[#666] max-w-2xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
            Have questions about admissions, academics, or anything else? Our team is ready to assist you every step of
            the way.
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
                      placeholder="+1 (555) 000-0000"
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
                  Reach out to us through any of the following channels. We're always happy to hear from prospective
                  families and community members.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="group p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-[#11110F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#11110F] mb-1">Email Us</h3>
                    <a
                      href={`mailto:${SCHOOL_INFO.email}`}
                      className="text-[#666] hover:text-[#A6FF57] transition-colors duration-300"
                    >
                      {SCHOOL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-[#11110F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#11110F] mb-1">Call Us</h3>
                    <a
                      href={`tel:${SCHOOL_INFO.phone}`}
                      className="text-[#666] hover:text-[#A6FF57] transition-colors duration-300"
                    >
                      {SCHOOL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="group p-6 bg-white rounded-2xl border border-[#e5e5e5] hover:border-[#A6FF57] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-[#11110F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#11110F] mb-1">Visit Us</h3>
                    <p className="text-[#666]">{SCHOOL_INFO.address}</p>
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

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] mb-4">Find Our Campus</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Located in the heart of the city, our campus is easily accessible by public transportation and car.
            </p>
          </div>
          <div className="w-full h-96 rounded-3xl border border-[#e5e5e5] overflow-hidden">
            <div className="h-full min-h-[400px] bg-[#f5f5f5] flex items-center justify-center relative overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop"
                alt="Map Location"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-110">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#A6FF57] rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#11110F]" />
                    </div>
                    <div>
                      <p className="font-bold text-[#11110F]">Sir Solomon's School</p>
                      <p className="text-xs text-[#666]">Clifton, Karachi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-[#11110F]/80 mb-8 max-w-2xl mx-auto">
            Schedule a campus tour and discover why families choose Sir Solomon's for their children's education.
          </p>
          <a
            href="/admissions"
            className="inline-block bg-[#11110F] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#333] transition-all duration-300 hover:scale-105"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  )
}
