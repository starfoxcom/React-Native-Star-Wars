/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './features/tab_navigation/tab_navigator';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>{

      <TabNavigator />
    }
    </NavigationContainer>
  );
}

export default App;
