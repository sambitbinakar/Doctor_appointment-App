import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen';
import HosDoctorList from '../Screens/HosDoctorListscreen';
import Hospitaldetail from '../Screens/Hospitaldetail';
import BookAppointment from '../Screens/BookAppointment';


const Stack=createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomeNavigation' component={HomeScreen}/>
        <Stack.Screen name='Hospital-Doctor-List' component={HosDoctorList}/>
        <Stack.Screen name='hospital-detail' component={Hospitaldetail}/>
        <Stack.Screen name='book-appointment' component={BookAppointment}/>
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})