import React from 'react';
import EsieaRedLogo from '../../assets/esiea-red.jpg';


const Association = () => {
    return (
      <div className='flex justify-center'>
        <div className='flex justify-center w-[90%] max-w-[1225px] bg-[#FFF] mt-[100px] py-12 px-4 h-full rounded-3xl '>
          <div className="grid md:grid-cols-2 w-full md:ml-10 items-center">
            <div className="space-y-4 md:text-left text-center md:px-0 px-4">
              <h2 className="text-gray-900 md:text-4xl text-2xl font-bold tracking-wider">QUI SOMMES-NOUS ?</h2>
              <p className="text-zinc-800 text-lg font-normal leading-relaxed">
                Research Experimentation Department est l’association technique du campus lavallois.
                Nous organisons des projets et apportons notre aide aux étudiants pour développer nos compétences.
              </p>
              <p className="text-zinc-800 text-lg font-normal leading-relaxed">
                L’objectif de l’association est de créer un environnement convivial axé sur les domaines techniques, en lien avec notre formation. Les projets jouent un rôle clé dans nos activités et se centrent sur les passions des membres de l’association.
              </p>
            </div>
            <div className='flex justify-center'>
                <img src={EsieaRedLogo} alt="Esiea Red Logo" className='rounded-2xl shadow-md shadow-slate-500 md:scale-100 w-[90%] md:mt-0 mt-5' /> 
              {/* <img src={SphereImg} alt="Sphere" className='  animate-floatTilt' /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Association;