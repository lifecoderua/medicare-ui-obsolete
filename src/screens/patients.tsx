import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export class PatientsScreen extends Component<any> {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am the Patients screen</Text>
        <Text>Hello John Doe</Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
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
