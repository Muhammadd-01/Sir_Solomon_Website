"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import { TESTIMONIALS } from "@/lib/constants"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const handlePrev = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [handleNext])

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#11110F] to-[#1a1a18] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#A6FF57]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A6FF57]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#A6FF57] rounded-full text-sm font-semibold mb-4 animate-fadeInDown">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Voices of Our Community</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Hear from parents, students, and alumni about their experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#222220] to-[#1a1a18] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#333] shadow-2xl">
            {/* Quote Icon */}
            <Quote className="absolute top-6 sm:top-8 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 text-[#A6FF57]/20" />

            {/* Stars */}
            <div className="flex gap-1 mb-6 pl-6 sm:pl-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#A6FF57] fill-[#A6FF57]" />
              ))}
            </div>

            {/* Testimonial Content */}
            <div
              className={`transition-all duration-500 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed mb-8 sm:mb-10 pl-6 sm:pl-8">
                "{TESTIMONIALS[current].quote}"
              </p>

              <div className="flex items-center space-x-4 pl-6 sm:pl-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#A6FF57] overflow-hidden relative ring-4 ring-[#A6FF57]/20">
                  <Image
                    src={`/.jpg?height=64&width=64&query=${TESTIMONIALS[current].name} portrait professional`}
                    alt={TESTIMONIALS[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-base sm:text-lg">{TESTIMONIALS[current].name}</p>
                  <p className="text-[#A6FF57] text-sm sm:text-base">{TESTIMONIALS[current].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#333] gap-4">
              {/* Dots */}
              <div className="flex space-x-2 sm:space-x-3">
                {TESTIMONIALS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (!isAnimating) {
                        setIsAnimating(true)
                        setCurrent(index)
                        setTimeout(() => setIsAnimating(false), 500)
                      }
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current ? "bg-[#A6FF57] w-6 sm:w-8" : "bg-[#444] w-2 hover:bg-[#555]"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 sm:p-3 bg-[#333] hover:bg-[#444] rounded-xl transition-all duration-300 hover:scale-105"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} className="text-white sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 sm:p-3 bg-[#A6FF57] hover:bg-[#b8ff70] rounded-xl transition-all duration-300 hover:scale-105"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} className="text-[#11110F] sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
