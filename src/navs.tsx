import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Sidebar from './components/sidebar';
import MainScreen from './screens/Main';

export type HomeDrawerParamList ={
    Main:{}
}

export type RootStackParamList = {
    Home:NavigatorScreenParams<HomeDrawerParamList>
    Details:{
        noteId:string
    }
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<HomeDrawerParamList>();

function Home(){
    return (
        <Drawer.Navigator initialRouteName='Main'
        screenOptions={{
            drawerType:'back',
            swipeEdgeWidth :200,
        }}
        drawerContent={props=><Sidebar {...props} />}
        >
            <Drawer.Screen 
            name="Main"
            component={MainScreen}
            options={{
                headerShown:false
            }}/>
        </Drawer.Navigator>
    )
}

export default function Navigations(){
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home"
                component={Home}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
} 