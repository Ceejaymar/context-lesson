import React, { useState, createContext } from 'react';

const LanguageContext = createContext();

function LanguageProvider(props) {
  const [language, setLanguage] = useState('english');

  function changeLanguageHandler(e) {
    setLanguage(e.target.value);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguageHandler }}>
      { props.children }
    </LanguageContext.Provider>
  )
};

export {
  LanguageContext,
  LanguageProvider,
};
