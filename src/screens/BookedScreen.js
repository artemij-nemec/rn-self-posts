import React from 'react'
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import AppHeaderIcon from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'

export const BookedScreen = ({ navigation }) => {
  const bookedPosts = useSelector(
    state => state.post.bookedPosts
  )
  const openPostHandler = post => {
    navigation.navigate('Post', {
      postId: post.id,
      date: post.date,
      booked: post.booked
    })
  }

  return (
    <PostList data={bookedPosts} onOpen={openPostHandler} />
  )
}

BookedScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Favorite',
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Take photo'
        iconName='ios-camera'
        onPress={() => navigation.push('Create')}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={navigation.toggleDrawer}
      />
    </HeaderButtons>
  )
})
