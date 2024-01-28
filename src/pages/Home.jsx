import React from 'react'
import NavBar from '../components/NavBar';
import HeroBackground from '../components/Home/HeroBackground';
import Hero from '../components/Home/Hero';
import Association from '../components/Home/Association';
import Members from '../components/Home/Members'
import MembersGrid from '../components/Home/MembersGrid'
import Local from '../components/Home/Local'
import Projets from '../components/Home/Projets'
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
