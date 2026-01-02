"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiPlay, FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const galleryImages = [
  { id: 7, src: "/images/viral-gorkhe-7.jpeg", alt: "Viral Gorkhe Scene 7" },
  { id: 6, src: "/images/viral-gorkhe-6.jpeg", alt: "Viral Gorkhe Scene 6" },
  { id: 5, src: "/images/viral-gorkhe-5.jpeg", alt: "Viral Gorkhe Scene 5" },
  { id: 4, src: "/images/viral-gorkhe-4.jpeg", alt: "Viral Gorkhe Scene 4" },
  { id: 3, src: "/images/viral-gorkhe-3.jpeg", alt: "Viral Gorkhe Scene 3" },
  { id: 2, src: "/images/viral-gorkhe-2.jpeg", alt: "Viral Gorkhe Scene 2" },
  { id: 1, src: "/images/viral-gorkhe-1.jpeg", alt: "Viral Gorkhe Scene 1" },
];

export default function ViralGorkhePage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/viral-gorkhe.png"
            alt="Viral Gorkhe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-6 md:px-12 lg:px-24 pb-12 md:pb-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <FiArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              
              <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
                Drama
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                Viral Gorkhe
              </h1>
              
              <div className="flex items-center gap-4 mb-6 text-gray-300">
                <span className="text-lg">2024</span>
                <span className="w-1 h-1 bg-amber-500 rounded-full" />
                <span className="text-lg">Dir. AKB Pictures</span>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                A simple villager from Gorkha battles doubts, rivalry and the harsh reality of social media in his quest to go viral.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.youtube.com/watch?v=sDiXd22yBhY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg flex items-center gap-2 transition-all transform hover:scale-105"
                >
                  <FiPlay className="w-5 h-5" />
                  Watch Trailer
                </a>
                <a
                  href="https://www.tiktok.com/@viral_gorkhey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all transform hover:scale-110"
                  aria-label="Follow on TikTok"
                >
                  <FaTiktok className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/viralgorkheyfilm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all transform hover:scale-110"
                  aria-label="Follow on Instagram"
                >
                  <FiInstagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Gallery
            </h2>
            <p className="text-gray-400 text-lg">
              Behind the scenes and stills from Viral Gorkhe
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Scene {image.id}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 text-white transition-all"
              aria-label="Close"
            >
              ×
            </button>
            <Image
              src={galleryImages.find((img) => img.id === selectedImage)?.src || ""}
              alt={galleryImages.find((img) => img.id === selectedImage)?.alt || ""}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg object-contain max-h-[90vh]"
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}

