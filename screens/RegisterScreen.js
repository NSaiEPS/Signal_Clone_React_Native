import { StatusBar } from 'expo-status-bar'
import { useLayoutEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import { Button, Input,Text } from 'react-native-elements'
import { auth } from '../Firebase'

const RegisterScreen = ({navigation}) => {
    // console.log(navigation.setOptions)

    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [imgUrl, setImgUrl]=useState('')
    let register=()=>{
      auth.createUserWithEmailAndPassword(email,password).then(
        authUser=>{
          authUser.user.updateProfile({
            displayName:name,
            photoURL:imgUrl || "https://static.vecteezy.com/system/resources/previews/002/640/730/non_2x/default-avatar-placeholder-profile-icon-male-vector.jpg"
          })

        }
      ).catch(error=>alert(error.message))

    }

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerBackTitle:null
    //     })
    
    // }, [navigation])
  return (
    <KeyboardAvoidingView
    
    style={styles.container}
    >
          <StatusBar
        
        style='light'
        />
    
    <Text
    h3
    style={{
        marginBottom:50
    }}
    >
        Create a Signal account
    </Text>

    <View
    style={styles.inputContainer}
    >


   <Input 
   
   placeholder='Full Name'
   autoFocus
   type='text'
   value={name}
   onChangeText={(text)=>{
    setName(text)
   }}
   />

<Input 
   
   placeholder='Email'
   type='text'
   value={email}
   onChangeText={(text)=>{
    setEmail(text)
   }}
   />

<Input 
   
   placeholder='Password'
   autoFocus
   type='password'
   secureTextEntry
   value={password}
   onChangeText={(text)=>{
    setPassword(text)
   }}
   />

<Input 
   
   placeholder='Profile picture URL (Optional)'
   autoFocus
   type='url'
   value={imgUrl}
   onChangeText={(text)=>{
    setImgUrl(text)
   }}
   onSubmitEditing={register}
   />
    </View>

    <Button 

    onPress={register}
    title='Register'
    raised
    containerStyle={styles.button}
    />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   padding:10,
   backgroundColor:'white'


    },
    inputContainer:{
    width:300,


    },
    button:{
        width:200,
        marginTop:10,


    }



})