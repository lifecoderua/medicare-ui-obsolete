import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore';

interface State {
  email: string,
  password: string,

  persistence: string,
}

export class WelcomeScreen extends Component<{}, State> {
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
    
    // not a function on iOS
    // firebase.analytics();

    // TODO: indicate SYNC state. Check
    // firestore.SnapshotMetadata .fromCache : bool / .hasPendingWrites : bool

    const db = firebase.firestore();
    this.db = db;

    try {
      await db.enablePersistence();
      this.setState({persistence: 'Offline support activated!'});
    } catch(err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
            this.setState({persistence: 'Another tab is open, please close one of the tabs!'})
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
            this.setState({persistence: 'Offline support UNAVAILABLE!'})
        }
    };

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
