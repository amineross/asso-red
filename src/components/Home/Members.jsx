import React from 'react'
import { IoChevronBack,  IoChevronForward } from "react-icons/io5";
import { useState } from 'react'

const images = importAll(require.context('../../assets/members/', false, /\.(png|jpe?g|svg)$/));
const members = [
    { name: 'Cartelot Adrien', role: 'President' },
    { name: 'Guret Maëllys', role: 'Vice-Présidente' },
    { name: 'Nierat Gabriel', role: 'Trésorier' },
    { name: 'Le Roux Guénaël', role: 'Vice-Trésorier' }
];

function importAll(r) {
    return r.keys().map(r);
}

const Members = () => {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? images.length - 1 : index - 1;
        setIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = index === images.length - 1;
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    }

    return (
        <div className='bg-[#FFF]  h-[500px] w-full mx-auto py-16'>
            <h1 className='text-center text-4xl font-homepage text-gray-900 mx-4'>LE BUREAU</h1>
            <div className='relative flex items-center justify-center h-full'>
                {/* Image */}
                <div style={{backgroundImage: `url(${images[index]})`}} className='relative top-[-70px] w-full h-[400px] bg-center bg-no-repeat duration-500 opacity-95 select-none'>
                    {/* Left Chevron */}
                    <div className='scale-[0.5] absolute top-1/2 md:left-0 left-[100px] z-10 text-2xl text-black cursor-pointer opacity-40 hover:opacity-100'>
                        <IoChevronBack onClick={prevSlide} className='scale-[4] hover:text-[#C91B0E] hover:scale-[5] duration-300'/>
                    </div>

                    {/* Right Chevron */}
                    <div className='scale-[0.5] absolute top-1/2 md:right-0 right-[100px] z-10 text-2xl text-black cursor-pointer opacity-40 hover:opacity-100'>
                        <IoChevronForward onClick={nextSlide} className='scale-[4] hover:text-[#C91B0E] hover:scale-[5] duration-300'/>
                    </div>
                </div>
            </div>

            <div className='relative top-[-150px] text-[#0D1321] text-center duration-500 transition-opacity'>
                {/* member at index name */}
                <h1 className='font-lato text-3xl'>{members[index].name}</h1>

                {/* member at index role */}
                <p className='text-xl text-[#C91B0E] text-lato opacity-90'>{members[index].role}</p>
            </div>
        </div>
    )
}

export default Members