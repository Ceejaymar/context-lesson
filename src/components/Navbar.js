import React, { Component } from 'react';

import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='nav'>
        <h1>The language is English</h1>

        <label className='switch'>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
      </nav>
    );
  }
}

export default Navbar;
