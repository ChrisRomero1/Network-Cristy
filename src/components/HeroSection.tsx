import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

function AnimatedPaths() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M-100 600 Q200 400 400 500 Q600 600 800 450 Q1000 300 1200 400 Q1400 500 1600 350"
        stroke="rgba(196,132,90,0.15)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
      />
      <motion.path
        d="M-100 700 Q300 550 500 620 Q700 690 900 580 Q1100 470 1300 550 Q1450 610 1600 500"
        stroke="rgba(138,158,126,0.12)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeOut", delay: 0.8 }}
      />
      <motion.path
        d="M200 -50 Q350 200 300 400 Q250 600 400 750 Q550 900 600 950"
        stroke="rgba(176,125,78,0.10)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 1 }}
      />
      <motion.path
        d="M1200 -50 Q1100 150 1150 350 Q1200 550 1100 700 Q1000 850 1050 950"
        stroke="rgba(196,107,69,0.08)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.2, ease: "easeOut", delay: 0.6 }}
      />
      <motion.ellipse
        cx="720"
        cy="500"
        rx="600"
        ry="400"
        stroke="rgba(196,132,90,0.06)"
        strokeWidth="80"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </svg>
  )
}

const stats = [
  { value: '3', label: 'Facilities' },
  { value: '5+', label: 'Program Types' },
  { value: 'CHT', label: 'Chattanooga, TN' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-[#221a14] to-[#1a1410]" />

      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      {/* Ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-clay/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage/5 rounded-full blur-[100px]" />

      {/* Animated SVG paths */}
      <AnimatedPaths />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <MapPin size={14} className="text-clay" />
          <span className="text-clay/80 text-sm font-medium tracking-[0.2em] uppercase">
            Chattanooga, Tennessee
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Space to Create.
          <br />
          <span className="italic text-clay">Room to Grow.</span>
          <br />
          Community to Belong.
        </motion.h1>

        <motion.p
          className="text-ivory/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          A multi-space destination for artists, founders, and community builders —
          where creativity meets ambition at the heart of Chattanooga.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-ivory font-medium text-sm tracking-wide rounded-sm hover:bg-terracotta transition-all duration-300 group"
          >
            Inquire About Space
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 border border-ivory/25 text-ivory font-medium text-sm tracking-wide rounded-sm hover:bg-ivory/10 transition-all duration-300"
          >
            Explore the Vision
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-12 border-t border-ivory/10 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl text-ivory font-semibold">{s.value}</div>
              <div className="text-ivory/40 text-xs tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-ivory/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-clay/60 to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
