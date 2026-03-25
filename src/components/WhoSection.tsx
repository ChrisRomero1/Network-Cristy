import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brush, TrendingUp, Zap, Monitor, Store, Heart, Star, Users } from 'lucide-react'

const audiences = [
  { icon: Brush, label: 'Artists', desc: 'Studio space, gallery exposure, and a creative community that gets it.' },
  { icon: TrendingUp, label: 'Entrepreneurs', desc: 'Incubator programming, mentorship, and a network that accelerates growth.' },
  { icon: Zap, label: 'Startups', desc: 'Flexible workspace, resources, and momentum when you\'re moving fast.' },
  { icon: Monitor, label: 'Freelancers', desc: 'A professional base camp with community and focus built in.' },
  { icon: Store, label: 'Small Businesses', desc: 'Meeting space, collaborative support, and a Chattanooga community behind you.' },
  { icon: Heart, label: 'Community Builders', desc: 'Programming, space, and reach to grow the ideas that matter most.' },
  { icon: Star, label: 'Event Hosts', desc: 'Beautiful, flexible venues for every kind of gathering that deserves to be special.' },
  { icon: Users, label: 'Collaborators', desc: 'A place where cross-discipline connection happens naturally.' },
]

export default function WhoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-espresso" id="community">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">
            Who It's For
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-4 leading-tight">
            Built for People Who{' '}
            <span className="italic text-clay">Make Things Happen.</span>
          </h2>
          <p className="text-ivory/50 max-w-xl mx-auto font-light">
            This isn't a generic office building. It's a curated environment for people who create, build, connect, and move culture forward.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group p-6 border border-ivory/8 rounded-sm hover:border-clay/40 hover:bg-ivory/5 transition-all duration-300 cursor-default"
            >
              <div className="inline-flex p-2.5 rounded-sm bg-ivory/8 text-clay mb-4 group-hover:bg-clay/20 transition-colors">
                <a.icon size={18} />
              </div>
              <h3 className="font-display text-lg text-ivory mb-2">{a.label}</h3>
              <p className="text-ivory/45 text-sm leading-relaxed font-light">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
