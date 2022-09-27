import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, ListItem } from 'react-native-elements'

const CustomList = ({id, chatName,enterChat}) => {
  return (
    <ListItem>
       
 <Avatar 
 rounded
 source={
    {
        uri:'https://static.vecteezy.com/system/resources/previews/002/640/730/non_2x/default-avatar-placeholder-profile-icon-male-vector.jpg'
    }
 }
 />

 <ListItem.Content>
    <ListItem.Title
    style={{
        fontWeight:'800'
    }}
    >
        YouTube Chat

    </ListItem.Title>
   <ListItem.Subtitle
   
   numberOfLines={1}

   ellipsizeMode='tail'
   >
    This is a test subtitle

   </ListItem.Subtitle>

 </ListItem.Content>

    </ListItem>
  )
}

export default CustomList

const styles = StyleSheet.create({})