import React from 'react'
import NavBar from './components/NavBar';
import HeroBackground from './components/HeroBackground';
import Hero from './components/Hero';
import Association from './components/Association';

function App() {
  return (
    <div>
      {/* h-[827px] */}
      <div className='bg-[#0A0B10] h-[2000px] w-screen pl-4'>
        <HeroBackground/>
        <NavBar/>
        <Hero/>
        <Association/>
           
      </div>
    </div>
  );
}

export default App;
