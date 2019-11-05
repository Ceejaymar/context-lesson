import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const words = {
  english: {
    salutation: 'Hello!',
    aboutMe: 'I\'m from Brooklyn fam!'
  },
  french: {
    salutation: 'Bonjour!',
    aboutMe: 'le chat noir aime les oranges'
  },
  spanish: {
    salutation: 'Hola!',
    aboutMe: 'Me gusta bailar!'
  }
}

function Body() {
  const { language, changeLanguageHandler } = useContext(LanguageContext);
  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
    },
    section: {
      backgroundColor: 'white',
      fontSize: '3em',
    }
  }

  return (
    <div style={styles.main}>
      <section style={styles.section}>
        <select value={language} onChange={changeLanguageHandler}>
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>
        <h1>{ words[language].salutation}</h1>
        <p>{ words[language].aboutMe }</p>
      </section>
    </div>
  );
}

export default Body;
