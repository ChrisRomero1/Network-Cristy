import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Palette, Users, Calendar, Lightbulb, Globe, Coffee } from 'lucide-react'

const offerings = [
  {
    icon: Users,
    title: 'Coworking & Collaboration',
    desc: 'Flexible desks, private offices, and open collaborative areas for teams, freelancers, and remote workers who need more than a coffee shop.',
    accent: 'bg-clay/10 text-clay',
  },
  {
    icon: Palette,
    title: 'Artist Studios',
    desc: 'Dedicated creative space for painters, sculptors, photographers, and makers. Light-filled, inspiring, and built for serious work.',
    accent: 'bg-sage/15 text-sage',
  },
  {
    icon: Calendar,
    title: 'Event Space',
    desc: 'Versatile, beautiful venues for workshops, launches, pop-ups, community gatherings, and private events that deserve a premium setting.',
    accent: 'bg-bronze/15 text-bronze',
  },
  {
    icon: Lightbulb,
    title: 'Business Incubator',
    desc: 'Structured support, mentorship access, and programming for early-stage founders and small businesses ready to scale.',
    accent: 'bg-terracotta/10 text-terracotta',
  },
  {
    icon: Globe,
    title: 'Community Programming',
    desc: 'Regular events, workshops, networking sessions, and cultural programming that keep the community connected and growing.',
    accent: 'bg-olive/15 text-olive',
  },
  {
    icon: Coffee,
    title: 'Flexible Work Areas',
    desc: 'Drop-in zones, meeting nooks, and lounges designed for heads-down focus or casual collaboration — whenever you need it.',
    accent: 'bg-espresso/10 text-espresso',
  },
]

export default function OfferingsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-cream" id="spaces">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 mb-4 leading-tight">
            One Destination.{' '}
            <span className="italic">Many Possibilities.</span>
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto font-light">
            Whether you're creating, building, or connecting — we have a space designed for exactly that.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-ivory p-8 rounded-sm border border-charcoal/5 hover:border-clay/30 hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className={`inline-flex p-3 rounded-sm mb-6 ${item.accent}`}>
                <item.icon size={20} />
              </div>
              <h3 className="font-display text-xl text-espresso mb-3 group-hover:text-clay transition-colors">
                {item.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
