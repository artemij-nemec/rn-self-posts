import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'

const AppHeaderIcon = props => {
  return <HeaderButton
    {...props}
    iconSize={24}
    IconComponent={Ionicons}
    color='#fff'
  />
}

export default AppHeaderIcon
