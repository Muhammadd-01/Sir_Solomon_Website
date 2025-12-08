import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Award, Target, Eye, Heart, ArrowRight, Quote, Users, BookOpen, Trophy, Calendar } from "lucide-react"
import { TEACHERS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Sir Solomon's School's 25+ years of educational excellence, our mission, vision, values, and the dedicated team shaping future leaders since 2003.",
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-white via-[#f9f9f7] to-[#e8ffe0] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#11110F 1px, transparent 1px), linear-gradient(90deg, #11110F 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A6FF57]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A6FF57]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6 animate-fadeInDown">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#11110F] mb-6 animate-fadeInUp">
            About <span className="text-[#A6FF57]">Sir Solomon's</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            Shaping futures through education, character, and unwavering commitment to excellence since 2003
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6">
                Established 2003
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-6">Our Journey</h2>
              <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
                Founded with a vision to transform education, Sir Solomon's School began its journey in 2003 with just
                50 students and 5 dedicated teachers. Today, we stand as one of the region's most prestigious
                educational institutions.
              </p>
              <p className="text-base sm:text-lg text-[#666666] mb-6 leading-relaxed">
                Our founder, Muhammad Iqbal, believed that true education goes beyond textbooks. This philosophy
                continues to guide us as we nurture over 700 students annually, preparing them for an ever-evolving
                world.
              </p>
              <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
                From humble beginnings to two advanced campuses spanning over 500+ yards each, our growth reflects an unwavering commitment to educational excellence and student development.
              </p>

              {/* Timeline highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { year: "2003", event: "School Founded" },
                  { year: "2004", event: "BSEK Affiliation" },
                  { year: "2024", event: "New Campus" },
                  { year: "2025", event: "Intermediate Affliation" },
                ].map((item) => (
                  <div key={item.year} className="flex items-center gap-3 p-3 bg-[#f5f5f5] rounded-xl">
                    <Calendar className="w-5 h-5 text-[#A6FF57]" />
                    <div>
                      <p className="font-bold text-[#11110F]">{item.year}</p>
                      <p className="text-xs text-[#666666]">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop"
                  alt="School History"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-[#11110F] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
                <p className="text-4xl sm:text-5xl font-bold text-[#A6FF57]">25+</p>
                <p className="text-base sm:text-lg">Years of Legacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Watch Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-4">Experience Sir Solomon's</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Take a virtual tour of our campus and discover what makes us special
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer max-w-4xl mx-auto">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
                alt="Campus Tour Video"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#11110F]/40 group-hover:bg-[#11110F]/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#A6FF57] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#11110F] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F]">Mission, Vision & Values</h2>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
  {[
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide quality education that helps students grow in knowledge, build good character, and become responsible citizens who contribute positively to Pakistan and society.",
      color: "#A6FF57",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become a leading school in Pakistan, known for excellent teaching, innovative learning, and shaping students into honest, kind, and capable individuals.",
      color: "#11110F",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We value honesty, hard work, creativity, fairness, caring for everyone, and serving our community with dedication.",
      color: "#A6FF57",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="group bg-[#f5f5f5] p-8 sm:p-10 rounded-3xl border border-[#e5e5e5] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-white"
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: item.color }}
      >
        <item.icon className={`w-8 h-8 ${item.color === "#11110F" ? "text-white" : "text-[#11110F]"}`} />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-[#11110F] mb-4">{item.title}</h3>
      <p className="text-[#666666] leading-relaxed">{item.description}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Users, value: "700+", label: "Students Enrolled" },
              { icon: BookOpen, value: "60+", label: "Expert Faculty" },
              { icon: Trophy, value: "10+", label: "Awards Won" },
              { icon: Award, value: "100%", label: "Board Results" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 sm:p-8 bg-white/20 backdrop-blur-sm rounded-2xl transition-all duration-300 hover:bg-white/30"
              >
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#11110F] mx-auto mb-4" />
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-2">{stat.value}</p>
                <p className="text-[#11110F]/70 font-medium text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principle's Message */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#11110F] to-[#1a1a18]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[400px] sm:h-[500px] rounded-3xl overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                  alt="Dr. James Smith - Principle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#A6FF57] p-4 sm:p-6 rounded-2xl shadow-xl">
                <p className="font-bold text-[#11110F]">Sir. Shehzad</p>
                <p className="text-sm text-[#11110F]/70">Principle</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#A6FF57]/30 mb-6" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
                From Our Principle
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed italic">
               "At Sir Solomon's, we are dedicated to building confident and responsible students by combining knowledge, character development, and strong moral values that serve Pakistan and society."
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                Our dedicated faculty and modern infrastructure provide the perfect environment for complete
                development. We are committed to ensuring that every student discovers their unique potential and
                develops the skills necessary to contribute meaningfully to society.
              </p>
              <p className="text-[#A6FF57] font-bold text-lg sm:text-xl">— Sir. Shehzad</p>
              <p className="text-gray-400">Principle, Sir Solomon's School & College</p>
            </div>
          </div>
        </div>
      </section>

    {/* Leadership Team */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
        Our Team
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-4">
        Leadership & Faculty
      </h2>
      <p className="text-lg text-[#666666] max-w-2xl mx-auto">
        Meet the dedicated educators who shape the future of our students
      </p>
    </div>

    {/* Cards Centered */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
      {TEACHERS.map((teacher) => (
        <div
          key={teacher.id}
          className="group bg-[#f5f5f5] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 w-full"
        >
          <div className="relative h-64 sm:h-72 overflow-hidden">
            <Image
              src={
                teacher.image ||
                `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop`
              }
              alt={teacher.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-5 sm:p-6">
            <h3 className="font-bold text-lg text-[#11110F]">{teacher.name}</h3>
            <p className="text-[#A6FF57] font-semibold mb-2">{teacher.subject}</p>
            <p className="text-sm text-[#666666]">{teacher.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Achievements */}
      {/* <section className="py-16 sm:py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Recognition
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-4">Awards & Achievements</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { year: "2024", title: "Best School Award", org: "National Education Board" },
              { year: "2023", title: "STEM Excellence Award", org: "Science Council of India" },
              { year: "2023", title: "Green School Certification", org: "Environmental Ministry" },
              { year: "2022", title: "Educational Innovation Award", org: "EdTech Foundation" },
              { year: "2022", title: "Sports Excellence Trophy", org: "State Sports Authority" },
              { year: "2021", title: "100% Board Results", org: "CBSE Board" },
              { year: "2021", title: "Best Infrastructure", org: "Education Times" },
              { year: "2020", title: "Digital Education Pioneer", org: "Tech in Education Forum" },
            ].map((achievement, index) => (
              <div
                key={`${achievement.year}-${achievement.title}`}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#e5e5e5] text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group"
              >
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#A6FF57] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-[#A6FF57] font-bold text-lg mb-2">{achievement.year}</p>
                <h3 className="font-bold text-[#11110F] mb-2 text-sm sm:text-base">{achievement.title}</h3>
                <p className="text-xs sm:text-sm text-[#666666]">{achievement.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Campus Facilities */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-4">Top-Notch Facilities</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Modern infrastructure designed to enhance learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Smart Classrooms",
                desc: "White boards and learning tools in every classroom",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Science Labs",
                desc: "Fully equipped Physics, Chemistry, and Biology laboratories",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Computer Lab",
                desc: "Computers with high-specifications and other facilities",
                image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Library",
                desc: "Decent variety of books, digital resources, and quiet study spaces",
                image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
              },
              {
              title: "Play Area",
desc: "Simple indoor play space for kids to have fun and stay active",

                image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=1974&auto=format&fit=crop",
              },
              {
             title: "Solar System",
desc: "15 kW solar power setup to support our energy needs",

                image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
              },
            ].map((facility, index) => (
              <div
                key={facility.title}
                className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-300 text-sm">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-6">Experience Sir Solomon's</h2>
          <p className="text-lg sm:text-xl text-[#11110F]/80 mb-8 sm:mb-10">
            Schedule a campus visit and discover why we're the preferred choice for quality education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-shine bg-[#11110F] text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Schedule a Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/gallery"
              className="bg-white text-[#11110F] px-8 sm:px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
