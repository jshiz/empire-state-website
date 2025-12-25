"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { BackgroundElements } from "@/components/background-elements"

const galleryImages = [
  { src: "/images/fresh1.jpg", alt: "French Bulldog Stud" },
  { src: "/images/fresh2.jpg", alt: "Playful Frenchie Puppy" },
  { src: "/images/fresh3.jpg", alt: "Dog Show Event" },
  { src: "/images/fresh4.jpg", alt: "Happy Owner with Frenchie" },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background scattered-background">
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="text-primary text-base md:text-lg font-semibold uppercase tracking-wider">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 text-foreground">
            Our Beautiful Bulldogs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Browse through photos of our studs, puppies, and the Empire State Bulldogs lifestyle.
          </p>
        </div>

        <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              className="relative rounded-lg md:rounded-xl overflow-hidden group cursor-pointer flex-shrink-0 w-48 md:w-56 h-auto"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={400}
                className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center hover:bg-secondary transition-colors z-[70]"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
            <div className="relative w-full max-w-3xl max-h-[80vh] h-auto">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gallery image" fill className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
