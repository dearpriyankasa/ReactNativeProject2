import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn  from './Sign-In/SignIn';
import { SignUp } from './Sign-Up/SignUp';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const StackNavigation = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    initialRouteName: 'SignIn'
  }
)

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
}

const AppContainer = createAppContainer(StackNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stackNavigationStyle: {
    backgroundColor: '#1e3799',
  }
});
