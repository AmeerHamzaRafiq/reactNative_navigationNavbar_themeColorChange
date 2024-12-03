import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store/store'; 
import HomeScreen from './screens/HomeScreen'; 
import AboutScreen from './screens/about'; 
import ContactScreen from './screens/contact'; 
import Navbar from './componente/Navbar';  
import { View } from 'react-native-web';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{flex:1}}>
    <Provider store={store}> 
      <NavigationContainer>
        <View><Navbar /> </View>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false, // Hide default headers
            animation: 'none', // Disable animations
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
          <Stack.Screen name="About" component={AboutScreen} options={{headerShown:false}} />
          <Stack.Screen name="Contact" component={ContactScreen} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" /> 
    </Provider> 
    </View>
  );
}