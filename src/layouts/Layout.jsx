import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display retro-grid bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex flex-1 flex-col md:flex-row gap-8 p-4 md:p-10 max-w-7xl mx-auto w-full">
          <Sidebar />
          <div className="flex-1 flex flex-col gap-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
