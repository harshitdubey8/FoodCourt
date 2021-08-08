import "react-native-gesture-handler";

import { enableScreens } from "react-native-screens";
import React from "react";

import FoodNavigator from "./app/navigations/FoodNavigator";
enableScreens();

export default function App() {
  return <FoodNavigator />;
}
