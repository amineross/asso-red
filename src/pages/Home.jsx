import React from 'react'
import NavBar from '../components/NavBar';
import HeroBackground from '../components/HeroBackground';
import Hero from '../components/Hero';
import Association from '../components/Association';
import Members from '../components/Members'
import MembersGrid from '../components/MembersGrid'
import Local from '../components/Local'
import Projets from '../components/Projets'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      {/* h-[827px] */}
      <div className='bg-[#0A0B10] h-full max-w-[100vw]'>
        <HeroBackground/>
        <NavBar/>
        <Hero/>
        <Association/>
        <Local/>
        <Projets/>
        <div className='md:hidden'>
          <Members/>
        </div>
        <div className='hidden md:block'>
          <MembersGrid/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
