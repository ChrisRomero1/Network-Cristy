import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Mic2, ShoppingBag, Users, BookOpen, Rocket } from 'lucide-react'

const events = [
  { icon: BookOpen, label: 'Workshops', desc: 'Skill-building sessions led by local experts across creative and business disciplines.' },
  { icon: Users, label: 'Networking Nights', desc: 'Curated evening events that connect founders, creatives, and community members.' },
  { icon: Mic2, label: 'Showcases', desc: 'Platforms for artists, startups, and businesses to share work with a real audience.' },
  { icon: Calendar, label: 'Community Gatherings', desc: 'Open events that bring Chattanooga together around ideas, culture, and connection.' },
  { icon: ShoppingBag, label: 'Pop-Ups & Markets', desc: 'Temporary activations for makers, creators, and small businesses to sell and be seen.' },
  { icon: Rocket, label: 'Launches & Debuts', desc: 'The perfect venue to introduce a new product, project, brand, or idea to the world.' },
]

export default function EventsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-ivory" id="events">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">
              Events & Programming
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 mb-6 leading-tight">
              The Kind of Events{' '}
              <span className="italic">That Move People.</span>
            </h2>
            <p className="text-charcoal/60 leading-relaxed font-light mb-8">
              Our spaces are built to host gatherings that matter — from intimate workshops to
              large community events and everything in between.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-ivory text-sm font-medium rounded-sm hover:bg-charcoal transition-colors"
            >
              Host an Event
            </a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {events.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-6 bg-cream rounded-sm border border-charcoal/5 hover:border-clay/25 hover:shadow-md transition-all"
              >
                <div className="inline-flex p-2 rounded-sm bg-clay/10 text-clay mb-4">
                  <e.icon size={16} />
                </div>
                <h3 className="font-display text-lg text-espresso mb-2">{e.label}</h3>
                <p className="text-charcoal/55 text-sm leading-relaxed font-light">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
