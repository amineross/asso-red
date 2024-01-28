import React from 'react'
import ReactMarkdown from 'react-markdown';
import BreadCrumbs from '../BreadCrumbs';
import NewsImg from '../../assets/macbook.png'


const breadCrumbsData = [
  {name: "Home", link: "/"},
  {name: "News", link: "/news"},
  {name: "Article Title", link: "/news/1"}
];

const NewsDetailsSection = () => {
  return (
    <div className='bg-white w-full h-auto mx-auto flex justify-center mt-10'>
      <div className=' max-w-[1225px] bg-[#FFF] mx-auto px-5 py-10'>
        <article className='flex-1'>
          <BreadCrumbs data={breadCrumbsData}/>
          <div className="aspect-w-16 aspect-h-9 w-full">
            <img src={NewsImg} alt="News" className="object-cover rounded-xl w-full h-[220px] md:h-[400px] lg:h-[450px]"/>
          </div>
          <h1 className='md:text-3xl text-2xl font-medium font-homepage mt-4 text-[#0D1321]'>
            Ceci est le Titre de l'Article
          </h1>
          <div className='mt-4 text-[#343434]'>
            <ReactMarkdown>
              This is *italic* and this is **bold**
            </ReactMarkdown>
          </div>
        </article>
      </div> 
    </div>  
  )
}

export default NewsDetailsSection