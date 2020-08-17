import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import colors from "../config/colors";

const WelcomeScreen = (props: any) => {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("./../assets/images/background.jpg")} >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/images/logo.png")} />
        <Text>Sell Everything</Text>
      </View>
      <AppButton
        color={colors.primary} title="Login" onPress={() => console.log("asd")
        }
      />
      <AppButton
        color={colors.secondary} title="Register" onPress={() => console.log("asd")} />
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loginButton: {
    height: 70,
    backgroundColor: "#f4d35eff",
    width: "100%"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  registerButton: {
    height: 70,
    backgroundColor: "#ee964bff",
    width: "100%"
  }
})

export default WelcomeScreen;