import React from "react";
import{View,Text,SafeAreaView,StyleSheet} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const CurrentWeather =()=>{
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FontAwesome name="sun-o" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 10 </Text>
          <Text style={styles.highLow}>Low: 5</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its sunny</Text>
          <Text style={styles.message}>Its perfect tshirt weather</Text>
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color:'black',
    fontSize: 48
  },
  feels:{
    color:'black',
    fontSize: 30
  },
  highLow:{
    color:'black',
    fontSize: 20
  },
  highLowWrapper:{
    flexDirection: 'row'
  },
  bodyWrapper:{
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description:{
    fontSize: 48
  },
  message:{
    fontSize: 30
  }
})

export default CurrentWeather