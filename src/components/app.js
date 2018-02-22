import React from 'react';
import logo from '../logo.svg';

let styles = {
  app: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#222',
    color: 'white',
    height: 150,
    padding: 20
  },
  intro: {
    fontSize: 'large'
  }
};

class App extends React.Component {
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.header}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p style={styles.intro}>
          To get started, edit <code>src/index.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
