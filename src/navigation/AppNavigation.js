import { Platform } from "react-native"
import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import { MainScreen } from "../screens/MainScreen"
import { PostScreen } from "../screens/PostScreen"
import { THEME } from "../theme"

const isAndroid = Platform.OS === 'android'
const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid ? THEME.MAIN_COLOR : '#fff'
      },
      headerTintColor: isAndroid ? '#fff' : THEME.MAIN_COLOR
    }
  }
)

export const AppNavigation = createAppContainer(PostNavigator)
