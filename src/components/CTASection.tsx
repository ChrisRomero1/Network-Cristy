import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-40 bg-clay relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-espresso/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-ivory/70 text-xs tracking-[0.25em] uppercase font-medium mb-6 block">
            Be Part of Something Real
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6">
            The Space Is{' '}
            <span className="italic">Being Built.</span>
            <br />
            So Is the Community.
          </h2>
          <p className="text-ivory/70 text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Whether you want a studio, a desk, a venue, or simply to be part of what's coming —
            this is your moment to get in early.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:hello@collective.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ivory text-clay font-medium text-sm rounded-sm hover:bg-cream transition-colors group"
            >
              Inquire About Space
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:hello@collective.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-ivory/40 text-ivory font-medium text-sm rounded-sm hover:bg-ivory/10 transition-colors"
            >
              <Mail size={16} />
              Get Updates
            </a>
          </div>

          {/* Newsletter */}
          <div className="max-w-md mx-auto">
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-ivory/15 border border-ivory/25 text-ivory placeholder-ivory/40 text-sm focus:outline-none focus:border-ivory/60 rounded-l-sm"
              />
              <button className="px-5 py-3 bg-espresso text-ivory text-sm font-medium rounded-r-sm hover:bg-charcoal transition-colors">
                Join
              </button>
            </div>
            <p className="text-ivory/40 text-xs mt-3">No spam. Just updates when something worth knowing happens.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
