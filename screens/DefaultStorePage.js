import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { auth, firestore } from '../Database/firebase';
import { styles } from '../style/styles';

const DefaultStorePage = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const cancelPressed = () => {
      navigation.navigate("DefaultMap")
  }

  return (

    <View style={styles.container}>

      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Store Page</Text>
      </View>
        <Text style={{fontSize: 20}}>Store Name: Crust McDonalds</Text>
        <Text style={{fontSize: 20}}>Amenities: Burgers, Fries, Fast Food</Text>
        <Text style={{fontSize: 20}}>Address: 1234 Shelbourne Ave, Victoria</Text>
        <Text style={{fontSize: 20}}>Distance: 2.7km</Text>
      <Button
        onPress={cancelPressed}
        buttonText="Cancel"
        buttonType="tertiaryButton"
      />
    </View>
  );
};

export default DefaultStorePage;