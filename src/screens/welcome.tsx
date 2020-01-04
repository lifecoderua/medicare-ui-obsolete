import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

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

    this.dbRead();
  }

  async dbRead() {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyAYhQBOC2BdyH5KN29cfec8H1DFG_3DbkM",
      authDomain: "medicare-4ccfe.firebaseapp.com",
      databaseURL: "https://medicare-4ccfe.firebaseio.com",
      projectId: "medicare-4ccfe",
      storageBucket: "medicare-4ccfe.appspot.com",
      messagingSenderId: "793358878810",
      appId: "1:793358878810:web:3747de3a7947eaadc83063",
      measurementId: "G-DYLBCH4VKE"
    };

    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    const db = firebase.firestore();

    // db.collection("users").add({
    //   first: "Ada",
    //   last: "Lovelace",
    //   born: 1815
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });

    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    });
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
