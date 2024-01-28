import React from 'react'
import ProjectsImg from '../../assets/hero-main-bg.png';

const newsItems = [
  {
    id: 1,
    title: 'Titre de l\'article',
    description: 'Description de l\'article',
    imageUrl: ProjectsImg, 
    spanFull: true,
  },
  {
    id: 2,
    title: 'Titre de l\'article',
    description: 'Description de l\'article',
    imageUrl: ProjectsImg, 
  },
  {
    id: 3,
    title: 'Titre de l\'article',
    description: 'Description de l\'article',
    imageUrl: ProjectsImg, 
  },
];

const Projets = () => {
  return (
    <div className='flex justify-center w-[90%] max-w-[1225px] mx-auto py-16 px-4'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
            
            {/* Text Content Section */}
            <div className='md:col-span-1 text-white'>
                <h1 className='text-4xl font-bold mb-6'>LES PROJETS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vitae consequatur! Debitis commodi sapiente fugiat. Incidunt molestiae suscipit omnis ut vero minima quisquam ipsam voluptatibus nostrum accusantium, harum vitae? Id.</p>
            </div>


            {/* Projects Section */}
            <div className='md:col-span-2'>
                <div className='mb-4 flex justify-between items-center'>
                    <h2 className='text-2xl font-bold text-white'>PROJETS</h2>
                    <a href="/projects"ƒ className='text-md text-white underline'>Tous les projets</a>
                </div>
                {/* Rows with Large First Image */}
                <div className="grid grid-cols-1 gap-6">
                    {newsItems.map((item, index) => (
                        <div key={item.id} className={`relative shadow-black shadow-inner bg-white h-[300px] p-4 rounded-lg overflow-hidden ${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}>
                            <img src={item.imageUrl} alt="" className='absolute inset-0 bg-gradient-to-t from-black to-transparent w-full h-full object-cover rounded-lg' />
                            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-black via-transparent to-transparent rounded-b-lg"></div>
                            <div className='relative z-10 p-4 flex flex-col justify-end h-full'>
                                <h2 className='text-xl font-bold text-white'>{item.title}</h2>
                                <p className='text-white'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Projets