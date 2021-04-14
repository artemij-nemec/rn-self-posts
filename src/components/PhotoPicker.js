import React, { useState } from 'react'
import { Alert, Button, Image, StyleSheet, View } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

const askForPermissions = async () => {
  const { status } = await Permissions.askAsync(
    Permissions.CAMERA,
    Permissions.MEDIA_LIBRARY
  )
  if (status !== 'granted') {
    Alert.alert('Error', 'No rights to create photo')
    return false
  }
  return true
}

export const PhotoPicker = ({ onPick }) => {
  const [image, setImage] = useState(null)
  const takePhoto = async () => {
    const hasPermissions = await askForPermissions()

    if (!hasPermissions) {
      return
    }

    const img = await ImagePicker.launchCameraAsync({
      quality: 0.7,
      allowsEditing: false,
      aspect: [16, 9]
    })
    setImage(img.uri)
    onPick(img.uri)
  }

  return (
    <View style={styles.wrapper}>
      <Button title='Take a photo' onPress={takePhoto} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10
  }
})
