import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SignInWithOAuth from './../component/SignInWithOAuth';

export default function LoginScreen() {
  return (
    <View style={{ backgroundColor: "#b8c9e0" }}>
        <View>
            <View
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 40,
            }}
            >
            <Image
                source={require("./../../assets/Images/login.png")}
                style={{
                width: 300,
                height: 500,
                objectFit: "fill",
                }}
            />
            </View>
        </View>
        <View
            style={{
            marginTop: -25,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#fff",
            }}
        >
            <View style={{ marginTop: 25 }}>
            <Text style={styles.heading}>Your Ultimate Doctor</Text>
            <Text style={styles.heading}> Appointment Booking App</Text>
            <Text
                style={{
                textAlign: "center",
                fontFamily: "outfit-regular",
                width: "85%",
                marginLeft: 20,
                marginTop: 10,
                }}
            >
                Book Appointment Effortlessly and manager your health journy
            </Text>

            <SignInWithOAuth/>
            </View>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontFamily: "outfit-bold",
    textAlign: "center",
  },
});
