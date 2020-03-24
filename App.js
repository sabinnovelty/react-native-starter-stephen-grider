import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './src/Screen/Home';
import Component from './src/Screen/Component';
import List from './src/Screen/List';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

const App = () => {
  return (
    <View>
      <Text>Reactjs Hook</Text>
    </View>
  );
}


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Component: { screen: Component },
  List: { screen: List }
}, {
  initialRouteName: 'Home'
})

const styles = StyleSheet.create({
});

export default createAppContainer(AppNavigator)
