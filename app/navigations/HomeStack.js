import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import FoodHeaderButton from "../components/FoodHeaderButton";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Prayagraj",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={FoodHeaderButton}>
              <Item
                title="Cart"
                iconName="cart"
                onPress={() => navigation.navigate("CartScreen")}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={FoodHeaderButton}>
              <Item title="Location" iconName="location-sharp" />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={FoodHeaderButton}>
              <Item
                title="Back"
                iconName="chevron-back"
                onPress={() => navigation.goBack()}
              />
            </HeaderButtons>
          ),
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={FoodHeaderButton}>
              <Item title="Save" iconName="bookmark-outline" />
            </HeaderButtons>
          ),
        })}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={({ navigation }) => ({
          title: "Your Cart",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={FoodHeaderButton}>
              <Item
                title="Back"
                iconName="chevron-back"
                onPress={() => navigation.goBack()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
