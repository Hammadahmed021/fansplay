import { View, Text , StyleSheet , Image} from 'react-native'
import React from 'react'
import { colors } from '../theme/Color';
import { fontFamily, fontSizes } from '../theme/Font';


const bgImg = require('../assets/images/signupbg.png');

export default function SignInHeader({headerText}) {
  return (
    <View style={styles.container}>
        <Image source={bgImg} resizeMode="contain" />
      <Text style={styles.headerText}>{headerText}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height: 230,
        backgroundColor: colors.black,
        position: 'relative'
    },
    headerText:{
        textTransform: 'capitalize',
        fontSize: fontSizes.excepLarge,
        fontFamily: fontFamily.bold,
        color: colors.primary,
        position: 'absolute',
        bottom: 50,
        left: 20        
    }

 });