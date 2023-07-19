import { View, Text , StyleSheet , TouchableOpacity } from 'react-native'
import React from 'react'
import { fontFamily, fontSizes } from '../theme/Font';
import { colors } from '../theme/Color';
import LinearGradient from 'react-native-linear-gradient';

export default function OnBoardingTag({title , color , bgColor , texttransform , textWeight , onPress , width}) {
  return (
   <>
      <TouchableOpacity
   onPress={onPress}
   style={{backgroundColor:bgColor, width:width , ...styles.container}}
    >
        <Text style={{color: color, textTransform: texttransform, fontWeight: textWeight , ...styles.textStyle}}>{title}</Text>
    </TouchableOpacity>
   </>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: fontFamily.regular,
        fontSize: fontSizes.ldefault,
        },
    container:{        
        minWidth: 'auto',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:30,
        paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        alignSelf: 'center'  
    }
});