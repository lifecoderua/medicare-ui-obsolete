// platform setup
import './platform/firebase/firebase-preset';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens/welcome';
import { PatientsScreen } from './src/screens/patients';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Patients: {
    screen: PatientsScreen,
  },
});

export default createAppContainer(AppNavigator);

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <Text>2. Open up App.tsx to start working on your app!</Text>
//       <WelcomeScreen/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
