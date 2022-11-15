import { View } from 'react-native';
import React from 'react';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
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

  const navigation = useNavigation();

  const filterPressed = () => {
    navigation.navigate("StorePage")
  }

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <Button
        onPress={filterPressed}
        buttonText="Filter"
      />
      <Background />
    </View>
  );
};

export default Map


