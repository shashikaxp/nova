import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

const ListItem = () => {
  return (
    <View style={styles.itemWrapper}>
      <Image style={styles.image} source={require("../assets/images/mosh.jpg")} />
      <View>
        <AppText style={styles.title}>Shashika Weerakkody</AppText>
        <AppText style={styles.subTitle}>5 Listings</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row"
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10
  },
  title: {
    fontWeight: "400"
  },
  subTitle: {
    color: colors.medium
  }
})

export default ListItem;