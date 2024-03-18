import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Globalapi from '../Services/Globalapi'

export default function Slider() {
  const[sliderList,setsliderlist]=useState();

    useEffect(()=>{
      getSlider();
    },[])

    const getSlider=()=>{
      Globalapi.getSlider().then(resp=>{
        setsliderlist(resp.data.data)
      }).catch(error => console.log(error));
    }
  return (
    <View style={{marginTop:20}}> 
      <FlatList data={sliderList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(
        <Image source={{uri:item.attributes.Imageurl.data.attributes.url}}
        style={{width:Dimensions.get('screen').width*1,
        height:200,objectFit:'cover',borderRadius:10,margin:2}}
        />
      )}/>

    </View>
  )
}

const styles = StyleSheet.create({})