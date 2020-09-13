import React from "react";
import { Text, StyleSheet, Platform, TextProps } from "react-native";

interface Props extends TextProps {}

const AppText: React.FC<Props> = ({ children, style, ...otherProps }) => {
  return (
    <Text {...otherProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
