import { useRef, useState } from 'react'
import { motion, useInView, useAnimationFrame } from 'framer-motion'

const col1 = [
  { quote: "The moment I walked in, I knew this was where my work needed to be. The energy here is different.", name: "Jordan M.", role: "Visual Artist" },
  { quote: "I've been looking for a community like this in Chattanooga for years. Finally.", name: "Marcus T.", role: "Founder, Local Startup" },
  { quote: "My studio here is everything I imagined — great light, great neighbors, great energy.", name: "Alicia R.", role: "Painter & Printmaker" },
  { quote: "We hosted our first pop-up here. The venue is stunning and the team is incredibly supportive.", name: "Devon K.", role: "Creative Director" },
]

const col2 = [
  { quote: "The incubator programming changed how I think about my business. Couldn't have grown without this community.", name: "Sam B.", role: "Small Business Owner" },
  { quote: "There's nowhere else in Chattanooga where artists and entrepreneurs mix like this.", name: "Priya N.", role: "Freelance Designer" },
  { quote: "We held our product launch here and the response was incredible. The space made the moment.", name: "Tyler H.", role: "Tech Founder" },
  { quote: "I've met more potential collaborators here in one month than in a year of networking events elsewhere.", name: "Keisha W.", role: "Community Organizer" },
]

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="bg-ivory rounded-sm p-6 border border-charcoal/8 shadow-sm flex-shrink-0 w-full">
      <p className="text-charcoal/70 text-sm leading-relaxed mb-4 font-light italic">"{quote}"</p>
      <div>
        <div className="font-medium text-espresso text-sm">{name}</div>
        <div className="text-clay text-xs mt-0.5">{role}</div>
      </div>
    </div>
  )
}

function InfiniteColumn({ cards, direction = 1 }: { cards: typeof col1; direction?: number }) {
  const doubled = [...cards, ...cards]
  const [offset, setOffset] = useState(0)
  const speed = 0.4

  useAnimationFrame(() => {
    setOffset(prev => {
      const next = prev + speed * direction
      const cardHeight = 180
      const totalHeight = cards.length * cardHeight
      if (direction > 0 && next >= totalHeight) return 0
      if (direction < 0 && next <= -totalHeight) return 0
      return next
    })
  })

  return (
    <div className="overflow-hidden h-[600px] relative">
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-cream via-transparent to-cream" />
      <motion.div
        className="flex flex-col gap-4"
        style={{ y: -offset }}
      >
        {doubled.map((card, i) => (
          <TestimonialCard key={i} {...card} />
        ))}
      </motion.div>
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">
            Community Voices
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 mb-4 leading-tight">
            What People Will{' '}
            <span className="italic text-clay">Say About This Place.</span>
          </h2>
          <p className="text-charcoal/50 max-w-md mx-auto text-sm font-light">
            These are the kinds of stories we're building toward. Real voices will fill this space soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <InfiniteColumn cards={col1} direction={1} />
          <InfiniteColumn cards={col2} direction={-1} />
        </div>
      </div>
    </section>
  )
}
