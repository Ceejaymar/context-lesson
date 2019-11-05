import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class PageTheme extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkmode } = this.context;
    const styles = {
      backgroundColor: isDarkmode ? 'black' : 'white',
      height: '100vh',
      width: '100vw'
    }

    return (
      <div style={styles}>
        { this.props.children }
      </div>
    );
  }
}

export default PageTheme;
