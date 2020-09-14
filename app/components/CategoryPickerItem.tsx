import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

interface Props {
  item: any;
  onPress: () => void;
}

const CategoryPickerItem: React.FC<Props> = ({ item, onPress }) => {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 15,
      width: "33%",
      alignItems: "center",
    },
    label: {
      marginTop: 5,
      textAlign: "center",
    },
  });

  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon name={item.icon} backgroundColor={item.color} size={80} />
        <AppText style={styles.label}>{item.label}</AppText>
      </TouchableOpacity>
    </>
  );
};

export default CategoryPickerItem;
