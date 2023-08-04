import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as Screens from '../container';
import {colors} from '../theme/Color';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet , View} from  'react-native'

const Tab = createBottomTabNavigator();

const tabarComponent = (activeImage, unActiveImage , activeColor , unActiveColor) => {
  return {
    tabBarIcon: ({focused}) => (
      <View >        
      <Icon  name={focused ? activeImage : unActiveImage} size={25} color={focused ? activeColor : unActiveColor}/>
      </View>
    ),
   
  };
};

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.lightGrey,
        headerShown: false,
        tabBarActiveBackgroundColor: '#ffffff0d',
        tabBarInactiveBackgroundColor: colors.black,
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarAllowFontScaling: true,
        headerTransparent: true,
        headerTitle: null,
        tabBarShowLabel: false,

        tabBarItemStyle: {
          width: 'auto',
          alignContent: 'center',
          alignSelf: 'center',
          margin: 5,
          padding: 5,
          borderRadius: 10,
          // backgroundColor: colors.white          
        },
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          overflow: 'hidden',
          borderRadius: 20,      
          marginHorizontal: 10,
          left: 0,
          right: 0,
          alignContent: 'center',
          backgroundColor: colors.black,          
          height: 60,
          borderWidth:0,
          borderColor:  colors.black
        },
      })}>
      <Tab.Screen options={tabarComponent('bar-chart-outline', 'bar-chart-sharp'  , colors.gradientColor1 , colors.white)} name="Statistics" component={Screens.Statistics} />
      <Tab.Screen options={tabarComponent('timer-outline', 'timer-sharp', colors.gradientColor1 , colors.white)} name="Remainders" component={Screens.Remainders} />
      <Tab.Screen  options={tabarComponent('home-outline', 'home', colors.gradientColor1 , colors.white)} name="HomeScreen" component={Screens.HomeScreen} />
      <Tab.Screen options={tabarComponent('cog-outline', 'cog', colors.gradientColor1 , colors.white)} name="Profile" component={Screens.Profile} />
      <Tab.Screen options={tabarComponent('rose-outline', 'rose-sharp', colors.gradientColor1 , colors.white)} name="Meditation" component={Screens.Meditation} />
    </Tab.Navigator>
  );
}

