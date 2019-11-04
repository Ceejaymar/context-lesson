import React, { Component } from 'react';

class body extends Component {
  render() {
    const styles = {
      main: {
        display: 'flex',
        justifyContent: 'center',

      },
      section: {
        backgroundColor: 'white',
        fontSize: '3em'
      }
    }

    return (
      <div style={styles.main}>
        <section style={styles.section}>
          <select> {/* Add value */}
            <option value="english">English</option>
            <option value="french">French</option>
            <option value="spanish">Spanish</option>
          </select>
          <h1>Hello!</h1>
          <p>I'm from the United States!</p>
        </section>
      </div>
    );
  }
}

export default body;
