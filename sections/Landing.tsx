import Header from '@/components/Navigation/header/Header'
import FancyButton from '@/components/Ui/Fancybutton'
import LiveClock from '@/components/Ui/Liveclock'
import MagneticWrapper from '@/components/Ui/Magneticwrapper'
import ScrollDown from '@/components/Ui/Scrolldown'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'



const Landing = () => {
  return (
    <div className='relative h-screen overflow-hidden p-8'>

    {/*Header*/}
    <Header/>
    {/*show magnetic button on small screen hide it on md screen*/}
    <div className='absolute bottom-36 left-10 z-20 md:hidden'>
    <MagneticWrapper>
                <FancyButton
                text="Let's talk"
                icon={<FaArrowRight/>}/>
            </MagneticWrapper>
    </div>
    {/*Live Clock*/}
    <div className='absolute right-10 bottom-10'>
      <LiveClock timeZone="Asia/Karachi"/>
    </div>
    {/*Slogan*/}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 leading-[14vw] lg:leading-[10vw] 2xl:leading-[9rem] font-medium h-[40rem] tracking-[-0.3rem]">
    <div className="flex flex-col justify-center items-center text-primary-foreground text-[18vw] lg:text-[14vw] 2xl:text-[12rem] uppercase">
      <div>
        <span>Code</span>
      </div>
        <div>
          <span>Crafting</span>
        </div>
          <div className="relative">
            <span>Brilliance</span>
            <div className='text-[1rem] leading-[1.4rem] tracking-[-0.07rem] absolute top-[14vw] lg:top-[10vw] 2xl:top-[9rem] left-0 2xl:left-[57rem] w-[30rem] uppercase font-normal'>
              <span>Empowering innovation</span>
              <br />
              <span>through inspired design</span>
              <br />
              <span>and cutting-edge technology</span>
              <br />
              <span>and solution redefine possiblities.</span>
            </div>
          </div>
    </div>
    {/*Magnetic scroll down*/}
    <MagneticWrapper className='absolute left-1/2 -translate-x-1/2 bottom-[8rem] md:bottom-[4rem] 2xl:-bottom-10'>
      <ScrollDown/>
    </MagneticWrapper>
    </div>
    </div>
  )
}

export default Landing;