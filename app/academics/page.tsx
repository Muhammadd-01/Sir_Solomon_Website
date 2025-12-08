import Image from "next/image"
import Link from "next/link"
import { TEACHERS, PROGRAMS } from "@/lib/constants"
import { BookOpen, FlaskConical, Globe, Music, Trophy, Laptop, ArrowRight, CheckCircle } from "lucide-react"

export default function Academics() {
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
            Academics
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#11110F] mb-6">
            Academic <span className="text-[#A6FF57]">Excellence</span>
          </h1>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Comprehensive programs designed for holistic development and global success
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Our Programs
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Academic Stages</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Structured learning pathways from early childhood to higher secondary
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((program, index) => (
              <div
                key={program.title}
                className="group bg-[#f5f5f5] p-8 rounded-3xl border border-[#e5e5e5] transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#A6FF57] rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <span className="text-2xl font-bold text-[#11110F]">{index + 1}</span>
                </div>
                <p className="text-[#A6FF57] text-sm font-bold mb-2">{program.grades}</p>
                <h3 className="font-bold text-2xl text-[#11110F] mb-4">{program.title}</h3>
                <p className="text-[#666666] leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6">
                BSEK Curriculum
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-6">Our Curriculum</h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                We follow the BSEK curriculum enhanced with international best practices. Our teaching methodology
                combines traditional values with modern pedagogical approaches.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: "Core Academics",
                    desc: "English, Mathematics, Science, Social Studies with advanced techniques",
                  },
                  { icon: Globe, title: "Languages", desc: "Hindi, Sanskrit, French, and German language options" },
                  {
                    icon: FlaskConical,
                    title: "STEM Education",
                    desc: "Integrated Science, Technology, Engineering, Mathematics learning",
                  },
                  {
                    icon: Music,
                    title: "Arts & Culture",
                    desc: "Music, Dance, Drama, Visual Arts, and Cultural programs",
                  },
                  {
                    icon: Trophy,
                    title: "Sports",
                    desc: "Cricket, Football, Basketball, Swimming, Athletics, and more",
                  },
                  { icon: Laptop, title: "Digital Skills", desc: "Coding, Robotics, AI basics, and digital literacy" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="w-6 h-6 text-[#11110F]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#11110F] mb-1">{item.title}</h3>
                      <p className="text-[#666666] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[600px] rounded-3xl overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
                  alt="Students in classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Faculty */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
        Expert Educators
      </span>
      <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-4">Meet Our Faculty</h2>
      <p className="text-lg text-[#666666] max-w-2xl mx-auto">
        Highly qualified and passionate teachers dedicated to student success
      </p>
    </div>

    {/* Centered Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
      {TEACHERS.map((teacher) => (
        <div
          key={teacher.id}
          className="group bg-[#f5f5f5] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 w-full"
        >
          <div className="relative h-72 overflow-hidden">
            <Image
              src={
                teacher.image ||
                `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop`
              }
              alt={teacher.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="font-bold text-lg text-[#11110F]">{teacher.name}</h3>
            <p className="text-[#A6FF57] font-semibold mb-2">{teacher.subject}</p>
            <p className="text-sm text-[#666666]">{teacher.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Enrichment Programs */}
      <section className="py-24 bg-gradient-to-br from-[#11110F] to-[#1a1a18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#A6FF57] rounded-full text-sm font-semibold mb-4">
              Beyond Academics
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Enrichment Programs</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Special programs designed to develop well-rounded individuals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Olympiad Training", desc: "Specialized coaching for Science, Math, and Language Olympiads" },
              { title: "Robotics Club", desc: "Hands-on robotics and automation projects" },
              { title: "Debate & MUN", desc: "Public speaking, debate, and Model United Nations" },
              { title: "Art Studio", desc: "Painting, sculpture, and digital art classes" },
              { title: "Music Academy", desc: "Instrumental and vocal training programs" },
              { title: "Leadership Camp", desc: "Annual leadership and team-building programs" },
            ].map((program, index) => (
              <div
                key={program.title}
                className="bg-[#222220] p-8 rounded-3xl border border-[#333] transition-all duration-500 hover:border-[#A6FF57] hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-[#A6FF57] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-[#11110F]">{index + 1}</span>
                </div>
                <h3 className="font-bold text-xl text-white mb-3">{program.title}</h3>
                <p className="text-gray-400">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "100%", label: "Board Pass Rate" },
                  { value: "95%", label: "Score 90%+ in Boards" },
                  { value: "50+", label: "University Scholarships" },
                  { value: "25+", label: "National Rank Holders" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#f5f5f5] p-6 rounded-2xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <p className="text-4xl font-bold text-[#A6FF57] mb-2">{stat.value}</p>
                    <p className="text-[#666666] text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6">
                Results
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-6">Academic Achievements</h2>
              <p className="text-lg text-[#666666] mb-8 leading-relaxed">
                Our students consistently achieve outstanding results in board examinations and competitive tests,
                reflecting our commitment to academic excellence.
              </p>
              <ul className="space-y-4">
                {[
                  "Consistent 100% pass rate in BSEK Board Exams",
                  "Multiple State and National toppers every year",
                  "Strong placement in IITs, NITs, and medical colleges",
                  "International university admissions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#A6FF57] flex-shrink-0 mt-0.5" />
                    <span className="text-[#11110F]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F] mb-6">Start Your Academic Journey</h2>
          <p className="text-xl text-[#11110F]/80 mb-10">
            Join our community of learners and achievers. Admissions open for 2025-26.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 bg-[#11110F] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-[#333] hover:shadow-xl"
          >
            Apply for Admission
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
