"use client"

import { useRef, useState } from "react"
import { useAnimationFrame } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  quote: string
  name: string
  role: string
  company?: string
}

const defaultTestimonials: Testimonial[] = [
  { quote: "The moment I walked in I knew this was where my studio needed to be. The energy here is unlike anything else in Chattanooga.", name: "Jordan M.", role: "Visual Artist" },
  { quote: "I've been looking for a community like this for years. Finally — artists and founders in the same room.", name: "Marcus T.", role: "Startup Founder" },
  { quote: "My studio here has everything I could want. Great light, great neighbors, great vibe.", name: "Alicia R.", role: "Painter & Printmaker" },
  { quote: "We hosted our first pop-up here and the venue made the whole experience. Couldn't have asked for a better setting.", name: "Devon K.", role: "Creative Director" },
  { quote: "The incubator programming completely changed how I think about scaling. This community opened doors I didn't know existed.", name: "Sam B.", role: "Small Business Owner" },
  { quote: "There's nowhere else in Chattanooga where disciplines collide like this. Best decision I made this year.", name: "Priya N.", role: "Freelance Designer" },
  { quote: "We held our product launch here and the response was incredible. The space made the moment feel real.", name: "Tyler H.", role: "Tech Founder" },
  { quote: "I've met more genuine collaborators in one month here than in a year of normal networking events.", name: "Keisha W.", role: "Community Organizer" },
  { quote: "As an artist, I always felt separate from the business world. This place changed that completely.", name: "Leo S.", role: "Sculptor" },
  { quote: "The workshops alone are worth it. World-class local knowledge in a room full of people who actually want to grow.", name: "Amara J.", role: "Brand Strategist" },
  { quote: "I love that it's not just coworking. There's real culture here. You feel it the second you walk through the door.", name: "Chris D.", role: "Photographer" },
  { quote: "Chattanooga needed this. A place that takes creative entrepreneurship seriously. This is it.", name: "Nina P.", role: "Ceramicist" },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-ivory rounded-sm p-6 border border-charcoal/8 shadow-sm w-full flex-shrink-0 mb-4" style={{ backgroundColor: 'var(--color-card)' }}>
      <div className="mb-4">
        {[1,2,3,4,5].map(i => (
          <span key={i} className="text-clay text-xs">★</span>
        ))}
      </div>
      <p className="text-charcoal/70 text-sm leading-relaxed mb-5 font-light italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-clay/20 flex items-center justify-center flex-shrink-0">
          <span className="text-clay text-xs font-medium">{testimonial.name[0]}</span>
        </div>
        <div>
          <div className="font-medium text-espresso dark:text-ivory text-sm">{testimonial.name}</div>
          <div className="text-clay text-xs">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

function InfiniteColumn({
  testimonials,
  direction = "up",
}: {
  testimonials: Testimonial[]
  direction?: "up" | "down"
  duration?: number
}) {
  const columnRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const doubled = [...testimonials, ...testimonials]
  const speed = direction === "up" ? 0.5 : -0.5

  useAnimationFrame(() => {
    if (!columnRef.current) return
    const cardHeight = columnRef.current.scrollHeight / 2
    setOffset((prev) => {
      const next = prev + speed
      if (direction === "up" && next >= cardHeight) return 0
      if (direction === "down" && next <= -cardHeight) return 0
      return next
    })
  })

  return (
    <div className="overflow-hidden relative" style={{ height: "600px" }}>
      <div
        className="absolute inset-x-0 top-0 h-20 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to bottom, var(--color-bg-alt), transparent)` }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to top, var(--color-bg-alt), transparent)` }}
      />
      <div ref={columnRef} style={{ transform: `translateY(-${offset}px)` }}>
        {doubled.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

interface TestimonialsColumnsProps {
  testimonials?: Testimonial[]
  className?: string
}

export function TestimonialsColumns({
  testimonials = defaultTestimonials,
  className,
}: TestimonialsColumnsProps) {
  const col1 = testimonials.filter((_, i) => i % 3 === 0)
  const col2 = testimonials.filter((_, i) => i % 3 === 1)
  const col3 = testimonials.filter((_, i) => i % 3 === 2)

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      <InfiniteColumn testimonials={col1.length > 0 ? col1 : testimonials} direction="up" />
      <InfiniteColumn testimonials={col2.length > 0 ? col2 : testimonials} direction="down" duration={35} />
      <div className="hidden lg:block">
        <InfiniteColumn testimonials={col3.length > 0 ? col3 : testimonials} direction="up" duration={25} />
      </div>
    </div>
  )
}
