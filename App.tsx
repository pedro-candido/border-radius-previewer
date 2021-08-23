/* eslint-disable no-use-before-define */
import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/redux/store/configureStore.store';

import { Box, InputGroup } from './src/components';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <InputGroup verticalAlign="top" />
        <Box />
        <InputGroup verticalAlign="bottom" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
