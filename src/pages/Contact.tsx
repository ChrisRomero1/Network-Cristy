import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Mail, Globe, Share2, Link2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="pt-36 pb-20 bg-espresso relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(ellipse at 60% 40%, rgba(196,132,90,0.3) 0%, transparent 65%)' }} />
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">Get in Touch</span>
            <h1 className="font-display text-5xl md:text-6xl text-ivory leading-tight mb-6">Let's Build<br /><span className="italic text-clay">Something Together.</span></h1>
            <p className="text-ivory/55 text-xl font-light max-w-2xl leading-relaxed">Whether you want a studio, desk, event space, or just to stay in the loop — we'd love to hear from you.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-ivory" ref={ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              {submitted ? (
                <div className="p-12 bg-cream rounded-sm border border-charcoal/5 text-center">
                  <div className="w-10 h-10 rounded-full bg-clay/15 flex items-center justify-center mx-auto mb-4">
                    <span className="text-clay text-xl">✓</span>
                  </div>
                  <h3 className="font-display text-2xl text-espresso dark:text-ivory mb-3">Message Received</h3>
                  <p className="text-charcoal/60 font-light">We'll be in touch soon. Thank you for your interest in Collective.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-charcoal/50 dark:text-ivory/50 mb-2">Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-cream border border-charcoal/10 text-charcoal text-sm focus:outline-none focus:border-clay/50 rounded-sm transition-colors" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest uppercase text-charcoal/50 dark:text-ivory/50 mb-2">Email</label>
                      <input required type="email" className="w-full px-4 py-3 bg-cream border border-charcoal/10 text-charcoal text-sm focus:outline-none focus:border-clay/50 rounded-sm transition-colors" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-charcoal/50 dark:text-ivory/50 mb-2">I'm Interested In</label>
                    <select className="w-full px-4 py-3 bg-cream border border-charcoal/10 text-charcoal text-sm focus:outline-none focus:border-clay/50 rounded-sm transition-colors appearance-none">
                      <option value="">Select an option</option>
                      <option value="space">Renting a Space / Studio</option>
                      <option value="cowork">Coworking Membership</option>
                      <option value="event">Hosting an Event</option>
                      <option value="incubator">Incubator Program</option>
                      <option value="community">General Membership</option>
                      <option value="updates">Just Getting Updates</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-charcoal/50 dark:text-ivory/50 mb-2">Message</label>
                    <textarea required rows={5} className="w-full px-4 py-3 bg-cream border border-charcoal/10 text-charcoal text-sm focus:outline-none focus:border-clay/50 rounded-sm transition-colors resize-none" placeholder="Tell us a bit about yourself and what you're looking for..." />
                  </div>
                  <button type="submit" className="px-8 py-4 bg-clay text-ivory text-sm font-medium rounded-sm hover:bg-terracotta transition-colors">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl text-espresso dark:text-ivory mb-4">Contact</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin size={15} className="text-clay mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-charcoal font-medium">Location</div>
                        <div className="text-sm text-charcoal/55 font-light">Chattanooga, Tennessee</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={15} className="text-clay mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-charcoal font-medium">Email</div>
                        <a href="mailto:hello@collective.com" className="text-sm text-clay hover:underline font-light">hello@collective.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl text-espresso dark:text-ivory mb-4">Follow Along</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-9 h-9 rounded-sm border border-charcoal/15 flex items-center justify-center text-charcoal/40 hover:text-clay hover:border-clay/30 transition-colors"><Globe size={15} /></a>
                    <a href="#" className="w-9 h-9 rounded-sm border border-charcoal/15 flex items-center justify-center text-charcoal/40 hover:text-clay hover:border-clay/30 transition-colors"><Share2 size={15} /></a>
                    <a href="#" className="w-9 h-9 rounded-sm border border-charcoal/15 flex items-center justify-center text-charcoal/40 hover:text-clay hover:border-clay/30 transition-colors"><Link2 size={15} /></a>
                  </div>
                </div>

                <div className="p-6 bg-cream rounded-sm border border-charcoal/5">
                  <div className="text-xs tracking-widest uppercase text-charcoal/40 mb-2">Current Status</div>
                  <div className="font-display text-lg text-espresso dark:text-ivory mb-1">Under Development</div>
                  <p className="text-charcoal/55 text-sm font-light">Our facilities are currently being renovated. Reach out now to secure early access and get updates on our opening timeline.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
