import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Mic2, Calendar, ShoppingBag, Rocket } from 'lucide-react'

const categories = [
  { icon: BookOpen, label: 'Workshops', desc: 'Skill-building sessions led by local experts across creative and business disciplines.', color: 'text-clay' },
  { icon: Users, label: 'Networking Nights', desc: 'Curated evening events that connect founders, creatives, and community members.', color: 'text-bronze' },
  { icon: Mic2, label: 'Showcases', desc: 'Platforms for artists and startups to share work with a real, engaged audience.', color: 'text-sage' },
  { icon: Calendar, label: 'Community Gatherings', desc: 'Open events that bring Chattanooga together around ideas, culture, and connection.', color: 'text-terracotta' },
  { icon: ShoppingBag, label: 'Pop-Ups & Markets', desc: 'Temporary activations for makers, creators, and small businesses to sell and be seen.', color: 'text-olive' },
  { icon: Rocket, label: 'Launch Events', desc: 'The perfect venue to introduce a new product, project, brand, or idea to the world.', color: 'text-clay' },
]

export default function Events() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <section className="pt-36 pb-20 bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(196,132,90,0.3) 0%, transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">Events & Programming</span>
            <h1 className="font-display text-5xl md:text-6xl text-ivory leading-tight mb-6">Events That<br /><span className="italic text-clay">Move People.</span></h1>
            <p className="text-ivory/55 text-xl font-light max-w-2xl leading-relaxed">Our spaces are built for gatherings that matter — from intimate workshops to large community events and everything in between.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-ivory" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="group p-8 bg-cream border border-charcoal/5 rounded-sm hover:border-clay/20 hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-sm mb-5 ${c.color}`} style={{ backgroundColor: 'var(--color-card)' }}>
                  <c.icon size={18} />
                </div>
                <h3 className="font-display text-xl text-espresso dark:text-ivory mb-3 group-hover:text-clay transition-colors">{c.label}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-espresso">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-ivory mb-4">Want to Host an Event?</h2>
          <p className="text-ivory/55 font-light mb-8">Our venues are available for private bookings, corporate events, and community programming.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-colors group">
            Inquire About Hosting <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
