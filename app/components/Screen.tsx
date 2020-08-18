import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface Props {

}

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.screen}>
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