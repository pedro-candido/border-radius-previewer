import React from 'react';

import { View } from 'react-native';

import { Input } from '../Input';

interface InputGroupProps {
    verticalAlign: 'Top' | 'Bottom',
}

interface InputProps {
  position: 'borderTopRightRadius' | 'borderTopLeftRadius' | 'borderBottomLeftRadius' | 'borderBottomRightRadius',
}

const InputGroup = ({ verticalAlign }: InputGroupProps) => {
  const inputLeftPosition: () => InputProps = `border${verticalAlign}LeftRadius`;
  const inputRightPosition: () => InputProps = `border${verticalAlign}RightRadius`;

  return (
    <View>
      <Input position={inputLeftPosition} />
      <Input position={inputRightPosition} />
    </View>
  );
};

export default InputGroup;
