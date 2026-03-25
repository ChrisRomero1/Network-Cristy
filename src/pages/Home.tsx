import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Palette, Users, Calendar, Lightbulb, Globe } from 'lucide-react'
import ShaderHero from '@/components/ui/shader-hero'
import { ScrollExpansionHero } from '@/components/ui/scroll-expansion-hero'
import { TestimonialsColumns } from '@/components/ui/testimonials-columns-1'

const offerings = [
  { icon: Users, title: 'Coworking Space', desc: 'Flexible desks and private offices for teams, freelancers, and remote workers.', accent: 'bg-clay/10 text-clay' },
  { icon: Palette, title: 'Artist Studios', desc: 'Dedicated creative space for painters, sculptors, photographers, and makers.', accent: 'bg-sage/15 text-sage' },
  { icon: Calendar, title: 'Event Venue', desc: 'Versatile venues for workshops, launches, pop-ups, and community gatherings.', accent: 'bg-bronze/15 text-bronze' },
  { icon: Lightbulb, title: 'Business Incubator', desc: 'Structured support, mentorship, and programming for early-stage founders.', accent: 'bg-terracotta/10 text-terracotta' },
  { icon: Globe, title: 'Creative Community', desc: 'Regular events, workshops, and networking that keep the community growing.', accent: 'bg-olive/15 text-olive' },
]

