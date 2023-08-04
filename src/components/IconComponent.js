import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function IconComponent({
    iconName,
  activeColor,
  size,
style

}) {
  return (
    <>
      <View>
        <Icon
          name={iconName}
          size={size}
          color={activeColor}
            style={[style]}
        />
      </View>
    </>
  );
}
