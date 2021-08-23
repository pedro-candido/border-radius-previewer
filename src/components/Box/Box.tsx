import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = () => (
  <View style={ styles.container }>
    <Text>Change my border-radius</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 200,
    backgroundColor: '#ccc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Box;
