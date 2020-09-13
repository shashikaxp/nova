import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../config/colors";
import ListItemDeleteAction from "./ListItemDeleteAction";

interface Props {
  title: string;
  subtitle?: string;
  image?: ImageSourcePropType;
  IconComponent?: React.ReactNode;
  onPress?: () => void;
  showChevrons?: boolean;
}

const ListItem: React.FC<Props> = ({
  title,
  subtitle,
  image,
  IconComponent,
  showChevrons = false,
  onPress = () => {
    console.log("redda");
  },
}) => {
  return (
    <Swipeable
      renderRightActions={() => <ListItemDeleteAction onPress={onPress} />}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.itemWrapper}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsWrapper}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText numberOfLines={2} style={styles.subTitle}>
                {subtitle}
              </AppText>
            )}
          </View>
          {showChevrons && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={25}
              color={colors.medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  detailsWrapper: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  itemWrapper: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "400",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;
