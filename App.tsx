// platform setup
import './platform/firebase/firebase-preset';

import React from 'react';
import { 
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet, Text, View } from 'react-native';
import { WelcomeScreen } from './src/screens/welcome';
import { PatientsScreen } from './src/screens/patients';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthLoadingScreen from './src/screens/auth-loading';

const AppStack = createStackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Patients: {
    screen: PatientsScreen,
  },
});

// export default createAppContainer(AppNavigator);

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: WelcomeScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);


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
