import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from "./../config/colors";
import ListItem from '../components/ListItem';

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("./../assets/images/jacket.jpg")} />
      <View style={styles.detailsWrapper}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
        <View style={styles.userWrapper}>
          <ListItem
            title="Shashika Weerakkody"
            subtitle="$100"
            image={require("../assets/images/mosh.jpg")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsWrapper: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  subTitle: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold"
  },
  title: {
    fontSize: 25,
    marginBottom: 10
  },
  userWrapper: {
    marginTop: 30
  }
})

export default ListingDetailsScreen;