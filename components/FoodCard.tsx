import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



//router
import { useNavigation } from '@react-navigation/native'

const FoodCard = ({item} : any) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.navigate('modal', {item: item})
    }
  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={styles.Container}>
      <Text style={styles.FoodName}>{item.name}</Text>
      <Image
      source={item.image}
      style={styles.FoodImage}
      />
      
    </View>
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        margin: 10,
        height: 200,
        width: 150,
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden'
    },
    FoodName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        backgroundColor: 'gold',
        zIndex: 10,
        padding: 10,
        borderRadius: 8,
        top: 5,
        left: 5,
    },
    FoodImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        position: 'absolute',
    }
})