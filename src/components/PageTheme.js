import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function PageTheme(props) {
  const { isDarkmode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkmode ? 'black' : 'white',
    height: '100vh',
    width: '100vw'
  }

  return (
    <div style={styles}>
      { props.children }
    </div>
  );
}

export default PageTheme;
