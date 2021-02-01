import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import "react-toggle/style.css" 
import Toggle from 'react-toggle';



const ICONS = {
  checked: <img src="/assets/moon.svg" alt="dark mode" />,
  unchecked: <img src="/assets/sun.svg" alt="light mode" />,
};


export default () => (
  <div className="theme-toggler">
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <Toggle checked={theme === 'dark'} icons={ICONS} onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')} />
    )}
  </ThemeToggler></div>
)

