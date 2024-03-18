import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import ActionButton from '../Shared/ActionButton';
import Subheadingtitle from '../Shared/Subheadingtitle';
import HorizontalLine from '../Shared/HorizontalLine';

export default function Hospitalinfo({hospital}) {
  return hospital&&(
    <View>
      <Text style={{fontSize:24,fontFamily:'outfit-semibold',}}>{hospital.attributes.Name}</Text>
      <FlatList
          data={hospital.attributes.doc_catagories.data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Text style={{marginRight:10,color:'#565656', fontSize:15}}>{item.attributes.Name}</Text>}
        />
        <HorizontalLine/>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5,gap:8}}>
        <MaterialIcons name="location-on" size={24} color="blue" />
        <Text style={{marginRight:10,color:'#565656', fontSize:15}}>{hospital.attributes.Address}</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5,gap:8}}>
        <MaterialIcons name="access-time-filled" size={24} color="blue" />
        <Text style={{marginRight:10,color:'#565656', fontSize:15}}>Mon-sun | 8AM-11PM</Text>
        </View>
        <ActionButton/>
        <Subheadingtitle subHeadngTitle={'About'}/>
       <Text>{hospital.attributes.Description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})