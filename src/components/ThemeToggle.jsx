import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    className="text-2xl p-2 hover:scale-110 transition-transform"
    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
  style={{border:"none",background:"transparent",cursor:"pointer"}}>
    {theme === 'light' ? <FaMoon style={{color:"black"}} size={20}/> : <FaSun style={{color:"white"}} size={24}/>}
  </button>
  );
};

export default ThemeToggle;
