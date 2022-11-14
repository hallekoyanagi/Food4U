import React from 'react';

// Import style sheet
import { StyleSheet } from 'react-native';

// Import screens
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import Home from './screens/Home';

// For Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  // For Navigation
  const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});