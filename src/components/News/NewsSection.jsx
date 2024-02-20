import React from 'react'
import NewsCard from './NewsCard';
import { useQuery } from 'react-query';
import { getAllNewsArticles } from '../../services/news';


const NewsSection = () => {

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllNewsArticles(),
    queryKey: ["newsArticle"],
    onError: (error) => {
      console.log(error);
    }
  });
  return (
    <div className='bg-white w-full mx-auto flex justify-center'>
      <div className=' max-w-[1225px] bg-[#FFF] mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {!isLoading && !isError && data.map( (newsArticle) => (
              <NewsCard 
                key={newsArticle._id}
                newsArticle={newsArticle}/>
          ))}
      </div> 
    </div>  
  )
}

export default NewsSection