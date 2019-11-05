import React from 'react';

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar';
import Body from './components/body';
import PageTheme from './components/PageTheme';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageTheme>
          <Navbar />
          <Body />
        </PageTheme>
      </LanguageProvider>
    </ThemeProvider>
  );
}


export default App;
