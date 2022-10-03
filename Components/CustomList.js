import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, ListItem } from 'react-native-elements'
import { db } from '../Firebase';

const CustomList = ({id, chatName,enterChat}) => {

   const [chatMessages, setChatMessages]=useState([]);
  //  console.log(chatMessages?.[0]?.displayName,'now')

   useEffect(()=>{
    const unsubscribe= db.collection('chats').doc(id).collection('messages').orderBy('timestamp','desc')
    .onSnapshot((snap)=>(
      setChatMessages(snap.docs.map((data)=>({
        id:data.id,
        data:data.data()
      })))
    ))

    return unsubscribe;
   })


  return (
    <ListItem
    key={id}
    bottomDivider
    onPress={()=>{
      enterChat(id,chatName)
    }}
    
    >
       
 <Avatar 
 rounded
 source={
    {
        uri: chatMessages?.[0]?.photoURL ||
        
        'https://static.vecteezy.com/system/resources/previews/002/640/730/non_2x/default-avatar-placeholder-profile-icon-male-vector.jpg'
    }
 }
 />

 <ListItem.Content>
    <ListItem.Title
    style={{
        fontWeight:'800'
    }}
    >
        {chatName}

    </ListItem.Title>
   <ListItem.Subtitle
   
   numberOfLines={1}

   ellipsizeMode='tail'
   >
    {chatMessages?.[0].data?.displayName}: {chatMessages?.[0]?.data?.message}

   </ListItem.Subtitle>

 </ListItem.Content>

    </ListItem>
  )
}

export default CustomList

const styles = StyleSheet.create({})