import * as React from "react";
import { useState } from 'react';

import {
  View,
  Pressable,
  Image,
  useWindowDimensions,
} from "react-native";
import { auth } from '../Database/firebase';
import { styles } from '../style/styles';
import Modal from '../components/Modal';

function TopHeader({ navigation }) {

  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();

  const [show, setShow] = useState(false);

  return (
    <View style={styles.logo_container}>
      <Pressable onPress={() => {auth.currentUser === null ? navigation.navigate("SignIn"):navigation.navigate("Home")}}>
        <Image
          style={[styles.logo, {height: height * 0.12}]}
          source = {require("../assets/logo.png")}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable onPress={() => setShow(true)}>
        <Modal show={show}/>
        <Modal onClose={() => setShow(false)} show={show}></Modal>
        <Image
          style={[styles.help, {height: height * 0.12}]}
          source = {require("../assets/help.png")}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
}

export default TopHeader;
