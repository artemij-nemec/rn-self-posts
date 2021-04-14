import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'
import store from './src/store'

import { LogBox } from 'react-native'
LogBox.ignoreLogs([
  'Your project is accessing the following APIs from a deprecated global rather than a module import'
])

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
}
