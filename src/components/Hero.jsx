import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Hero = () => {
  return (
    <div className='text-white'>
        <div className=' w-[70%] h-full mt-[200px] mx-auto text-left flex flex-col justify-center'>
            <p className=' font-homepage text-7xl font-black'>
                RESEARCH<br/>
                EXPERIMENTATION<br/>
                DEPARTMENT
            </p>

            <div className='flex my-4'>
            <FaInstagram className=' scale-[2] mx-2 text-left text-[#C91B0E] cursor-pointer'/>
            <FaLinkedinIn className=' scale-[2] mx-2 ml-6 text-left text-[#C91B0E] cursor-pointer' />
            </div>
        </div>
    </div>
  )
}

export default Hero