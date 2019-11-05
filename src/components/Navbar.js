import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';

import './navbar.css';

function Navbar() {
  const { isDarkmode, changeThemeHandler } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <nav className='nav' style={{ backgroundColor: isDarkmode ? 'firebrick' : 'palevioletred'}}>
      <h1>The language is {language}</h1>

      <label className='switch'>
        <input type='checkbox' onClick={changeThemeHandler} />
        <span className='slider round'></span>
      </label>
    </nav>
  );
}

export default Navbar;
