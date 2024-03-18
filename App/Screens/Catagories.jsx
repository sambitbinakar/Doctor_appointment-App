import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Globalapi from '../Services/Globalapi';
import Subheadingtitle from '../Shared/Subheadingtitle';
import { useNavigation } from '@react-navigation/native';

export default function Catagories() {
    const navigation=useNavigation();
        const [catagoryList,setcatagoryList]=useState([]);
        useEffect(()=>{
            getCatagories();
        },[])
      const  getCatagories=()=>{
            Globalapi.getCatagories().then(resp=>{
                setcatagoryList(resp.data.data)
            }).catch((error)=>{
                console.log("Api call error");
                throw error
             });
        }
        if (!catagoryList) {
            return null
        }
    
  return (
    <View style={{marginTop:20}}>
     <Subheadingtitle subHeadngTitle={'Doctor Speciality'}/>
     <FlatList data={catagoryList}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     renderItem={({item,index})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('Hospital-Doctor-List',{catagoryName:item.attributes.Name})} style={{alignItems:'center',marginTop:10,marginLeft:10}}>
            <View style={{backgroundColor:'#bec7f4',padding:10,borderRadius:99,}}>
                <Image source={{uri:item.attributes.Icon.data.attributes.url}}style={{width:35,height:35}}/>
            </View>
            <Text style={{fontFamily:'outfit-medium',fontSize:13,marginTop:10}}>{item.attributes.Name}</Text>
        </TouchableOpacity>
     )}
     />
    </View>
    
  )
}

const styles = StyleSheet.create({})