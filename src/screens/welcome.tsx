import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

import store from '../services/firebase.service';

interface State {
  email: string,
  password: string,

  persistence: string,
}

export class WelcomeScreen extends Component<any, State> {
  private db;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

      persistence: 'Checking offline capabilities',
    };

    this.dbRead();
  }

  async dbRead() {
    const db = store.db;
    this.db = db;

    await db.disableNetwork();
    console.log('network disabled');

    await db.enableNetwork();
    console.log('network enabled');

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

  async storeUser() {
    console.log('Write started');
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    try {
      const docRef = await Promise.race([
        this.db.collection("users").add({
          email: this.state.email,
          first: "Porta",
          last: "war",
          born: 1215
        }),
        timeout(5000)
      ]);

      if (docRef) {
        console.log("Document written with ID: ", docRef.id);
      } else {
        console.log('write stopped by timeout');
      }

    } catch(error) {
      console.error("Error adding document: ", error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I am the Welcome screen</Text>
        <Text>Hello John Doe</Text>
        <Text>{this.state.persistence}</Text>
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
          onPress={() => {
              this.storeUser();
              console.log('Submit:', this.state);
            }
          }>
          <Text>Press me for submit</Text>
        </TouchableOpacity>

        <Button
          title="Go to Patients"
          onPress={() => this.props.navigation.navigate('Patients')}
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
