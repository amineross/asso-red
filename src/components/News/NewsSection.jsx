import React from 'react'
import NewsCard from './NewsCard';

const NewsSection = () => {
  return (
    <div className=' w-full bg-[#FFF] mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
        <NewsCard className='w-full md:w-[calc(50%)]'/>
        <NewsCard className='w-full md:w-[calc(50%)]'/>
    </div>  
  )
}

export default NewsSection