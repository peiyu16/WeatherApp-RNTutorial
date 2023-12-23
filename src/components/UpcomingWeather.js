import React from 'react'
import {SafeAreaView, StyleSheet, Text, View, Platform,StatusBar, FlatList} from'react-native'
import {Feather} from '@expo/vector-icons'

const DATA = [
    {
        "dt_txt": "2022-08-30 15:00:00",
        "main": {
          "temp_min": 296.76,
          "temp_max": 297.87
        },
        "weather": [
          {
            "main": "Rain",
          }
        ],
    },
    {
        "dt_txt": "2022-08-30 18:00:00",
        "main": {
      
          "temp_min": 292.84,
          "temp_max": 295.45,
          
        },
        "weather": [
          {
           
            "main": "Rain",
         
          }
        ],
    }
]

const Item = (props) => {
    const {dt_txt, min, max, condition} = props;
    return( 
        <View>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () =>{
    const renderItem = ({item}) => {
        return (<Item condition = {item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />)
    }

    return (
    <SafeAreaView style={styles.container}>
        <Text>Upcoming Weather</Text>
        <FlatList 
            data ={DATA}
            renderItem={renderItem}
        />
        
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
        flex:1
    }
})

export default UpcomingWeather
