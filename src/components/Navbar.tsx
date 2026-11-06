import React from 'react';
import { RoutePath } from '../types.ts';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const isPaidPage = currentPath === '/';

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-colors ${
        isPaidPage
          ? 'bg-black border-b border-neutral-900 shadow-sm'
          : 'border-b border-[#E2E2E2] dark:border-neutral-800 bg-[#F4F4F4]/95 dark:bg-[#0D0E11]/95'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => {
            onNavigate(currentPath);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div
            className={`w-7.5 h-7.5 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-display font-black text-base shadow-sm group-hover:scale-105 transition-transform ${
              isPaidPage
                ? 'bg-neutral-950 text-[#FF3D00] border border-[#FF3D00]/40'
                : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950'
            }`}
          >
            G
          </div>
          <div className="flex flex-col">
            <span
              className={`font-display font-bold tracking-wider text-[13px] sm:text-sm uppercase leading-tight ${
                isPaidPage ? 'text-[#FF3D00]' : 'text-neutral-950 dark:text-white'
              }`}
            >
              GoPekDigital
            </span>
          </div>
        </div>

        {/* Right Header Area (Clean — No Unwanted Text or Badges) */}
        <div className="flex items-center" />
      </div>
    </header>
  );
};
