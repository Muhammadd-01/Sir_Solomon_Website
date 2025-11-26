"use client"

import { ChevronDown, GraduationCap, Users, Award, Building, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SCHOOL_INFO } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#f9f9f7] to-[#e8ffe0]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A6FF57] opacity-20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-[#A6FF57] opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#A6FF57]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#A6FF57] rounded-full animate-bounce-subtle opacity-60" />
        <div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-[#11110F] rounded-full animate-bounce-subtle opacity-40"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#A6FF57] rounded-full animate-bounce-subtle opacity-50"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#11110F 1px, transparent 1px), linear-gradient(90deg, #11110F 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 sm:mb-8 animate-fadeInDown">
              <div className="inline-flex items-center justify-center space-x-2 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md border border-[#e5e5e5]">
                <div className="w-2.5 h-2.5 bg-[#A6FF57] rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold text-[#11110F]">Admissions Open for 2025-26</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#11110F] mb-4 sm:mb-6 animate-fadeInUp animate-delay-100 leading-tight">
              Sir Solomon's
              <span className="block text-[#A6FF57] drop-shadow-sm">School</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#666666] max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 animate-fadeInUp animate-delay-200 font-medium">
              {SCHOOL_INFO.tagline}
            </p>

            {/* Mission */}
            <p className="text-sm sm:text-base lg:text-lg text-[#666666] max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 animate-fadeInUp animate-delay-300">
              {SCHOOL_INFO.mission}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeInUp animate-delay-400">
              <Link
                href="/admissions"
                className="btn-shine bg-[#A6FF57] text-[#11110F] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-[#b8ff70] text-center"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="border-2 border-[#11110F] text-[#11110F] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:bg-[#11110F] hover:text-white text-center"
              >
                Discover More
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fadeInRight animate-delay-300">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/modern-school-building-students-happy-campus-green.jpg"
                alt="Sir Solomon's School Campus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/30 to-transparent" />

              {/* Video Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-[#A6FF57] group">
                <Play
                  className="w-8 h-8 text-[#11110F] ml-1 transition-transform duration-300 group-hover:scale-110"
                  fill="#11110F"
                />
              </button>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-[#e5e5e5] animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#A6FF57] rounded-xl flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#11110F]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#11110F]">100%</p>
                  <p className="text-sm text-[#666666]">Board Results</p>
                </div>
              </div>
            </div>

            {/* Another Floating Card */}
            <div
              className="absolute -top-4 -right-4 bg-[#11110F] p-4 rounded-2xl shadow-xl animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="text-3xl font-bold text-[#A6FF57]">25+</p>
              <p className="text-sm text-white">Years</p>
            </div>
          </div>
        </div>

        {/* Quick Stats - Mobile/Tablet visible, hidden on lg */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fadeInUp animate-delay-500">
          {[
            { icon: GraduationCap, label: "Years of Excellence", value: "25+" },
            { icon: Users, label: "Students", value: "1200+" },
            { icon: Award, label: "Expert Faculty", value: "85+" },
            { icon: Building, label: "Global Alumni", value: "5000+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-[#e5e5e5] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-white group"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#A6FF57] mx-auto mb-2 transition-transform duration-300 group-hover:scale-110" />
              <p className="text-xl sm:text-2xl font-bold text-[#11110F]">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-[#666666]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#A6FF57]" size={32} />
      </div>
    </section>
  )
}
