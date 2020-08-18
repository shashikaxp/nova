import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from "./../config/colors"

const ListItemSeperator: React.FC = () => {
  return (
    <View style={styles.seperator} />
  );
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: colors.lightGray,
    width: "100%"
  }
})

export default ListItemSeperator;