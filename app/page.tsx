"use client";
import WaterWaveWrapper from '@/components/visualEffects/Waterwavewrapper'
import About from '@/sections/About';
import FeatureSection from '@/sections/Featured';
import LandingSection from '@/sections/Landing';





export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=''
      dropRadius='3'
      perturbance='3'
      resolution='2048'>
      {() => (
        <div className='pb-8'>

          <LandingSection/> 
           <FeatureSection/>
          <About/>
        </div>
      )}

    </WaterWaveWrapper>
  )
}

