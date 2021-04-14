import React, { useRef, useState } from 'react'
import { Button, Image, Keyboard, StyleSheet, Text, View } from 'react-native'
import {
  ScrollView,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import AppHeaderIcon from '../components/AppHeaderIcon'
import { PhotoPicker } from '../components/PhotoPicker'
import { addPost } from '../store/actions/post'
import { THEME } from '../theme'

export const CreateScreen = ({ navigation }) => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const imgRef = useRef()

  const saveHandler = () => {
    dispatch(
      addPost({
        date: new Date().toJSON(),
        text,
        img: imgRef.current,
        booked: false
      })
    )
    navigation.navigate('Main')
  }
  const photoPickHandler = uri => {
    imgRef.current = uri
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
          <PhotoPicker onPick={photoPickHandler} />
          <Button
            title='Create'
            color={THEME.MAIN_COLOR}
            onPress={saveHandler}
            disabled={!text}
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
