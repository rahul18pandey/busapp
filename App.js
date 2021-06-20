/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native';

import SearchResults from './src/screens/SearchResults';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch' 

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <DestinationSearch />
    </>
  );
};

export default App;
