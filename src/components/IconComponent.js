import {View, Text , TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';


export default function IconComponent({iconName, activeColor, size, style , onPress}) {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Icon name={iconName} size={size} color={activeColor} style={[style]} />
      </TouchableOpacity>
    </>
  );
}
