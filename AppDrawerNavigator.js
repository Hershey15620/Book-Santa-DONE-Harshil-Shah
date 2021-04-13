import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen'
import NotificationScreen from '../screens/NotificationScreen';
import MyDonationScreen from '../screens/MyDonationScreen';
import {Icon} from 'react-native-elements'
export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
      screen : AppTabNavigator,
      navigationOptions:{
        drawerItems:<Icon name="home" type="fontawesome5"/>
      }
      },
      MyDonations:{
        screen:MyDonationScreen,
        navigationOptions:{
          drawerItems:<Icon name= "gift" type="fontawesome5"/>,
          drawerLabel: "My Donation"
        }
      },
      Notification:{
        screen: NotificationScreen,
        navigationOptions:{
          drawerItems:<Icon name= "bell" type="fontawesome5"/>,
          drawerLabel: "Notifications"
        }
      },
      Settings:{
        screen:SettingsScreen,
        navigationOptions:{
          drawerItems:<Icon name= "settings" type="fontawesome5"/>,
          drawerLabel: "Settings"
        }
      }
    },
    {
      contentComponent:CustomSideBarMenu
    },
    {
      initialRouteName : 'Home'
    })