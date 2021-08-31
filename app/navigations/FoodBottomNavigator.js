import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import ExploreStack from "./ExploreStack";
import { Ionicons } from "@expo/vector-icons";
import OrdersScreen from "../screens/OrdersScreen";

const Tab = createBottomTabNavigator();

const FoodBottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "HomeStack") {
            iconName = "home-outline";
          } else if (route.name === "ExploreStack") {
            iconName = "fast-food-outline";
          } else if (route.name === "OrdersScreen") {
            iconName = "basket-outline";
          }
          return <Ionicons color={color} size={size} name={iconName} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "#888",
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{ tabBarLabel: "Explore" }}
      />
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          headerShown: true,
          title: "Your Orders",
          tabBarLabel: "Orders",
        }}
      />
    </Tab.Navigator>
  );
};

export default FoodBottomNavigator;
