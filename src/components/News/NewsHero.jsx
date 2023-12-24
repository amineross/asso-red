import React from 'react'
import Typed from 'react-typed'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const NewsHero = () => {
  return (
    <div className='text-white mb-20'>
        <div className=' max-w-[800px] w-[90%] h-full md:mt-[200px] mt-[100px] mx-auto text-center flex flex-col justify-center'>
            <div>
                <p className=' font-homepage md:text-7xl sm:text-6xl text-4xl font-black'>
                    LES<br/>
                    <Typed className='text-[#C91B0E]' strings={['ACTUALITÉS']} typeSpeed={100} backSpeed={120} loop/><br/>
                </p>
            </div>
            
            <div className='flex justify-center mt-8 opacity-60'>
            <FaInstagram className=' scale-[2] mx-2 text-center text-[#FFF] cursor-pointer'/>
            <FaLinkedinIn className=' scale-[2] mx-2 ml-6 text-center text-[#FFF] cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default NewsHero