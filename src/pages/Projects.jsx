import React from 'react'
import NavBar from '../components/NavBar';
import HeroBackground from '../components/Home/HeroBackground';
import Footer from '../components/Footer'

import ProjectsHero from '../components/Projects/ProjectsHero';
import ProjectsSection from '../components/Projects/ProjectsSection';


function Project() {
  return (
    <div>
      {/* h-[827px] */}
      <div className='bg-[#0A0B10] h-full max-w-full'>
        <HeroBackground/>
        <NavBar/>
        <ProjectsHero/>
        <ProjectsSection/>
        <Footer/>
      </div>
    </div>
  );
}

export default Project;
