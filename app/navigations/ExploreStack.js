import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import FoodHeaderButton from "../components/FoodHeaderButton";
import ExploreScreen from "../screens/ExploreScreen";
import RestCategoryScreen from "../screens/RestCategoryScreen";
import RestaurantScreen from "../screens/RestaurantScreen";

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
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
      <Stack.Screen
        name="RestCategoryScreen"
        component={RestCategoryScreen}
        options={({ navigation }) => ({
          headerTranslucent: true,
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
    </Stack.Navigator>
  );
};

export default ExploreStack;
