import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppErrorMessage from "../components/AppErrorMessage";
import Screen from "./../components/Screen";

const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
  });

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit }) => (
          <>
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
              onChangeText={handleChange("email")}
            />
            <ErrorMessage component={AppErrorMessage} name="email" />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              icon="lock"
              keyboardType="email-address"
              secureTextEntry
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <ErrorMessage component={AppErrorMessage} name="password" />
            <AppButton title="LOGIN" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
