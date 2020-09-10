import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import Screen from "./../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

import colors from "./../config/colors";

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
        icon="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text: any) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        icon="lock"
        keyboardType="email-address"
        secureTextEntry
        textContentType="password"
        onChangeText={(text: any) => setPassword(text)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 30,
  },
});

export default LoginScreen;
