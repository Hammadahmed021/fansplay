import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import {baseballSc} from '../../../assets/images';
import {colors} from '../../../theme/Color';
import IconComponent from '../../../components/IconComponent';

export default function ScreenFour({navigation}) {
  return (
    <>
      <ImageBackground
        source={baseballSc}
        resizeMode="cover"
        style={styles.bgContainer}>
        <IconComponent
          iconName={'return-up-back-sharp'}
          size={30}
          activeColor={colors.white}
          style={styles.iconStyle}
          onPress={() => {
            navigation.navigate('WelcomeScreenOne');
          }}
        />
      </ImageBackground>
    </>
  );
}
