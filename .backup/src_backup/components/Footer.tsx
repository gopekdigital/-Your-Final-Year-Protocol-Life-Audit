import React from 'react';
import { RoutePath } from '../types.ts';

interface FooterProps {
  currentPath?: RoutePath;
  onNavigate?: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPath, onNavigate }) => {
  return (
    <footer className="border-t border-[#E6DFD3] dark:border-[#222634] bg-[#F4EDE0]/70 dark:bg-[#0B0C0F] py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-display font-black text-sm">
            G
          </div>
          <span className="font-display font-bold text-sm tracking-wide text-neutral-900 dark:text-white uppercase">
            GoPek<span className="text-amber-500">.digital</span>
          </span>
        </div>

        {onNavigate && (
          <div className="flex items-center gap-6 font-medium text-xs">
            <button
              onClick={() => onNavigate('/')}
              className={`hover:text-amber-600 dark:hover:text-amber-400 transition-colors cursor-pointer ${
                currentPath === '/' ? 'text-neutral-950 dark:text-white font-bold' : ''
              }`}
            >
              YOUR FINAL YEAR PROTOCOL ($27)
            </button>
            <span className="text-neutral-400 dark:text-neutral-600">·</span>
            <button
              onClick={() => onNavigate('/free')}
              className={`hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer ${
                currentPath === '/free' ? 'text-neutral-950 dark:text-white font-bold' : ''
              }`}
            >
              BEFORE THE YEAR ENDS (100% FREE)
            </button>
          </div>
        )}

        <p className="text-neutral-500 dark:text-neutral-500 font-mono text-[11px]">
          © {new Date().getFullYear()} GoPek.digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
