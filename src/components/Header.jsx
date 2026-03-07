import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const REGIONS = [
  { key: 'kanto', label: 'Kanto' },
  { key: 'johto', label: 'Johto' },
  { key: 'hoenn', label: 'Hoenn' },
  { key: 'sinnoh', label: 'Sinnoh' },
];

const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedRegion = searchParams.get('region') || 'kanto';

  const handleRegionChange = (regionKey) => {
    navigate(`/?region=${regionKey}`);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-red-600 px-6 md:px-20 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-4 text-white">
          <div className="size-8 bg-white p-1 rounded-sm border-2 border-black">
            <span 
              className="material-symbols-outlined text-primary text-2xl" 
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              capture
            </span>
          </div>
          <h2 className="text-white text-2xl font-bold leading-tight tracking-widest uppercase italic">
            PokéDex
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {REGIONS.map((region) => (
            <Link
              key={region.key}
              className={`text-sm font-bold uppercase hover:underline ${
                selectedRegion === region.key ? 'text-white' : 'text-white/80'
              }`}
              to={`/?region=${region.key}`}
            >
              {region.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-3 md:hidden relative z-40">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full bg-white border-2 border-black rounded-sm px-4 py-2 text-sm font-bold uppercase text-slate-900 flex justify-between items-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all"
        >
          <span>Región: {REGIONS.find(r => r.key === selectedRegion)?.label}</span>
          <span className="material-symbols-outlined">{isMenuOpen ? 'expand_less' : 'expand_more'}</span>
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-2 border-black border-t-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {REGIONS.map((region) => (
              <button
                key={region.key}
                onClick={() => handleRegionChange(region.key)}
                className={`w-full text-left px-4 py-3 text-sm font-bold uppercase hover:bg-slate-200 border-b-2 border-slate-100 last:border-0 ${
                  selectedRegion === region.key ? 'bg-slate-100 text-primary' : 'text-slate-900'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
