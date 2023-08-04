import { View, Text, StyleSheet , Image } from 'react-native'
import React from 'react'
import { colors } from '../theme/Color'
import TextComponent from './TextComponent'
import IconComponent from './IconComponent'
import { fontFamily, fontSizes } from '../theme/Font'

export default function ExerciseComponent({icon , size , exerciseTitle , imgSource}) {
  return (
  <>
  <View style={styles.container}>
    <Image source={imgSource} resizeMode="cover" />
    <TextComponent text={exerciseTitle} style={styles.exerciseTitleStyle}  />
    {/* <IconComponent activeColor={colors.black} iconName={icon} size={size} style={styles.iconStyle }/> */}
    <Image source={icon} resizeMode="contain" style={styles.iconStyle }  />
  </View>
  </>
  )
}
const styles= StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        backgroundColor: colors.white,
        paddingHorizontal: 12,
        width: 300,
        marginRight: 10
    },
    iconStyle:{      
        borderRadius: 50,
        padding: 8,
        width: 35,
        height: 35,
        textAlign: 'center',
    
       
    },
    exerciseTitleStyle:{
        fontFamily: fontFamily.bold,
        fontSize: fontSizes.regular,
        color: colors.black
    }
})