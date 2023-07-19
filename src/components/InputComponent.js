import { View, Text  ,StyleSheet , TextInput ,Image } from 'react-native'
import React , {useState } from 'react'
import { colors } from '../theme/Color';
import { fontSizes } from '../theme/Font';




export default function InputComponent({placeholder , legend , keyboard , value , iconImg , secureTextEntry}) {
    const [text, onChangeText] = useState('');

  return (
    <View style={styles.fieldSet}>
    <Text style={styles.legend}>{legend}</Text>
    <TextInput
        style={styles.inputField}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        keyboardType={keyboard}
        placeholderTextColor={colors.white}
        secureTextEntry={secureTextEntry}
      />
      <Image style={styles.iconstyle} source={iconImg}  resizeMode="cover" />
</View>
  )
}

const styles = StyleSheet.create({
    fieldSet:{
        margin: 10,
        marginBottom: 20,
        padding: 5,     
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        height: 50,
        position: 'relative'
    },
    legend:{
        position: 'absolute',
        top: -10,
        left: 10,
        backgroundColor: colors.black,
        padding: 2,
        color: colors.white,
        fontSize: fontSizes.small
    },
    inputField:{
       fontSize: fontSizes.default,
       color: colors.white
    },
    iconstyle:{
        position: 'absolute',
        right: 8,
        top: 12
    }
});