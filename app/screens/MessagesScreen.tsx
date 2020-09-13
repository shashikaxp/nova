import React, { useState } from "react";
import { FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "./../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "T1 des",
    image: require("./../assets/images/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "T2 des",
    image: require("./../assets/images/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "T3 dest",
    image: require("./../assets/images/mosh.jpg"),
  },
];

const MessagesScreen: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  let deleteMessage = (item: any) => {
    setMessages(messages.filter((message) => message.id !== item.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => deleteMessage(item)}
            showChevrons
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
};

export default MessagesScreen;
