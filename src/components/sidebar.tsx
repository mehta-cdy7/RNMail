import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { View, Text } from 'react-native'
import React from 'react'

const Sidebar : React.FC<DrawerContentComponentProps> = () =>{
    return <View style={{backgroundColor:'yellow', flex:1}}></View>
}

export default Sidebar