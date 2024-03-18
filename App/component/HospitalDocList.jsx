import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function HospitalDocList({activeTab}) {
  const [activeIndex, setactiveIndex] = useState(1);
  return (
    <View style={{ marginTop: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          style={[activeIndex == 0 ? styles.activeTab : styles.InactiveTab]}
          onPress={() =>{ setactiveIndex(0),activeTab('Hospital')}}
        >
          <Text
            style={[activeIndex == 0 ? styles.activeText : styles.Inactive]}
          >
            Hospital
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[activeIndex == 1 ? styles.activeTab : styles.InactiveTab]}
          onPress={() => {setactiveIndex(1),activeTab('Doctor')}}
        >
          <Text
            style={[activeIndex == 1 ? styles.activeText : styles.Inactive]}
          >
            Doctor
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  activeText: {
    textAlign: "center",
    fontFamily: "outfit-bold",
    fontSize: 20,
    color: "#3a71c9",
  },
  Inactive: {
    textAlign: "center",
    fontFamily: "outfit-bold",
    fontSize: 20,
    color: "#8c8989",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#3a71c9",
    padding: 3,
  },
  InactiveTab: {
    borderBottomWidth: 0,
    borderBottomColor: "#8c8989",
    padding: 3,
  },
});
