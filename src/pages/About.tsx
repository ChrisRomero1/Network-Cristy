import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function PageHero({ label, title, subtitle }: { label: string; title: React.ReactNode; subtitle: string }) {
  return (
    <section className="pt-36 pb-20 bg-espresso relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(196,132,90,0.3) 0%, transparent 65%)' }} />
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">{label}</span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6">{title}</h1>
          <p className="text-ivory/55 text-xl font-light max-w-2xl leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}

const values = [
  { title: 'Community First', desc: 'Every decision we make prioritizes the people who work, create, and gather here. The community is the product.' },
  { title: 'Creative Ambition', desc: 'We believe the most interesting things happen when artists and entrepreneurs share space. We\'re designed around that collision.' },
  { title: 'Local Roots', desc: 'Chattanooga isn\'t a backdrop — it\'s the reason. We\'re building for this city, its culture, and its future.' },
  { title: 'Inclusive Growth', desc: 'From first-year artists to scaling startups, our facilities are designed to serve every stage of the creative and entrepreneurial journey.' },
]

export default function About() {
  const missionRef = useRef(null)
  const valuesRef = useRef(null)
  const impactRef = useRef(null)
  const missionInView = useInView(missionRef, { once: true, margin: '-80px' })
  const valuesInView = useInView(valuesRef, { once: true, margin: '-80px' })
  const impactInView = useInView(impactRef, { once: true, margin: '-80px' })

  return (
    <>
      <PageHero
        label="About Us"
        title={<>More Than Space.<br /><span className="italic text-clay">A Movement.</span></>}
        subtitle="We're building a platform where Chattanooga's most creative and ambitious people come to do their best work — and find the community that makes it possible."
      />

      {/* Mission */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div ref={missionRef} initial={{ opacity: 0, x: -30 }} animate={missionInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">Our Mission</span>
              <h2 className="font-display text-4xl text-espresso dark:text-ivory mb-6 leading-tight">Give Every Idea the <span className="italic">Space It Deserves.</span></h2>
              <p className="text-charcoal/65 leading-relaxed mb-5 font-light">
                We started with a simple belief: Chattanooga has incredible talent — artists, founders, makers, builders — who are often working in isolation. We wanted to change that.
              </p>
              <p className="text-charcoal/55 leading-relaxed mb-5 font-light text-sm">
                By creating connected, purpose-built facilities across the city, we're building the infrastructure for a thriving creative economy. Each space is different in character, but all share a commitment to community, growth, and craft.
              </p>
              <p className="text-charcoal/55 leading-relaxed font-light text-sm">
                The buildings are being renovated. The community is already alive.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={missionInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="h-80 rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80" alt="Mission" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div ref={valuesRef} className="mb-14" initial={{ opacity: 0, y: 20 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">What We Stand For</span>
            <h2 className="font-display text-4xl text-espresso dark:text-ivory leading-tight">Our Values</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 25 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 bg-ivory border border-charcoal/5 rounded-sm" style={{ backgroundColor: 'var(--color-card)' }}>
                <div className="w-8 h-px bg-clay mb-5" />
                <h3 className="font-display text-xl text-espresso dark:text-ivory mb-3">{v.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-28 bg-espresso">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={impactRef} className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={impactInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">Economic Impact</span>
              <h2 className="font-display text-4xl text-ivory mb-6 leading-tight">Building Chattanooga's <span className="italic text-clay">Creative Economy.</span></h2>
              <p className="text-ivory/55 leading-relaxed font-light mb-5">
                When artists and entrepreneurs have the right support, they don't just succeed individually — they catalyze entire communities. Local businesses grow. New ones launch. Culture gets richer.
              </p>
              <p className="text-ivory/45 leading-relaxed font-light text-sm">
                We're not just renting space. We're investing in Chattanooga's creative infrastructure and the long-term economic vitality that comes with a thriving maker and founder community.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={impactInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }} className="grid grid-cols-2 gap-4">
              {[
                { value: '3+', label: 'Facilities' },
                { value: '5', label: 'Program Types' },
                { value: '∞', label: 'Connections' },
                { value: 'CHT', label: 'Chattanooga' },
              ].map((s, i) => (
                <div key={i} className="p-6 border border-ivory/10 rounded-sm text-center">
                  <div className="font-display text-4xl text-ivory mb-2">{s.value}</div>
                  <div className="text-ivory/35 text-xs tracking-widest uppercase">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-espresso dark:text-ivory mb-4">Ready to Be Part of This?</h2>
          <p className="text-charcoal/55 font-light mb-8">Inquire about space, membership, or how you can get involved.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-colors group">
            Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}
