import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const spaces = [
  {
    label: 'The Art House',
    tag: 'Artist Collective',
    tagColor: 'text-clay',
    desc: "Our creative-focused facility designed around visual artists, makers, and cultural creatives. With dedicated studio spaces, gallery walls, and collaborative zones — this is where Chattanooga's art scene finds its home.",
    features: ['Private artist studios', 'Gallery & exhibition space', 'Ceramics & fabrication area', 'Natural light throughout', 'Communal critique space', 'Storage for large works'],
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=900&q=80',
    bg: 'bg-[#f2ebe3] dark:bg-[#221c14]',
  },
  {
    label: 'The Hub',
    tag: 'Coworking + Incubator',
    tagColor: 'text-bronze',
    desc: 'Our flagship coworking and business incubator designed for founders, freelancers, startups, and small businesses. Open, energetic, and built for momentum.',
    features: ['Flexible hot desks', 'Private offices', 'Conference rooms', 'Incubator programming', 'Mentorship access', 'Community events'],
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80',
    bg: 'bg-[#ede7dd] dark:bg-[#1e1812]',
  },
  {
    label: 'The Venue',
    tag: 'Events + Community',
    tagColor: 'text-sage',
    desc: 'A premium multi-purpose event facility for workshops, showcases, launches, networking nights, and community gatherings of all kinds.',
    features: ['Main event hall', 'Breakout rooms', 'AV + staging ready', 'Flexible configuration', 'Catering-ready kitchen', 'Private entrance'],
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    bg: 'bg-[#e8ede4] dark:bg-[#161e14]',
  },
]

export default function Spaces() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <section className="pt-36 pb-20 bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(196,132,90,0.3) 0%, transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">Our Facilities</span>
            <h1 className="font-display text-5xl md:text-6xl text-ivory leading-tight mb-6">Three Spaces.<br /><span className="italic text-clay">One Vision.</span></h1>
            <p className="text-ivory/55 text-xl font-light max-w-2xl leading-relaxed">Each facility serves a distinct purpose, but every space shares the same DNA: community, creativity, and ambition.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-ivory" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {spaces.map((space, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`group grid lg:grid-cols-2 rounded-sm overflow-hidden ${space.bg}`}
            >
              <div className={`p-10 lg:p-14 flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className={`text-xs tracking-[0.2em] uppercase font-medium mb-3 ${space.tagColor}`}>{space.tag}</span>
                <h2 className="font-display text-3xl text-espresso dark:text-ivory mb-4">{space.label}</h2>
                <p className="text-charcoal/65 leading-relaxed mb-6 font-light text-sm">{space.desc}</p>
                <ul className="space-y-2 mb-8">
                  {space.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-charcoal/60">
                      <Check size={12} className={space.tagColor} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`inline-flex items-center gap-2 text-sm font-medium ${space.tagColor} hover:gap-3 transition-all`}>
                  Inquire About This Space <ArrowRight size={14} />
                </Link>
              </div>
              <div className={`h-72 lg:h-auto overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={space.image} alt={space.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
