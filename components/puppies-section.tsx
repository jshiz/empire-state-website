"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const puppies = [
  {
    name: "El Jefa",
    title: "Featured Matriarch",
    description:
      "The powerhouse of excellence. El Jefa carries everything with grace and strength. Perfect in every way, she represents the foundation of our breeding program and the future of Empire State Bulldogs. Built to lead, built to inspire.",
    image: "/images/pups/El_Jefa.jpg",
    highlight: true,
  },
]

const includes = [
  "Up-to-date vaccinations",
  "Deworming completed",
  "Veterinary health check",
  "Health guarantee",
  "Microchipped",
  "Starter puppy kit",
  "Lifetime breeder support",
  "Registration papers",
]

export function PuppiesSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const pawEmojis = Array.from({ length: 7 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3.5 + Math.random() * 2,
    rotation: Math.random() * 360,
  }))

  return (
    <section ref={ref} id="puppies" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {pawEmojis.map((emoji) => (
          <div
            key={emoji.id}
            className="float-emoji spin-slow"
            style={{
              left: `${emoji.left}%`,
              top: `${emoji.top}%`,
              animationDelay: `${emoji.delay}s`,
              animationDuration: `${emoji.duration}s`,
              transform: `rotate(${emoji.rotation}deg)`,
              fontSize: "2rem",
            }}
          >
            🐾
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
          <span className="text-primary text-sm md:text-base font-semibold uppercase tracking-wider">
            Our Foundation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-card-foreground">
            Champion of Excellence
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Meet the heart and soul of Empire State Bulldogs. El Jefa represents generations of careful breeding and
            unwavering commitment to perfection.
          </p>
        </div>

        {/* Featured Dog */}
        <div className={`max-w-2xl mx-auto mb-16 ${isVisible ? "scroll-fade-up" : "opacity-0"}`}>
          {puppies.map((dog) => (
            <Card
              key={dog.name}
              className="bg-secondary border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={dog.image || "/placeholder.svg"}
                  alt={dog.name}
                  fill
                  className="object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="text-primary text-sm font-semibold uppercase tracking-wider">{dog.title}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mt-2">{dog.name}</h3>
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">{dog.description}</p>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg md:text-xl hover-lift"
                >
                  <Link href="#contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div
          className={`bg-secondary rounded-xl md:rounded-2xl p-6 md:p-12 border border-border ${isVisible ? "scroll-fade-up delay-200" : "opacity-0"}`}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-card-foreground">
            Every Puppy Includes
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {includes.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 p-4 bg-card rounded-lg hover:bg-card/90 hover:scale-105 transition-all duration-300 ${isVisible ? `scroll-slide-right delay-${i * 50}` : "opacity-0"}`}
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base text-card-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
