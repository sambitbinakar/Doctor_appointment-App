import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Headerscreen() {
    
  return (
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <View style={{display:'flex',flexDirection:'row',gap:15,alignItems:'center'}}>
            <View style={{backgroundColor:'#ce1484', width:40,height:40,borderRadius:99}}>
                <Text style={{textAlign:'center',fontSize:25,padding:3,fontWeight:'500',color:'#fff'}}>S</Text>
            </View>
            <Text style={{fontSize:20,fontWeight:'500',fontFamily:'outfit-bold'}}>Hii 👋 Sambit</Text>
        </View>
        <Ionicons name="notifications-circle" size={40} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({})