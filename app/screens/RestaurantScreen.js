import React from "react";
import { StyleSheet, Text, View } from "react-native";

import DropDown from "../components/DropDown";

const RestaurantScreen = () => {
  return (
    <View style={styles.restaurantScreen}>
      <View style={styles.restaurantDetails}>
        <View style={styles.restaurantInfo}>
          <Text
            style={{ ...styles.textStyle, fontSize: 25, fontWeight: "bold" }}
          >
            Raju Panwadi
          </Text>
          <Text style={styles.textStyle}>Paan, supadi, kattha, Pass-Pass</Text>
          <Text style={{ ...styles.textStyle, color: "#888" }}>
            Civil Lines
          </Text>
        </View>
        <View style={styles.restaurantRating}>
          <Text style={{ color: "#fff" }}>{"4.0 ⭐\nDelivery"}</Text>
        </View>
      </View>
      {/* menu */}
      <View style={styles.fullMenu}>
        <View style={styles.fullMenuTitle}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Full Menu</Text>
        </View>
        <DropDown />
        <DropDown />
        <DropDown />
      </View>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  restaurantScreen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    marginTop: 5,
  },
  fullMenuTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10,
    borderBottomColor: "red",
    borderBottomWidth: 5,
    width: 70,
    paddingBottom: 5,
  },
  restaurantDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restTitle: {},
  restaurantInfo: {
    padding: 10,
    paddingRight: 0,
  },
  restaurantRating: {
    height: 60,
    width: 80,
    backgroundColor: "#257E3E",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  fullMenu: {},
});
