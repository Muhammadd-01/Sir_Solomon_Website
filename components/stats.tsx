"use client"

import { useState, useEffect, useRef } from "react"
import { STATS } from "@/lib/constants"
import { GraduationCap, Users, Award, Globe } from "lucide-react"

const iconMap = [GraduationCap, Users, Award, Globe]

const StatCounter = ({ value, label, Icon, delay }: { value: number; label: string; Icon: any; delay: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  return (
    <div
      ref={ref}
      className="relative text-center p-8 bg-white rounded-2xl border border-[#e5e5e5] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#A6FF57]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Icon className="w-12 h-12 text-[#A6FF57] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
      <div className="text-5xl font-bold text-[#11110F] mb-2">{count}+</div>
      <p className="text-[#666666] font-medium">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#f5f5f5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Our Achievements</h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Numbers that reflect our commitment to excellence in education
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              label={stat.label}
              Icon={iconMap[index]}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
