import { View, Image } from 'react-native';
import React from 'react';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';
import { ImageBackground, StyleSheet} from "react-native";
import image from '../assets/map.png'; // Tell webpack this JS file uses this image

const DefaultMap = () => {

  const navigation = useNavigation();

  const filterPressed = () => {
    navigation.navigate("DefaultSearch")
  }
  const storePressed = () => {
    navigation.navigate("DefaultStorePage")
  }

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.map_container}>
        <Image
          style={[styles.map]}
          source = {require("../assets/map.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.map_button_container}>
          <Button
            onPress={filterPressed}
            buttonText="Filter"
          />
          <Button
            onPress={storePressed}
            buttonText="Select Store"
            buttonType="tertiaryButton"
          />
      </View>
    </View>
  );
};

export default DefaultMap


