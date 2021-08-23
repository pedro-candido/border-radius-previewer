import React from 'react'

import { View, Text } from 'react-native'

import { Input } from '../Input'

const InputGroup = () => <View>
    <Input position='leftTop' />
    <Input position='rightTop' />
    <Input position='leftBottom' />
    <Input position='rightBottom' />
</View>