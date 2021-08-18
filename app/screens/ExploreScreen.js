import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FoodSearch from "../components/FoodSearch";
import MiniCard from "../components/MiniCard";

const ExploreScreen = () => {
  return (
    <View style={styles.exploreScreen}>
      <FoodSearch placeholder="search" />
      <View style={styles.miniContainer}>
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </View>
      <Text>This is explore screen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  exploreScreen: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  miniContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});
