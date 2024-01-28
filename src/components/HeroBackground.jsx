import React from 'react'
import HeroBgImg from '../assets/hero-main-bg.png'

const HeroBackground = () => {
  return (
    <div className='absolute max-w-full bg-no-repeat bg-cover mix-blend-overlay pointer-events-none'>
        <img src={HeroBgImg} className=' h-[827px] max-w-[90vw] brightness-140 blur-lg' alt="" />
        {/* Gros problème si on mets le width de cette image a 100% ou 100vw
        Je ne sais pas pourquoi mais laissez le a 90vw */}
    </div>
  )
}

export default HeroBackground