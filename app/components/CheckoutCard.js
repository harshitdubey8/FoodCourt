import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CheckoutCard = () => {
  return (
    <View style={styles.checkoutCard}>
      <Text style={styles.checkoutText}>Oreo Shake Lallu wala X 1</Text>
      <Text style={styles.checkoutText}>$ 5.58</Text>
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  checkoutCard: {
    width: "100%",
    padding: 10,
    borderRadius: 12,
    justifyContent: "space-between",
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#fff",
    shadowOpacity: 0.24,
    shadowColor: "#000",
    shadowRadius: 8,
    shadowOffset: {
      height: 6,
      width: 0,
    },

    elevation: 8,
    marginBottom: 10,
  },
});
