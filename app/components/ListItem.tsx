import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType, TouchableHighlight } from 'react-native';
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from './AppText';
import colors from '../config/colors';
import ListItemDeleteAction from './ListItemDeleteAction';

interface Props {
  title: string,
  subtitle: string,
  image: ImageSourcePropType,
  onPress: () => void
}

const ListItem: React.FC<Props> = ({ title, subtitle, image, onPress }) => {
  return (
    <Swipeable
      renderRightActions={() => <ListItemDeleteAction onPress={onPress} />}
    >
      <TouchableHighlight underlayColor={colors.lightGray} onPress={onPress}>
        <View style={styles.itemWrapper}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight >
    </Swipeable>
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