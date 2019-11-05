import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext, withLanguageContext } from '../context/LanguageContext';

import './navbar.css';

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkmode, changeThemeHandler } = this.context;
    const { language } = this.props.languageContext;

    return (
      // <LanguageContext.Consumer>
      //   {
      //     value => (
      //       <nav className='nav' style={{ backgroundColor: isDarkmode ? 'firebrick' : 'palevioletred'}}>
      //         <h1>The language is {value.language}</h1>

      //         <label className='switch'>
      //           <input type='checkbox' onClick={changeThemeHandler} />
      //           <span className='slider round'></span>
      //         </label>
      //       </nav>
      //     )
      //   }
      // </LanguageContext.Consumer>
      // --------------------
      <nav className='nav' style={{ backgroundColor: isDarkmode ? 'firebrick' : 'palevioletred'}}>
        <h1>The language is {language}</h1>

        <label className='switch'>
          <input type='checkbox' onClick={changeThemeHandler} />
          <span className='slider round'></span>
        </label>
      </nav>
    );
  }
}

export default withLanguageContext(Navbar);
