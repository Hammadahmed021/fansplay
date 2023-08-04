import React from 'react';
import * as Screens from '../container';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyTabs from './bottomNavigation';


const Stack = createNativeStackNavigator();
export default function StackNavigatior() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerShown: false,
        }}>
       
      
            <Stack.Screen name="WelcomeScreenOne" component={Screens.WelcomeScreenOne} />
            <Stack.Screen name="WelcomeScreenTwo" component={Screens.WelcomeScreenTwo} />
            <Stack.Screen name="OnBoardScreenOne" component={Screens.OnBoardScreenOne} />
            <Stack.Screen name="OnBoardScreenTwo" component={Screens.OnBoardScreenTwo} />
            <Stack.Screen name="OnBoardScreenThree" component={Screens.OnBoardScreenThree} /> 
            <Stack.Screen name="Signup" component={Screens.Signup} />
           <Stack.Screen name="Login" component={Screens.Login} />
            
            <Stack.Screen name="MyTabs" component={MyTabs} />
         
          
      
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

