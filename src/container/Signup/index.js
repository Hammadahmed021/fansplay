import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SignInHeader from '../../components/SignInHeader';
import {styles} from './style';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from '../../components/SocialLogin';

const imgEmail = require('../../assets/images/email_icon.png');
const imgEnvelope = require('../../assets/images/mail.png');
const imgLock = require('../../assets/images/lock.png');

export default function Signup({navigation}) {
  return (
    <View style={styles.bgContainer}>
      <SignInHeader headerText={'sign up'} />
      <ScrollView>
        <View style={{marginHorizontal: 5}}>
          <InputComponent
            placeholder={'john doe'}
            legend={'Full Name'}
            keyboard={'default'}
            iconImg={imgEmail}
          />
          <InputComponent
            placeholder={'johndoe@example.com'}
            legend={'Email'}
            keyboard={'email-address'}
            iconImg={imgEnvelope}
          />
          <InputComponent
            secureTextEntry={true}
            legend={'Password'}
            keyboard={'default'}
            iconImg={imgLock}
          />
          <InputComponent
            secureTextEntry={true}
            legend={'Confirm Password'}
            keyboard={'default'}
            iconImg={imgLock}
          />
          <View
            style={{paddingHorizontal: 10, marginTop: 10, marginBottom: 30}}>
            <ButtonComponent
              title={'Sign up'}
              textWeight={'500'}
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>

          <SocialLogin
            text={'Already have an account'}
            orText={'or login with'}
            signInText={'Log In'}
            onPress={() => {
              navigation.navigate('Login');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
