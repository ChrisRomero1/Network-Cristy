import { useRef } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { CATEGORIES } from '@/data/businesses'

interface SearchFilterProps {
  search: string
  onSearch: (v: string) => void
  activeCategory: string
  onCategoryChange: (c: string) => void
  activeSortBy?: string
  onSortChange?: (v: string) => void
}

const ALL_CATEGORIES = ['All', ...CATEGORIES]

const SORT_OPTIONS = [
  { value: 'default', label: 'All Listings' },
  { value: 'featured', label: 'Featured First' },
  { value: 'az', label: 'A–Z' },
]

export default function SearchFilter({
  search,
  onSearch,
  activeCategory,
  onCategoryChange,
  activeSortBy = 'default',
  onSortChange,
}: SearchFilterProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="sticky top-16 z-30 border-b"
      style={{
        backgroundColor: 'var(--color-nav-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Search + Sort row */}
        <div className="flex items-center gap-3 py-4">
          {/* Search input */}
          <div className="relative flex-1 max-w-md">
            <Search
              size={15}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/35 pointer-events-none"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search businesses..."
              className="w-full pl-9 pr-4 py-2.5 rounded-sm text-sm font-light outline-none transition-all duration-200 focus:ring-1 focus:ring-clay/40"
              style={{
                backgroundColor: 'var(--color-card-alt)',
                color: 'var(--color-text)',
                border: '1px solid var(--color-border)',
              }}
            />
          </div>

          {/* Sort dropdown */}
          {onSortChange && (
            <div className="relative shrink-0">
              <select
                value={activeSortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2.5 rounded-sm text-sm font-light outline-none transition-all duration-200 focus:ring-1 focus:ring-clay/40 cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-card-alt)',
                  color: 'var(--color-text)',
                  border: '1px solid var(--color-border)',
                }}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={13}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal/40"
              />
            </div>
          )}
        </div>

        {/* Category pills */}
        <div
          ref={scrollRef}
          className="flex gap-2 pb-3 overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ALL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`shrink-0 px-3.5 py-1.5 rounded-sm text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-espresso text-ivory'
                    : 'text-charcoal/60 hover:text-espresso hover:border-clay/30'
                }`}
                style={
                  !isActive
                    ? {
                        backgroundColor: 'var(--color-card-alt)',
                        border: '1px solid var(--color-border)',
                      }
                    : {}
                }
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
