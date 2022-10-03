import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Avatar } from 'react-native-elements'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import {db,auth} from '../Firebase'
import * as firebase from 'firebase/compat';


const ChatScreen = ({ navigation, route}) => {
    // const {id,chatName }=route.params  Or
    const { params:{id,chatName} }=route


    const [input, setInput]=useState('')
    const [messages, setmessages]=useState([])
   

   useLayoutEffect(()=>{
    navigation.setOptions({
        // title:'Chats',
        // headerTitleAlign:"right"
        headerBackTitleVisible:false,
        headerBackVisible:false,
        headerTitle:()=>(
            <View
            style={{
                flexDirection:'row',
                alignItems:'center',
                marginLeft:25
            }}
            >
                <Avatar 
                
                rounded
                source={{
                    uri:messages[0] ?.data.photoURL ||
                    
                    'https://static.vecteezy.com/system/resources/previews/002/640/730/non_2x/default-avatar-placeholder-profile-icon-male-vector.jpg'
                }}
                
                />

                <Text
                style={{
                    color:'white',
                    marginLeft:10,
                    fontWeight:'700',
                    
                }}
                
                
                >{chatName}</Text>
            </View>
        ),
        headerLeft:()=>(
            <TouchableOpacity
            style={{
                marginLeft:10
            }}
            onPress={navigation.goBack}
            
            >
            <AntDesign 
            
            name='arrowleft'
            size={24}
            color='white'
            />

            </TouchableOpacity>
        ),
        headerRight:()=>(
            <View
            style={{
                flexDirection:'row',
                justifyContent:'space-between',
                width:80,
                marginRight:1

            }}
            >
                <TouchableOpacity>
                    <FontAwesome 
                    name='video-camera'
                    size={24}
                    color='white'
                    />
                </TouchableOpacity>
                <Ionicons
                name='call'
                size={24}
                color='white'

                
                />
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        )
    })

   }, [navigation, messages])

   let sendMessage=()=>{
    Keyboard.dismiss();
    db.collection('chats').doc(id).collection('messages').add({
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        message:input,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL
    })

    setInput('')

}

useLayoutEffect(()=>{
    const unsubscribe= db.collection('chats').doc(id).collection('messages')
    .orderBy('timestamp','desc').onSnapshot((snap)=>
    setmessages(snap.docs.map(doc =>({
        id:doc.id,
        data:doc.data()
    }))))

    return unsubscribe;

},[route])


  return (
    <SafeAreaView
    style={{
        flex:1,
        backgroundColor:'white'
    }}
    
    >

        <StatusBar style='light'/>



      <KeyboardAvoidingView
      behavior={(Platform.OS==='ios')? 'padding':'height'}
      style={styles.container}
    
      keyboardVerticalOffset={Platform.select({ios: 0, android: 140})}
      
      >

    <TouchableWithoutFeedback
    
    onPress={Keyboard.dismiss}
    >
       <>
       <ScrollView
       
       contentContainerStyle={{
        paddingTop:15
       }}
       >
        {messages.map(({id,data})=>(
            data.email===auth.currentUser.email ?(
                <View
                key={id}
                style={
                    styles.reciever
                }
                >
                    <Avatar 
                    source={{
                        uri:data.photoURL
                    }}
                    size={30}
                    position='absolute'
                    right={-5}
                    bottom={-15}
                    rounded

                    // WEB
                    containerStyle={{
                        position:'absolute',
                        bottom:-15,
                        right:-5
                    }}

                    
                    />
                    <Text
                    style={
                        styles.recieverText
                    }
                    
                    >{data.message}
                        
                    </Text>

                </View>

            ): (
                <View
                
                style={
                    styles.sender
                }
                >
                      <Avatar 
                      source={{
                        uri:data.photoURL
                    }}
                    size={30}
                    position='absolute'
                    right={-5}
                    bottom={-15}
                    rounded

                    // WEB
                    containerStyle={{
                        position:'absolute',
                        bottom:-15,
                        right:-5
                    }}

                    
/>
<Text style={ styles.senderText} >{data.message}</Text>
<Text style={ styles.senderName} >{data.displayName}</Text>


                </View>

            )

        ))}
       </ScrollView>
       <View
       style={
        styles.footer
       }
       >
        <TextInput 
        placeholder='Signal Message'
        value={input}
        onChangeText={text=>setInput(text)}
        onSubmitEditing={sendMessage}
        style={
            styles.textInput
        }
        />

        <TouchableOpacity
        onPress={sendMessage}
        activeOpacity={0.5}>
            <Ionicons
            name='send'
            size={24}
            color='#2868E6'
            />

        </TouchableOpacity>

       </View>
       </>
       </TouchableWithoutFeedback>
       

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({

    container:{
        flex:1,

    },
    reciever:{
        padding:15,
        backgroundColor:'#ececec',
        alignSelf:'flex-end',
        borderRadius:20,
        marginRight:15,
        marginBottom:20,
        maxWidth:'80%',
        position:'relative'

    },
    sender:{
        padding:15,
        backgroundColor:'#2b68e6',
        alignSelf:'flex-start',
        borderRadius:20,
        marginRight:15,
        marginBottom:20,
        maxWidth:'80%',
        position:'relative'


    },
    senderName:{
        left:10,
        paddingRight:10,
        fontSize:10,
        color:'white'

    },
    senderText:{
        color:'white',
        fontWeight:'500',
        marginLeft:10,
        marginBottom:15

        

    },
    recieverText:{
        color:'black',
        fontWeight:'500',
        marginLeft:10,
       

    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        padding:15


    },
    textInput:{
        bottom:0,
  
  height:40,
  flex:1,
  marginRight:15,
  borderColor:'transparent',
  backgroundColor:'#ececec',
  borderWidth:1,
  padding:10,
  color:'gray',
  borderRadius:30


    }
})