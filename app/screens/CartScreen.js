import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

import CartCard from "../components/CartCard";
import FoodButton from "../components/FoodButton";

const CartScreen = () => {
  return (
    <View style={styles.cartScreen}>
      <FlatList
        contentContainerStyle={styles.cartItems}
        data={Array(10).fill()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <CartCard />}
      />
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>
          Amount :{" "}
          <Text style={{ fontSize: 25, fontWeight: "500" }}> $ 106 </Text>{" "}
        </Text>
        <FoodButton backgroundColor="#f4104e" style={styles.proceedButton}>
          <Text style={styles.buttonText}>PROCEED</Text>
        </FoodButton>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
  },
  cartItems: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  amountContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  proceedButton: {
    width: 100,
    height: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  amountText: {
    fontWeight: "bold",
  },
});
