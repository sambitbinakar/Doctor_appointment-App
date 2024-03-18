import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HospitalCarditem from '../Shared/HospitalCarditem';
import { useNavigation } from '@react-navigation/native';

export default function HoispitalList({hospitalList}) {
  const navigation =useNavigation()
  return (
    <View style={{marginBottom:'40%'}}>
      <FlatList
      data={hospitalList}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('hospital-detail',{hospital:item})}>
            <HospitalCarditem hospital={item}/>
        </TouchableOpacity>
        
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})