import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "./../config/colors";

export interface Props {
  title: string;
  color?: keyof typeof colors;
  onPress: () => void;
}

const AppButton: React.FC<Props> = ({ title, color = "primary", onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 25,
    marginVertical: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default AppButton;
