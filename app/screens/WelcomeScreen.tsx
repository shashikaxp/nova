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
        <Text style={styles.tagLine}>Sell Everything</Text>
      </View>
      <View style={styles.buttonWrapper}>
      <AppButton
        color="primary" title="Login" onPress={() => console.log("asd")
        }
      />
      <AppButton
        color="secondary" title="Register" onPress={() => console.log("asd")} />
      </View>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonWrapper: {
    marginBottom: 50,
    paddingHorizontal: 10,
    width: "100%"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center"
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10
  }
})

export default WelcomeScreen;