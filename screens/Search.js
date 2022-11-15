import { Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { auth } from '../Database/firebase';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';
import { ImageBackground, StyleSheet} from "react-native";
import image from '../assets/map.png'; // Tell webpack this JS file uses this image


const Search = () => {
  const {height} = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <Button
        buttonText="Search for Bread"
      />
      <Background navigation={navigation} />
    </View>
  );
};

export default Search


