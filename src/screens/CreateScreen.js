import React, { useState } from 'react'
import { Button, Image, Keyboard, StyleSheet, Text, View } from 'react-native'
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import AppHeaderIcon from '../components/AppHeaderIcon'
import { addPost } from '../store/actions/post'
import { THEME } from '../theme'

export const CreateScreen = ({ navigation }) => {
  const img =
    'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const saveHandler = () => {
    dispatch(
      addPost({
        date: new Date().toJSON(),
        text,
        img,
        booked: false
      })
    )
    navigation.navigate('Main')
  }

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create post</Text>
          <TextInput
            style={styles.textarea}
            placeholder='Enter post text'
            value={text}
            onChangeText={setText}
            multiline
          />
          <Image
            style={{ width: '100%', height: 200, marginBottom: 10 }}
            source={{
              uri: img
            }}
          />
          <Button
            title='Create'
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Create post',
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title='Toggle Drawer'
        iconName='ios-menu'
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-regular',
    textAlign: 'center',
    marginVertical: 10
  },
  textarea: {
    padding: 10,
    marginBottom: 10
  }
})
