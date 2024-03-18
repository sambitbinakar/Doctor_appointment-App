import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Subheadingtitle from "../Shared/Subheadingtitle";
import moment from "moment";
import Globalapi from "../Services/Globalapi";
import { useRoute } from "@react-navigation/native";

export default function Bookingsection({hospital}) {
  useEffect(() => {
    getdays();
    gettime();
  }, []);
  const [next7Days, setnext7days] = useState([]);
  const [selectdate, setselectdate] = useState([]);
  const [timeList, settimeList] = useState([]);
  const [selecttime, setselecttime] = useState([]);
  const [Note ,setNote] = useState([]);
  const [Username ,setUsername] = useState([]);
  const [Email ,setEmail] = useState([]);
  const[doctorList,setdoctorList]=useState([]);
  const param=useRoute().params;
  const getdays = () => {
    const today = moment();
    const nextSevenDay = [];
    for (let i = 0; i < 7; i++) {
      const date = moment().add(i, "days");
      nextSevenDay.push({
        date: date,
        day: date.format("ddd"), //tue ,mon
        FormateDate: date.format("Do MMM"), //16th march
      });
    }

    setnext7days(nextSevenDay);
  };

  const gettime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 8; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    settimeList(timeList);
  };
  const bookappointment = ()=>{
    const data={
      data:{
        Username:Username,
        Email_id:Email,
        Time:selecttime,
        Date:selectdate,
        hospitals:hospital.Name,
        Note:Note
      }
    }
    Globalapi.createAppointment(data).then(resp=>{
      // console.log(resp);
    })
    Globalapi.getdoctorList(param?.catagoryName).then(resp=>{
      setdoctorList(resp.data.data)
    })
    
  }
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 25, fontFamily: "outfit-bold" }}>
        Booking section
      </Text>
      <TextInput
        numberOfLines={1}
        onChangeText={(value)=>setUsername(value)}
        style={{
          backgroundColor: "#edeaea",
          padding: 10,
          borderRadius: 10,
          borderColor: "#c9e2fc",
          borderWidth: 1,
          textAlignVertical: "top",
          fontSize:16,
          marginTop:10
        }}
        placeholder="Your Name..."
      />
      <TextInput
        numberOfLines={1}
        onChangeText={(value)=>setEmail(value)}
        style={{
          backgroundColor: "#edeaea",
          padding: 10,
          borderRadius: 10,
          borderColor: "#c9e2fc",
          borderWidth: 1,
          textAlignVertical: "top",
          fontSize:16,
          marginTop:15
        }}
        placeholder="Email_id..."
      />
      <Subheadingtitle subHeadngTitle={"Day"} seeall={false} />
      <FlatList
        data={next7Days}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.daybtn,
              selectdate == item.date ? { backgroundColor: "blue" } : null,
            ]}
            onPress={() => setselectdate(item.date)}
          >
            <Text
              style={[
                { fontSize: 14, fontFamily: "outfit-medium" },
                selectdate == item.date ? { color: "white" } : null,
              ]}
            >
              {item.day}
            </Text>
            <Text
              style={[
                { fontSize: 16, fontFamily: "outfit-semibold" },
                selectdate == item.date ? { color: "white" } : null,
              ]}
            >
              {item.FormateDate}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Subheadingtitle subHeadngTitle={"Time"} seeall={false} />
      <FlatList
        data={timeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.daybtn,
              selecttime == item.time ? { backgroundColor: "blue" } : null,
            ]}
            onPress={() => setselecttime(item.time)}
          >
            <Text
              style={[
                { fontSize: 16, fontFamily: "outfit-semibold" },
                selecttime == item.time ? { color: "white" } : null,
              ]}
            >
              {item.time}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Subheadingtitle subHeadngTitle={"Note"} seeall={false} />
      <TextInput
        numberOfLines={2}
        onChangeText={(value)=>setNote(value)}
        style={{
          backgroundColor: "#edeaea",
          padding: 10,
          borderRadius: 10,
          borderColor: "#c9e2fc",
          borderWidth: 1,
          textAlignVertical: "top",
        }}
        placeholder="Write a Note"
      />
      <TouchableOpacity
        onPress={() =>bookappointment()}
        style={{
          padding: 13,
          backgroundColor: "#4765f7",
          margin: 10,
          borderRadius: 99,
          left: 0,
          right: 0,
          marginBottom: 10,
          zIndex: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontFamily: "outfit-semibold",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Make Appointment
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  daybtn: {
    borderWidth: 1,
    borderRadius: 99,
    padding: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
    borderColor: "#828080",
    marginRight: 10,
  },
});
