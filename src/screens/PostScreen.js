import React from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import AppHeaderIcon from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')
  const post = DATA.find(p => p.id === postId)
  const removeHandler = () => {
    Alert.alert(
      'Delete post',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'neutral',
        },
        {
          text: 'Delete',
          onPress: () => { },
          style: 'negative'
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image}></Image>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title='Delete'
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')
  const booked = navigation.getParam('booked')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: 'Post from ' + new Date(date).toLocaleDateString(),
    headerStyle: {
      backgroundColor: THEME.MAIN_COLOR
    },
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Favorite'
          iconName={iconName}
          onPress={() => console.log('Favorite')}
        />
      </HeaderButtons>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  }
})
