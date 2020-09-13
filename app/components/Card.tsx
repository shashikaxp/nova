import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Text,
} from "react-native";

import AppText from "./AppText";
import colors from "./../config/colors";

interface Props {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}

const Card: React.FC<Props> = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.subtitle} numberOfLines={2}>
          {subTitle}
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    marginBottom: 2,
  },
});

export default Card;
