import React from 'react'
import {BsCheckLg} from 'react-icons/bs'
import ProjectsImg from '../../assets/macbook.png'
import ProjectsAuthorImg from '../../assets/members/member_1.png'
import { Link } from 'react-router-dom'
import { images } from '../../constants'

const ProjectsCard = ({ projectArticle, className }) => {
    
    const image = images[projectArticle.image];
    
    return (
    <div className={`rounded-xl overflow-hidden cursor-pointer shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${className}`}>
        <Link to={`/projects/${projectArticle.slug}`}>
            
            <img src={image} alt="title" className='w-full object-cover object-center h-[250px]'/>

            <div className='p-5'>
            <h2 className=' font-homepage font-bold text-xl text-gray-900'>
                {projectArticle.title}
            </h2>
                <p className=' mt-3 text-sm text-gray-700'>
                    {projectArticle.caption}
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