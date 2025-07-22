import BrandNewLap from '@/components/home/BrandNewLap'
import Slider from '@/components/home/Slider'
import LazySection from '@/components/Lazy/LazySection'
import GamingLaptops from '@/components/home/GamingLaptops'
import React from 'react'

const Home = () => {
  return (
      <div className="space-y-10 px-4 py-6">
      {/* Always visible */}
       <Slider />

      {/* Lazy Loaded Sections */}
       <LazySection>
        <BrandNewLap />
      </LazySection>

      <LazySection>
        <GamingLaptops />
      </LazySection>

       
    </div>
  )
}

export default Home
