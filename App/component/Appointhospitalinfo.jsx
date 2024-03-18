import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PageHeader from "../Shared/PageHeader";
import { MaterialIcons } from "@expo/vector-icons";
import HorizontalLine from "../Shared/HorizontalLine";

export default function Appointhospitalinfo({ hospital }) {
  return (
    <View>
      <PageHeader title={"Book Appointment"} />
      <View
        style={{
          marginTop: 10,
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: hospital.attributes.Image.data.attributes.url }}
          style={{ height: 100, width: 100, borderRadius: 20, marginLeft: 10 }}
        />
        <View>
          <Text
            style={{
              fontSize: 23,
              fontFamily: "outfit-semibold",
              marginLeft: 10,
            }}
          >
            {hospital.attributes.Name}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <MaterialIcons name="location-on" size={24} color="blue" />
            <Text style={{ marginRight: 10, color: "#565656", fontSize: 15,width:'70%' }}>
              {hospital.attributes.Address}
            </Text>
          </View>
        </View>
        <HorizontalLine/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
