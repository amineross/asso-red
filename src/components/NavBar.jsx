import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='text-gray-300 flex'>
        <div className=' text-gray-300 flex justify-between items-center h-24 w-full max-w-[1240px] mx-auto px-4'>
            <ul className=' z-10 hidden md:flex justify-between w-[90%] mx-auto mt-[40px] text-xl'>
                <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Association</li>
                <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Local</li>
                <Link to={"/"}>
                    <img src={Logo} alt="RED Logo" className=' scale-75'/>
                </Link>
                <Link to={"/news"}>
                    <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Actualités</li>
                </Link>
                <Link to={"/projects"}>
                    <li className='p-4 hover:text-[#C91B0E] cursor-pointer'>Projets</li>
                </Link>
            </ul>
            
        </div>
        <div onClick={handleNav} className='md:hidden absolute right-[25px] top-[38px]'>
            {nav ? <AiOutlineClose size={40}/> : <AiOutlineMenu size={40}/>}
        </div>

        {/* Mobile Navbar */}

        <img src={Logo} alt="RED Logo" className='md:hidden absolute left-[5px] top-[25px] scale-75'/>
        
        <div className={nav ? 'z-20 fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <ul className='pt-8 uppercase'>
                <img src={Logo} alt="RED Logo" className=' scale-75'/>
                <li className='p-6 border-b border-gray-100 hover:text-[#C91B0E] cursor-pointer'>Association</li>
                <li className='p-6 border-b border-gray-100 hover:text-[#C91B0E] cursor-pointer'>Local</li>
                <li className='p-6 border-b border-gray-100 hover:text-[#C91B0E] cursor-pointer'>Bureau</li>
                <li className='p-6 hover:text-[#C91B0E] cursor-pointer'>Projets</li>
            </ul>
        </div>
    </div>
    
  )
}

export default NavBar