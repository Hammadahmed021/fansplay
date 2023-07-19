import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function TextComponent({text , textColor , fontweight , fontsize , fontfamily , textalign , padTop , padBot , padLeft , padRight, onPress}) {
  return (
    <View>
      <Text    onPress={onPress} style={{color:textColor , fontSize: fontsize , fontWeight: fontweight ,
         fontFamily: fontfamily , paddingLeft:padLeft, textAlign: textalign , paddingBottom: padBot ,paddingRight:padRight,
          paddingTop: padTop}}>{text}</Text>
    </View>
  )
}

