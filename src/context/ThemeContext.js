import React, { Component, createContext } from 'react';

const ThemeContext = createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDarkmode: false
    }

    this.changeThemeHandler = this.changeThemeHandler.bind(this);
  }

  changeThemeHandler (e) {
    this.setState({ isDarkmode: !this.state.isDarkmode})
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, changeThemeHandler: this.changeThemeHandler }}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

export {
  ThemeContext,
  ThemeProvider
}
