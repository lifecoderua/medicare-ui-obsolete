import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

interface State {
  email: string,
  password: string,
}

export class WelcomeScreen extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I am the Welcome screen</Text>
        <Text>Hello <strong>John Doe</strong></Text>
        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          />
        <TextInput
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          />
        <Text>{this.state.email} | {this.state.password}</Text>
        <Button
          title="Log In"
          onPress={() => console.log('Submit:', this.state)}
        ></Button>
        <TouchableOpacity
          onPress={() => console.log('Submit:', this.state)}>
          <Text>Press me for submit</Text>
        </TouchableOpacity>
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
