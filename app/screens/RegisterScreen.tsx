import React from "react";
import { StyleSheet, Image } from "react-native";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppErrorMessage from "../components/AppErrorMessage";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(data) => console.log(data)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <Image
              style={styles.logo}
              source={require("../assets/images/logo.png")}
            />

            <AppTextInput
              placeholder="Name"
              autoCapitalize="words"
              autoCorrect={false}
              icon="account"
              onChangeText={handleChange("name")}
            />
            <ErrorMessage component={AppErrorMessage} name="name" />

            <AppTextInput
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <ErrorMessage component={AppErrorMessage} name="email" />

            <AppTextInput
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              icon="lock"
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <ErrorMessage component={AppErrorMessage} name="password" />

            <AppButton title="REGISTER" onPress={handleSubmit} />
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

export default RegisterScreen;
