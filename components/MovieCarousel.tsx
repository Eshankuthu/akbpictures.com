"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/data/movies";
import { FiChevronLeft, FiChevronRight, FiPlay, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";

interface MovieCarouselProps {
  movies: Movie[];
}

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  const currentMovie = movies[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={currentMovie.thumbnail}
              alt={currentMovie.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
                    {currentMovie.category}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white"
                >
                  {currentMovie.title}
                </motion.h1>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-center gap-4 mb-6 text-gray-300"
                >
                  {currentMovie.year && (
                    <>
                      <span className="text-lg">{currentMovie.year}</span>
                      <span className="w-1 h-1 bg-amber-500 rounded-full" />
                    </>
                  )}
                  <span className="text-lg">Dir. {currentMovie.director}</span>
                </motion.div>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                >
                  {currentMovie.description}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap gap-4 items-center"
                >
                  {currentMovie.trailerUrl && (
                    <a
                      href={currentMovie.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
                    >
                      <FiPlay className="w-5 h-5" />
                      Watch Trailer
                    </a>
                  )}
                  {currentMovie.title === "Viral Gorkhey" ? (
                    <Link
                      href="/viral-gorkhe"
                      className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all inline-block"
                    >
                      Learn More
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        const element = document.querySelector('#about');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/20 transition-all"
                    >
                      Learn More
                    </button>
                  )}
                  {(currentMovie.tiktokUrl || currentMovie.instagramUrl) && (
                    <div className="flex gap-3 ml-2">
                      {currentMovie.tiktokUrl && (
                        <a
                          href={currentMovie.tiktokUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all transform hover:scale-110"
                          aria-label="Follow on TikTok"
                        >
                          <FaTiktok className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {currentMovie.instagramUrl && (
                        <a
                          href={currentMovie.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all transform hover:scale-110"
                          aria-label="Follow on Instagram"
                        >
                          <FiInstagram className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all z-10"
        aria-label="Previous movie"
      >
        <FiChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all z-10"
        aria-label="Next movie"
      >
        <FiChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {movies.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-amber-500"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/60 text-sm z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}
