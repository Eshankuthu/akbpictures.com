"use client";

import { motion } from "framer-motion";
import { FiAward, FiFilm, FiUsers, FiTrendingUp } from "react-icons/fi";

const stats = [
  { icon: FiFilm, value: "3", label: "Films Produced" },
  { icon: FiAward, value: "10+", label: "Awards Won" },
  { icon: FiUsers, value: "50+", label: "Team Members" },
  { icon: FiTrendingUp, value: "8+", label: "Years Experience" },
];

const specializations = [
  {
    title: "Film Production",
    items: ["Feature Films", "Documentary Films", "Short Movies", "Music Videos"],
  },
  {
    title: "Visual Services",
    items: ["Visual Effects (VFX)", "Motion Graphics", "Graphic Design"],
  },
  {
    title: "Full Production Cycle",
    items: ["Pre-Production", "Production", "Post-Production"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-amber-500">A.K. Brother Pictures</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6">
            <strong className="text-white">A.K. Brother Pictures Pvt. Ltd.</strong> is a Kathmandu-based movie production house
            founded in 2025 by <span className="text-amber-400">Amit Shrestha</span> and{" "}
            <span className="text-amber-400">Kedar Shrestha</span>, who share a deep passion
            for storytelling and creating compelling narratives.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Establishing itself as a versatile and dedicated force in Nepal&apos;s film industry, we offer
            full services covering pre-production, production, and post-production—handling projects
            for both national and international platforms.
          </p>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What We Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specializations.map((specialization, index) => (
              <motion.div
                key={specialization.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-8 bg-neutral-900 rounded-lg border border-neutral-800 hover:border-amber-500/50 transition-all"
              >
                <h4 className="text-2xl font-bold text-white mb-6">{specialization.title}</h4>
                <ul className="space-y-3">
                  {specialization.items.map((item, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start">
                      <span className="text-amber-500 mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-gray-300 italic leading-relaxed">
            &ldquo;Our mission is to create timeless stories that move, inspire, and
            connect audiences across the globe. Every frame we capture is a
            brushstroke in our cinematic canvas.&rdquo;
          </blockquote>
          <p className="mt-6 text-amber-500 font-semibold">— Amit Shrestha & Kedar Shrestha</p>
          <p className="text-gray-400 text-sm mt-2">Founders, A.K. Brother Pictures Pvt. Ltd.</p>
        </motion.div>
      </div>
    </section>
  );
}
