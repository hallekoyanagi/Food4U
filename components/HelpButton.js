import React, { useState, useEffect } from 'react';
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
   const [show, setShow] = useState(false);
  return (
    <View style={styles.help_container}>
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

export default HelpButton;