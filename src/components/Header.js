import React from 'react';
import logo from '../logo.svg';

let styles = {
  container: {
    textAlign: 'center'
  },
  content: {
    backgroundColor: '#222',
    color: 'white',
    height: 150,
    padding: 20
  },
  intro: {
    fontSize: 'large'
  }
};

class Header extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <img src={logo} className="Header-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p style={styles.intro}>
          To get started, edit <code>src/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Header;
