import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ScreenHeaderBtnProps {
    iconUrl: any;
    onPress: () => void;
}

const ScreenHeaderBtn = ({ iconUrl, onPress } : ScreenHeaderBtnProps) => {
  return (
    <View style={styles.Container}>
        <TouchableOpacity onPress={onPress}>
      <Image source={iconUrl} style={styles.ContainerImage} />
      </TouchableOpacity>
    </View>
  )
}

export default ScreenHeaderBtn

const styles = StyleSheet.create({
    Container: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 9999,
        backgroundColor: 'gold',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ContainerImage: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#000000'
    }
})