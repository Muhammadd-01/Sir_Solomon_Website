import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { NEWS_ARTICLES } from "@/lib/constants"

export default function NewsPreview() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-4">
              Latest Updates
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#11110F]">News & Events</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[#11110F] font-semibold hover:text-[#A6FF57] transition-colors duration-300 group"
          >
            View All News
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article, index) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e5e5e5] transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={`/.jpg?height=208&width=400&query=${article.title}`}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 right-4 bg-[#A6FF57] text-[#11110F] text-xs font-bold px-3 py-1.5 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[#666666] mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className="font-bold text-lg text-[#11110F] mb-3 line-clamp-2 group-hover:text-[#A6FF57] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-[#666666] text-sm line-clamp-2">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
