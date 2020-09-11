import React from "react";
import { StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const AppErrorMessage: React.FC<{}> = ({ children }) => {
  return <AppText style={styles.container}>{children}</AppText>;
};

const styles = StyleSheet.create({
  container: {
    color: colors.danger,
  },
});

export default AppErrorMessage;
