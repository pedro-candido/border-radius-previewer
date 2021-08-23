import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';

interface InputProps{
    position: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight',
    radius: 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius',
}

const Input = ({ position, radius, radiusSize }: InputProps) => {
  let styles;
  position === 'topRight' && (styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 90,
      display: 'flex',
      width: 100,
      alignItems: 'flex-end',
    },
  }));

  position === 'topLeft' && (styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      right: 100,
      display: 'flex',
      width: 85,
      alignItems: 'flex-start',
    },
  }));

  position === 'bottomLeft' && (styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 100,
      display: 'flex',
      textAlign: 'left',
    },
  }));

  position === 'bottomRight' && (styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 100,
      display: 'flex',
    },
  }));

  return (
    <View style={styles?.container}>
      <Text>{ position }</Text>
      <TextInput />
    </View>
  );
};

export default Input;
