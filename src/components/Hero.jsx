import React from 'react'
import Typed from 'react-typed'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='text-white'>
        <div className=' max-w-[800px] w-[90%] h-full mt-[200px] mx-auto text-left flex flex-col justify-center'>
            <div>
                <p className=' font-homepage md:text-7xl sm:text-6xl text-4xl font-black'>
                    RESEARCH<br/>
                    <Typed className='text-[#C91B0E]' strings={['EXPERIMENTATION']} typeSpeed={100} backSpeed={120} loop/><br/>
                    {/* EXPERIMENTATION<br/> */}
                    DEPARTMENT
                </p>
            </div>
            
            <div className='flex my-4'>
            <FaInstagram className=' scale-[2] mx-2 text-left text-[#C91B0E] cursor-pointer'/>
            <FaLinkedinIn className=' scale-[2] mx-2 ml-6 text-left text-[#C91B0E] cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Hero