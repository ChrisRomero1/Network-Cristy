import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="inline-block mb-6">
              <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium border-b border-clay/40 pb-1">
                Our Vision
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-espresso leading-tight mb-8">
              More Than a Building.{' '}
              <span className="italic text-clay">A Platform.</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6 font-light">
              We're building something Chattanooga has never had — a connected network of spaces
              designed for people who are creating, building, and driving culture forward.
            </p>
            <p className="text-charcoal/60 leading-relaxed mb-10 font-light">
              Whether you're a painter who needs a studio, a founder who needs an incubator,
              a team that needs a meeting room, or a community that needs a gathering place —
              this is your home base. Multiple facilities, one shared purpose:
              to give ideas the space they need to become real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#spaces"
                className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-ivory text-sm font-medium rounded-sm hover:bg-charcoal transition-colors"
              >
                Explore Our Spaces
              </a>
              <a
                href="#community"
                className="inline-flex items-center gap-2 px-6 py-3 border border-charcoal/20 text-charcoal text-sm font-medium rounded-sm hover:bg-cream transition-colors"
              >
                Join the Community
              </a>
            </div>
          </motion.div>

          {/* Right - Image grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="h-56 bg-gradient-to-br from-clay/20 to-terracotta/20 rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
                    alt="Collaborative workspace"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="h-32 bg-gradient-to-br from-sage/20 to-olive/20 rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                    alt="Artist studio"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-3 mt-8">
                <div className="h-32 bg-gradient-to-br from-bronze/20 to-clay/20 rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                    alt="Community gathering"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="h-56 bg-gradient-to-br from-espresso/30 to-charcoal/20 rounded-sm overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80"
                    alt="Event space"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-clay/20 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-cream rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
