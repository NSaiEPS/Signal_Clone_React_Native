import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Button, Icon, Input } from 'react-native-elements'
import { db } from '../Firebase'

const AddChat = ({navigation}) => {
 


    useLayoutEffect(()=>{
   navigation.setOptions({
    title:"Add a new chat",
    headerBackTitle:"Chats"
   })

    },[])

    let [input, setInput]=useState('')

    const createChat=async ()=>{
        await db.collection('chats').add({
            chatName:input
        }).then(()=>{
        navigation.goBack()}
        ).catch(error=>alert(error.message()))

    }

  return (
    <View
    style={styles.container}
    >
    <Input 
    
    placeholder='Enter a chat name'
    value={input}
    onChangeText={(text)=>setInput(text)}

    leftIcon={
<Icon 

name='wechat'
type='antdesign'
size={24}
color='black'
/>


    }

    onSubmitEditing={createChat}

    
    />

    <Button 
    disabled={!input}
    
    title='Create a new Chat'
    onPress={createChat}
    />
    </View>
  )
}

export default AddChat

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:30,
        height:'100%'

    }
})