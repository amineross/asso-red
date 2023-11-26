import React from 'react'
import HeroBgImg from '../assets/hero-main-bg.png'

const HeroBackground = () => {
  return (
    <div className='absolute w-full bg-no-repeat bg-cover mix-blend-overlay pointer-events-none'>
        <img src={HeroBgImg} className=' h-[827px] w-[100%] brightness-140 blur-lg' alt="" />
    </div>
  )
}

export default HeroBackground