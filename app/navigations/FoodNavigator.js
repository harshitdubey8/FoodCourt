import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import FoodBottomNavigator from "./FoodBottomNavigator";

const FoodNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <FoodBottomNavigator />
    </NavigationContainer>
  );
};

export default FoodNavigator;
