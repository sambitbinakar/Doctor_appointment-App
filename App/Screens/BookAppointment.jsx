import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Appointhospitalinfo from '../component/Appointhospitalinfo';
import ActionButton from '../Shared/ActionButton';
import HorizontalLine from '../Shared/HorizontalLine';
import Bookingsection from '../component/Bookingsection';

export default function BookAppointment() {
    const param = useRoute().params;
    console.log(param)
  return (
    <ScrollView style={{padding:10}}>
      <Appointhospitalinfo hospital={param.hospital}/>
      <ActionButton/>
      <HorizontalLine/>
      <Bookingsection hospital={param.hospital}/>
    </ScrollView >
  )
}