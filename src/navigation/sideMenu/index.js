import React from 'react';
import Container from '../../component/common/Container';
import {SafeAreaView, Image} from 'react-native';
import styles from './styles';

const SideMenu = ({navigation}) => {
  return (
    <SafeAreaView>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
        />
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
