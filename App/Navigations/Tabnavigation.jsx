import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Appointment from '../Screens/Appointment';
import Explores from '../Screens/Explores';
import { FontAwesome } from '@expo/vector-icons';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function Tabnavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen name='Home' component={HomeNavigation}
        options={{
            tabBarIcon:({color,size})=>(<FontAwesome name="home" size={size} color={color} />)
        }}/>
        <Tab.Screen name='Explore' component={Explores} options={{
            tabBarIcon:({color,size})=>(<FontAwesome name="search" size={size} color={color} />)
        }}/>
        <Tab.Screen name='Appointment' component={Appointment} options={{
            tabBarIcon:({color,size})=>(<FontAwesome name="calendar" size={size} color={color} />)
        }}/>
    </Tab.Navigator>
  )
}