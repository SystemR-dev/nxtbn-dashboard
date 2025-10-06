// src/App.jsx

import { useState, useEffect, createContext } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

export const ThemeContext = createContext(null);

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
        {/* MODIFICATION 1: Changed h-screen to min-h-screen */}
        <div className="flex min-h-screen"> 
          <Sidebar />
          {/* MODIFICATION 2: Removed overflow-y-auto from main element */}
          <main className="flex-1"> 
            <Header />
            <Dashboard />
          </main>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;