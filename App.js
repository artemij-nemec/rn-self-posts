import AppLoading from 'expo-app-loading'
import React, { useState } from 'react'
import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'

export default function App() {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return <AppLoading
      startAsync={bootstrap}
      onError={err => console.log(err)}
      onFinish={() => setIsReady(true)}
    />
  }
  return <AppNavigation />
}
