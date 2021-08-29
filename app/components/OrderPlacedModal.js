import React from "react";
import { Image, Modal, StyleSheet, Text, View } from "react-native";

const OrderPlacedModal = () => {
  return (
    <Modal visible={true} animationType="fade" transparent statusBarTranslucent>
      <View style={styles.modalContainer}>
        <View style={styles.modalWrapper}>
          <Image
            style={styles.confirmTick}
            source={require("../assets/images/greentick.jpg")}
            resizeMode="cover"
          />
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
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalWrapper: {
    width: "50%",
    padding: 20,
    backgroundColor: "#fff",
  },
  confirmTick: {
    width: "100%",
    height: 200,
    justifyContent: "flex-start",
  },
});
