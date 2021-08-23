import React from 'react';

import { View } from 'react-native';

import { Input } from '../Input';

interface InputGroupProps {
    verticalAlign: 'top' | 'bottom',
}

const InputGroup = ({ verticalAlign }: InputGroupProps) => (
  <View>
    <Input position={`${verticalAlign}Left`} />
    <Input position={`${verticalAlign}Right`} />
  </View>
);

export default InputGroup;
