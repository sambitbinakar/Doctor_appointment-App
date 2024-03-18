import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../Shared/PageHeader';
import Hospitalinfo from '../component/Hospitalinfo';

export default function Hospitaldetail() {
    const [hospital,sethospital]=useState();
    const param = useRoute().params
  const navigation = useNavigation()
    useEffect(()=>{
        sethospital(param.hospital);
    },[])
  return hospital&& (
    <View>
        <ScrollView>
        <View style={{position:'absolute',zIndex:10,margin:15}}>
             <PageHeader title={''}/>
        </View>
     
      <View>
        <Image source={{uri:hospital.attributes.Image.data.attributes.url}}
        style={{width:'100%',height:250,objectFit:'cover'}}/>

        <View style={{marginTop:-20,backgroundColor:'#ffffff',borderTopLeftRadius:25,borderTopRightRadius:20,padding:20}}>
            <Hospitalinfo hospital={hospital}/>
        </View>
      </View>
    <TouchableOpacity onPress={()=>navigation.navigate('book-appointment',{hospital:hospital})}style={{padding:13,backgroundColor:'#4765f7',margin:10,borderRadius:99,
  left:0,right:0,marginBottom:10,zIndex:20}}>
      <Text style={{fontSize:18,fontFamily:'outfit-semibold',textAlign:'center',color:'#fff'}}>Book Appointment</Text>
    </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})