import React from 'react'
import { Link } from 'react-router-dom'
import {BsCheckLg} from 'react-icons/bs'
import ProjectsImg from '../../assets/project.jpg'
import ProjectsAuthorImg from '../../assets/members/member_1.png'

const ProjectsCard = ({ className }) => {
  return (
    <div className={`rounded-xl overflow-hidden cursor-pointer shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${className}`}>
        <Link to={"/projects/1"}>
            <img src={ProjectsImg} alt="title" className='w-full object-cover object-center h-auto'/>

            <div className='p-5'>
            <h2 className=' font-homepage font-bold text-xl text-gray-900'>Project title</h2>
                <p className=' mt-3 text-sm text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='flex justify-between flex-nowrap items-center mt-6'>
                    <div className='flex items-center gap-x-2'>
                        <img src={ProjectsAuthorImg} alt="Author" className='rounded-full mr-2 w-[35px]'/>
                        <div className='flex flex-col'>
                            <h4 className='font-bold italic text-gray-900 text-sm'>
                                Cartelot Adrien
                            </h4>
                            <div className='flex items-center gap-x-2'>
                                <span className='bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full'>
                                    <BsCheckLg className='w-2 h-2 text-[#36B37E]'/>
                                </span>
                                <span className='italic text-gray-600 text-xs'>
                                    Président
                                </span>
                            </div>
                        </div>
                    </div>
                    <span className='font-bold'>25 Dec</span>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProjectsCard