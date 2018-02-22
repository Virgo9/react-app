import React from 'react';
import { Image } from 'react-native';

class Bananas extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <div>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Image source={require('../logo.svg')} style={{width: 193, height: 110}} />
      </div> // JSX语句
    );
  }
}

export default Bananas;
