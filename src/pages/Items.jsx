import React from 'react';

// Mock Data for Items
const ITEMS = [
  {
    id: 1,
    name: 'Poké Ball',
    quantity: 15,
    description: 'Dispositivo para atrapar Pokémon salvajes.',
    category: 'Pokéballs',
    icon: 'radio_button_checked',
    color: 'text-red-500'
  },
  {
    id: 2,
    name: 'Super Ball',
    quantity: 5,
    description: 'Poké Ball de alto rendimiento. Mejor índice de éxito.',
    category: 'Pokéballs',
    icon: 'radio_button_checked',
    color: 'text-blue-500'
  },
  {
    id: 3,
    name: 'Poción',
    quantity: 8,
    description: 'Restaura 20 PS de un Pokémon.',
    category: 'Medicina',
    icon: 'medication',
    color: 'text-purple-500'
  },
  {
    id: 4,
    name: 'Superpoción',
    quantity: 2,
    description: 'Restaura 50 PS de un Pokémon.',
    category: 'Medicina',
    icon: 'vaccines',
    color: 'text-yellow-500'
  },
  {
    id: 5,
    name: 'Antídoto',
    quantity: 3,
    description: 'Cura a un Pokémon envenenado.',
    category: 'Medicina',
    icon: 'healing',
    color: 'text-green-500'
  },
  {
    id: 6,
    name: 'Revivir',
    quantity: 1,
    description: 'Revive a un Pokémon debilitado con la mitad de PS.',
    category: 'Medicina',
    icon: 'diamond',
    color: 'text-yellow-400'
  },
  {
    id: 7,
    name: 'Mapa',
    quantity: 1,
    description: 'Un mapa de la región para orientarse.',
    category: 'Objetos Clave',
    icon: 'map',
    color: 'text-blue-400'
  },
  {
    id: 8,
    name: 'Bicicleta',
    quantity: 1,
    description: 'Bicicleta plegable para ir más rápido.',
    category: 'Objetos Clave',
    icon: 'pedal_bike',
    color: 'text-green-600'
  }
];

const Items = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-slate-100 border-4 border-slate-900 p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
        <h2 className="text-3xl font-bold uppercase text-slate-900 mb-2 flex items-center gap-3">
          <span className="material-symbols-outlined text-4xl text-yellow-600">backpack</span>
          Mochila de Objetos
        </h2>
        <p className="text-slate-600 font-bold uppercase text-sm">
          Herramientas esenciales para tu viaje.
        </p>
      </div>

      <div className="bg-white border-4 border-slate-900 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-200 border-b-4 border-slate-900 font-bold uppercase text-sm text-slate-700">
          <div className="col-span-1 text-center">Cant.</div>
          <div className="col-span-4">Nombre</div>
          <div className="col-span-5">Descripción</div>
          <div className="col-span-2 text-center">Categoría</div>
        </div>

        {/* List Items */}
        <div className="divide-y-2 divide-slate-100">
          {ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 p-4 hover:bg-slate-50 transition-colors items-center group"
            >
              {/* Mobile Layout Adaptation */}
              <div className="flex justify-between md:contents">
                <div className="col-span-1 flex items-center justify-center">
                  <span className="bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded min-w-[2rem] text-center">
                    x{item.quantity}
                  </span>
                </div>
                
                <div className="col-span-4 flex items-center gap-3">
                  <span className={`material-symbols-outlined text-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </span>
                  <span className="font-bold uppercase text-slate-900 text-lg md:text-base">
                    {item.name}
                  </span>
                </div>
              </div>

              <div className="col-span-5 text-sm text-slate-600 font-medium pl-10 md:pl-0 border-l-2 md:border-l-0 border-slate-200 ml-2 md:ml-0">
                {item.description}
              </div>

              <div className="col-span-2 flex justify-end md:justify-center">
                <span className="text-[10px] font-bold uppercase bg-slate-200 text-slate-700 px-2 py-1 rounded border border-slate-300">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
