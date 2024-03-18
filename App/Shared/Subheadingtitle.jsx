import { View, Text } from 'react-native'
import React from 'react'

export default function Subheadingtitle({subHeadngTitle,seeall}) {
  return (
    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20,marginBottom:15}}>
    <Text style={{fontSize:23,fontFamily:'outfit-bold',}}>{subHeadngTitle}</Text>
    {seeall?<Text style={{color:'#192ffc'}}>See All</Text>:null}
 </View>
  )
}