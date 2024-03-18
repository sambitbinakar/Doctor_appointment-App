import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from './LoginScreen'
import PageHeader from '../Shared/PageHeader'
import Globalapi from './../Services/Globalapi'
export default function Appointment() {
  const [appointment,setappointment]=useState([])
useEffect(()=>
  getappointment()
)
  const getappointment=()=>{
    Globalapi.getAppointments().then(resp=>{
      setappointment(resp.data.data)
    })
  }
  return (
    <View style={{padding:10}}>
      <PageHeader title={'My Appointments'}/>
      <FlatList
      data={appointment}
      renderItem={({item})=>(
        <View style={{display:'flex',flexDirection:'row',gap:10 ,padding:8,borderRadius:20,backgroundColor:'#fff',marginBottom:10}}>
            <View>
              <Text style={{fontSize:18,fontFamily:'outfit-medium'}}>{item.attributes.Date}</Text>
              <Text  style={{fontSize:15,fontFamily:'outfit-medium'}}>{item.attributes.Time}</Text>
            </View>
          </View>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({})