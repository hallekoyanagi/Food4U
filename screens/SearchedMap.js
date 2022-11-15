import { Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { auth } from '../Database/firebase';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
//import { style } from '../style/styles';
import { ImageBackground, StyleSheet} from "react-native";
import image from '../assets/bread_map.png'; // Tell webpack this JS file uses this image

const Background = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}/>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

const SearchedMap = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const filterPressed = () => {
    navigation.navigate("SearchedSearch")
  }
  const cancelPressed = () => {
    navigation.navigate("DefaultMap")
  }
  const storePressed = () => {
    navigation.navigate("SearchedStorePage")
  }

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <Button
        onPress={filterPressed}
        buttonText="Filter"
      />
      <Button
        onPress={cancelPressed}
        buttonText="Cancel"
        buttonType="tertiaryButton"
      />
      <Background navigation={navigation} />
      <Button
        onPress={storePressed}
        buttonText="Select Store"
        buttonType="tertiaryButton"
      />
    </View>
  );
};

export default SearchedMap


