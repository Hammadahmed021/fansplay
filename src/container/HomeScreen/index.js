import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import {styles} from './style';
import AchievementComponent from '../../components/AchievementComponent';
import {colors} from '../../theme/Color';
import ExerciseComponent from '../../components/ExerciseComponent';
import SubHeading from '../../components/SubHeading';
import TextComponent from '../../components/TextComponent';
import {fontFamily, fontSizes} from '../../theme/Font';
import ExerciseList from './ExerciseList';

const userImage1 = require('../../assets/images/exercise.png');
const bgImg = require('../../assets/images/bgAfterImage.png');
const userImage = require('../../assets/images/userImage.png');

export default function HomeScreen() {
  return (
    <>
      <ImageBackground
        style={styles.ImageBgContainer}
        resizeMode="cover"
        source={bgImg}>
        <ScrollView>
          <HomeHeader
            imageSrc={userImage}
            userName={'Hello Naeem'}
            dayTime={'Good Evening'}
            icon={'notifications'}
          />
          <View style={styles.achievementContainerStyle}>
            <AchievementComponent
              title={'Recent Achievement'}
              desc={'In this, you can find out more and explore it.'}
              outOf={'5/8'}
              buttonText={'View'}
              numberOfLines={2}
              numberOfLinesDesc={2}
              iconsize={20}
              iconcolor={colors.gradientColor2}
              iconname={'tv-sharp'}
              style={styles.achievementStyle}
            />

            <AchievementComponent
              title={'Set Your Today’s Goal'}
              desc={'In this, you can find out more and explore it.'}
              outOf={'5/8'}
              buttonText={'View'}
              numberOfLines={2}
              numberOfLinesDesc={2}
              iconsize={20}
              iconcolor={colors.gradientColor2}
              iconname={'flag-sharp'}
              style={styles.achievementStyle}
              textStyle={styles.titleStyle}
            />
          </View>
          <View style={styles.exerciseContainer}>
            <SubHeading
              subheading={'Exercise picked for you'}
              colors={colors.gradientColor2}
            />

            <TextComponent
              text={'View All  >'}
              fontsize={fontSizes.small}
              fontfamily={fontFamily.light}
              textColor={colors.white}
            />
          </View>

          <ExerciseList />
        </ScrollView>
      </ImageBackground>
    </>
  );
}
