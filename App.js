
import React , {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
// import Login from './src/container/Login/Login';
import StackNavigatior from './src/navigation/navigation';

const App = () => {

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  

  return (
    <>
    
  
      <StackNavigatior />
    
    </>
  )
}

const styles = StyleSheet.create({

});

export default App;
