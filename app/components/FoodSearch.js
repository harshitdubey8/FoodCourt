import React from "react";
import { Dimensions, StyleSheet, Text, View, TextInput } from "react-native";

const { width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";

const FoodSearch = ({ placeholder }) => {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={20} color="red" />
      <TextInput
        style={{ marginLeft: 5, width: "100%" }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default FoodSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    width: width * 0.9,
    height: 34,
    alignSelf: "center",
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});
