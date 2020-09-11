/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Todos from './screens/todos';
import Completed from './screens/completed';
import GstCalculator from './screens/gst-calculator';
import store from './redux/store';

const TopTab = createMaterialTopTabNavigator();

function TodosTabs() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Todos" component={Todos} />
      <TopTab.Screen name="Completed" component={Completed} />
    </TopTab.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Todos">
          <Tab.Screen name="Todos" component={Todos} />
          <Tab.Screen name="GstCalculator" component={GstCalculator} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
