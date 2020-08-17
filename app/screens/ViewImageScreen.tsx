import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "./../config/colors"

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton}>
        <MaterialCommunityIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color="white" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/images/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 50,
    left: 30
  },
  container: {
    backgroundColor: colors.black
  },
  deleteButton: {
    position: "absolute",
    top: 50,
    right: 30
  },
  image: {
    height: "100%",
    width: "100%"
  }
})

export default ViewImageScreen;