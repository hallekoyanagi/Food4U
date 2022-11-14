import { Text, View, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { auth } from '../Database/firebase';
import { useNavigation } from "@react-navigation/native";
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';

const Map = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const enterPressed = () => {
    navigation.navigate('Map', {username: username});
    //.catch(error => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Map</Text>
      </View>

      <View style={styles.middle_container}>
        <InputValue
         value={username}
         setValue={setUsername}
         placeholder="Search..."
        />
      </View>

      <View style={styles.button_container}>
        <Button
         onPress={enterPressed}
         buttonText="Enter"
        />
      </View>
    </View>
  );
};

export default Map


