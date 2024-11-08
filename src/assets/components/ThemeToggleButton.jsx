import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log("Initial theme from saved or system:", savedTheme ? savedTheme : (prefersDark ? "dark" : "light"));
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    console.log("Theme toggled by user. New theme:", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const applyTheme = (isDark) => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      console.log("Theme applied:", isDark ? "dark" : "light");
    };

    applyTheme(isDarkMode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('theme')) {
        const systemPrefersDark = e.matches;
        setIsDarkMode(systemPrefersDark);
        applyTheme(systemPrefersDark);
        console.log("System theme change detected:", systemPrefersDark ? "dark" : "light");
      } else {
        console.log("User preference in localStorage, ignoring system change");
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800
                 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none"
      aria-label="Toggle theme"
      style={{ zIndex: 50 }}
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-blue-600 w-6 h-6" />
      )}
    </button>
  );
}
