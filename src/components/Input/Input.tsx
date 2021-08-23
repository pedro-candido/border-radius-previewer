import React from 'react' 
import { TextInput, View, Text, TextInputComponent } from 'react-native'

interface InputProps extends TextInputComponent{
    position: string
}

const Input = ({ position }: InputProps) => <View>
    <Text>{ position }</Text>
    <TextInput />
</View>

export default Input