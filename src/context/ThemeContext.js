import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [isDarkMode, setDarkMode ] = useState(false);

  function changeThemeHandler (e) {
    setDarkMode(!this.state.isDarkmode);
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, changeThemeHandler }}>
      { props.children }
    </ThemeContext.Provider>
  )
};

export {
  ThemeContext,
  ThemeProvider
};
