import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import FoodHeaderButton from "../components/FoodHeaderButton";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

const FoodNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={() => ({
            title: "Prayagraj",
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={FoodHeaderButton}>
                <Item title="Menu" iconName="menu" />
              </HeaderButtons>
            ),
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={FoodHeaderButton}>
                <Item title="Location" iconName="location-sharp" />
              </HeaderButtons>
            ),
          })}
        />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default FoodNavigator;
