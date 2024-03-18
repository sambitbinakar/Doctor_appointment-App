import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Search({setSearchText}) {
  const [searchInput,setSearchInput]=useState();
  return (
    <View style={{marginTop:10}}>
      <View style={{display:'flex',flexDirection:'row',gap:8,alignItems:'center',borderWidth:0.7,borderColor:'#c9bfbf',padding:10,borderRadius:10}}>
        <FontAwesome name="search" size={20} color="#757575" />
        <TextInput placeholder='Search'
        onChangeText={(value)=>setSearchInput(value)}
        onSubmitEditing={()=>setSearchText(searchInput)}
        style={{width:'100%',fontFamily:'outfit-regular'}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})