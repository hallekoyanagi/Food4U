import * as React from "react";
import {
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { auth } from '../Database/firebase';
import { styles } from '../style/styles';

function TopHeader({ navigation }) {

  const { height } = useWindowDimensions();

  return (
    <View style={styles.logo_container}>
      <Pressable onPress={() => {auth.currentUser === null ? navigation.navigate("SignIn"):navigation.navigate("Home")}}>
        <Image
          style={[styles.logo, {height: height * 0.12}]}
          source = {require("../assets/logo.jpg")}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}

export default TopHeader;
