import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the Welcome screen</Text>
        <Text>Hello <strong>John Dou</strong></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
