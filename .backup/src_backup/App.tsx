/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { PaidSalesPage } from './pages/PaidSalesPage.tsx';
import { FreebieLandingPage } from './pages/FreebieLandingPage.tsx';
import { RoutePath } from './types.ts';

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/free')) {
        return '/free';
      }
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/free')) {
        setCurrentPath('/free');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: RoutePath) => {
    if (currentPath !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-800 dark:selection:text-amber-300">
        {/* Step 1 in Page Order: Top Navigation Header */}
        <Navbar currentPath={currentPath} onNavigate={navigateTo} />

        {/* Dynamic Route View */}
        <main className="flex-1">
          {currentPath === '/free' ? (
            <FreebieLandingPage onNavigate={navigateTo} />
          ) : (
            <PaidSalesPage onNavigate={navigateTo} />
          )}
        </main>

        {/* Global Footer */}
        <Footer currentPath={currentPath} onNavigate={navigateTo} />
      </div>
    </ThemeProvider>
  );
}
