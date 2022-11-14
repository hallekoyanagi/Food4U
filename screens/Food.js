import { Text, View, useWindowDimensions, Alert, SafeAreaView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputValue from './InputValue';
import Button from './Button';
import { useNavigation } from "@react-navigation/native";
import { auth } from '../Database/firebase';
import TopHeader from '../components/TopHeader';
import { styles } from '../style/styles';

// import { breadList } from "../Database/product-firebase-content.js";

const SignIn = () => {
  const {height} = useWindowDimensions();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const signInPressed = () => {

  }

  const signUpPressed = () => {
    navigation.navigate('SignUp');
  }

  const forgetPasswardPressed = () => {
    navigation.navigate('ResetPassword');
  }
  
  return (
    <View style={styles.container}>
      <TopHeader navigation={navigation} />
      <View style={styles.title_container}>
        <Text style={[styles.title, {height: height * 0.3}]}>Food</Text>
      </View>

      {/* <View style={styles.middle_container}>
        <SafeAreaView>
            <ScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.scrollViewOtherResourcePageContainer}>
                {breadList.map((item) => (
                    <View key={item.key}>
                        <Pressable
                            style={ styles.itemButton }
                            onPress={() =>
                            navigation.navigate("Home")
                            }
                        >
                            <Text
                            style={ styles.buttonText }
                            >
                                {item.value}
                            </Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
      </View> */}
    </View>
  );
};

export default SignIn;