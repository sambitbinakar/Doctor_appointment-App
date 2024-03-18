import { View, Text,ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import HospitalDocList from '../component/HospitalDocList';
import HoispitalList from '../component/HoispitalList';
import Globalapi from '../Services/Globalapi';
import DoctorList from '../component/DoctorList';

export default function Explores() {
  const[hospitalList,sethospitalList]=useState([]);
    const[doctorList,setdoctorList]=useState([]);
    const[activeTab,setactiveTab]=useState([])
    useEffect(()=>{
      getAllHospital();
      getAllDoctor();
  },[])
  
  const getAllHospital=()=>{
      Globalapi.getAllhospital().then(resp=>{
          sethospitalList(resp.data.data)
          
      })
  }
  const getAllDoctor=()=>{
    Globalapi.getAllDoctor().then(resp=>{
      setdoctorList(resp.data.data)
      
    })
  }
  return (
    <View style={{marginTop:10}}>
      <Text style={{fontSize:26,fontFamily:'outfit-semibold'}}>Explore</Text>
      <HospitalDocList activeTab={(value)=>setactiveTab(value)}/>
      {!hospitalList?.length?<ActivityIndicator size={'large'} color="#3a71c9"/>
      :activeTab =='Hospital'?<HoispitalList hospitalList={hospitalList}/>:<DoctorList doctorList={doctorList}/>}
      
    </View>
  )
}