import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Globalapi from '../Services/Globalapi'
import Subheadingtitle from '../Shared/Subheadingtitle';
import { useNavigation } from '@react-navigation/native';

export default function Non_pre_hospital() {
  const navigation=useNavigation();
    const[nonprehospitalList,setnonprehospitalList]=useState([])
    useEffect(()=>{
        getnonprehospital();
    },[])
    const getnonprehospital=()=>{
        Globalapi.getnonprehospital().then(resp=>{
            setnonprehospitalList(resp.data.data)
        })
    }
  return (
    <View>
      <Subheadingtitle subHeadngTitle={'Other Hospitals'} seeall={true}/>
      <FlatList 
      data={nonprehospitalList}
      horizontal={true}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('hospital-detail',{hospital:item})} style={{width:250}}>
        <View>
            <Image source={{uri:item.attributes.Image.data.attributes.url}}style={{height:120,width:220}}/>
        </View>
         <View>
         <Text style={{fontFamily:'outfit-semibold',fontSize:16}}>{item.attributes.Name}</Text>
         <Text style={{width:230,color:'#5b5757'}}>{item.attributes.Address}</Text>
         
        </View>
        </TouchableOpacity>
      )}/>
    </View>
  )
}