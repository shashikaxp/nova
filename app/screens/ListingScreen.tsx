import React from 'react';
import { View, StyleSheet } from 'react-native';

import Card from "../components/Card"
import Screen from "../components/Screen";
import { FlatList } from 'react-native';

import colors from "./../config/colors";

const listing = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("./../assets/images/jacket.jpg")
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 500,
    image: require("./../assets/images/couch.jpg")
  }
]

const ListingScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={listing}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) =>
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1
  },
  screen: {
    backgroundColor: colors.lightGray,
    flex: 1
  }
})

export default ListingScreen;