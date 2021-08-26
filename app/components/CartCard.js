import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import FoodButton from "./FoodButton";

const { width } = Dimensions.get("window");

const CartCard = () => {
  return (
    <View style={styles.cartCard}>
      <View style={styles.foodDetails}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Chocolate Oreo Cake
        </Text>
        <Text>₹ 449</Text>
        <Text style={{ color: "#888", marginBottom: 5 }}>500 Gram</Text>
        <View style={styles.cartButtons}>
          <FoodButton backgroundColor="#f4104e" style={styles.addButton}>
            <Text style={styles.buttonText}>-</Text>
          </FoodButton>
          <View style={[styles.quantity, styles.addButton]}>
            <Text>0</Text>
          </View>

          <FoodButton backgroundColor="#7FBF7F" style={styles.addButton}>
            <Text style={styles.buttonText}>+</Text>
          </FoodButton>
        </View>
      </View>
      <Image
        source={{
          uri: "https://samantharschwab.com/wp-content/uploads/2021/05/vegan-oreo-cake-735x735.jpg",
        }}
        resizeMode="cover"
        style={styles.foodImage}
      />
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  cartCard: {
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  foodDetails: {},
  foodImage: {
    height: 100,
    width: 100,
    borderRadius: 18,
  },
  cartButtons: {
    flexDirection: "row",
  },
  addButton: {
    width: 30,
    height: 30,
  },

  buttonText: {
    color: "#fff",
    fontSize: 22,
  },
  quantity: {
    justifyContent: "center",
    alignItems: "center",
  },
});
