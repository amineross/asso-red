import React from 'react'
import NavBar from '../components/NavBar';
import HeroBackground from '../components/Home/HeroBackground';
import Footer from '../components/Footer'

import NewsHero from '../components/News/NewsHero';
import NewsSection from '../components/News/NewsSection';


function News() {
  return (
    <div>
      {/* h-[827px] */}
      <div className='bg-[#0A0B10] h-full max-w-full'>
        <HeroBackground/>
        <NavBar/>
        <NewsHero/>
        <NewsSection/>
        <Footer/>
      </div>
    </div>
  );
}

export default News;
