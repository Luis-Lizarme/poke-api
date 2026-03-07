import React from 'react';
import { Link } from 'react-router-dom';
import { typeColors, backgroundColors } from '../utils/pokemon-types';

const PokemonCard = ({ id, name, types, image }) => {
  return (
    <Link to={`/pokemon/${id}`} className="bg-white border-4 border-slate-900 rounded-lg p-3 flex flex-col gap-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group">
      <div className={`relative aspect-square border-4 border-slate-900 rounded-md overflow-hidden ${backgroundColors[types[0]] || 'bg-slate-200'}`}>
        <div className="absolute top-0 left-0 bg-slate-900 text-white text-xs font-bold px-2 py-1 z-10">
          #{String(id).padStart(3, '0')}
        </div>
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold uppercase truncate text-slate-900">{name}</h3>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <span 
              key={type} 
              className={`text-[10px] font-bold uppercase px-2 py-1 text-white border-2 border-slate-900 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${typeColors[type] || 'bg-slate-500 text-white'}`}
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