const audienceItems = [
  { label: 'Artists', desc: 'Studio space, gallery exposure, and a community that gets it.' },
  { label: 'Entrepreneurs', desc: 'Incubator programming, mentorship, and a network that accelerates growth.' },
  { label: 'Startups', desc: "Flexible workspace and momentum when you're moving fast." },
  { label: 'Freelancers', desc: 'A professional home base with community built in.' },
  { label: 'Community Builders', desc: 'Programming, space, and reach to grow what matters most.' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">{children}</span>
}

export default function Home() {
  const aboutRef = useRef(null)
  const offerRef = useRef(null)
  const spacesRef = useRef(null)
  const communityRef = useRef(null)
  const eventsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const ctaRef = useRef(null)

  const aboutInView = useInView(aboutRef, { once: true, margin: '-80px' })
  const offerInView = useInView(offerRef, { once: true, margin: '-80px' })
  const spacesInView = useInView(spacesRef, { once: true, margin: '-80px' })
  const communityInView = useInView(communityRef, { once: true, margin: '-80px' })
  const eventsInView = useInView(eventsRef, { once: true, margin: '-80px' })
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-80px' })
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* 1. HERO */}
      <ShaderHero />

      {/* 2. ABOUT PREVIEW */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={aboutRef}
              initial={{ opacity: 0, x: -30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>Our Vision</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-espresso dark:text-ivory mt-4 mb-6 leading-tight">
                More Than a Building.{' '}
                <span className="italic text-clay">A Platform.</span>
              </h2>
              <p className="text-charcoal/65 text-lg leading-relaxed mb-5 font-light">
                We're building something Chattanooga has never had — a connected network of spaces designed for people who are creating, building, and driving culture forward.
              </p>
              <p className="text-charcoal/55 leading-relaxed mb-10 font-light text-sm">
                Multiple facilities. One shared purpose: give ideas the space they need to become real.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-clay hover:gap-3 transition-all"
              >
                Our Full Story <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative grid grid-cols-2 gap-3"
            >
              <div className="space-y-3">
                <div className="h-52 overflow-hidden rounded-sm">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Workspace" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="h-32 overflow-hidden rounded-sm">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="Community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="h-32 overflow-hidden rounded-sm">
                  <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Studio" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="h-52 overflow-hidden rounded-sm">
                  <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" alt="Events" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={offerRef}
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={offerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>What We Offer</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-espresso dark:text-ivory mt-4 mb-4 leading-tight">
              One Destination. <span className="italic">Many Possibilities.</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                animate={offerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="group bg-ivory p-8 rounded-sm border border-charcoal/5 hover:border-clay/25 hover:shadow-lg transition-all duration-300 cursor-default"
                style={{ backgroundColor: 'var(--color-card)' }}
              >
                <div className={`inline-flex p-3 rounded-sm mb-5 ${item.accent}`}>
                  <item.icon size={18} />
                </div>
                <h3 className="font-display text-xl text-espresso dark:text-ivory mb-2 group-hover:text-clay transition-colors">{item.title}</h3>
                <p className="text-charcoal/55 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SPACES PREVIEW — Scroll Expansion */}
      <ScrollExpansionHero />

      {/* 4B. Spaces link */}
      <section className="py-16 bg-ivory" ref={spacesRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={spacesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 border rounded-sm p-8"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div>
              <SectionLabel>Our Facilities</SectionLabel>
              <h3 className="font-display text-2xl text-espresso dark:text-ivory mt-2">Three spaces. One vision.</h3>
              <p className="text-charcoal/55 text-sm mt-2 font-light">Art House, The Hub, and The Venue — each with a distinct purpose and energy.</p>
            </div>
            <Link
              to="/spaces"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-espresso text-ivory text-sm font-medium rounded-sm hover:bg-charcoal transition-colors group"
            >
              View All Spaces <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. COMMUNITY */}
      <section className="py-28 bg-espresso" ref={communityRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={communityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">Community</span>
            <h2 className="font-display text-4xl md:text-5xl text-ivory mt-4 mb-4 leading-tight">
              Built for People Who <span className="italic text-clay">Make Things Happen.</span>
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {audienceItems.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={communityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.09 }}
                className="p-5 border border-ivory/8 rounded-sm hover:border-clay/30 hover:bg-ivory/5 transition-all"
              >
                <h3 className="font-display text-base text-ivory mb-2">{a.label}</h3>
                <p className="text-ivory/40 text-xs leading-relaxed font-light">{a.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/community" className="inline-flex items-center gap-2 text-clay text-sm font-medium hover:gap-3 transition-all">
              Learn About Our Community <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. EVENTS PREVIEW */}
      <section className="py-28 bg-cream" ref={eventsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={eventsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <SectionLabel>Events & Programming</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl text-espresso dark:text-ivory mt-4 mb-6 leading-tight">
                Events That <span className="italic">Move People.</span>
              </h2>
              <p className="text-charcoal/60 leading-relaxed font-light mb-8">
                Workshops. Showcases. Networking nights. Pop-ups. Launch events. This is where Chattanooga gathers.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-ivory text-sm font-medium rounded-sm hover:bg-charcoal transition-colors group"
              >
                View Events <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={eventsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="grid grid-cols-2 gap-3"
            >
              {['Workshops', 'Networking Nights', 'Art Showcases', 'Pop-Ups & Markets', 'Launch Events', 'Community Meetups'].map((tag, i) => (
                <div key={i} className="p-4 bg-ivory border border-charcoal/6 rounded-sm" style={{ backgroundColor: 'var(--color-card)' }}>
                  <div className="w-1 h-1 rounded-full bg-clay mb-2" />
                  <span className="font-display text-sm text-espresso dark:text-ivory">{tag}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-28 bg-cream overflow-hidden" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionLabel>Community Voices</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-espresso dark:text-ivory mt-4 mb-3 leading-tight">
              What People Will <span className="italic text-clay">Say About This Place.</span>
            </h2>
            <p className="text-charcoal/45 text-sm max-w-sm mx-auto font-light">
              Real voices will fill this space soon. These are the stories we're building toward.
            </p>
          </motion.div>
          <TestimonialsColumns />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-36 bg-clay relative overflow-hidden" ref={ctaRef}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-terracotta/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-espresso/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-ivory/65 text-xs tracking-[0.25em] uppercase font-medium block mb-6">Join the Movement</span>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-6">
              Build, Create,<br />
              <span className="italic">and Grow Together.</span>
            </h2>
            <p className="text-ivory/65 text-lg max-w-lg mx-auto mb-12 font-light">
              The space is being built. The community is forming. This is your moment to get in early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-ivory text-clay font-medium text-sm rounded-sm hover:bg-cream transition-colors group"
              >
                Inquire About Space <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/35 text-ivory font-medium text-sm rounded-sm hover:bg-ivory/10 transition-colors"
              >
                Stay Connected
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
