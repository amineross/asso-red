import React from 'react';
import NewsImg from '../../assets/hero-main-bg.png';
import { useQuery } from 'react-query';
import { getAllNewsArticles } from '../../services/news';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const Local = () => {

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllNewsArticles(),
    queryKey: ["newsArticle"],
    onError: (error) => {
      console.log(error);
    }
  });

  return (
    <div className='bg-white mt-40 w-full mx-auto px-8 py-16 flex justify-center'>
        <div className='flex justify-center w-full max-w-[1225px] mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
                
                {/* News Section */}
                <div className='md:col-span-2'>
                    <div className='mb-4 flex justify-between items-center'>
                        <h2 className='text-2xl font-bold text-black'>ACTUALITÉS</h2>
                        <a href="/news" className='text-md text-black underline hover:text-[#C91B0E] duration-[250ms]'>Toutes l'actualités</a>
                    </div>
                    {/* Rows with Large First Image */}
                    <div className="grid grid-cols-1 gap-6">

                        {data?.map((item, index) => (      
                              <div key={item._id} className={`relative shadow-black shadow-inner bg-white h-[300px] p-4 rounded-lg overflow-hidden ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}>
                                  <Link to={`/news/${item.slug}`}>
                                    <img src={images[item.image]} alt="" className='absolute inset-0 bg-gradient-to-t from-black to-transparent w-full h-full object-cover rounded-lg' />
                                    <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg"></div>
                                    <div className='relative z-10 p-4 flex flex-col justify-end h-full'>
                                        <h2 className='text-xl font-bold text-white'>{item.title}</h2>
                                        <p className='text-white'>{item.caption}</p>
                                    </div>
                                  </Link>
                              </div>
                        ))}
                    </div>
                </div>
                {/* Text Content Section */}
                <div className='md:col-span-1 text-black'>
                    <h1 className='text-4xl font-bold mb-6'>LE LOCAL</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae consequatur! Debitis commodi sapiente fugiat. Incidunt molestiae suscipit omnis ut vero minima quisquam ipsam voluptatibus nostrum accusantium, harum vitae? Id.</p>
                </div>
            </div>
        </div>
    </div>
        
  );
}

export default Local;