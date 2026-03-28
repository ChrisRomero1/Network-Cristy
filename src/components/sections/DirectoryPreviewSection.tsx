import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { featuredBusinesses } from '@/data/businesses'
import FeaturedBadge from '@/components/directory/FeaturedBadge'

const categoryGradients: Record<string, string> = {
  'Food & Dining': 'from-terracotta/20 to-clay/10',
  'Retail & Shopping': 'from-bronze/20 to-clay/10',
  'Health & Wellness': 'from-sage/25 to-olive/10',
  'Arts & Creative': 'from-clay/20 to-terracotta/10',
  'Professional Services': 'from-espresso/15 to-charcoal/10',
  'Tech & Innovation': 'from-charcoal/15 to-espresso/10',
  'Home & Living': 'from-bronze/15 to-sage/10',
  'Events & Entertainment': 'from-terracotta/15 to-bronze/10',
}

export default function DirectoryPreviewSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const preview = featuredBusinesses.slice(0, 3)

  return (
    <section className="py-28 bg-cream" id="directory-preview">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium block mb-4">
              Local Business Directory
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-espresso leading-tight">
              Explore{' '}
              <span className="italic">Chattanooga</span>
            </h2>
            <p className="text-charcoal/55 font-light leading-relaxed mt-4 max-w-md">
              Discover the local businesses, makers, and creatives building something worth
              knowing about in our city.
            </p>
          </div>

          <Link
            to="/directory"
            className="group inline-flex items-center gap-2 text-sm font-medium text-espresso border-b border-espresso/30 pb-0.5 hover:border-clay hover:text-clay transition-colors shrink-0 self-start md:self-end"
          >
            Browse All Businesses
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Preview cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preview.map((listing, i) => {
            const gradient = categoryGradients[listing.category] ?? 'from-clay/15 to-bronze/10'

            return (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex flex-col bg-ivory rounded-sm border border-clay/15 hover:border-clay/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Featured accent */}
                <div className="h-[2px] bg-gradient-to-r from-clay/60 via-bronze/40 to-transparent" />

                {/* Image / gradient block */}
                <div className={`h-40 bg-gradient-to-br ${gradient} relative flex items-center justify-center overflow-hidden`}>
                  {listing.image ? (
                    <img src={listing.image} alt={listing.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-display text-5xl text-espresso/15 select-none">
                      {listing.category.charAt(0)}
                    </span>
                  )}
                  {listing.badge && (
                    <div className="absolute top-3 right-3">
                      <FeaturedBadge badge={listing.badge} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <span className="text-clay text-[10px] tracking-[0.2em] uppercase font-medium mb-1.5">
                    {listing.category}
                  </span>
                  <h3 className="font-display text-xl text-espresso mb-1.5 leading-snug">
                    {listing.name}
                  </h3>
                  <div className="flex items-center gap-1 text-charcoal/45 text-xs mb-3">
                    <MapPin size={11} />
                    <span>{listing.city}</span>
                  </div>
                  <p className="text-charcoal/55 text-sm font-light leading-relaxed line-clamp-2 flex-1">
                    {listing.description}
                  </p>

                  {listing.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {listing.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-sm bg-cream text-charcoal/50 border border-charcoal/8 tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/directory"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-espresso text-ivory text-sm font-medium rounded-sm hover:bg-charcoal transition-colors"
          >
            Browse All Businesses
            <ArrowRight size={14} />
          </Link>
          <a
            href="mailto:hello@collectivechattanooga.com?subject=Directory Listing"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-charcoal/15 text-charcoal/70 text-sm font-medium rounded-sm hover:border-clay/30 hover:text-clay transition-colors"
          >
            List Your Business
          </a>
        </motion.div>
      </div>
    </section>
  )
}
