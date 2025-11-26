"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Grid, LayoutGrid, Play } from "lucide-react"

const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "events", label: "Events" },
  { id: "sports", label: "Sports" },
  { id: "academics", label: "Academics" },
]

const GALLERY_ITEMS = [
  { id: 1, title: "Main Building", category: "campus", query: "modern school main building architecture glass" },
  { id: 2, title: "Library", category: "campus", query: "modern school library interior books shelves" },
  { id: 3, title: "Science Lab", category: "academics", query: "school science laboratory students experiment" },
  { id: 4, title: "Sports Day", category: "sports", query: "school sports day students athletics running" },
  { id: 5, title: "Annual Function", category: "events", query: "school annual day stage performance dance" },
  { id: 6, title: "Computer Lab", category: "academics", query: "modern computer lab students coding programming" },
  { id: 7, title: "Playground", category: "sports", query: "school playground outdoor green field students" },
  { id: 8, title: "Art Exhibition", category: "events", query: "school art exhibition student paintings creative" },
  { id: 9, title: "Auditorium", category: "campus", query: "school auditorium stage modern theater seats" },
  { id: 10, title: "Cafeteria", category: "campus", query: "school cafeteria students lunch modern interior" },
  { id: 11, title: "Basketball Court", category: "sports", query: "school basketball court game students playing" },
  { id: 12, title: "Science Fair", category: "events", query: "school science fair projects students innovation" },
  { id: 13, title: "Music Room", category: "academics", query: "school music room instruments piano students" },
  { id: 14, title: "Swimming Pool", category: "sports", query: "school swimming pool indoor olympic students" },
  { id: 15, title: "Graduation Day", category: "events", query: "school graduation ceremony students celebration" },
  { id: 16, title: "Chemistry Lab", category: "academics", query: "school chemistry lab students beakers experiment" },
  { id: 17, title: "Football Field", category: "sports", query: "school football field green grass students playing" },
  { id: 18, title: "Cultural Festival", category: "events", query: "school cultural festival dance music celebration" },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  const filteredItems =
    selectedCategory === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  const currentIndex = selectedImage ? filteredItems.findIndex((item) => item.id === selectedImage.id) : -1

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1])
    }
  }

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
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A6FF57]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A6FF57]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6 animate-fadeInDown">
            Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#11110F] mb-6 animate-fadeInUp">
            Campus <span className="text-[#A6FF57]">Moments</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            Explore our vibrant campus life, events, and memorable moments captured through the lens
          </p>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11110F] mb-2">Video Highlights</h2>
            <p className="text-[#666666]">Watch our campus come to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Campus Tour 2024", query: "school campus tour walkthrough modern building" },
              { title: "Annual Day Highlights", query: "school annual day celebration performance stage" },
            ].map((video) => (
              <div
                key={video.title}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer card-hover"
              >
                <div className="relative h-56 sm:h-72">
                  <Image
                    src={`/.jpg?height=288&width=640&query=${video.query}`}
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

      {/* Filter & Controls */}
      <section className="py-6 sm:py-8 sticky top-20 bg-white/95 backdrop-blur-lg z-30 border-y border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === category.id
                      ? "bg-[#A6FF57] text-[#11110F] shadow-lg"
                      : "bg-[#f5f5f5] text-[#666666] hover:bg-[#e5e5e5] hover:scale-105"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${
                  viewMode === "grid" ? "bg-[#11110F] text-white" : "bg-[#f5f5f5] text-[#666666] hover:bg-[#e5e5e5]"
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={`p-2.5 sm:p-3 rounded-xl transition-all duration-300 ${
                  viewMode === "masonry" ? "bg-[#11110F] text-white" : "bg-[#f5f5f5] text-[#666666] hover:bg-[#e5e5e5]"
                }`}
                aria-label="Masonry view"
              >
                <LayoutGrid className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                : "columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6"
            }
          >
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:shadow-2xl card-hover ${
                  viewMode === "masonry"
                    ? `break-inside-avoid ${index % 3 === 0 ? "h-72 sm:h-80" : index % 3 === 1 ? "h-56 sm:h-64" : "h-64 sm:h-72"}`
                    : "h-56 sm:h-72"
                }`}
              >
                <Image
                  src={`/.jpg?height=400&width=600&query=${item.query}`}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11110F] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[#A6FF57] text-[#11110F] text-xs font-bold rounded-full mb-2 capitalize">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-base sm:text-lg">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#666666] text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#11110F]/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 text-white"
            aria-label="Close gallery"
          >
            <X size={20} className="sm:w-6 sm:h-6" />
          </button>

          {/* Navigation */}
          {currentIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="absolute left-2 sm:left-6 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}
          {currentIndex < filteredItems.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-2 sm:right-6 p-2 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300 text-white"
              aria-label="Next image"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/.jpg?height=800&width=1200&query=${selectedImage.query}`}
              alt={selectedImage.title}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#11110F] to-transparent">
              <span className="inline-block px-3 py-1 bg-[#A6FF57] text-[#11110F] text-xs font-bold rounded-full mb-2 capitalize">
                {selectedImage.category}
              </span>
              <h2 className="text-white font-bold text-xl sm:text-2xl">{selectedImage.title}</h2>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {currentIndex + 1} / {filteredItems.length}
          </div>
        </div>
      )}
    </div>
  )
}
