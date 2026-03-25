import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const pillars = [
  { number: '01', title: 'Collaboration', desc: 'When creators and builders share space, unexpected connections spark projects that change trajectories.' },
  { number: '02', title: 'Momentum', desc: 'Being surrounded by people in motion creates energy. This place is built to keep you moving.' },
  { number: '03', title: 'Visibility', desc: 'Artists get seen. Founders get introductions. Ideas get heard. This community amplifies your work.' },
  { number: '04', title: 'Belonging', desc: 'Chattanooga is home, and this is the place where its most creative and ambitious people find each other.' },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section className="py-32 bg-cream relative overflow-hidden" ref={containerRef}>
      {/* Parallax bg accent */}
      <motion.div
        style={{ y }}
        className="absolute right-0 top-1/4 w-96 h-96 bg-clay/8 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">
              The Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 mb-8 leading-tight">
              It's Not Just Space.{' '}
              <span className="italic">It's Energy.</span>
            </h2>
            <p className="text-charcoal/65 text-lg leading-relaxed mb-6 font-light">
              The right environment changes everything. When you're surrounded by people who are
              building, creating, and pushing forward — you move differently.
            </p>
            <p className="text-charcoal/55 leading-relaxed font-light">
              We've designed every element of this place to create momentum: the layout, the
              programming, the community mix, the culture. This is the center of something
              important in Chattanooga, and you're invited to be part of it.
            </p>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-colors"
              >
                Get Early Access
              </a>
            </div>
          </motion.div>

          <div className="space-y-0">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex gap-6 py-8 border-b border-charcoal/10 last:border-0 group cursor-default"
              >
                <span className="font-display text-clay/40 text-2xl font-semibold w-10 flex-shrink-0 group-hover:text-clay transition-colors">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-display text-xl text-espresso mb-2 group-hover:text-clay transition-colors">{p.title}</h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed font-light">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
