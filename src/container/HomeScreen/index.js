import { View, Text } from 'react-native'
import React from 'react'
import TextComponent from '../../components/TextComponent'
import ButtonComponent from '../../components/ButtonComponent'
import SubHeading from '../../components/SubHeading'

export default function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      {/* <TextComponent text={'Testing'}/> */}
      <ButtonComponent 
      title={'Join Now'}
      color={'#fff'}
      bgColor={'#000'}
      
      />


    {/* <SubHeading 
    subheading={'Journal. Breathe. Grow. Thrive with Sleepo'}
    /> */}

    </View>
  )
}