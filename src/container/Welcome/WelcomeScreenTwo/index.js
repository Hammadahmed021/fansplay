import { View, Text , Image} from 'react-native'
import React from 'react'
import { styles } from './style'
import SubHeading from '../../../components/SubHeading'
import ButtonComponent from '../../../components/ButtonComponent'
import TextComponent from '../../../components/TextComponent'
import { colors } from '../../../theme/Color'
import { fontFamily } from '../../../theme/Font'
import { fontSizes } from '../../../theme/Font'


const bgImg = require('../../../assets/images/logoGradient.png');


export default function WelcomeScreenOne({navigation}) {
  return (
    <>   
     <View style={styles.container}>
      <Image source={bgImg} resizeMode="cover" style={{width: 208, height: 70}} />
    </View>
    <View style={styles.bottomContainer}>
    <TextComponent
          text={'Welcome to Sleepo'}
          textColor={colors.white}
          fontsize={fontSizes.regular}
          fontfamily={fontFamily.light}
          textalign={'center'}
          padTop={0}
          padBot={10}
        />
        <SubHeading
          subheading={'We’re so happy you’re here!'}
          width={'100%'}
          colors={colors.primary}
        />
        <TextComponent
          text={'Use the Power of your Subconscious Mind to Inspire You to Become Your Best Self.'}
          textColor={colors.white}
          fontsize={fontSizes.default}
          fontfamily={fontFamily.light}
          textalign={'center'}
          padTop={10}
          padBot={30}
        />

        <ButtonComponent
          title={'Get Started'}
          color={colors.black}
          bgColor={colors.primary}
          texttransform={'capitalize'}
          textWeight={'500'}
          onPress={() => {
            navigation.navigate('OnBoardScreenOne');
          }}
        
        />

    
      </View>
    </>

  )
}