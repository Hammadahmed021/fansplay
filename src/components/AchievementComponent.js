import {View, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../theme/Color';
import TextComponent from './TextComponent';
import {fontFamily, fontSizes} from '../theme/Font';
import ButtonComponent from './ButtonComponent';
import IconComponent from './IconComponent';

export default function AchievementComponent({
  title,
  desc,
  outOf,
  buttonText,
  onPress,
  numberOfLines,
  numberOfLinesDesc,
  iconsize,
  iconcolor,
  iconname,
  style,
  textStyle
}) {
  return (
    <>
      <View style={[{...styles.container},  style]}>
      <IconComponent style={styles.iconstyle} size={iconsize} activeColor={iconcolor} iconName={iconname} />
     
        <TextComponent
          text={title}
          padBot={10}
          numberOfLines={numberOfLines}
          textColor={colors.white}
          fontsize={fontSizes.ldefault}
          fontfamily={fontFamily.semibold}    
          style={textStyle}    
        />
        <TextComponent
          text={desc}          
          textColor={colors.white}
          numberOfLines={numberOfLinesDesc}
        />
        <TextComponent text={outOf} fontweight={'700'} textColor={colors.white} padBot={10}/>
        <ButtonComponent
          onPress={onPress}
          title={buttonText}          
          style={styles.buttonStyle}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    position: 'relative',    
    marginHorizontal: 0.5,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: colors.black,
  },
  iconstyle:{
    position: 'absolute',
    top: 0,
    right: 0
  },
  buttonStyle:{
    width:'100%',
    height: 40
  },
 

});
