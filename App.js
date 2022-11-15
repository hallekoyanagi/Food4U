import React from 'react';
import {useState} from "react";

// Import style sheet
import { StyleSheet } from 'react-native';

// Import screens
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import Home from './screens/Home';
import Map from './screens/Map';
import Food from './screens/Food';

// Ignore warning
import { LogBox } from 'react-native';
import SearchedMap from './screens/SearchedMap';
import Search from './screens/Search';

// For Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // For Navigation
  const [show, setShow] = useState(0);
  const Stack = createNativeStackNavigator();

  LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          contentStyle:{
            backgroundColor:'#FFFFFF'
          }
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Food" component={Food} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="SearchedMap" component={SearchedMap} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});