import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import CustomList from '../Components/CustomList'
import { Avatar } from 'react-native-elements'
// import { SafeAreaView } from 'react-native-web'
import { auth } from '../Firebase'

const HomeScreen = ({navigation}) => {
 
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:"Signal",
      headerStyle:{
        backgroundColor:"#fff",
      
      },
      headerTitleStyle:{
        color:'black'
      },
      headerTintColor:'black',
      headerLeft:()=>
      <View
      style={{
        marginLeft:20
      }}
      >
           <Avatar
           rounded
           source={{
          uri: auth?.currentUser?.photoURL
           }}
           />


        <TouchableOpacity/>

      </View>

    })

  },[]
  )

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})