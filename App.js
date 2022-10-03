

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import { Button, Input, Image } from 'react-native-elements';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import AddChat from './screens/AddChat';
import ChatScreen from './screens/ChatScreen';


export default function App() {


const Stack = createNativeStackNavigator();


const globalScreenOptions={
  headerStyle:{
    backgroundColor:"#2C6BED"},
    headerTitleStyle:{
      color:'white'
    },
    headerTintColor:"white"
  }




  return (
    <NavigationContainer>

<Stack.Navigator
screenOptions={globalScreenOptions}

>
        <Stack.Screen 
        name="Login" component={LoginScreen} 
        // options={{
        //   title:"Let's SignUp"
        // }}
        />

<Stack.Screen 
        name="Register" component={RegisterScreen} 
      
        />


<Stack.Screen 
        name="Home" component={HomeScreen} 
      
        />

<Stack.Screen 
        name="AddChat" component={AddChat} 
      
        />

<Stack.Screen 
        name="Chat" component={ChatScreen} 
      
        />


        
      </Stack.Navigator>
    
    
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
