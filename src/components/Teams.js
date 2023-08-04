import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {fontFamily, fontSizes} from '../theme/Font';
import {colors} from '../theme/Color';

export default function Teams({text, imageUrl, onPress}) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapper}>
          <View style={styles.imageShadow}>
            <Image
              source={imageUrl}
              resizeMode="cover"
              style={styles.teamImage}
            />
          </View>
          <TextComponent text={text} style={styles.textStyle} />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  teamImage: {
    width: 165,
    height: 165,
    borderRadius: 10,
  },
  imageShadow: {
    width: 165,
    height: 165,
    borderRadius: 10,
    backgroundColor: colors.black,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 10, height: 12},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 12,
      },
    }),
  },

  textStyle: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSizes.default,
    color: colors.black,
    marginTop: 10,
  },
});
