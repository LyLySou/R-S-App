import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './../screen/Home';
import SettingScreen from './../screen/search';
import MoreScreen from './../screen/about';
import HelpScreen from './../screen/about/help';
import NewsScreen from './../screen/News'


const MoreStack=createStackNavigator({
    More:MoreScreen,
    Help:HelpScreen
})

const appTabs=createBottomTabNavigator({
    Home:HomeScreen,
    Search:SettingScreen,
    News:NewsScreen,
    About:MoreStack
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : ''}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : ''}`;
        }else if (routeName === 'News') {
            iconName = `ios-mail${focused ? '' : ''}`;
          }
        else if (routeName === 'About') {
      
            iconName = `ios-person${focused ? '' : ''}`;
          }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
)

export default createAppContainer(appTabs);