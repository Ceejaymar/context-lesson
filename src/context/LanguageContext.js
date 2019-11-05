import React, { Component, createContext } from 'react';

const LanguageContext = createContext();

class LanguageProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'english'
    }

    this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
  }

  changeLanguageHandler (e) {
    this.setState({ language: e.target.value });
  }

  render() {
    return (
      <LanguageContext.Provider value={{ ...this.state, changeLanguageHandler: this.changeLanguageHandler }}>
        { this.props.children }
      </LanguageContext.Provider>
    )
  }
}

const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {
      value => <Component languageContext={value} {...props} />
    }
  </LanguageContext.Consumer>
)

export {
  LanguageContext,
  LanguageProvider,
  withLanguageContext
}
