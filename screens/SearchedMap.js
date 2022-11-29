import { View, Image, Pressable } from 'react-native';
import React from 'react';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';
import { ImageBackground, StyleSheet} from "react-native";
import image from '../assets/map.png'; // Tell webpack this JS file uses this image

const SearchedMap = () => {

  const navigation = useNavigation();

  const filterPressed = () => {
    navigation.navigate("SearchedSearch")
  }
  const storePressed = () => {
    navigation.navigate("SearchedStorePage")
  }
  const cancelPressed = () => {
    navigation.navigate("DefaultMap")
  }

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.searched_map_container}>
        <Pressable onPress={storePressed}>
            <Image
              style={[styles.map]}
              source = {require("../assets/bread_map.png")}
              resizeMode="contain"
            />
        </Pressable>
      </View>
      <View style={styles.searched_map_button_container}>
          <Button
            onPress={filterPressed}
            buttonText="Filter"
          />
          <Button
            onPress={cancelPressed}
            buttonText="Cancel Filter"
            buttonType="tertiaryButton"
          />
      </View>
    </View>
  );
};

export default SearchedMap


