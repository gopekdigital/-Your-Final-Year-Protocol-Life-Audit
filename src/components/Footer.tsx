import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#E2E2E2] dark:border-[#222634] bg-[#F4F4F4] dark:bg-[#0B0C0F] py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-600 dark:text-neutral-400">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center font-display font-black text-sm">
            G
          </div>
          <span className="font-display font-bold text-sm tracking-wide text-neutral-900 dark:text-white uppercase">
            GoPek<span className="text-[#FF3D00]">.digital</span>
          </span>
        </div>

        <p className="text-neutral-500 dark:text-neutral-500 font-mono text-[11px]">
          © {new Date().getFullYear()} GoPek.digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
