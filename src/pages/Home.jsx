import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import { typeColors, TYPE_TRANSLATIONS } from '../utils/pokemon-types';

const REGION_CONFIG = {
  kanto: { offset: 0, limit: 151, label: 'KANTO' },
  johto: { offset: 151, limit: 100, label: 'JOHTO' },
  hoenn: { offset: 251, limit: 135, label: 'HOENN' },
  sinnoh: { offset: 386, limit: 107, label: 'SINNOH' },
};

const Home = () => {
  const [searchParams] = useSearchParams();
  const regionParam = searchParams.get('region') || 'kanto';
  const activeRegionKey = REGION_CONFIG[regionParam] ? regionParam : 'kanto';
  const activeRegion = REGION_CONFIG[activeRegionKey];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${activeRegion.offset}&limit=${activeRegion.limit}`
        );
        if (!response.ok) throw new Error('Error al cargar la lista de Pokémon');
        
        const data = await response.json();
        
        // Fetch details for each Pokemon to get types and images
        const detailedPokemon = await Promise.all(
          data.results.map(async (p) => {
            const detailResponse = await fetch(p.url);
            const detailData = await detailResponse.json();
            
            return {
              id: detailData.id,
              name: detailData.name,
              // Map English types to Spanish using our dictionary, fallback to original if not found
              types: detailData.types.map(t => TYPE_TRANSLATIONS[t.type.name] || t.type.name.toUpperCase()),
              // Use official artwork
              image: detailData.sprites.other['official-artwork'].front_default
            };
          })
        );
        
        setPokemonList(detailedPokemon);
        setCurrentPage(1);
      } catch (err) {
        console.error("Error fetching pokemon:", err);
        setError('No se pudo conectar con la PokéAPI. Inténtalo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [activeRegion.offset, activeRegion.limit]);

  const filteredPokemon = pokemonList.filter(pokemon => {
    const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          pokemon.id.toString().includes(searchTerm);
    const matchesType = selectedType ? pokemon.types.includes(selectedType) : true;
    return matchesSearch && matchesType;
  });

  const totalPages = Math.ceil(filteredPokemon.length / itemsPerPage);
  const paginatedPokemon = filteredPokemon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleTypeFilter = (type) => {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-bold uppercase animate-pulse">Cargando PokéDex...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl font-bold uppercase text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <>
      <section className="flex flex-col xl:flex-row gap-4 mb-8">
        <div className="flex-1">
          <label className="flex items-center bg-white p-3 border-4 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-transform focus-within:translate-y-1 focus-within:shadow-none">
            <span className="material-symbols-outlined px-2 text-slate-500">search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 w-full text-lg font-bold uppercase placeholder:text-slate-400 text-slate-900 outline-none" 
              placeholder="BUSCAR POR NOMBRE O ID..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
        <div className="flex gap-2 pb-4 xl:pb-0 flex-wrap justify-start xl:justify-end xl:w-2/3">
          {Object.keys(typeColors).map((type) => (
            <button 
              key={type}
              onClick={() => handleTypeFilter(type)}
              className={`px-3 py-2 border-2 border-slate-900 text-[10px] font-bold uppercase whitespace-nowrap shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all rounded ${
                selectedType === type 
                  ? 'ring-2 ring-offset-2 ring-slate-900 translate-y-1 shadow-none ' + typeColors[type]
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="sm:col-span-2 lg:col-span-3">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600">
            Region activa: {activeRegion.label}
          </h3>
        </div>
        {paginatedPokemon.map((pokemon) => (
          <PokemonCard 
            key={pokemon.id}
            {...pokemon}
          />
        ))}
      </section>

      <footer className="flex justify-center py-8 mt-8">
        <div className="flex items-center gap-4 bg-slate-900 p-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 bg-white rounded-full hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-slate-900">arrow_back</span>
          </button>
          <span className="text-sm font-bold uppercase tracking-widest text-white px-4">
            PÁGINA {currentPage} DE {totalPages || 1}
          </span>
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 bg-white rounded-full hover:bg-slate-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="material-symbols-outlined text-slate-900">arrow_forward</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Home;
