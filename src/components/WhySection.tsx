import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const differentiators = [
  {
    title: 'Where Art and Business Intersect',
    desc: 'Most spaces serve one world. We serve both — and we believe the collision of creative and entrepreneurial energy is exactly where the most interesting things happen.',
  },
  {
    title: 'Built for Chattanooga',
    desc: 'This isn\'t an import from another city. It\'s rooted here — designed for Chattanooga\'s culture, community, and growing creative class.',
  },
  {
    title: 'Community is the Product',
    desc: 'The desks and studios are the floor. The real value is the people next to you, the introductions you didn\'t expect, and the opportunities that emerge from proximity.',
  },
  {
    title: 'Multiple Spaces, One Network',
    desc: 'By operating multiple facilities under one roof of community, your membership and presence connects you to every corner of what we\'re building.',
  },
]

export default function WhySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-[#1e1814] relative overflow-hidden">
      {/* Background texture/accent */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 70% 50%, rgba(196,132,90,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">
            Why It Matters
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-4 leading-tight">
            This Is Not Just{' '}
            <span className="italic text-clay">Another Building.</span>
          </h2>
          <p className="text-ivory/45 max-w-xl mx-auto font-light">
            Chattanooga deserves a space that takes its creative and entrepreneurial energy seriously.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="p-8 border border-ivory/8 rounded-sm hover:border-clay/30 hover:bg-ivory/3 transition-all"
            >
              <div className="w-8 h-px bg-clay mb-6" />
              <h3 className="font-display text-xl text-ivory mb-3">{d.title}</h3>
              <p className="text-ivory/45 leading-relaxed text-sm font-light">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
