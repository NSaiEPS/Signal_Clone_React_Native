import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Input } from 'react-native-elements';
import { auth } from '../Firebase'

const LoginScreen = ({navigation}) => {



   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

 useEffect(()=>{
 const unsubscribe =auth.onAuthStateChanged((authUser)=>{
  // console.log(authUser)
  if(authUser){
    navigation.replace("Home")
  }
 })

 return unsubscribe;
 },[])

  const SignIn=()=>{

  }

  return (
    <KeyboardAvoidingView
    
    style={styles.container}
    >
        <StatusBar
        
        style='light'
        />

     <Image 
     source={{
        uri:'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Signal-Messenger-Icon-900x0.png'
     }

     }

     style={{
        width:200,
        height:200
     }}
     
     />


  <View  
  style={
    styles.inputContainer
  }
  >

    <Input 
    placeholder='Email'
    autoFocus
    type='email'
    value={email}
    onChangeText={(text)=>
        setEmail(text)
    
    }
    />

<Input 
    placeholder='Password'
    autoFocus
    secureTextEntry
    type='password'
    value={password}
    onChangeText={(text)=>{
        setPassword(text)
    }}
    />

  </View>

  <Button 
containerStyle={
    styles.button
}

  title='Login'
  onPress={SignIn}
  />

<Button 
containerStyle={
    styles.button
}
type='outline'

  title='Register'

onPress={()=>{
    navigation.navigate("Register")
}}
  />

  {/* <View 
  style={{
    height:30
  }}
  /> */}

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    inputContainer:{
        width:300,

    },
    button:
    {width:200,
        marginTop:10

    }

})

