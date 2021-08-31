import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const OrderCard = () => {
  return (
    <View style={styles.orderCard}>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.leftCard}>
          <Text style={styles.checkoutText}>Oreo Shake harshit wala </Text>
          <Text style={styles.checkoutText}>Oreo Shake sameer wala </Text>
          <Text style={styles.checkoutText}>Oreo Shake Lallu wala </Text>
        </View>
        <View style={styles.rightCard}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "green" }}>
            $ 5.58
          </Text>
        </View>
      </View>
      <Text> {new Date().toString()}</Text>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  orderCard: {
    width: width * 0.95,
    padding: 10,
    borderRadius: 12,
    justifyContent: "space-between",
    overflow: "hidden",
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
  leftCard: {},
  rightCard: {
    alignSelf: "flex-end",
  },
  checkoutText: {
    fontSize: 15,
  },
});
