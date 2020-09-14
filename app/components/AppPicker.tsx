import React, { ReactPropTypes, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./../config/colors";
import PickerItem from "./PickerItem";
import AppText from "./AppText";
import Screen from "./Screen";

interface Props {
  icon?: string;
  numberOfColumns?: number;
  PickerItemComponent?: React.FC<any>;
  placeholder: string;
  items: Array<any>;
  selectedItem?: any;
  onSelectedItem: (item: any) => void;
}

const AppPicker: React.FC<Props> = ({
  icon,
  items,
  numberOfColumns = 1,
  onSelectedItem,
  placeholder,
  selectedItem,
  PickerItemComponent = PickerItem,
}) => {
  let [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsModalOpen(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              color={colors.medium}
              name={icon}
              size={20}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}> {selectedItem.label} </AppText>
          ) : (
            <AppText style={styles.placeholder}> {placeholder} </AppText>
          )}

          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-down"
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={isModalOpen} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setIsModalOpen(false)} />
          <FlatList
            data={items}
            numColumns={numberOfColumns}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                onPress={() => {
                  onSelectedItem(item);
                  setIsModalOpen(false);
                }}
              />
            )}
          ></FlatList>
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    padding: 15,
    backgroundColor: colors.light,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
  },
  text: {
    flex: 1,
    color: colors.black,
  },
});

export default AppPicker;
