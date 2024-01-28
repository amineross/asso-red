import React from 'react'
import ProjectsCard from './ProjectsCard';

const ProjectsSection = () => {
  return (
    <div className='bg-white w-full mx-auto flex justify-center'>
      <div className=' max-w-[1225px] bg-[#FFF] mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
      </div> 
    </div>  
  )
}

export default ProjectsSection