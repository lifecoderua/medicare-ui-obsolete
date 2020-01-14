import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

import store from '../services/firebase.service';

interface State {
  patients: [],
}

export class PatientsScreen extends Component<any, State> {
  constructor(props) {
    super(props);
    this.state = {
      patients: [],
    };

    const db = store.db;

    db.collection("users").get().then((querySnapshot) => {
      const updatedPatientsList = [];
      // TODO: more efficient data-only push required
      querySnapshot.forEach((doc) => {
          updatedPatientsList.push(Object.assign({}, {key: doc.id}, doc.data()));
      });

      this.setState({patients: updatedPatientsList});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>I am the Patients screen</Text>
        <Text>Hello John Doe</Text>

        <FlatList 
          data={this.state.patients}
          renderItem={({item}) => <Text>{item.first} {item.last} @ {item.email}</Text>}
          ></FlatList>

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
