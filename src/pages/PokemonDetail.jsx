import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { typeColors, backgroundColors, TYPE_TRANSLATIONS } from '../utils/pokemon-types';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) throw new Error('Pokémon no encontrado');
        
        const data = await response.json();
        
        const formattedPokemon = {
          id: data.id,
          name: data.name,
          types: data.types.map(t => TYPE_TRANSLATIONS[t.type.name] || t.type.name.toUpperCase()),
          image: data.sprites.other['official-artwork'].front_default,
          height: data.height / 10, // Convert to meters
          weight: data.weight / 10, // Convert to kg
          stats: data.stats.map(s => ({
            name: s.stat.name,
            value: s.base_stat,
            max: 255 // Max possible base stat roughly
          })),
          abilities: data.abilities.map(a => a.ability.name.replace('-', ' ')),
          base_experience: data.base_experience
        };
        
        setPokemon(formattedPokemon);
      } catch (err) {
        console.error("Error fetching pokemon detail:", err);
        setError('No se pudo cargar la información del Pokémon.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [id]);

  const getStatTranslation = (statName) => {
    const translations = {
      'hp': 'PS',
      'attack': 'ATAQUE',
      'defense': 'DEFENSA',
      'special-attack': 'AT. ESP.',
      'special-defense': 'DEF. ESP.',
      'speed': 'VELOCIDAD'
    };
    return translations[statName] || statName.toUpperCase();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full min-h-[50vh]">
        <div className="text-xl font-bold uppercase animate-pulse">Cargando datos...</div>
      </div>
    );
  }

  if (error || !pokemon) {
    return (
      <div className="flex flex-col justify-center items-center h-full min-h-[50vh] gap-4">
        <div className="text-xl font-bold uppercase text-red-500">{error}</div>
        <Link to="/" className="px-4 py-2 bg-slate-900 text-white font-bold uppercase rounded hover:bg-slate-700 transition-colors">
          Volver a la lista
        </Link>
      </div>
    );
  }

  const mainType = pokemon.types[0];
  const bgColorClass = backgroundColors[mainType] || 'bg-slate-200';

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 mb-6 text-slate-900 font-bold uppercase hover:underline">
        <span className="material-symbols-outlined">arrow_back</span>
        Volver a la Pokédex
      </Link>

      <div className="bg-white border-4 border-slate-900 rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header Section */}
        <div className={`p-8 border-b-4 border-slate-900 flex flex-col items-center relative ${bgColorClass}`}>
          <span className="absolute top-4 left-4 bg-slate-900 text-white px-3 py-1 font-bold rounded text-lg">
            #{String(pokemon.id).padStart(3, '0')}
          </span>
          
          <div className="w-64 h-64 relative z-10 filter drop-shadow-xl hover:scale-110 transition-transform duration-300">
            <img 
              src={pokemon.image} 
              alt={pokemon.name} 
              className="w-full h-full object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-slate-900 mt-4 tracking-wide text-center drop-shadow-sm">
            {pokemon.name}
          </h1>
          
          <div className="flex gap-3 mt-4">
            {pokemon.types.map((type) => (
              <span 
                key={type} 
                className={`px-4 py-1.5 text-sm font-bold uppercase text-white border-2 border-slate-900 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${typeColors[type] || 'bg-slate-500'}`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
          {/* Stats Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-slate-100 p-4 border-2 border-slate-900 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-bold uppercase mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">bar_chart</span>
                Estadísticas Base
              </h2>
              <div className="flex flex-col gap-3">
                {pokemon.stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs font-bold uppercase">
                      <span>{getStatTranslation(stat.name)}</span>
                      <span>{stat.value}</span>
                    </div>
                    <div className="w-full h-3 bg-slate-300 rounded-full overflow-hidden border border-slate-900">
                      <div 
                        className={`h-full ${stat.value > 100 ? 'bg-green-500' : stat.value > 50 ? 'bg-yellow-400' : 'bg-red-500'}`}
                        style={{ width: `${(stat.value / stat.max) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-slate-100 p-4 border-2 border-slate-900 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-xl font-bold uppercase mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">info</span>
                Información
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-white border-2 border-slate-900 rounded">
                  <span className="text-xs font-bold text-slate-500 uppercase">Altura</span>
                  <span className="text-lg font-bold">{pokemon.height} m</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-white border-2 border-slate-900 rounded">
                  <span className="text-xs font-bold text-slate-500 uppercase">Peso</span>
                  <span className="text-lg font-bold">{pokemon.weight} kg</span>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xs font-bold text-slate-500 uppercase block mb-2">Habilidades</span>
                <div className="flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability) => (
                    <span key={ability} className="px-3 py-1 bg-white border-2 border-slate-900 rounded text-xs font-bold uppercase">
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
