import React from 'react';

const Placeholder = ({ title }) => (
  <div className="flex flex-col items-center justify-center h-full text-center p-8 border-4 border-slate-900 bg-white rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <span className="material-symbols-outlined text-6xl mb-4 text-slate-300">construction</span>
    <h2 className="text-2xl font-bold uppercase mb-2">{title}</h2>
    <p className="text-slate-500 font-bold uppercase text-sm">Próximamente disponible</p>
  </div>
);

export default Placeholder;
