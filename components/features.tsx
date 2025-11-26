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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
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
                className="group relative p-8 bg-[#f5f5f5] rounded-2xl border border-[#e5e5e5] transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 bg-[#A6FF57] rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="w-7 h-7 text-[#11110F]" />
                </div>
                <h3 className="font-bold text-xl text-[#11110F] mb-3">{feature.title}</h3>
                <p className="text-[#666666] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
