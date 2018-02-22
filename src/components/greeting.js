import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

class CommonText extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      })
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.name : '';
    return (
      <Text>{display}</Text>
    );
  }
}
class Greeting extends Component {
  render() {
    return (
      <View>
        <CommonText name="first" />
        <CommonText name="two" />
        <Text style={styles.bigblue}>three</Text>
        <Text style={styles.red}>four</Text>
        <Text style={[styles.red, styles.bigblue]}>five</Text>
        <Text style={[styles.bigblue, styles.red]}>six</Text>
      </View> // View 常用作其他组件的容器，帮助控制布局和样式 style="{{alignItems: 'center'}}"???
    );
  }
}

export default Greeting;
