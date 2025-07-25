import { useEffect, useState } from 'react';

export const useDarkMode = () => {
   const [isDark, setIsDark] = useState(() => {
      return localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches;
   });

   useEffect(() => {
      const root = document.documentElement;
      if (isDark) {
         root.classList.add('dark');
         localStorage.setItem('theme', 'dark');
      } else {
         root.classList.remove('dark');
         localStorage.setItem('theme', 'light');
      }
   }, [isDark]);

   const toggleDarkMode = () => setIsDark(prev => !prev);

   return { isDark, toggleDarkMode };
};
