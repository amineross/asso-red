import React from 'react';
import MemberDefaultImg from '../assets/memberdefault.png'

const membersData = [
  { name: 'Cartelot Adrien', role: 'Président' },
  { name: 'Guret Maëllys', role: 'Vice-Présidente' },
  { name: 'Nierat Gabriel', role: 'Trésorier' },
  { name: 'Le Roux Guénaël', role: 'Vice-Trésorier' },
  { name: 'Martin Alexis', role: 'Secrétaire' },
  { name: 'Perrin-Morel Sélène', role: 'Vice-Secrétaire' },
  { name: 'Breton Thibaut', role: 'Responsable Team Communication' },
  { name: 'Beaufils Bastian', role: 'Responsable Team Événements' },
  { name: 'Daubigne Mèline', role: 'Responsable Team Projets' },
  { name: 'Gaubaud Pierre', role: 'Responsable Team Sécurité' },
];

const MembersGrid = () => {
    const topRowMembers = membersData.slice(0, 2);
  const bottomRowMembers = membersData.slice(2);

  return (
    <div className='bg-white w-full mx-auto px-8 py-16 flex justify-center text-center '>
      <div className='w-full max-w-[1225px]'>
        <h1 className='text-4xl font-bold mb-12'>LE BUREAU</h1>
        {/* Top row members */}
        <div className="flex justify-center gap-44 mb-12">
          {topRowMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={MemberDefaultImg} alt={`${member.name}`} className='w-24 h-24 rounded-full' />
              <h2 className="mt-4 text-xl text-lato font-semibold">{member.name}</h2>
              <p className="text-md text-[#C91B0E] text-lato opacity-90">{member.role}</p>
            </div>
          ))}
        </div>
        {/* Bottom row members */}
        <div className="grid grid-cols-4 gap-4">
          {bottomRowMembers.map((member, index) => (
            <div key={index + 2} className="flex flex-col items-center">
              <img src={MemberDefaultImg} alt={`${member.name}`} className='w-24 h-24 rounded-full' />
              <h2 className="mt-4 text-xl text-lato font-semibold">{member.name}</h2>
              <p className="text-md text-[#C91B0E] text-lato opacity-90">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersGrid;