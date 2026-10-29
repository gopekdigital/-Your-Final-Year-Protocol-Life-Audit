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
    return 'light'; // Default to light mode per specification
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
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`flex items-center justify-center my-3.5 ${className}`}>
      <div 
        role="group" 
        aria-label="Theme selection"
        className="inline-flex items-center p-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-200/80 dark:bg-neutral-800/90 shadow-sm transition-all"
      >
        <button
          type="button"
          onClick={() => theme !== 'light' && toggleTheme()}
          aria-pressed={theme === 'light'}
          className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
            theme === 'light'
              ? 'bg-white text-neutral-900 shadow-md ring-1 ring-black/5 font-bold'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
          }`}
        >
          <Sun className={`w-3.5 h-3.5 ${theme === 'light' ? 'text-amber-500 fill-amber-500' : 'text-neutral-500'}`} />
          <span>Light</span>
        </button>
        <button
          type="button"
          onClick={() => theme !== 'dark' && toggleTheme()}
          aria-pressed={theme === 'dark'}
          className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
            theme === 'dark'
              ? 'bg-neutral-950 text-amber-300 shadow-md ring-1 ring-white/10 font-bold'
              : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
          }`}
        >
          <Moon className={`w-3.5 h-3.5 ${theme === 'dark' ? 'text-amber-400 fill-amber-400' : 'text-neutral-400'}`} />
          <span>Dark</span>
        </button>
      </div>
    </div>
  );
};
