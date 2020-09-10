/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Home from './screens/home';
import store from './redux/store';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Provider store={store}>
          <Home />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
