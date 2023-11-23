import React from 'react'
import Logo from '../assets/Logo.svg'

const NavBar = () => {
  return (
    <div className=' text-gray-300 flex justify-between items-center h-24 w-full max-w-[1240px] mx-auto px-4'>
        <ul className='z-10 flex justify-between w-[90%] mx-auto mt-[40px] text-xl'>
            <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Association</li>
            <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Local</li>
            <img src={Logo} alt="RED Logo" className=' scale-75'/>
            <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Bureau</li>
            <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Projets</li>
        </ul>
    </div>
  )
}

export default NavBar