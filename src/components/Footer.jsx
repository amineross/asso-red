import React from 'react'
import Logo from '../assets/Logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-center w-full max-w-[1225px] mx-auto py-16 px-4'>
      <div className='flex flex-col md:flex-row justify-between w-[90%] items-center self-stretch'>
        <div className='flex flex-col items-start gap-4 mx-0 md:w-[50vw] w-full'>
            <img src={Logo} alt="RED Logo" className='w-[120px] md:w-[140px]'/>
            <div>
              <p className=' font-homepage md:text-xl sm:text-xl text-2xl font-black text-white'>
                RESEARCH<br/>
                EXPERIMENTATION<br/>
                DEPARTMENT
              </p>
            </div>
            <div className='flex my-1'>
              <FaInstagram className=' scale-[1.6] mx-1 text-left text-[#C91B0E] cursor-pointer'/>
              <FaLinkedinIn className=' scale-[1.6] mx-1 ml-6 text-left text-[#C91B0E] cursor-pointer' />
            </div>
        </div>
        <div className='flex flex-col items-start gap-4 heigh leading-tight md:mt-0 mt-8'>
            <h1 className='text-white font-homepage text-2xl'>NEWSLETTER</h1>
            <p className='text-[#FFF] opacity-80 font-lato font-normal mt-[-10px]'>Soyez informé quand nous postons une nouvelle actualité ou un nouveau projet.</p>
            
            <div className='flex w-full h-[40px]'>
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 rounded-l-lg p-2 outline-none pl-5"
                
              />
              <button 
                className="bg-[#C91B0E] text-white px-4 rounded-r-lg"
              >
                S'inscrire
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer