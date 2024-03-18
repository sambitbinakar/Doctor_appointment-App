import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Doctorcarditem({ doctor }) {
  const navigation =useNavigation()
  return (
    <View >
      <View
        style={{ marginTop: 20, display: "flex", flexDirection: "row", gap:15 ,backgroundColor:'#fff',borderRadius:20, padding:14}}
      >
        <Image
          source={{ uri: doctor.attributes.Image.data.attributes.url }}
          style={{
            width: 90,
            height: 100,
            objectFit: "cover",
            borderRadius: 10,
          }}
        />
        <View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#afd3f7",
              width: 200,
              borderRadius: 15,
              padding: 5,
            }}
          >
            <MaterialCommunityIcons
              name="check-decagram"
              size={22}
              color="blue"
            />
            <Text style={{ fontSize: 16, fontFamily: "outfit-semibold" }}>
              {" "}
              Professional Doctor
            </Text>
          </View>
          <View>
            <Text style={{fontSize:20,fontFamily:'outfit-semibold',marginTop:10}}>{doctor.attributes.Name}</Text>
          </View>
          <FlatList
            data={doctor.attributes.doc_catagories.data}
            horizontal={true}
            renderItem={({ item }) => <Text
            style={{fontSize:15,fontFamily:'outfit-semibold',color:'#565656'}}>{item.attributes.Name},</Text>}
          />
          <View style={{display:'flex',flexDirection:'row'}}>
          <MaterialCommunityIcons name="star" size={24} color="#fce61e" />
          <MaterialCommunityIcons name="star" size={24} color="#fce61e" />
          <MaterialCommunityIcons name="star" size={24} color="#fce61e" />
          <MaterialCommunityIcons name="star" size={24} color="#fce61e" />
          <MaterialCommunityIcons name="star-half-full" size={24} color="#fce61e" />
          <Text style={{fontFamily:'outfit-semibold',fontSize:16,marginLeft:5}}>4.6</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('hospital-detail',{hospital:doctor})} style={{backgroundColor:'#afd3f7',padding:10,borderRadius:10,marginTop:10}}>
          <Text style={{fontSize:18,fontFamily:'outfit-semibold',textAlign:'center'}}>Make appointment</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
