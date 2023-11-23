import React from 'react'
import Logo from '../assets/Logo.svg'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const NavBar = () => {
  return (
    <div className='text-gray-300 flex text-right'>
        <div className=' text-gray-300 flex justify-between items-center h-24 w-full max-w-[1240px] mx-auto px-4'>
            <ul className='z-10 flex justify-between w-[90%] mx-auto mt-[40px] text-xl'>
                <li className='p-4 hover:text-[#C91B0E] cursor-pointer hidden'>Association</li>
                <li className='p-4 hover:text-[#C91B0E] cursor-pointer hidden'>Local</li>
                <img src={Logo} alt="RED Logo" className=' scale-75'/>
                <li className='p-4 hover:text-[#C91B0E] cursor-pointer hidden'>Bureau</li>
                <li className='p-4 hover:text-[#C91B0E] cursor-pointer hidden'>Projets</li>
            </ul>
            
        </div>
        <div className='z-10 px-4 mx-10 mt-[40px] cursor-pointer'>
            <AiOutlineMenu size={40}/>
        </div>
    </div>
    
  )
}

export default NavBar