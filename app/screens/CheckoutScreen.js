import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View, ScrollView } from "react-native";

import CheckoutCard from "../components/CheckoutCard";
import FoodButton from "../components/FoodButton";
import OrderPlacedModal from "../components/OrderPlacedModal";

const CheckoutScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.checkoutScreen}>
      <ScrollView contentContainerStyle={styles.checkoutWrapper}>
        <View style={styles.checkoutForm}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#666"
            style={styles.formInput}
          />
          <TextInput
            placeholderTextColor="#666"
            placeholder="Address"
            style={styles.formInput}
          />
          <TextInput
            placeholderTextColor="#666"
            placeholder="Landmark"
            style={styles.formInput}
          />
          <TextInput
            placeholderTextColor="#666"
            placeholder="Alternate Number"
            style={styles.formInput}
          />
        </View>

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
            Your Cart Items
          </Text>
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
          <CheckoutCard />
        </View>
      </ScrollView>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>
          Amount :{" "}
          <Text style={{ fontSize: 25, fontWeight: "500" }}> $ 106 </Text>{" "}
        </Text>
        <FoodButton
          backgroundColor="#f4104e"
          style={styles.proceedButton}
          onButtonPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>Place Order</Text>
        </FoodButton>
      </View>
      <OrderPlacedModal visible={modalVisible} />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  checkoutScreen: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
  },
  checkoutWrapper: {
    paddingHorizontal: 20,
  },
  checkoutForm: {
    marginBottom: 10,
  },
  formInput: {
    backgroundColor: "#fff",
    width: "100%",
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 2,
    borderBottomWidth: 1.4,
  },

  amountContainer: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  proceedButton: {
    width: 150,
    height: 50,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  amountText: {
    fontWeight: "bold",
  },
});
