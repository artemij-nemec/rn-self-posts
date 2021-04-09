import { Ionicons } from "@expo/vector-icons"
import React from 'react'
import { Platform } from "react-native"
import { createAppContainer } from "react-navigation"
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { AboutScreen } from '../screens/AboutScreen'
import { BookedScreen } from "../screens/BookedScreen"
import { CreateScreen } from '../screens/CreateScreen'
import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"
import { THEME } from "../theme"
const isAndroid = Platform.OS === 'android'
const navigationParams = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: isAndroid ? THEME.MAIN_COLOR : '#fff'
    },
    headerTintColor: isAndroid ? '#fff' : THEME.MAIN_COLOR
  }
}
const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navigationParams
)

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen
  },
  navigationParams
)

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'All',
      tabBarIcon: info => <Ionicons name='ios-albums' size={25} color={info.tintColor} />
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorite',
      tabBarIcon: info => <Ionicons name='ios-star' size={25} color={info.tintColor} />
    }
  }
}
const BottomNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(
    bottomTabsConfig,
    {
      activeTintColor: '#fff',
      shifting: true,
      barStyle: {
        backgroundColor: THEME.MAIN_COLOR
      }
    }
  )
  : createBottomTabNavigator(
    bottomTabsConfig,
    {
      tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
      }
    }
  )

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen
  },
  navigationParams
)
const CreateNavigator = createStackNavigator(
  {
    Create: CreateScreen
  },
  navigationParams
)

const MainNavigator = createDrawerNavigator(
  {
    PostTabs: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: 'Main'
      }
    },
    About: {
      screen: AboutNavigator,
      navigationOptions: {
        drawerLabel: 'About'
      }
    },
    Create: {
      screen: CreateNavigator,
      navigationOptions: {
        drawerLabel: 'New post'
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: THEME.MAIN_COLOR,
      labelStyle: {
        fontFamily: 'open-bold'
      }
    }
  })

export const AppNavigation = createAppContainer(MainNavigator)
