import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const REGIONS = [
  { key: 'kanto', label: 'Kanto' },
  { key: 'johto', label: 'Johto' },
  { key: 'hoenn', label: 'Hoenn' },
  { key: 'sinnoh', label: 'Sinnoh' },
];

const Header = () => {
  const [searchParams] = useSearchParams();
  const selectedRegion = searchParams.get('region') || 'kanto';

  return (
    <header className="flex items-center justify-between ... bg-red-600 px-6 md:px-20 py-4 sticky top-0 z-50">
      <div className="flex items-center gap-8">
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
 
    </header>
  );
};

export default Header;
