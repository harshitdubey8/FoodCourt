import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import FoodButton from "./FoodButton";

const FoodCard = () => {
  return (
    <View style={styles.foodCard}>
      <View style={styles.foodDetails}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Chocolate Oreo Cake
        </Text>
        <Text>₹ 449</Text>
        <Text style={{ color: "#888", marginBottom: 5 }}>500 Gram</Text>
        <FoodButton backgroundColor="#f4104e" style={styles.button}>
          <Text style={{ color: "#fff" }}>ADD</Text>
        </FoodButton>
      </View>
      <View>
        <Image
          source={{
            uri: "https://samantharschwab.com/wp-content/uploads/2021/05/vegan-oreo-cake-735x735.jpg",
          }}
          resizeMode="cover"
          style={styles.foodImage}
        />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foodCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  foodDetails: {},
  button: {
    width: 60,
    height: 30,
  },
  foodImage: {
    height: 100,
    width: 100,
    borderRadius: 18,
  },
});
