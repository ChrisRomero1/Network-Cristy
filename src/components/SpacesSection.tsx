import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const spaces = [
  {
    label: 'The Art House',
    tag: 'Artist Collective',
    desc: 'Our creative-focused facility is built around visual artists, makers, and cultural creatives. With dedicated studio spaces, gallery walls, and collaborative zones — this is where Chattanooga\'s art scene finds its home base.',
    features: ['Private artist studios', 'Gallery & exhibition space', 'Ceramics & fabrication area', 'Natural light throughout'],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=900&q=80',
    accent: 'text-clay',
    bg: 'bg-[#f0e8df]',
  },
  {
    label: 'The Hub',
    tag: 'Coworking + Incubator',
    desc: 'Our flagship coworking and business incubator space designed for founders, freelancers, startups, and small businesses. Open, energetic, and built for momentum.',
    features: ['Flexible hot desks', 'Private offices', 'Conference rooms', 'Incubator programming'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80',
    accent: 'text-bronze',
    bg: 'bg-[#ede7dd]',
  },
  {
    label: 'The Venue',
    tag: 'Events + Community',
    desc: 'A premium multi-purpose event facility built for workshops, showcases, launches, networking nights, and community gatherings of all kinds.',
    features: ['Main event hall', 'Breakout rooms', 'AV + staging ready', 'Flexible configuration'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    accent: 'text-sage',
    bg: 'bg-[#e8ede4]',
  },
]

export default function SpacesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-ivory" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">
            Our Facilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 leading-tight">
            Three Spaces.{' '}
            <span className="italic">One Vision.</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {spaces.map((space, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`group grid lg:grid-cols-2 rounded-sm overflow-hidden ${space.bg}`}
            >
              <div className={`p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className={`text-xs tracking-[0.2em] uppercase font-medium mb-3 ${space.accent}`}>
                  {space.tag}
                </span>
                <h3 className="font-display text-3xl text-espresso mb-4">{space.label}</h3>
                <p className="text-charcoal/65 leading-relaxed mb-6 font-light">{space.desc}</p>
                <ul className="space-y-2 mb-8">
                  {space.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-charcoal/60">
                      <div className={`w-1 h-1 rounded-full ${space.accent.replace('text-', 'bg-')}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-medium ${space.accent} hover:gap-3 transition-all`}
                >
                  Inquire About This Space <ArrowRight size={14} />
                </a>
              </div>
              <div className={`h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={space.image}
                  alt={space.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
