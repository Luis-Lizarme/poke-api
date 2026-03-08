import React from 'react';

// Mock Data for Badges
const BADGES = [
  {
    id: 1,
    name: 'Medalla Roca',
    city: 'Ciudad Plateada',
    leader: 'Brock',
    type: 'ROCA',
    color: 'bg-gray-500',
    icon: 'landscape'
  },
  {
    id: 2,
    name: 'Medalla Cascada',
    city: 'Ciudad Celeste',
    leader: 'Misty',
    type: 'AGUA',
    color: 'bg-blue-400',
    icon: 'water_drop'
  },
  {
    id: 3,
    name: 'Medalla Trueno',
    city: 'Ciudad Carmín',
    leader: 'Lt. Surge',
    type: 'ELÉCTRICO',
    color: 'bg-yellow-400',
    icon: 'bolt'
  },
  {
    id: 4,
    name: 'Medalla Arcoíris',
    city: 'Ciudad Azulona',
    leader: 'Erika',
    type: 'PLANTA',
    color: 'bg-green-500',
    icon: 'spa'
  },
  {
    id: 5,
    name: 'Medalla Alma',
    city: 'Ciudad Fucsia',
    leader: 'Koga',
    type: 'VENENO',
    color: 'bg-purple-500',
    icon: 'favorite'
  },
  {
    id: 6,
    name: 'Medalla Pantano',
    city: 'Ciudad Azafrán',
    leader: 'Sabrina',
    type: 'PSÍQUICO',
    color: 'bg-pink-400',
    icon: 'psychology'
  },
  {
    id: 7,
    name: 'Medalla Volcán',
    city: 'Isla Canela',
    leader: 'Blaine',
    type: 'FUEGO',
    color: 'bg-red-500',
    icon: 'local_fire_department'
  },
  {
    id: 8,
    name: 'Medalla Tierra',
    city: 'Ciudad Verde',
    leader: 'Giovanni',
    type: 'TIERRA',
    color: 'bg-yellow-700',
    icon: 'public'
  }
];

const Badges = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-slate-100 border-4 border-slate-900 p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
        <h2 className="text-3xl font-bold uppercase text-slate-900 mb-2 flex items-center gap-3">
          <span className="material-symbols-outlined text-4xl text-yellow-500">military_tech</span>
          Medallas de Gimnasio
        </h2>
        <p className="text-slate-600 font-bold uppercase text-sm">
          Prueba de tu valía como entrenador Pokémon en la región de Kanto.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {BADGES.map((badge) => (
          <div 
            key={badge.id}
            className="group relative bg-white border-4 border-slate-900 rounded-xl p-6 flex flex-col items-center gap-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default"
          >
            {/* Badge Icon/Shape */}
            <div className={`w-20 h-20 rounded-full border-4 border-slate-900 flex items-center justify-center text-white shadow-inner ${badge.color}`}>
              <span className="material-symbols-outlined text-5xl drop-shadow-md">{badge.icon}</span>
            </div>

            {/* Info */}
            <div className="text-center w-full">
              <h3 className="font-bold uppercase text-lg text-slate-900 mb-1">{badge.name}</h3>
              <div className="w-full h-0.5 bg-slate-200 my-2"></div>
              <p className="text-xs font-bold uppercase text-slate-500 mb-1">{badge.city}</p>
              <p className="text-xs font-bold uppercase text-slate-400">Líder: {badge.leader}</p>
            </div>
            
            {/* Type Tag */}
            <div className="absolute top-2 right-2">
               <span className={`px-2 py-0.5 text-[10px] font-bold uppercase text-white border border-slate-900 rounded bg-slate-800`}>
                {badge.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
