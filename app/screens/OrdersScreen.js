import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import OrderCard from "../components/OrderCard";

const OrdersScreen = () => {
  return (
    <FlatList
      contentContainerStyle={styles.orderContainer}
      data={Array(10).fill()}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => <OrderCard />}
    />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  orderContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
  },
});
