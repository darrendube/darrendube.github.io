import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

/*
export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className="theme-changer"
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className="mode-container">
          <i className="gg-sun"></i>
          <i className="gg-moon"></i>
        </div>
      </label>
    )}
  </ThemeToggler>
)*/

var labelText = "Light Mode";

export default () => (
  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <div>
    
      <input id="s2" type="checkbox" class="switch" onChange={e => {
        toggleTheme(e.target.checked ? 'dark' : 'light')
        labelText = e.target.checked ? "Dark Mode" : 'Light Mode'

      }} checked={theme === 'dark'}/>
    <label for="s2">{labelText}</label>
    </div>
    )}
  </ThemeToggler>
)