import React from 'react';
import { SafeAreaView, StyleSheet, StyleProp, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>
}

const Screen: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

export default Screen;