import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
export default function HospitalCarditem({ hospital }) {
  return (
    <View style={{marginTop:10,backgroundColor:'#f7f7f7'}}>
      <Image
        source={{ uri: hospital.attributes.Image.data.attributes.url }}
        style={{
          width: "100%",
          height: 120,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontFamily: "outfit-semibold" }}>
          {hospital.attributes.Name}
        </Text>
        <FlatList
          data={hospital.attributes.doc_catagories.data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Text style={{marginRight:10,color:'#565656'}}>{item.attributes.Name}</Text>}
        />
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:5}}>
        <MaterialIcons name="location-on" size={24} color="#3a71c9" />
        <Text style={{color:'#565656'}}>{hospital.attributes.Address}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
