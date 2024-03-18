import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Subheadingtitle from '../Shared/Subheadingtitle';
import Globalapi from '../Services/Globalapi';
import { useNavigation } from '@react-navigation/native';

export default function Premiumhopital() {
  const navigation=useNavigation()
    const [premiumHospitaList,setpremiumHospitaList]=useState([]);
    useEffect(()=>{
        getpremiumHospital();
    },[])
    const getpremiumHospital=()=>{
        Globalapi.getpremiumhospital().then(resp=>{
            setpremiumHospitaList(resp.data.data)
        }).catch(error => console.log(error));
    }
  return (
    <View>
      <Subheadingtitle subHeadngTitle={'Premium Hospital'} seeall={true}/>
      <FlatList
      data={premiumHospitaList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('hospital-detail',{hospital:item})} style={{marginRight:10}}>
            <View>
                <Image source={{uri:item.attributes.Image.data.attributes.url}}
                style={{width:200,height:110,objectFit:'cover',borderWidth:1,borderColor:'#fff'}}/>
            </View>
            <View>
                <Text style={{fontFamily:'outfit-semibold',fontSize:16}}>{item.attributes.Name}</Text>
                <Text style={{width:230,color:'#5b5757'}}>{item.attributes.Address}</Text>
            </View>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})