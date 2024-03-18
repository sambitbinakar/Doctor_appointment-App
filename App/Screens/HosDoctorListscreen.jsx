import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../Shared/PageHeader';
import HospitalDocList from '../component/HospitalDocList';
import HoispitalList from '../component/HoispitalList';
import Globalapi from '../Services/Globalapi';
import DoctorList from '../component/DoctorList';

export default function HosDoctorListscreen() {
    const param=useRoute().params;
    const[hospitalList,sethospitalList]=useState([]);
    const[doctorList,setdoctorList]=useState([]);
    const[activeTab,setactiveTab]=useState([])
    useEffect(()=>{
        getHospitalbycatagories();
        getdoctorList();
    },[])
    
    const getHospitalbycatagories=()=>{
        Globalapi.gethospitalbycatagories(param?.catagoryName).then(resp=>{
            sethospitalList(resp.data.data)
            
        })
    }
    const getdoctorList=()=>{
      Globalapi.getdoctorList(param?.catagoryName).then(resp=>{
        setdoctorList(resp.data.data)
        
      })
    }
    //console.log(param);
  return (
    <View style={{padding:20}}>
      <PageHeader title={param?.catagoryName}/>
      <HospitalDocList activeTab={(value)=>setactiveTab(value)}/>
      {!hospitalList?.length?<ActivityIndicator size={'large'} color="#3a71c9"/>
      :activeTab =='Hospital'?<HoispitalList hospitalList={hospitalList}/>:<DoctorList doctorList={doctorList}/>} 
    </View>
  )
}

const styles = StyleSheet.create({})