import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import FoodSearch from "../components/FoodSearch";

import RestCard from "../components/RestCard";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 12, backgroundColor: "#cc2772" }}>
      <FoodSearch placeholder="search your favourite cusine and restros" />

      <FlatList
        contentContainerStyle={styles.homeScreen}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <RestCard
            onCardPress={() => navigation.navigate("RestaurantScreen")}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreen: {
    paddingBottom: 20,
    alignItems: "center",
  },
});
