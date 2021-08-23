import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import FoodBottomNavigator from "./FoodBottomNavigator";
import AuthStack from "./AuthStack";

const FoodNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {true ? <AuthStack /> : <FoodBottomNavigator />}
    </NavigationContainer>
  );
};

export default FoodNavigator;
