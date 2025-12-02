import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="text-2xl p-2 hover:scale-110 transition-transform border-none bg-transparent cursor-pointer"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className="text-slate-900" size={20} />
      ) : (
        <FaSun className="text-yellow-300" size={24} />
      )}
    </button>
  );
};

export default ThemeToggle;
