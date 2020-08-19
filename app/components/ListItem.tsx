import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType, TouchableHighlight } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from './AppText';
import colors from '../config/colors';
import ListItemDeleteAction from './ListItemDeleteAction';

interface Props {
  title: string,
  subtitle?: string,
  image?: ImageSourcePropType,
  IconComponent?: React.ReactNode,
  onPress?: () => void
}

const ListItem: React.FC<Props> = ({ title, subtitle, image, IconComponent, onPress = () => { console.log("redda") } }) => {
  return (
    <Swipeable
      renderRightActions={() => <ListItemDeleteAction onPress={onPress} />}
    >
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.itemWrapper}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsWrapper}>
            <AppText style={styles.title}>{title}</AppText>
            {subtitle && <AppText style={styles.subTitle}>{subtitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight >
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  detailsWrapper: {
    marginLeft: 10,
    justifyContent: "center"
  },
  itemWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 15,
    alignItems: "center"
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "400"
  },
  subTitle: {
    color: colors.medium
  }
})

export default ListItem;