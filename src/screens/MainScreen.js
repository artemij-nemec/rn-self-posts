import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Post } from '../components/Post.js'
import { DATA } from '../data.js'

export const MainScreen = (props) => {
  const openPostHandler = post => {
    props.navigation.navigate('Post', {
      postId: post.id,
      date: post.date
    })
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA}
        keyExtractor={post => post.id.toString()}
        renderItem={({item}) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  )
}

MainScreen.navigationOptions = {
  headerTitle: 'My blog'
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
