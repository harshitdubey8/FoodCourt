import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const MiniCard = () => {
  return (
    <View style={styles.miniCard}>
      <Image
        style={styles.miniImage}
        resizeMode="cover"
        source={{
          uri: "https://www.kindpng.com/picc/m/176-1761587_ice-cream-cute-clipart-cute-ice-cream-png.png",
        }}
      />
      <Text>Indoor</Text>
    </View>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  miniCard: {
    height: 100,
    width: 100,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 6,
    elevation: 8,
    marginBottom: 15,
  },
  miniImage: {
    height: 60,
    width: 60,
  },
});
