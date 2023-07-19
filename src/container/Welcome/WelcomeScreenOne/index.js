import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './style';
import {colors} from '../../../theme/Color';
import SubHeading from '../../../components/SubHeading';
import TextComponent from '../../../components/TextComponent';
import {fontFamily, fontSizes} from '../../../theme/Font';
import ButtonComponent from '../../../components/ButtonComponent';

const bgImg = require('../../../assets/images/bgImage.png');

export default function WelcomeScreenOne({navigation}) {
  return (
    <ImageBackground style={styles.ImageBg} resizeMode="cover" source={bgImg}>
      <View style={styles.bottomContainer}>
        <SubHeading
          subheading={'Journal. Breathe. Grow. Thrive with Sleepo'}
          width={'70%'}
          colors={colors.primary}
        />
        <TextComponent
          text={'Use the Power of your Subconscious Mind.'}
          textColor={colors.white}
          fontsize={fontSizes.default}
          fontfamily={fontFamily.light}
          textalign={'center'}
          padTop={10}
          padBot={30}
        />

        <ButtonComponent
          title={'I’m new here'}
          color={colors.black}
          bgColor={colors.primary}
          texttransform={'capitalize'}
          textWeight={'500'}
          onPress={() => {
            navigation.navigate('WelcomeScreenTwo');
          }}
        />

        <TextComponent
          text={'I already have an account'}
          textColor={colors.white}
          fontsize={fontSizes.default}
          fontfamily={fontFamily.medium}
          textalign={'center'}
          padTop={20}
          padBot={0}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </ImageBackground>
  );
}
