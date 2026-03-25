"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollExpansionHeroProps {
  imageUrl?: string
  heading?: string
  subheading?: string
}

export function ScrollExpansionHero({
  imageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85",
  heading = "Spaces Built for the Work That Matters",
  subheading = "Every square foot designed to support creativity, collaboration, and growth.",
}: ScrollExpansionHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const width = useTransform(scrollYProgress, [0, 0.5], ["60%", "100%"])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["16px", "0px"])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
  const textY = useTransform(scrollYProgress, [0, 0.5], [40, 0])
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1])
  const tagOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1])

  return (
    <section ref={containerRef} className="relative py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top text */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="text-center mb-12"
        >
          <span className="text-clay text-xs tracking-[0.25em] uppercase font-medium">Our Spaces</span>
          <h2 className="font-display text-4xl md:text-5xl text-espresso mt-4 mb-4 leading-tight">
            {heading.split(" ").slice(0, 4).join(" ")}{" "}
            <span className="italic">{heading.split(" ").slice(4).join(" ")}</span>
          </h2>
          <p className="text-charcoal/55 max-w-lg mx-auto font-light">{subheading}</p>
        </motion.div>

        {/* Expanding image */}
        <div className="flex justify-center">
          <motion.div
            style={{ width, borderRadius, scale, opacity }}
            className="relative overflow-hidden mx-auto"
          >
            <div className="aspect-[16/9] relative">
              <img
                src={imageUrl}
                alt="Community space"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
              <motion.div
                style={{ opacity: tagOpacity }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
              >
                <div className="flex flex-wrap gap-3">
                  {['Artist Studios', 'Coworking', 'Event Venue', 'Incubator'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 bg-ivory/15 backdrop-blur-sm border border-ivory/20 text-ivory text-xs font-medium rounded-sm tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
