import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes('/pokemon/');

  return (
    <aside className={`w-full md:w-80 flex-col gap-6 sticky top-24 h-fit ${isDetailPage ? 'hidden md:flex' : 'flex'}`}>
      <div className="bg-slate-200 dark:bg-slate-800 border-4 border-slate-900 rounded-xl flex flex-col overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center p-8 pb-6 border-b-4 border-slate-900 bg-slate-200">
          <div className="size-32 bg-white border-4 border-slate-900 rounded-full flex items-center justify-center overflow-hidden mb-4 shadow-sm">
            <img 
              alt="Trainer profile sprite" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb8Eho5zGXVxDzuPVd4CF3qYXRDFdHoZzLK8O_NPFHxUJU8y8RZjAQV9qrJXZf_XZhGOjMprFtlvzLv4AuWGRLjQz2swgxDfC4lrikBVlwWN0t9UUJ5WCXKxYXEmcJgi3gfmU_92JXyIPO6bGhGaGZ3jNBp20huz6e7KuYBRCke3up1hqYNqpc7kFxXzUetHh4aYioqV7ompX5R-yUcbskhHkpmUIAA9XeLoTT0bpooUAb5e1kAAW0jGDenwxjdFqQECdSn4LfId0"
            />
          </div>
          <h1 className="text-slate-900 text-xl font-bold uppercase tracking-tight text-center">ENTRENADOR RED</h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1 text-center">PUEBLO PALETA, KANTO</p>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col p-6 gap-3 bg-slate-200">
          <Link 
            className="flex items-center gap-3 px-4 py-3 bg-primary text-white border-2 border-slate-900 rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all group" 
            to="/"
          >
            <span className="text-black material-symbols-outlined">grid_view</span>
            <span className="text-black text-sm font-bold uppercase tracking-wide">TODOS LOS POKÉMON</span>
          </Link>
          <Link 
            className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors group" 
            to="/favorites"
          >
            <span className="material-symbols-outlined">favorite</span>
            <span className="text-sm font-bold uppercase tracking-wide group-hover:underline decoration-2 underline-offset-4">FAVORITOS</span>
          </Link>
          <Link 
            className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors group" 
            to="/badges"
          >
            <span className="material-symbols-outlined">shield</span>
            <span className="text-sm font-bold uppercase tracking-wide group-hover:underline decoration-2 underline-offset-4">MEDALLAS DE GIMNASIO</span>
          </Link>
          <Link 
            className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:text-slate-900 transition-colors group" 
            to="/items"
          >
            <span className="material-symbols-outlined">work</span>
            <span className="text-sm font-bold uppercase tracking-wide group-hover:underline decoration-2 underline-offset-4">MOCHILA DE OBJETOS</span>
          </Link>
        </nav>
        
        {/* Progress */}
        <div className="p-6 pt-0 bg-slate-200">
          <div className="flex justify-between items-center text-[10px] font-bold uppercase mb-1 tracking-widest text-slate-600">
            <span>PROGRESO DE LA POKÉDEX</span>
            <span>151 / 151</span>
          </div>
          <div className="w-full bg-slate-900 h-4 border-2 border-slate-900 rounded-full overflow-hidden p-0.5 bg-opacity-20">
            <div className="bg-primary h-full w-full rounded-full"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
