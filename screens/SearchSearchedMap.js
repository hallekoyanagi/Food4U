import { Text, View, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import HelpButton from '../components/HelpButton';
import { auth, firestore } from '../Database/firebase';
import { styles } from '../style/styles';

const SearchSearchedMap = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  const cancelPressed = () => {
      navigation.navigate("SearchedMap")
  }

  const breadPressed = () => {
    navigation.navigate("SearchedMap");
  }

  return (

    <View style={styles.container}>

      <TopHeader navigation={navigation} />
      <HelpButton navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Search</Text>
      </View>
      <Button
        onPress={breadPressed}
        buttonText="Find Bread"
      />
      <Button
        onPress={cancelPressed}
        buttonText="Cancel"
        buttonType="tertiaryButton"
      />
    </View>
  );
};

export default SearchSearchedMap;

