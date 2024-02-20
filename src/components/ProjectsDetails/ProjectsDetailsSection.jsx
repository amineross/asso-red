import React from 'react'
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import BreadCrumbs from '../BreadCrumbs';
import ProjectsImg from '../../assets/macbook.png'
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getProjectsArticle } from '../../services/projects';
import { images } from '../../constants'


const ProjectsDetailsSection = () => {

  
  const { slug } = useParams();
  const [breadCrumbsData, setBreadCrumbsData] = useState([])

  const { data } = useQuery(
    {
      queryFn: () => getProjectsArticle({slug}),
      onSuccess: (data) => {
        setBreadCrumbsData([
          {name: "Home", link: "/"},
          {name: "Projects", link: "/projects"},
          {name: "Article Title", link: `/projects/${slug}`}
        ]);
      }
    }
  );

  const image = images[data?.image];

  return (
    <div className='bg-white w-full h-auto mx-auto flex justify-center mt-10'>
      <div className=' max-w-[1225px] bg-[#FFF] mx-auto px-5 py-10'>
        <article className='flex-1'>
          <BreadCrumbs data={breadCrumbsData}/>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src={image} alt="Projects" className="object-cover rounded-xl w-full h-[220px] md:h-[400px] lg:h-[450px]"/>
          </div>
          <h1 className='md:text-3xl text-2xl font-medium font-homepage mt-4 text-[#0D1321]'>
            {data?.title}
          </h1>
          <div className='mt-4 text-[#343434]'>
            <ReactMarkdown>
              {data?.body}
            </ReactMarkdown>
          </div>
        </article>
      </div> 
    </div>  
  )
}

export default ProjectsDetailsSection