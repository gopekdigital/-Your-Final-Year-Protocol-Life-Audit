import React from 'react';
import { RoutePath } from '../types.ts';
import { Shield, BookOpen } from 'lucide-react';

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
          ? 'bg-[#FF3D00] border-b border-[#E03600] shadow-sm'
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
                ? 'bg-white text-[#FF3D00]'
                : 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950'
            }`}
          >
            G
          </div>
          <div className="flex flex-col">
            {isPaidPage ? (
              <span className="font-display font-bold tracking-wider text-[13px] sm:text-sm text-white uppercase leading-tight">
                GoPekDigital
              </span>
            ) : (
              <span className="font-display font-bold tracking-wider text-sm text-neutral-950 dark:text-white uppercase leading-tight">
                GoPek<span className="text-[#FF3D00]">.digital</span>
              </span>
            )}
            {currentPath !== '/' && (
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono-code">
                Execution Architecture
              </span>
            )}
          </div>
        </div>

        {/* Current Page Indicator (No Cross-Navigation) */}
        <div className="flex items-center">
          {currentPath === '/free' && (
            <div className="px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md flex items-center gap-1.5 bg-emerald-700 text-white dark:bg-emerald-500 dark:text-neutral-950 shadow-sm font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Life Audit</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold rounded">
                FREE
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
