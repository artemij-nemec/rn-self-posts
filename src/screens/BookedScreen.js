import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { DATA } from '../data.js'


export const BookedScreen = (props) => {
  const openPostHandler = post => {
    props.navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  return (
    <PostList data={DATA.filter(p => p.booked)} onOpen={openPostHandler} />
  )
}

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Favorite',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => navigation.push('Create')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  )
})

