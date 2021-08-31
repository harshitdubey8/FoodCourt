import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ExploreRestCard from "../components/ExploreRestCard";

import FoodSearch from "../components/FoodSearch";
import MiniCard from "../components/MiniCard";
import RestCard from "../components/RestCard";

const ExploreScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.exploreScreen}>
      <FoodSearch placeholder="search" />
      <View style={styles.miniContainer}>
        <MiniCard navigation={navigation} />
        <MiniCard navigation={navigation} />
        <MiniCard navigation={navigation} />
        <MiniCard navigation={navigation} />
        <MiniCard navigation={navigation} />
        <MiniCard navigation={navigation} />
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={styles.title}>Curated Collections</Text>
        <ExploreRestCard navigation={navigation} />
      </View>
      <View style={styles.popularContainer}>
        <Text style={styles.title}>Popular Resturants</Text>
        <RestCard />
        <RestCard />
        <RestCard />
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  exploreScreen: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    alignItems: "center",
  },
  miniContainer: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  popularContainer: {
    width: "90%",
    marginTop: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});
