import React from 'react';
import PokemonCard from '../components/PokemonCard';

// Mock Data for Favorites
const FAVORITE_POKEMONS = [
  {
    id: 6,
    name: 'charizard',
    types: ['FUEGO', 'VOLADOR'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png'
  },
  {
    id: 25,
    name: 'pikachu',
    types: ['ELÉCTRICO'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
  },
  {
    id: 130,
    name: 'gyarados',
    types: ['AGUA', 'VOLADOR'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png'
  },
  {
    id: 143,
    name: 'snorlax',
    types: ['NORMAL'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png'
  },
  {
    id: 150,
    name: 'mewtwo',
    types: ['PSÍQUICO'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png'
  },
  {
    id: 94,
    name: 'gengar',
    types: ['FANTASMA', 'VENENO'],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png'
  }
];

const Favorites = () => {
  return (
    <div className="animate-fade-in">
      <div className="bg-slate-100 border-4 border-slate-900 p-6 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
        <h2 className="text-3xl font-bold uppercase text-slate-900 mb-2 flex items-center gap-3">
          <span className="material-symbols-outlined text-4xl text-red-500">favorite</span>
          Pokémon Favoritos
        </h2>
        <p className="text-slate-600 font-bold uppercase text-sm">
          Tu equipo soñado y compañeros más leales.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FAVORITE_POKEMONS.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.image}
          />
        ))}
      </div>
      
      {FAVORITE_POKEMONS.length === 0 && (
        <div className="text-center py-12 border-4 border-dashed border-slate-300 rounded-xl">
          <span className="material-symbols-outlined text-6xl text-slate-300 mb-4">sentiment_dissatisfied</span>
          <p className="text-slate-400 font-bold uppercase text-lg">No tienes favoritos aún</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
