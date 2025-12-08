"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Calendar, FileText, Users, CheckCircle, Download, Phone, Mail, ArrowRight } from "lucide-react"
import { FEES, SCHOOL_INFO } from "@/lib/constants"

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    studentClass: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest! We will contact you within 24 hours.")
    setFormData({ parentName: "", email: "", phone: "", studentName: "", studentClass: "", message: "" })
  }

  const handleDownloadFees = async () => {
    // Dynamically import html2pdf.js to avoid server-side issues
    const html2pdf = (await import("html2pdf.js")).default

    const element = document.getElementById("fee-structure")
    if (!element) return

    const opt = {
      margin: 1,
      filename: "Sir_Solomons_Fee_Structure_2025-26.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    } as any

    html2pdf().set(opt).from(element).save()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-[#f9f9f7] to-[#e8ffe0] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#11110F 1px, transparent 1px), linear-gradient(90deg, #11110F 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6">
            Admissions 2025-26
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#11110F] mb-6">
            Join Our <span className="text-[#A6FF57]">Family</span>
          </h1>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto mb-10">
            Begin your journey towards excellence. Applications are now open for the upcoming academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="bg-[#A6FF57] text-[#11110F] px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Apply Now
            </a>
            <a
              href="#process"
              className="border-2 border-[#11110F] text-[#11110F] px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#11110F] hover:text-white"
            >
              View Process
            </a>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              How to Apply
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Admission Process</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Simple, transparent, and student-focused admission procedure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: FileText,
                title: "Submit Application",
                desc: "Fill out the online application form with required details",
              },
              {
                step: 2,
                icon: Calendar,
                title: "Entrance Assessment",
                desc: "Age-appropriate assessment to evaluate readiness",
              },
              {
                step: 3,
                icon: Users,
                title: "Parent Interaction",
                desc: "Meet with our counselors and tour the campus",
              },
              {
                step: 4,
                icon: CheckCircle,
                title: "Admission Offer",
                desc: "Receive offer and complete enrollment formalities",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-[#f5f5f5] p-8 rounded-3xl border border-[#e5e5e5] transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2 text-center group">
                  <div className="w-16 h-16 bg-[#A6FF57] rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="w-8 h-8 text-[#11110F]" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#11110F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl text-[#11110F] mb-3">{item.title}</h3>
                  <p className="text-[#666666]">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[#A6FF57]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Mark Your Calendar
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Important Dates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { date: "January 15, 2025", event: "Applications Open", status: "active" },
              { date: "February 28, 2025", event: "Early Bird Deadline", status: "upcoming" },
              { date: "March 15, 2025", event: "Regular Deadline", status: "upcoming" },
              { date: "March 20-25, 2025", event: "Entrance Assessments", status: "upcoming" },
              { date: "April 5, 2025", event: "Results Announced", status: "upcoming" },
              { date: "June 1, 2025", event: "New Session Begins", status: "upcoming" },
            ].map((item) => (
              <div
                key={item.event}
                className={`flex gap-4 p-6 rounded-2xl border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${item.status === "active" ? "bg-[#A6FF57] border-[#A6FF57]" : "bg-white border-[#e5e5e5]"
                  }`}
              >
                <Calendar
                  className={`w-6 h-6 flex-shrink-0 ${item.status === "active" ? "text-[#11110F]" : "text-[#A6FF57]"}`}
                />
                <div>
                  <p className={`font-bold ${item.status === "active" ? "text-[#11110F]" : "text-[#A6FF57]"}`}>
                    {item.date}
                  </p>
                  <p className={item.status === "active" ? "text-[#11110F]/70" : "text-[#666666]"}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fee-structure" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Investment in Future
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Fee Structure 2025-26</h2>
            <p className="text-lg text-[#666666]">Transparent and competitive fee structure</p>
          </div>

          <div className="bg-[#f5f5f5] rounded-3xl overflow-hidden border border-[#e5e5e5]">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#11110F] text-white">
                    <th className="p-5 text-left font-bold">Class</th>
                    <th className="p-5 text-right font-bold">Semester I</th>
                    <th className="p-5 text-right font-bold">Semester II</th>
                    <th className="p-5 text-right font-bold">Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES.map((fee, index) => (
                    <tr
                      key={fee.class}
                      className={`border-b border-[#e5e5e5] transition-colors duration-300 hover:bg-white ${index % 2 === 0 ? "bg-[#f5f5f5]" : "bg-white"}`}
                    >
                      <td className="p-5 font-semibold text-[#11110F]">{fee.class}</td>
                      <td className="p-5 text-right text-[#666666]">Rs. {fee.semester1.toLocaleString()}</td>
                      <td className="p-5 text-right text-[#666666]">Rs. {fee.semester2.toLocaleString()}</td>
                      <td className="p-5 text-right font-bold text-[#A6FF57]">
                        Rs. {(fee.semester1 + fee.semester2).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button
              onClick={handleDownloadFees}
              className="inline-flex items-center justify-center gap-2 bg-[#11110F] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#333]"
            >
              <Download className="w-5 h-5" />
              Download Fee Details
            </button> */}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-24 bg-gradient-to-br from-[#11110F] to-[#1a1a18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#A6FF57] rounded-full text-sm font-semibold mb-6">
                Financial Aid
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Scholarships & Concessions</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                We believe financial constraints should never hinder talent. We offer various scholarships and fee
                concessions for deserving students.
              </p>
              <ul className="space-y-4">
                {[
                  "Merit Scholarships - Up to 100% fee waiver",
                  "Sports Scholarships - For exceptional athletes",
                  "Sibling Discount - 10% for second child",
                  "Need-based Aid - Based on family income",
                  "Staff Children - Special concessions",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#A6FF57] flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden img-zoom">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Scholarship Winners"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-24 bg-[#f5f5f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Get Started
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Express Your Interest</h2>
            <p className="text-lg text-[#666666]">Fill out the form and our admissions team will reach out</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-12 rounded-3xl border border-[#e5e5e5] shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#11110F] mb-2">Parent/Guardian Name *</label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-5 py-4 border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#11110F] mb-2">Student Name *</label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-5 py-4 border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                  placeholder="Student's full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-[#11110F] mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#11110F] mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
                  placeholder="+92 300 1234567"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#11110F] mb-2">Class Applying For *</label>
              <select
                required
                value={formData.studentClass}
                onChange={(e) => setFormData({ ...formData, studentClass: e.target.value })}
                className="w-full px-5 py-4 border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="">Select a class</option>
                <option value="Nursery">Nursery</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="Primary">Primary (I-V)</option>
                <option value="Middle">Middle (VI-VIII)</option>
                <option value="Secondary">Secondary (IX-X)</option>
                <option value="Senior">Intermediate (XI-XII)</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#11110F] mb-2">Additional Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-5 py-4 border border-[#e5e5e5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#A6FF57] text-[#11110F] py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#A6FF57] to-[#8fdb44] rounded-3xl p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11110F] mb-4">Have Questions?</h2>
            <p className="text-[#11110F]/70 mb-8 text-lg">Our admissions team is here to help you</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 bg-[#11110F] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#333]"
              >
                <Phone className="w-5 h-5" />
                {SCHOOL_INFO.phone}
              </a>
              <a
                href={`mailto:${SCHOOL_INFO.email}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-[#11110F] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                <Mail className="w-5 h-5" />
                {SCHOOL_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
