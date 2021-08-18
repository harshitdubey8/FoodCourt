import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import FoodCard from "./FoodCard";

const DropDown = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <View style={styles.dropDown}>
      <View style={styles.menuHeader}>
        <TouchableOpacity
          onPress={() => setIsOpened((prevState) => !prevState)}
        >
          <View style={styles.dropHeader}>
            <Text style={{ fontWeight: "900", fontSize: 16 }}>
              REGULAR PAAN
            </Text>
            {!isOpened ? (
              <Ionicons name="caret-down" color="#000" size={20} />
            ) : (
              <Ionicons name="caret-up" color="#ccc" size={20} />
            )}
          </View>
        </TouchableOpacity>
      </View>
      {isOpened && (
        <View style={styles.menuItems}>
          <FoodCard />
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropDown: {
    width: "100%",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  menuHeader: {
    width: "100%",
    height: 60,
    justifyContent: "center",
  },
  dropHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuItems: {
    width: "100%",
  },
});
