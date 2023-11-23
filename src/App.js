import React from 'react'
import NavBar from './components/NavBar';
import HeroBackground from './components/HeroBackground';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <div className='bg-[#0A0B10] h-[827px] w-screen'>
        <HeroBackground/>
        <NavBar/>
        <Hero/>
      </div>
    </div>
  );
}

export default App;
