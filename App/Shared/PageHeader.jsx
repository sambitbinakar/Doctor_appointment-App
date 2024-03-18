import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PageHeader({title}) {
    const navigation=useNavigation();
  return (
    <View style={{display:'flex',flexDirection:'row',gap:10}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}><Ionicons name="arrow-back-circle-outline" size={35} color="black" /></TouchableOpacity>
        
      <Text style={{fontSize:25,fontFamily:'outfit-semibold'}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})