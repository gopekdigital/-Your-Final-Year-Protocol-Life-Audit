import React from 'react';
import { RoutePath } from '../types.ts';
import { Shield, BookOpen } from 'lucide-react';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E2E2] dark:border-neutral-800 bg-[#F4F4F4]/95 dark:bg-[#0D0E11]/95 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div 
          onClick={() => onNavigate('/')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-display font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
            G
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-wider text-sm text-neutral-950 dark:text-white uppercase leading-tight">
              GoPek<span className="text-[#FF3D00]">.digital</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-mono-code">
              Execution Architecture
            </span>
          </div>
        </div>

        {/* Navigation tabs */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => onNavigate('/')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
              currentPath === '/'
                ? 'bg-neutral-900 text-white dark:bg-[#FF3D00] dark:text-white shadow-sm font-bold'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Final Year Protocol</span>
            <span className="px-1.5 py-0.2 text-[10px] bg-[#FF3D00]/20 text-[#FF3D00] dark:bg-black/30 dark:text-white rounded font-mono font-bold">
              $27
            </span>
          </button>

          <button
            onClick={() => onNavigate('/free')}
            className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center gap-1.5 cursor-pointer ${
              currentPath === '/free'
                ? 'bg-emerald-700 text-white dark:bg-emerald-500 dark:text-neutral-950 shadow-sm font-bold'
                : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Life Audit</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold rounded">
              FREE
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};
