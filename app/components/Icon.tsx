import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

interface Props {
  name: string,
  size: number,
  backgroundColor: string,
  forgroundColor: string
}

const Icon: React.FC<Props> = ({
  name,
  size = 40,
  backgroundColor = "black",
  forgroundColor = "white"
}) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={forgroundColor} />
    </View>
  );
}

export default Icon;