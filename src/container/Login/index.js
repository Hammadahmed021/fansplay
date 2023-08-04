import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SignInHeader from '../../components/SignInHeader';
import { styles } from './style';
import InputComponent from '../../components/InputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from '../../components/SocialLogin';


const imgEnvelope = require('../../assets/images/mail.png');
const imgLock = require('../../assets/images/lock.png');

export default function Login({navigation}) {
  return (
    <View style={styles.bgContainer}>
      <SignInHeader headerText={'Log In'} />
      <ScrollView>
        <View style={{marginHorizontal: 5}}>
        
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
         
          <View
            style={{paddingHorizontal: 10, marginTop: 10, marginBottom: 30}}>
            <ButtonComponent
              title={'Log In'}
              textWeight={'500'}
              onPress={() => {
                navigation.navigate('MyTabs');
              }}
              
            />
          </View>

          <SocialLogin
            text={'Don’t have an account ?'}
            orText={'or Sign up with'}
            signInText={'Sign up'}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}
