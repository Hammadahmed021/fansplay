import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import {soccerSc} from '../../../assets/images';
import {colors} from '../../../theme/Color';
import IconComponent from '../../../components/IconComponent';

export default function ScreenOne({navigation}) {
  return (
    <>
      <ImageBackground
        source={soccerSc}
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
