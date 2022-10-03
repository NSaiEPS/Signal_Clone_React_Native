import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import CustomList from '../Components/CustomList'
import { Avatar } from 'react-native-elements'
// import { SafeAreaView } from 'react-native-web'
import { auth, db } from '../Firebase'
import { AntDesign , SimpleLineIcons} from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {


  const [chats, setChats] = useState([])


  const signOutUser=()=>{
    auth.signOut().then(()=>{
      navigation.replace("Login")
    }
    
    )
  }


  useEffect(()=>{
    const unsubsribe= db.collection('chats').onSnapshot(snap=>{
      setChats(snap.docs.map(doc=>({
        id:doc.id,
        data:doc.data()
      })))
    })
 
  return unsubsribe;

  },[])

 
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
      headerLeft:()=>(
      <View
      style={{
        marginLeft:20
      }}
      >
          


        <TouchableOpacity
        
        activeOpacity={0.5}
        onPress={signOutUser}
        >
        <Avatar
           rounded
           source={{
          uri: auth?.currentUser?.photoURL
           }}
           />
        </TouchableOpacity>

     


      </View>),
      headerRight:()=>(
        <View
        style={{
    flexDirection:'row',
    justifyContent:'space-between',
    width:80,
    marginRight:20
        }}
        >
  <TouchableOpacity
  activeOpacity={0.5}>

    <AntDesign 
    name='camerao'
    size={24}
    color="black"
    
    />

  </TouchableOpacity>


  <TouchableOpacity
  activeOpacity={0.5}
  
  onPress={()=>{
    navigation.navigate("AddChat")
  }}
  >

    <SimpleLineIcons 
    name='pencil'
    size={24}
    color="black"
    
    />

  </TouchableOpacity>

        </View>
      )

    })

  },[]
  )

const enterChat=(id,chatName)=>{
  navigation.navigate('Chat',{
    id,chatName
  })

}


  
  return (
    <SafeAreaView>
      <ScrollView
      style={styles.container}
      >
        {chats.map(({id,data: {chatName}}) =>(
        <CustomList
        id={id}
        chatName={chatName}
        key={id}
        enterChat={enterChat}
        />


        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container:{
    height:'100%'
  }
})