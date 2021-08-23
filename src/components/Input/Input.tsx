import React from 'react' 
import { TextInput, View, Text, TextInputComponent, StyleSheet } from 'react-native'

interface InputProps extends TextInputComponent{
    position: 'topRight' | 'topLeft' | 'bottomLeft' | 'bottomRight'
}

const Input = ({ position }: InputProps) => {

    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
        }
    })

    return( 
        <View>
            <Text>{ position }</Text>
            <TextInput />
        </View>
    )
}



export default Input