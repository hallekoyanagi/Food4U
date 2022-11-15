import { Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { auth } from '../Database/firebase';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import HelpButton from '../components/HelpButton';
//import { styles } from '../style/styles';
import { ImageBackground, StyleSheet} from "react-native";
import image from '../assets/map.png'; // Tell webpack this JS file uses this image

const Background = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
  </View>
);

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

const Map = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const filterPressed = () => {
    navigation.navigate("Search")
  }

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />

      <Button
        onPress={filterPressed}
        buttonText="Filter"
      />
      <Background navigation={navigation} />
    </View>
  );
};

export default Map


