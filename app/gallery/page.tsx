"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Grid, LayoutGrid, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const GALLERY_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "events", label: "Events" },
  { id: "sports", label: "Sports" },
  { id: "academics", label: "Academics" },
]

const GALLERY_ITEMS = [
  { id: 1, title: "Main Building", category: "campus", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop" },
  { id: 2, title: "Library", category: "campus", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "Science Lab", category: "academics", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Sports Day", category: "sports", image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=1974&auto=format&fit=crop" },
  { id: 5, title: "Annual Function", category: "events", image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, title: "Computer Lab", category: "academics", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, title: "Playground", category: "sports", image: "https://images.unsplash.com/photo-1505249961667-1779183dca9a?q=80&w=1974&auto=format&fit=crop" },
  { id: 8, title: "Art Exhibition", category: "events", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop" },
  { id: 9, title: "Auditorium", category: "campus", image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop" },
  { id: 10, title: "Cafeteria", category: "campus", image: "https://images.unsplash.com/photo-1565514020176-dbf2277cc16d?q=80&w=2070&auto=format&fit=crop" },
  { id: 11, title: "Basketball Court", category: "sports", image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop" },
  { id: 12, title: "Science Fair", category: "events", image: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=1974&auto=format&fit=crop" },
  { id: 13, title: "Music Room", category: "academics", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop" },
  { id: 14, title: "Swimming Pool", category: "sports", image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=1974&auto=format&fit=crop" },
  { id: 15, title: "Graduation Day", category: "events", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" },
  { id: 16, title: "Chemistry Lab", category: "academics", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop" },
  { id: 17, title: "Football Field", category: "sports", image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop" },
  { id: 18, title: "Cultural Festival", category: "events", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop" },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")
  const [prevCategory, setPrevCategory] = useState("all")

  const filteredItems =
    selectedCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory)

  // Trigger re-animation when category changes
  useEffect(() => {
    if (selectedCategory !== prevCategory) {
      setPrevCategory(selectedCategory)
    }
  }, [selectedCategory, prevCategory])

  const currentIndex = selectedImage ? filteredItems.findIndex((item) => item.id === selectedImage.id) : -1

  const handlePrev = () => {
    if (currentIndex > 0) setSelectedImage(filteredItems[currentIndex - 1])
  }

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) setSelectedImage(filteredItems[currentIndex + 1])
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-white via-[#f9f9f7] to-[#e8ffe0] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(#11110F 1px, transparent 1px), linear-gradient(90deg, #11110F 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#A6FF57]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#A6FF57]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-[#A6FF57]/20 text-[#11110F] rounded-full text-sm font-semibold mb-6"
          >
            Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#11110F] mb-6"
          >
            Campus <span className="text-[#A6FF57]">Moments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto"
          >
            Explore our vibrant campus life, events, and memorable moments captured through the lens
          </motion.p>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#11110F] mb-2">Video Highlights</h2>
            <p className="text-[#666666]">Watch our campus come to life</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Campus Tour 2024", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" },
              { title: "Annual Day Highlights", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" },
            ].map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-56 sm:h-72">
                  <Image src={video.image} alt={video.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#11110F]/40 group-hover:bg-[#11110F]/60 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#A6FF57] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-125 shadow-2xl">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#11110F] ml-1" fill="#11110F" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#11110F] to-transparent">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SMOOTH FILTER BAR */}
      <section className="py-6 sm:py-8 sticky top-20 bg-white/95 backdrop-blur-xl z-30 border-y border-[#e5e5e5]/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {GALLERY_CATEGORIES.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden px-6 py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-500"
                  initial={false}
                >
                  <span className={`relative z-10 ${selectedCategory === category.id ? "text-[#11110F]" : "text-[#666]"}`}>
                    {category.label}
                  </span>

                  {/* Active Background with Smooth Expand */}
                  {selectedCategory === category.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-[#A6FF57] rounded-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 bg-[#A6FF57]/30] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-3">
              {["grid", "masonry"].map((mode) => (
                <motion.button
                  key={mode}
                  onClick={() => setViewMode(mode as any)}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-xl transition-all duration-300 ${viewMode === mode ? "bg-[#11110F] text-white shadow-lg" : "bg-[#f5f5f5] text-[#666] hover:bg-[#e5e5e5]"}`}
                >
                  {mode === "grid" ? <Grid className="w-5 h-5" /> : <LayoutGrid className="w-5 h-5" />}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY GRID WITH STAGGERED ANIMATION */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, y: -60 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onClick={() => setSelectedImage(item)}
                  className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 ${
                    viewMode === "masonry" ? "break-inside-avoid" : ""
                  } ${viewMode === "masonry" && (index % 4 === 0 || index % 4 === 3) ? "h-80" : "h-64"}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/90 via-[#11110F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span className="inline-block px-4 py-1.5 bg-[#A6FF57] text-[#11110F] text-xs font-bold rounded-full mb-3">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="text-white font-bold text-lg md:text-xl">{item.title}</h3>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <p className="text-[#666] text-xl">No images found in this category yet</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* LIGHTBOX WITH SMOOTH ENTER */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-[#11110F]/98 backdrop-blur-xl z-50 flex items-center justify-center p-6"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {currentIndex > 0 && (
              <motion.button
                whileHover={{ x: -10 }}
                onClick={(e) => { e.stopPropagation(); handlePrev() }}
                className="absolute left-6 p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </motion.button>
            )}

            {currentIndex < filteredItems.length - 1 && (
              <motion.button
                whileHover={{ x: 10 }}
                onClick={(e) => { e.stopPropagation(); handleNext() }}
                className="absolute right-6 p-4 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-all"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </motion.button>
            )}

            <motion.div
              layoutId={`image-${selectedImage.id}`}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={1400}
                height={900}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#11110F] to-transparent rounded-b-3xl"
              >
                <div className="p-8">
                  <span className="px-4 py-2 bg-[#A6FF57] text-[#11110F] font-bold rounded-full text-sm">
                    {selectedImage.category.toUpperCase()}
                  </span>
                  <h2 className="text-white text-3xl font-bold mt-4">{selectedImage.title}</h2>
                </div>
              </motion.div>
            </motion.div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white font-medium">
              {currentIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}