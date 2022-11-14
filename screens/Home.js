import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import HelpButton from '../components/HelpButton';
import { auth, firestore } from '../Database/firebase';
import { styles } from '../style/styles';

import Modal from '../components/Modal';

const Home = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');

  useEffect(() => {
    firestore.collection('users')
    .doc(auth.currentUser.uid).get()
    .then((snapshot) => {
      if(snapshot.exists){
        setName(snapshot.data())
      } else {
        console.log('User does not exist');
      }
    })
  }, [])

  const signOutPressed = () => {
    auth
    .signOut()
    .then(() => {
      navigation.navigate("SignIn")
    })
    .catch(error => alert(error.message));
  }
  const findStorePressed = () => {
      navigation.navigate("Map")
      //.catch(error => alert(error.message));
  }

  const foodPressed = () => {
    navigation.navigate("Food");
  }

  return (

    <View style={styles.container}>

      <TopHeader navigation={navigation} />
      <HelpButton navigation={navigation} />

      <Text style={{fontSize: 20}}>Hello {name.firstName}!</Text>
      <View style={styles.button_container}>
        <Button
         onPress={foodPressed}
         buttonText="Food"
         buttonType="foodButton"
        />
        <Button
         onPress={signOutPressed}
         buttonText="Find a Store Near Me"
         buttonType="findStoreButton"
        />
        <Button
         onPress={signOutPressed}
         buttonText="Sign Out"
         onPress={findStorePressed}
         buttonText="Find a Store Near Me"
        />
      </View>
    </View>
  );
};

export default Home;
