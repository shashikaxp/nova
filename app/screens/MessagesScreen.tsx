import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from "./../components/Screen";
import ListItemSeperator from '../components/ListItemSeperator';

const data = [
  {
    id: 1,
    title: "T1",
    description: "T1 des",
    image: require("./../assets/images/mosh.jpg")
  },
  {
    id: 2,
    title: "T2",
    description: "T2 des",
    image: require("./../assets/images/mosh.jpg")
  },
  {
    id: 3,
    title: "T3",
    description: "T3 des",
    image: require("./../assets/images/mosh.jpg")
  }
]

const MessagesScreen: React.FC = () => {
  return (
    <Screen>
      <FlatList
        data={data}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) =>
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image} />}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
}

export default MessagesScreen;