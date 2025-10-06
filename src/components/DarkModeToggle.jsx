import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <div className="px-4 py-2 text-sm font-medium text-text-muted-light dark:text-text-muted-dark">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="material-icons mr-3">dark_mode</span>
          <span>Dark Mode</span>
        </div>
        <label htmlFor="dark-mode-toggle" className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            id="dark-mode-toggle" 
            className="sr-only peer" 
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/50 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
        </label>
      </div>
    </div>
  );
}