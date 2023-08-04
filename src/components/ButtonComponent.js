import { View, Text , StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import { fontFamily, fontSizes } from '../theme/Font';
import { colors } from '../theme/Color';
import LinearGradient from 'react-native-linear-gradient';

export default function ButtonComponent({title , color , bgColor , texttransform , textWeight , onPress , style}) {
  return (
    <>
    <LinearGradient colors={[color = colors.gradientColor2 ,color = colors.gradientColor1 ]}  style={[{...styles.container}, style]} >
 
    <TouchableOpacity
   onPress={onPress}
    >
        <Text style={{color: color, textTransform: texttransform, fontWeight: textWeight , ...styles.textStyle}}>{title}</Text>
    </TouchableOpacity>
    </LinearGradient>  
    </>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: fontFamily.semibold,
        fontSize: fontSizes.default,
        color: colors.secondary,
        
        
    },
    container:{
        width: '100%',
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
   
    }
});