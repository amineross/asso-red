import React from 'react';
import RocketImg from '../assets/rocket.png';
import EsieaRetroLogo from '../assets/esiea-retro.jpg';

const Association = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[90%] max-w-[1225px] bg-[#FFF5EA] mt-[200px] py-16 px-4 h-full rounded-[60px] shadow-lg shadow-slate-500'>
        {/* w-[90%] noml-5 nopx-5 mx-auto*/}
        <div className="grid md:grid-cols-2 w-[100%] ml-5 px-5 md:text-left text-center">
          <div className="space-y-4 md:pr-0">
            <h2 className="text-gray-900 md:text-[32px] text-2xl font-homepage font-bold tracking-wider">QUI SOMMES-NOUS ?</h2>
            <p className="text-zinc-950 text-lg font-light leading-relaxed">
              Research Experimentation Department est l’association technique du campus lavallois. 
              Nous organisons des projets et apportons notre aide aux étudiants pour développer nos compétences.
            </p>
            <p className="text-zinc-950 text-lg font-light leading-relaxed">
              L’objectif de l’association est de créer un environnement convivial axé sur les domaines techniques, en lien avec notre formation. Les projets jouent un rôle clé dans nos activités et se centrent sur les passions des membres de l’association.
            </p>
            
          </div>
          <div className='flex flex-col items-center justify-center space-y-5 mx-20 md:mt-8 mt-20 mb-5 '>
            <img src={EsieaRetroLogo} alt="Esiea Retro Logo" className='rounded-[40px] shadow-md shadow-slate-500 md:scale-125 scale-150' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Association;
