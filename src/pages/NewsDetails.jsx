import React from 'react'
import NavBar from '../components/NavBar';

import Footer from '../components/Footer'

import NewsDetailsSection from '../components/NewsDetails/NewsDetailsSection';

const NewsDetails = () => {
  return (
    <div className='bg-[#0A0B10] h-full max-w-[100vw]'>
        <NavBar/>
        <NewsDetailsSection/>
        <Footer/>
    </div>
  )
}

export default NewsDetails