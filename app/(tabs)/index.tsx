// react native components
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

//react from react
import React from "react";

// expo vector icons
import { AntDesign } from "@expo/vector-icons";

//components
import FoodCard from "../../components/FoodCard";
import ItemList from "../../components/ItemList";

//local db
import { foods } from "../../data/db";

const HomeTab = () => {
  return (
    <ScrollView>
      <View>
        <StatusBar />
        <SafeAreaView></SafeAreaView>

        <View>
          <View>
            <TextInput
              placeholder="Type food name"
              placeholderTextColor={"gray"}
              style={styles.TextInput}
            />
          </View>
          <View>
            {foods.length > 0 ? (
              <Text style={styles.RecommendationData}>
                We have {foods.length} recipes
              </Text>
            ) : (
              <Text style={styles.RecommendationData}>
                Oops! No recipe available!
              </Text>
            )}
          </View>
          <View style={styles.HeroTextContainer}>
            <Text style={styles.HeroText}>Fresh recipes</Text>
            <TouchableOpacity style={styles.TouchableOpacity}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                See all
                <AntDesign name="right" size={16} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              horizontal
              data={foods}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <FoodCard item={item} />}
            />
          </View>
          <View style={styles.HeroTextContainer}>
            <Text style={styles.HeroText}>All Recipes</Text>
            <TouchableOpacity style={styles.TouchableOpacity}>
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                See all
                <AntDesign name="right" size={16} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={foods}
              renderItem={({ item }) => <ItemList item={item} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  HeroTextContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeroText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  TouchableOpacity: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "gray",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  RecommendationData: {
    fontSize: 20,
    backgroundColor: "gold",
    padding: 20,
    fontWeight: "bold",
    color: "gray",
  },
  TextInput: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    height: 50,
    margin: 10,
    position: "relative",
  },
});
