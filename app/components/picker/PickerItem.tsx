import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../AppText";

interface Props {
  item: any;
  onPress: () => void;
}

const PickerItem: React.FC<Props> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

export default PickerItem;
