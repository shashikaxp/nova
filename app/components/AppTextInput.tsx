import React from "react";
import { StyleSheet, View, TextInput, TextInputProps } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./../config/colors";
import defaultStyles from "./../config/defaultStyles";

interface Props extends TextInputProps {
  icon?: string;
}

const AppTextInput: React.FC<Props> = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          color={colors.medium}
          name={icon}
          size={20}
        />
      )}
      <TextInput
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    padding: 15,
    backgroundColor: colors.light,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
});

export default AppTextInput;
