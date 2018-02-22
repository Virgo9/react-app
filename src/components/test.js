import React from 'react';
import { View } from 'react-native';

class Test extends React.Component {
  render() {
    return (
      <View style={{height: 300}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

export default Test;
