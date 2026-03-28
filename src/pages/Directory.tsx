import { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Building2, Star, MapPin } from 'lucide-react'
import { businesses } from '@/data/businesses'
import type { BusinessListing } from '@/types/directory'
import SearchFilter from '@/components/directory/SearchFilter'
import BusinessGrid from '@/components/directory/BusinessGrid'
import BusinessDetailModal from '@/components/directory/BusinessDetailModal'

export default function Directory() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null)

  const selectedListing = useMemo<BusinessListing | null>(
    () => businesses.find((b) => b.id === selectedListingId) ?? null,
    [selectedListingId]
  )

  const filtered = useMemo(() => {
    let result = [...businesses]

    // Filter by category
    if (activeCategory !== 'All') {
      result = result.filter((b) => b.category === activeCategory)
    }

    // Filter by search
    if (search.trim()) {
      const q = search.toLowerCase().trim()
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.tags.some((t) => t.toLowerCase().includes(q)) ||
          b.category.toLowerCase().includes(q)
      )
    }

    // Sort
    if (sortBy === 'featured') {
      result = [
        ...result.filter((b) => b.featured || b.badge === 'Premium'),
        ...result.filter((b) => !b.featured && b.badge !== 'Premium'),
      ]
    } else if (sortBy === 'az') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [search, activeCategory, sortBy])

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' })

  const bottomRef = useRef(null)
  const bottomInView = useInView(bottomRef, { once: true, margin: '-80px' })

  return (
    <>
      {/* Hero */}
      <section className="bg-espresso py-28 overflow-hidden relative">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FAF7F2 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-clay/15 border border-clay/20 mb-6">
              <MapPin size={11} className="text-clay" />
              <span className="text-clay text-[10px] tracking-[0.22em] uppercase font-medium">
                Chattanooga, TN
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-none mb-6">
              Discover{' '}
              <span className="italic text-clay">Chattanooga</span>
            </h1>

            <p className="text-ivory/55 text-lg font-light leading-relaxed max-w-xl">
              The local business directory built for the Collective Chattanooga community.
              Find the makers, creatives, and entrepreneurs shaping this city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="border-b"
        style={{ backgroundColor: 'var(--color-card-alt)', borderColor: 'var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 12 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-6 py-4"
          >
            {[
              { icon: Building2, label: '55+ Local Businesses' },
              { icon: Star, label: '8 Categories' },
              { icon: MapPin, label: 'Growing Weekly' },
            ].map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="hidden sm:block w-px h-3 bg-charcoal/15 mr-2" />
                )}
                <Icon size={13} className="text-clay/70" />
                <span className="text-xs font-medium text-charcoal/60 tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <SearchFilter
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        activeSortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Grid */}
      <section className="py-16 bg-ivory min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Result count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm font-light text-charcoal/50">
              {filtered.length === businesses.length
                ? `${businesses.length} businesses`
                : `${filtered.length} of ${businesses.length} businesses`}
            </p>
            {(search || activeCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearch('')
                  setActiveCategory('All')
                  setSortBy('default')
                }}
                className="text-xs text-clay font-medium hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>

          <BusinessGrid
            listings={filtered}
            onSelectListing={(id) => setSelectedListingId(id)}
          />
        </div>
      </section>

      {/* List Your Business CTA band */}
      <section className="bg-clay py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FAF7F2 1px, transparent 0)', backgroundSize: '28px 28px' }} />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            ref={bottomRef}
            initial={{ opacity: 0, y: 20 }}
            animate={bottomInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div>
              <span className="text-ivory/60 text-xs tracking-[0.22em] uppercase font-medium block mb-3">
                Join the Directory
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-ivory leading-tight">
                List Your Business
              </h2>
              <p className="text-ivory/65 font-light mt-3 max-w-md leading-relaxed text-sm">
                Get your business in front of Chattanooga's creative and entrepreneurial community.
                Basic listings are free. Featured and Premium placements available.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="mailto:hello@collectivechattanooga.com?subject=Business Directory Listing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ivory text-espresso text-sm font-medium rounded-sm hover:bg-cream transition-colors"
              >
                Get Listed Free
                <ArrowRight size={14} />
              </a>
              <a
                href="mailto:hello@collectivechattanooga.com?subject=Premium Directory Placement"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-ivory/35 text-ivory text-sm font-medium rounded-sm hover:border-ivory/70 transition-colors"
              >
                Featured Placement
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detail modal */}
      <BusinessDetailModal
        listing={selectedListing}
        onClose={() => setSelectedListingId(null)}
      />
    </>
  )
}
