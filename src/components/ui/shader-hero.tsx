"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, MapPin } from "lucide-react"

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)
    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }
    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  // suppress unused var warning
  void isActive

  const words = ["Where", "Creativity,", "Business,", "and", "Community", "Meet"]

  return (
    <div ref={containerRef} className="min-h-screen bg-espresso relative overflow-hidden">
      {/* Warm mesh gradient — espresso + clay + terracotta + sage + bronze */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#1A1410", "#C4845A", "#8B3E2F", "#2D4A3E", "#B07D4E"]}
        speed={0.25}
        {...{ backgroundColor: "#1A1410" } as any}
      />
      {/* Subtle second layer for depth */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-30"
        colors={["#1A1410", "#FAF7F2", "#C4845A", "#8A9E7E"]}
        speed={0.15}
        {...{ backgroundColor: "transparent" } as any}
      />

      {/* Dark vignette overlay so text reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-espresso/40 pointer-events-none" />

      {/* Location tag */}
      <div className="relative z-20 flex justify-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ivory/8 backdrop-blur-sm border border-ivory/12"
        >
          <MapPin size={11} className="text-clay" />
          <span className="text-clay/90 text-xs tracking-[0.2em] uppercase font-medium">
            Chattanooga, Tennessee
          </span>
        </motion.div>
      </div>

      {/* Hero text */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-[75vh] px-6 text-center">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] tracking-tight mb-6 max-w-5xl">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[0.25em] last:mr-0">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: wordIndex * 0.08 + letterIndex * 0.025,
                    type: "spring",
                    stiffness: 180,
                    damping: 22,
                  }}
                  className={`inline-block ${
                    word === "Creativity," || word === "Business,"
                      ? "italic text-clay"
                      : ""
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="text-ivory/55 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          A collaborative hub for artists, entrepreneurs, and builders shaping Chattanooga's future.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <Link
            to="/spaces"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-all duration-300 group"
          >
            Explore the Spaces
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/community"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/25 text-ivory text-sm font-medium rounded-sm hover:bg-ivory/10 transition-all duration-300"
          >
            Join the Community
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-10 mt-20 pt-10 border-t border-ivory/10 w-full max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {[
            { value: "3+", label: "Facilities" },
            { value: "5", label: "Program Types" },
            { value: "CHT", label: "Chattanooga, TN" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl text-ivory font-semibold">{s.value}</div>
              <div className="text-ivory/35 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-ivory/25 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-clay/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}
