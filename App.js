import React from 'react';
import {useState} from "react";

// Import style sheet
import { StyleSheet } from 'react-native';

// Import screens
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import Home from './screens/Home';
import Food from './screens/Food';

import StorePage from './screens/StorePage';
import SearchedStorePage from './screens/SearchedStorePage';
import DefaultStorePage from './screens/DefaultStorePage';

import DefaultMap from './screens/DefaultMap';
import SearchedMap from './screens/SearchedMap';

import SearchDefaultMap from './screens/SearchDefaultMap';
import SearchSearchedMap from './screens/SearchSearchedMap';


// Ignore warning
import { LogBox } from 'react-native';
// For Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // For Navigation
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

        <Stack.Screen name="DefaultMap" component={DefaultMap} />
        <Stack.Screen name="SearchedMap" component={SearchedMap} />

        <Stack.Screen name="SearchDefaultMap" component={SearchDefaultMap} />
        <Stack.Screen name="SearchSearchedMap" component={SearchSearchedMap} />

        <Stack.Screen name="StorePage" component={StorePage} />
        <Stack.Screen name="DefaultStorePage" component={DefaultStorePage} />
        <Stack.Screen name="SearchedStorePage" component={SearchedStorePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});