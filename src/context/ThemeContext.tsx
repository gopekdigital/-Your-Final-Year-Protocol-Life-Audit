import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '../types.ts';
import { Sun, Moon } from 'lucide-react';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'gopek_digital_theme_preference';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem(THEME_STORAGE_KEY);
        if (saved === 'dark' || saved === 'light') {
          return saved;
        }
      }
    } catch {
      // ignore
    }
    return 'dark'; // Default to dark mode for first-time visitors per specification
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
    
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'hero';
  accent?: 'orange' | 'purple';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  variant = 'default',
  accent = 'orange',
}) => {
  const { theme, toggleTheme } = useTheme();
  const isHero = variant === 'hero';
  const activeButtonClass =
    accent === 'purple'
      ? 'bg-[#3D1073] text-white ring-1 ring-inset ring-purple-300/35 shadow-[0_2px_12px_rgba(61,16,115,0.55)] font-bold'
      : 'bg-[#FF3D00] text-white shadow-[0_2px_10px_rgba(255,61,0,0.45)] font-bold';

  return (
    <div className={`flex items-center justify-center ${isHero ? 'my-0' : 'my-3.5'} ${className}`}>
      <div 
        role="group" 
        aria-label="Theme selection"
        className={
          isHero
            ? `inline-flex items-center p-[3px] rounded-full border backdrop-blur-md transition-all ${
                theme === 'dark'
                  ? 'bg-black border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.65)]'
                  : 'bg-white border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
              }`
            : 'inline-flex items-center p-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-black/60 backdrop-blur-md shadow-sm transition-all'
        }
      >
        <button
          type="button"
          onClick={() => theme !== 'light' && toggleTheme()}
          aria-pressed={theme === 'light'}
          className={`flex items-center ${
            isHero ? 'gap-1 px-3 py-1 text-[11px] leading-4' : 'gap-1.5 px-4 py-1.5 text-xs'
          } font-semibold rounded-full transition-all duration-200 cursor-pointer ${
            theme === 'light'
              ? activeButtonClass
              : isHero
                ? 'text-white/85 hover:text-white hover:bg-white/10'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
          }`}
        >
          <Sun
            className={`${isHero ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${
              theme === 'light'
                ? 'text-white fill-white'
                : isHero
                  ? 'text-white/80'
                  : 'text-neutral-500'
            }`}
          />
          <span>Light</span>
        </button>
        <button
          type="button"
          onClick={() => theme !== 'dark' && toggleTheme()}
          aria-pressed={theme === 'dark'}
          className={`flex items-center ${
            isHero ? 'gap-1 px-3 py-1 text-[11px] leading-4' : 'gap-1.5 px-4 py-1.5 text-xs'
          } font-semibold rounded-full transition-all duration-200 cursor-pointer ${
            theme === 'dark'
              ? activeButtonClass
              : isHero
                ? 'text-neutral-700 hover:text-neutral-950 hover:bg-black/5'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
          }`}
        >
          <Moon
            className={`${isHero ? 'w-3 h-3' : 'w-3.5 h-3.5'} ${
              theme === 'dark'
                ? 'text-white fill-white'
                : isHero
                  ? 'text-neutral-600'
                  : 'text-neutral-400'
            }`}
          />
          <span>Dark</span>
        </button>
      </div>
    </div>
  );
};
