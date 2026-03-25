"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M${-380 - i * 5 * position} ${-189 + i * 33}C${-380 - i * 5 * position} ${
      -189 + i * 33
    } ${-312 - i * 5 * position} ${216 - i * 28} ${52 - i * 5 * position} ${
      54 - i * 22
    }C${290 - i * 5 * position} ${-94 + i * 15} ${" "}${452 - i * 5 * position} ${
      -300 + i * 45
    } ${664 - i * 5 * position} ${-385 + i * 49}`,
    color: `rgba(${Math.round(196 + i * 1.5)},${Math.round(107 + i * 1.2)},${Math.round(69 + i * 0.8)},${
      0.12 + i * 0.015
    })`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.015}
            initial={{ pathLength: 0.3, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 1, 0.5, 1],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 15,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BackgroundPaths({
  title = "Where Creativity, Business,\nand Community Meet",
  subtitle = "A collaborative hub for artists, entrepreneurs, and builders shaping Chattanooga's future.",
}: {
  title?: string
  subtitle?: string
}) {
  const words = title.split(" ")

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-espresso">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-clay/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <div className="w-4 h-px bg-clay/60" />
          <span className="text-clay/80 text-xs tracking-[0.25em] uppercase font-medium">
            Chattanooga, Tennessee
          </span>
          <div className="w-4 h-px bg-clay/60" />
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] tracking-tight mb-8">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[0.25em] last:mr-0">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: wordIndex * 0.1 + letterIndex * 0.03,
                    type: "spring",
                    stiffness: 150,
                    damping: 25,
                  }}
                  className={`inline-block ${word === "Creativity," || word === "Business," ? "italic text-clay" : ""}`}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-ivory/55 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/spaces"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-all duration-300 group"
            onClick={(e) => { e.preventDefault(); window.location.href = '/spaces' }}
          >
            Explore the Spaces
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="/community"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/25 text-ivory text-sm font-medium rounded-sm hover:bg-ivory/10 transition-all duration-300"
          >
            Join the Community
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-wrap justify-center gap-12 mt-20 pt-10 border-t border-ivory/10"
        >
          {[
            { value: '3+', label: 'Facilities' },
            { value: '5', label: 'Program Types' },
            { value: 'CHT', label: 'Chattanooga, TN' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl text-ivory font-semibold">{s.value}</div>
              <div className="text-ivory/35 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
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
