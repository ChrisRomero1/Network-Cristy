import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Brush, TrendingUp, Zap, Monitor, Store, Heart } from 'lucide-react'

const audiences = [
  { icon: Brush, label: 'Artists', color: 'text-clay bg-clay/10', desc: 'Private studios, gallery space, and a community that takes your work seriously.', benefits: ['Private studio access', 'Exhibition opportunities', 'Peer critique sessions', 'Cross-discipline mentorship'] },
  { icon: TrendingUp, label: 'Entrepreneurs', color: 'text-bronze bg-bronze/10', desc: 'Incubator programming, mentorship, and a network that opens doors.', benefits: ['Business coaching', 'Investor introductions', 'Workshops & programming', 'Coworking access'] },
  { icon: Zap, label: 'Startups', color: 'text-terracotta bg-terracotta/10', desc: "Flexible space and momentum when you're moving fast.", benefits: ['Hot desks & offices', 'Conference rooms', 'Community network', 'Event hosting'] },
  { icon: Monitor, label: 'Freelancers', color: 'text-sage bg-sage/10', desc: 'A professional home base with real community built in.', benefits: ['Daily drop-in access', 'Professional address', 'Community events', 'Collaboration opportunities'] },
  { icon: Store, label: 'Small Businesses', color: 'text-olive bg-olive/10', desc: 'Space, resources, and a Chattanooga community behind you.', benefits: ['Meeting space', 'Event venue access', 'Local business network', 'Growth programming'] },
  { icon: Heart, label: 'Community Builders', color: 'text-forest bg-forest/10', desc: 'Programming, space, and reach to grow what matters most.', benefits: ['Event hosting', 'Community programming', 'Outreach support', 'Collaborative space'] },
]

export default function Community() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <section className="pt-36 pb-20 bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(196,132,90,0.3) 0%, transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">Community</span>
            <h1 className="font-display text-5xl md:text-6xl text-ivory leading-tight mb-6">For People Who<br /><span className="italic text-clay">Make Things Happen.</span></h1>
            <p className="text-ivory/55 text-xl font-light max-w-2xl leading-relaxed">This isn't a generic office. It's a curated environment for people who create, build, and move culture forward.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-ivory" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 bg-cream border border-charcoal/5 rounded-sm hover:shadow-md transition-all">
                <div className={`inline-flex p-3 rounded-sm mb-5 ${a.color}`}>
                  <a.icon size={18} />
                </div>
                <h3 className="font-display text-xl text-espresso dark:text-ivory mb-2">{a.label}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light mb-5">{a.desc}</p>
                <ul className="space-y-1.5">
                  {a.benefits.map((b, bi) => (
                    <li key={bi} className="flex items-center gap-2 text-xs text-charcoal/50">
                      <div className="w-1 h-1 rounded-full bg-clay flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-clay">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-ivory mb-4">Ready to Find Your Community?</h2>
          <p className="text-ivory/65 font-light mb-8">Tell us who you are and what you're building. We'll find the right fit.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-ivory text-clay text-sm font-medium rounded-sm hover:bg-cream transition-colors group">
            Join the Community <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
