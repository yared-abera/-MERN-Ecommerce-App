import React, { useEffect, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Slider() {
  const [api, setApi] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!api || isHovered) return

   const interval = setInterval(() => {
   const count = api.scrollSnapList().length
   const current = api.selectedScrollSnap()
   const nextIndex = (current + 1) % count
          api.scrollTo(nextIndex)
        }, 3000)

    return () => clearInterval(interval)
  }, [api, isHovered])

  return (
    <div
      className="flex items-center justify-center lg:h-[250px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full max-w-6xl lg:h-[250px]"
      >
        <CarouselContent className="w-full lg:h-[250px] items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex w-full h-full lg:h-[250px] items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
