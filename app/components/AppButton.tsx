import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface Props {
  title: string,
  color: string,
  onPress: () => void
}

const AppButton: React.FC<Props> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 25,
    marginVertical: 5
  },
  text: {
    color: "white",
    fontSize: 16
  }
})

export default AppButton;