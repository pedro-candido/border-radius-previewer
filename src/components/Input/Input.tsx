import React from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/redux/store/configureStore.store';

interface InputProps{
    position: 'borderTopRightRadius' | 'borderTopLeftRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius',
}

const Input = ({ position }: InputProps) => {
  const borders = useSelector((state: RootState) => state.borders);
  const dispatch = useDispatch();

  let borderStyle;

  const styles = StyleSheet.create({
    input: {
      borderColor: '#ccc',
      borderWidth: 2,
      padding: 10,
      borderRadius: borders[position],
    },
  });

  position === 'borderTopRightRadius' && (borderStyle = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 100,
      display: 'flex',
      minWidth: 90,
      maxWidth: 90,
      marginBottom: 5,
    },
  }));

  position === 'borderTopLeftRadius' && (borderStyle = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      right: 100,
      display: 'flex',
      minWidth: 90,
      maxWidth: 90,
      marginBottom: 5,
    },
  }));

  position === 'borderBottomLeftRadius' && (borderStyle = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      right: 100,
      display: 'flex',
      textAlign: 'left',
      minWidth: 90,
      maxWidth: 90,
      marginTop: 5,
    },
  }));

  position === 'borderBottomRightRadius' && (borderStyle = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 100,
      display: 'flex',
      minWidth: 90,
      maxWidth: 90,
      marginTop: 5,
    },
  }));

  return (
    <View style={borderStyle?.container}>
      <Text>{ position }</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;
