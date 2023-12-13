import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//Hooks
import React, { useState } from "react";

// route
import { useNavigation, useRoute } from "@react-navigation/native";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const modal = () => {
  const route = useRoute();
  const food = route.params?.item;
  
  const router = useNavigation();

  const [wishlist, setWishlist] = useState([]); 

  const addToWishlist = () => {
    setWishlist([...wishlist, food]); 

    router.navigate('two', { wishlist: wishlist})
  };

  const handlePress = () => {
    router.goBack("/");
  };


  return (
    <View>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView>
        <View style={styles.Container1}>
          <TouchableOpacity
            onPress={handlePress}
            style={styles.TouchableOpacity}
          >
            <AntDesign name="back" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: "absolute", top: 40, right: 10, zIndex: 10 }}
            onPress={addToWishlist}
          >
            <AntDesign name="heart" size={30} color="green" />
          </TouchableOpacity>
          <Image source={food.image} style={styles.ContainerImage} />
          <View style={styles.FoodName}>
            <Text>{food.name}</Text>
          </View>
        </View>
        <View style={styles.Container2}>
          <View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 20,
              }}
            >
              <Entypo name="clock" size={24} color="gold" />
              <Text style={styles.Preparation}>{food.preparation_time}</Text>
            </View>
            <View style={{ padding: 20 }}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Ingredients
              </Text>
              <View>
                {food.ingredients.map((item: string, index: number) => (
                  <View key={index} style={{ flexDirection: "row", gap: 10 }}>
                    <Entypo name="dot-single" size={24} color="white" />
                    <Text style={{ color: "white" }}>{item}</Text>
                  </View>
                ))}
              </View>
              <View style={{ marginTop: 30 }}>
                <Text style={{ color: "white" }}>{food.description}</Text>
              </View>
              <View>
                <Text
                  style={{ color: "white", fontWeight: "900", fontSize: 18 }}
                >
                  Preparation
                </Text>
              </View>
              <View>
                {food.recipe.map((item: any, index: number) => (
                  <View key={index}>
                    <Text style={{ color: "white", fontWeight: "900" }}>
                      {item.step}:
                    </Text>
                    <Text style={{ color: "white" }}>{item.action}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default modal;

const styles = StyleSheet.create({
  Container1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gold",
    height: 250,
    position: "relative",
  },
  ContainerImage: {
    width: "100%",
    height: "100%",
  },
  FoodName: {
    position: "absolute",
    backgroundColor: "gold",
    zIndex: 10,
    padding: 10,
    borderRadius: 8,
    bottom: 20,
    left: 10,
  },
  TouchableOpacity: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    borderRadius: 8,
    top: 40,
    left: 10,
    backgroundColor: "#00000060",
  },
  Container2: {
    backgroundColor: "black",
    height: "100%",
    position: "relative",
  },
  Preparation: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },

});



