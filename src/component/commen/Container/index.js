import React from 'react';
import {View, Text , ScrollView} from 'react-native';
import Styles from './styles';

const Container = ({children,style}) => {
  return (
    <ScrollView>
      <View style = {[Styles.wapper,style]}>
            {children}
      </View>
    </ScrollView>
  );
};

export default Container;
