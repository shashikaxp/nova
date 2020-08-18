import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

interface Props {
  title: string,
  subtitle: string,
  image: ImageSourcePropType
}

const ListItem: React.FC<Props> = ({ title, subtitle, image }) => {
  return (
    <View style={styles.itemWrapper}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flexDirection: "row",
    padding: 15
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