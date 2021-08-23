import React from 'react';

import { View } from 'react-native';

import { Input } from '../Input';

interface InputGroupProps {
    verticalAlign: 'top' | 'bottom',
    radius: 'borderTopLeftRadius' | 'borderTopRightRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius'
}

const InputGroup = ({ verticalAlign, radius }: InputGroupProps) => (
  <View>
    <Input radius={radius} position={`${verticalAlign}Left`} />
    <Input radius={radius} position={`${verticalAlign}Right`} />
  </View>
);

export default InputGroup;
