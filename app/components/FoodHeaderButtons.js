import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicans} from "@expo/vector-icons";

const FoodHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={20}
      color="red"
    />
  );
};

export default FoodHeaderButton;
