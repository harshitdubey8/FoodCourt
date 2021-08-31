import React from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";

import FoodButton from "./FoodButton";

const OrderPlacedModal = ({ isVisible, goToOrders }) => {
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalWrapper}>
          <Image
            style={styles.confirmTick}
            source={require("../assets/images/greentick.jpg")}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 20 }}>Order Placed</Text>
          <FoodButton
            style={styles.button}
            backgroundColor="#f4104e"
            onButtonPress={() => goToOrders(false)}
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Close</Text>
          </FoodButton>
        </View>
      </View>
    </Modal>
  );
};

export default OrderPlacedModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalWrapper: {
    borderRadius: 12,
    width: "50%",
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    height: 36,
    width: 110,
    marginTop: 10,
  },
  confirmTick: {
    width: "100%",
    height: 100,
  },
});
