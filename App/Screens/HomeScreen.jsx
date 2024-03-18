import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headerscreen from './Headerscreen'
import Searchbar from './Search'
import Slider from './Slider'
import Catagories from './Catagories'
import Premiumhopital from './Premiumhopital'
import Non_pre_hospital from './Non_pre_hospital'



export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <Headerscreen/>
        <Searchbar setSearchText={(value)=>console.log(value)}/> 
        <Slider/>
        <Catagories/>
        <Premiumhopital/>
        <Non_pre_hospital/>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    marginTop:10,
    flex:1
  }
})