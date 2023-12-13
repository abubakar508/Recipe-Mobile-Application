import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemList = ({ item }: any) => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate('modal', {item: item})
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            margin: 10,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            marginRight: 10,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              textTransform: "uppercase",
              fontWeight: "900",
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{
              color: "gold",
            }}
          >
            {item.preparation_time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({});
