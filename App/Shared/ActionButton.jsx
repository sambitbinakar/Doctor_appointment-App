import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Subheadingtitle from './Subheadingtitle';

export default function ActionButton() {
    const actionbtnlist=[
        {
            id:1,
            name:'Website',
            icon:'earth'
        },
        {
            id:2,
            name:'phone',
            icon:'call'
        },
        {
            id:3,
            name:'Email',
            icon:'chatbubble-ellipses'
        },
        {
            id:4,
            name:'Direction',
            icon:'map'
        },
        {
            id:5,
            name:'Share',
            icon:'share'
        },
    ]
    const onPress=()=>{
        console.log("clicked")
    }
  return (
    <View style={{marginTop:30}}>
      <FlatList data={actionbtnlist}
      numColumns={5}
      columnWrapperStyle={{
        flex:1,
        justifyContent:'space-between'
      }}
      renderItem={({item})=>(
        <TouchableOpacity onPress={onPress} >
            <View style={{ backgroundColor:'#afc3f7',padding:12,borderRadius:90,alignItems:'center'}}>
            <Ionicons name={item.icon} size={23} color="blue" />
            </View>
            <Text style={{fontSize:13,fontFamily:'outfit-semibold',textAlign:'center',marginTop:10}}>{item.name}</Text>
        </TouchableOpacity>
       )}/>
       
    </View>
  )
}

const styles = StyleSheet.create({})