import React from 'react'
import ProjectsCard from './ProjectsCard';
import { useQuery } from 'react-query';
import { getAllProjectsArticles } from '../../services/projects';


const ProjectsSection = () => {

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllProjectsArticles(),
    queryKey: ["projectArticle"],
    onError: (error) => {
      console.log(error);
    }
  });
  return (
    <div className='bg-white w-full mx-auto flex justify-center'>
      <div className=' max-w-[1225px] bg-[#FFF] mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {!isLoading && !isError && data.map( (projectArticle) => (
              <ProjectsCard 
                key={projectArticle._id}
                projectArticle={projectArticle}/>
          ))}
      </div> 
    </div>  
  )
}

export default ProjectsSection