import { View, Text } from 'react-native'
import React from 'react'
import {StyleSheet} from 'react-native';
import { colors } from '../theme/Color';
import { fontFamily, fontSizes } from '../theme/Font';

export default function OnBoardingHeader({text , heading , doneText , width , onPress , padTop}) {
  return (
    <View style={styles.container}>
        <View style={{width: '75%'}}>
        <Text style={{ width: width, ...styles.heading}}>{heading}</Text>
      <Text style={{paddingTop: padTop ,...styles.text}}>{text}</Text>
        </View>
        <View style={{width: '25%' , ...styles.contLeft}}>
        <Text onPress={onPress} style={styles.doneText}>{doneText}</Text>
        </View>
     
    </View>
  )
}

export const styles = StyleSheet.create({
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: 'flex-start'
    },
    contLeft:{
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    },
    doneText:{
        color: colors.primary,
        fontFamily: fontFamily.regular,
        fontSize: fontSizes.default,
        paddingTop: 5
    },
    text:{
        color: colors.white,
        fontFamily: fontFamily.light,
        fontSize: fontSizes.light,
    },
    heading:{
        color: colors.white,
        fontFamily: fontFamily.bold,
        fontSize: fontSizes.xxxlarge,
        
    }
 })
