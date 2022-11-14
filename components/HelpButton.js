import * as React from "react";
import Modal from '../components/Modal';
import {
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { auth } from '../Database/firebase';
import { styles } from '../style/styles';

function HelpButton({ navigation }) {

   const { height } = useWindowDimensions();

  return (
    <View style={styles.help_container}>
      <Pressable onPress={() => {auth.currentUser === null ? navigation.navigate("SignIn"):navigation.navigate("Home")}}>
        <Image
          style={[styles.help, {height: height * 0.12}]}
          source = {require("../assets/help.png")}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}

export default HelpButton;