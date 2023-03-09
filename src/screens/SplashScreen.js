import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    console.log('in SplashScreen')
    // navigation.navigate("Calculator")
   
  }, [])


  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
        style={{flex: 1, justifyContent: 'center', width: '80%'}}
      >
      </Image>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})