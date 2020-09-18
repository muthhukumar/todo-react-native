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
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MixpanelInstance} from 'react-native-mixpanel';

import Todos from './screens/todos';
import GstCalculator from './screens/gst-calculator';
import store from './redux/store';
import Completed from './screens/completed';
import ErrorBoundary from './components/ErrorBoundary/index';
import {genRandomData} from './gen-sample-data/index';

//const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const TopTab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <TopTab.Navigator initialRouteName="Todos">
      <TopTab.Screen name="Todos" component={Todos} />
      <TopTab.Screen name="Completed" component={Completed} />
    </TopTab.Navigator>
  );
}

class App extends React.Component {
  componentDidMount() {
    const mixpanelInstance = new MixpanelInstance(
      '5a3c154167245cd96bb79f037637af76',
    );
    mixpanelInstance.initialize().then(() => {
      global.mixpanel = mixpanelInstance;
      global.mixpanel.track('Application startup');
      genRandomData();
      console.log('\n');
      console.log(global.user);
      console.log('\n');
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Todos"
              activeColor="blue"
              barStyle={{backgroundColor: 'white'}}>
              <Tab.Screen name="Todos" component={TopTabs} />
              <Tab.Screen name="GstCalculator" component={GstCalculator} />
            </Tab.Navigator>
          </NavigationContainer>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
