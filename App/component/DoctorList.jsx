import { FlatList, StyleSheet, Text, View } from 'react-native'

import Doctorcarditem from '../Shared/Doctorcarditem';

export default function DoctorList({doctorList}) {
  return (
    <View style={{marginBottom:'35%'}}>
      <FlatList data={doctorList}
      renderItem={({item})=>(
        <View>
          <Doctorcarditem doctor={item}/>
        </View>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({})