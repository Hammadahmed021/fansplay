import { View, Text , ImageBackground , ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/HomeHeader';
import {styles} from './style'

const bgImg = require('../../assets/images/bgAfterImage.png');

const userImage = require('../../assets/images/userImage.png')

export default function Meditation() {
  return (
    <>
    <ImageBackground style={styles.ImageBgContainer} resizeMode="cover" source={bgImg}>
      <ScrollView>

      <HomeHeader  imageSrc={userImage} userName={'Hello Naeem'} dayTime={'Good Evening'} icon={'notifications'}/>   
      </ScrollView>


    </ImageBackground>
    </>
  )
}