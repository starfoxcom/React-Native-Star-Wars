/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './features/tab_navigation/tab_navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




function App(): JSX.Element {

  return (
    <GestureHandlerRootView style={{flex:1}}>

      <NavigationContainer>

        <TabNavigator />

      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
