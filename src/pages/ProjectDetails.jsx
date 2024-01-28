import React from 'react'
import NavBar from '../components/NavBar'
import ProjectsDetailsSection from '../components/ProjectsDetails/ProjectsDetailsSection'
import Footer from '../components/Footer'

const ProjectDetails = () => {
  return (
    <div className='bg-[#0A0B10] h-full max-w-[100vw]'>
        <NavBar/>
        <ProjectsDetailsSection/>
        <Footer/>
    </div>
  )
}

export default ProjectDetails