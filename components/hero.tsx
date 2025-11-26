"use client"

import { ChevronDown, GraduationCap, Users, Award, Building, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SCHOOL_INFO } from "@/lib/constants"
import { motion } from "framer-motion"

export default function Hero() {
  const text = "School"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-green-300 opacity-20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 left-10 w-96 h-96 bg-green-400 opacity-10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-green-500 rounded-full animate-bounce-subtle opacity-60" />
        <div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-green-800 rounded-full animate-bounce-subtle opacity-40"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce-subtle opacity-50"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#15803d 1px, transparent 1px), linear-gradient(90deg, #15803d 1px, transparent 1px)`,
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
              <div className="inline-flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg border border-green-100 hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-green-900 tracking-wide">Admissions Open for 2025-26</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#11110F] mb-4 sm:mb-6 animate-fadeInUp animate-delay-100 leading-tight">
              Sir Solomon's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 drop-shadow-sm h-[1.2em]">
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.1,
                      delay: index * 0.1 + 0.5,
                      ease: "easeIn"
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="inline-block w-1 h-[0.8em] bg-green-500 ml-1 align-middle"
                />
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#666666] max-w-xl mx-auto lg:mx-0 mb-4 sm:mb-6 animate-fadeInUp animate-delay-200 font-medium">
              {SCHOOL_INFO.tagline}
            </p>

            {/* Mission */}
            <p className="text-sm sm:text-base lg:text-lg text-[#666666] max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 animate-fadeInUp animate-delay-300 leading-relaxed">
              {SCHOOL_INFO.mission}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeInUp animate-delay-400">
              <Link
                href="/admissions"
                className="btn-shine bg-[#11110F] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-[#222] text-center shadow-lg shadow-green-200"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="group border-2 border-[#11110F] text-[#11110F] px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:bg-[#11110F] hover:text-white text-center hover:shadow-xl"
              >
                Discover More
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block animate-slideInRight animate-delay-300">
            <div className="relative h-[550px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 group img-zoom">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
                alt="Sir Solomon's School Campus"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Video Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:scale-110 hover:bg-white group border border-white/50 animate-pulse-glow">
                <Play
                  className="w-10 h-10 text-white ml-1 transition-transform duration-300 group-hover:scale-110 group-hover:text-green-600"
                  fill="currentColor"
                />
              </button>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-green-100 animate-float hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#11110F]">100%</p>
                  <p className="text-sm font-medium text-gray-500">Board Results</p>
                </div>
              </div>
            </div>

            {/* Another Floating Card */}
            <div
              className="absolute top-10 -right-8 bg-[#11110F] p-5 rounded-2xl shadow-2xl animate-float hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: "1.5s" }}
            >
              <div className="flex flex-col items-center">
                <Sparkles className="w-6 h-6 text-[#A6FF57] mb-2" />
                <p className="text-4xl font-bold text-[#A6FF57]">25+</p>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Years</p>
              </div>
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
              className="bg-white/60 backdrop-blur-md p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-green-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white group hover:border-green-200"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              <p className="text-xl sm:text-2xl font-bold text-[#11110F]">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-[#666666] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <ChevronDown className="text-green-600" size={32} />
      </div>
    </section>
  )
}
