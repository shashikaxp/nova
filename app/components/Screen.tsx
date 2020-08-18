import React from 'react';
import { SafeAreaView } from 'react-native';

interface Props {

}

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView>
      {children}
    </SafeAreaView>
  );
}



export default Screen;