"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Play } from "lucide-react"

const CATEGORIES = ["All", "Events", "Sports", "Academics", "Announcements"]

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Annual Science Fair 2024 - Students Showcase Innovative Projects",
    excerpt:
      "Our students displayed remarkable creativity and scientific thinking at this year's science fair. Over 100 projects were presented, covering topics from renewable energy to artificial intelligence.",
    date: "November 15, 2024",
    category: "Events",
    author: "Admin",
    readTime: "5 min read",
    image: "science fair students projects innovation laboratory",
  },
  {
    id: 2,
    title: "Sir Solomon's Wins State Basketball Championship",
    excerpt:
      "Our basketball team brought home the state championship trophy after an exciting final match. The team's dedication and teamwork led to this historic victory.",
    date: "November 10, 2024",
    category: "Sports",
    author: "Sports Dept",
    readTime: "3 min read",
    image: "basketball championship celebration trophy winners",
  },
  {
    id: 3,
    title: "New STEM Laboratory Inaugurated",
    excerpt:
      "A state-of-the-art STEM laboratory equipped with the latest technology was inaugurated by the Chief Guest. Students now have access to advanced robotics kits and 3D printers.",
    date: "November 5, 2024",
    category: "Academics",
    author: "Admin",
    readTime: "4 min read",
    image: "modern STEM laboratory robotics technology school",
  },
  {
    id: 4,
    title: "Annual Sports Day Celebrations",
    excerpt:
      "The annual sports day was celebrated with great enthusiasm. Students participated in various athletic events, with new records being set in several categories.",
    date: "October 28, 2024",
    category: "Sports",
    author: "Sports Dept",
    readTime: "4 min read",
    image: "school sports day athletics running track students",
  },
  {
    id: 5,
    title: "Students Excel in National Olympiad",
    excerpt:
      "Five of our students secured positions in the top 100 at the National Science Olympiad. Their hard work and dedication have made the school proud.",
    date: "October 20, 2024",
    category: "Academics",
    author: "Academic Dept",
    readTime: "3 min read",
    image: "students olympiad winners medals achievement",
  },
  {
    id: 6,
    title: "Admission Open for 2025-26 Academic Year",
    excerpt:
      "We are pleased to announce that admissions are now open for the upcoming academic year. Early bird registrations receive special benefits.",
    date: "October 15, 2024",
    category: "Announcements",
    author: "Admin",
    readTime: "2 min read",
    image: "school admission open registration education",
  },
  {
    id: 7,
    title: "Cultural Festival Dazzles Audience",
    excerpt:
      "The three-day cultural festival showcased the diverse talents of our students through music, dance, drama, and art exhibitions.",
    date: "October 10, 2024",
    category: "Events",
    author: "Cultural Dept",
    readTime: "5 min read",
    image: "school cultural festival dance performance students stage",
  },
  {
    id: 8,
    title: "Parent-Teacher Meeting Schedule Released",
    excerpt:
      "The schedule for the upcoming parent-teacher meeting has been released. Parents are requested to confirm their attendance.",
    date: "October 5, 2024",
    category: "Announcements",
    author: "Admin",
    readTime: "2 min read",
    image: "parent teacher meeting school conference discussion",
  },
  {
    id: 9,
    title: "Environmental Awareness Week Celebrations",
    excerpt:
      "Students participated in tree plantation drives, recycling workshops, and environmental awareness campaigns throughout the week.",
    date: "September 28, 2024",
    category: "Events",
    author: "Eco Club",
    readTime: "4 min read",
    image: "students planting trees environmental awareness green initiative",
  },
  {
    id: 10,
    title: "Inter-House Cricket Tournament Finals",
    excerpt:
      "The Red House emerged victorious in the thrilling finals of the inter-house cricket tournament, showcasing exceptional sportsmanship.",
    date: "September 20, 2024",
    category: "Sports",
    author: "Sports Dept",
    readTime: "3 min read",
    image: "cricket match students sports tournament school ground",
  },
]

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews =
    selectedCategory === "All" ? NEWS_ITEMS : NEWS_ITEMS.filter((item) => item.category === selectedCategory)

  const featuredNews = NEWS_ITEMS[0]

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
          <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6 animate-fadeInDown">
            Stay Updated
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[#11110F] mb-6 animate-fadeInUp">
            News & <span className="text-[#A6FF57]">Updates</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            Stay informed about the latest happenings, events, and achievements at Sir Solomon's
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden group card-hover">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src={`/.jpg?height=500&width=1200&query=${featuredNews.image}`}
                alt={featuredNews.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-[#11110F]/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
              <span className="inline-block px-4 py-1.5 bg-[#A6FF57] text-[#11110F] text-sm font-bold rounded-full mb-4">
                Featured
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl">
                {featuredNews.title}
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl hidden sm:block">{featuredNews.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {featuredNews.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {featuredNews.author}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {featuredNews.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 bg-white/95 backdrop-blur-lg z-30 border-y border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-[#A6FF57] text-[#11110F] shadow-lg"
                    : "bg-[#f5f5f5] text-[#666666] hover:bg-[#e5e5e5] hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredNews.map((news, index) => (
              <article
                key={news.id}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-[#e5e5e5] overflow-hidden card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={`/.jpg?height=224&width=400&query=${news.image}`}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#A6FF57] text-[#11110F] text-xs font-bold rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-4 text-sm text-[#666666] mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {news.readTime}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#11110F] mb-3 line-clamp-2 group-hover:text-[#666666] transition-colors duration-300">
                    {news.title}
                  </h3>
                  <p className="text-[#666666] text-sm line-clamp-3 mb-4">{news.excerpt}</p>
                  <button className="inline-flex items-center gap-2 text-[#11110F] font-semibold text-sm group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#666666] text-lg">No news found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Watch & Learn
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-4">Featured Videos</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Explore our campus life through these captivating videos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { title: "Campus Tour 2024", query: "modern school campus tour building" },
              { title: "Annual Day Highlights", query: "school annual day function celebration" },
            ].map((video, index) => (
              <div
                key={video.title}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer card-hover"
              >
                <div className="relative h-64 sm:h-80">
                  <Image
                    src={`/.jpg?height=320&width=640&query=${video.query}`}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#11110F]/40 group-hover:bg-[#11110F]/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#A6FF57] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#11110F] ml-1" fill="#11110F" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#11110F] to-transparent">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#11110F] to-[#1a1a18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#A6FF57] rounded-full text-sm font-semibold mb-6">
            Newsletter
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Stay in the Loop</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss important updates, events, and announcements
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border border-[#333] bg-[#222] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A6FF57] focus:border-transparent transition-all duration-300"
            />
            <button
              type="submit"
              className="btn-shine bg-[#A6FF57] text-[#11110F] px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#A6FF57] to-[#8fdb44]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11110F] mb-6">Have a Story to Share?</h2>
          <p className="text-[#11110F]/80 text-lg mb-10">
            We'd love to hear about your experiences and achievements at Sir Solomon's
          </p>
          <Link
            href="/contact"
            className="btn-shine inline-flex items-center gap-2 bg-[#11110F] text-white px-8 sm:px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
