import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import NewsPreview from "@/components/news-preview"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, Play } from "lucide-react"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />

      {/* About Preview Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image src="/modern-school-building-aerial-view.jpg" alt="Sir Solomon's Campus" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/50 to-transparent" />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-[#A6FF57] rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-[#11110F]">25+</p>
                <p className="text-[#11110F]/70 font-medium">Years of Excellence</p>
              </div>
              {/* Play Button */}
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110">
                <Play className="w-8 h-8 text-[#11110F] ml-1" fill="#11110F" />
              </button>
            </div>

            {/* Content Side */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6">
                About Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-6 leading-tight">
                Nurturing Future Leaders Since 1999
              </h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                Sir Solomon's School has been at the forefront of educational excellence, combining traditional values
                with modern teaching methodologies. Our holistic approach ensures every student discovers and develops
                their unique potential.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "CBSE Affiliated with 100% Board Results",
                  "State-of-the-art Smart Classrooms",
                  "Olympic-size Sports Facilities",
                  "Award-winning STEM Programs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#A6FF57] flex-shrink-0" />
                    <span className="text-[#11110F] font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#11110F] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#333] hover:gap-4"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Academic Programs
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Comprehensive Education</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              From early childhood to senior secondary, we offer well-structured programs for every stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { level: "Pre-Primary", grades: "Nursery - KG", age: "3-5 years", color: "#FFE066" },
              { level: "Primary", grades: "Class I - V", age: "6-10 years", color: "#A6FF57" },
              { level: "Middle School", grades: "Class VI - VIII", age: "11-13 years", color: "#66D9FF" },
              { level: "Secondary", grades: "Class IX - X", age: "14-15 years", color: "#FF9966" },
              { level: "Sr. Secondary", grades: "Class XI - XII", age: "16-17 years", color: "#C4A6FF" },
              { level: "Special Programs", grades: "All Ages", age: "Enrichment", color: "#FF66A6" },
            ].map((program) => (
              <div
                key={program.level}
                className="group bg-white rounded-2xl p-6 border border-[#e5e5e5] transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: program.color + "30" }}
                >
                  <span className="text-2xl font-bold" style={{ color: program.color }}>
                    {program.level.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-[#11110F] mb-2">{program.level}</h3>
                <p className="text-[#A6FF57] font-semibold mb-1">{program.grades}</p>
                <p className="text-[#666666] text-sm">{program.age}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 border-2 border-[#11110F] text-[#11110F] px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#11110F] hover:text-white"
            >
              Explore All Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#A6FF57] to-[#8fdb44] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#11110F] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-6">Ready to Join Our Family?</h2>
          <p className="text-xl text-[#11110F]/80 mb-10 max-w-2xl mx-auto">
            Take the first step towards an exceptional education. Admissions are now open for the 2025-26 academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="bg-[#11110F] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#333] hover:shadow-xl"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#11110F] px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

      <NewsPreview />
    </>
  )
}
