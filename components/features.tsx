import { FEATURES } from "@/lib/constants"
import { BookOpen, Users, Zap, Trophy, Heart, Globe } from "lucide-react"

const iconMap: Record<string, any> = {
  BookOpen,
  Users,
  Zap,
  Trophy,
  Heart,
  Globe,
}

export default function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-4 border border-green-200">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Excellence in Every Aspect</h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Discover what makes Sir Solomon's the preferred choice for parents and students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={feature.title}
                className={`group relative p-8 bg-[#f5f5f5] rounded-2xl border border-[#e5e5e5] transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 hover:border-green-200 animate-fadeInUp animate-delay-${index * 100}`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-green-500">
                  <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-xl text-[#11110F] mb-3 group-hover:text-green-700 transition-colors">{feature.title}</h3>
                <p className="text-[#666666] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
