import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const FoodButton = ({ style, backgroundColor, onButtonPress, children }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableComponent style={{ flex: 1 }} onPress={onButtonPress}>
        <View
          style={{ ...styles.buttonWrapper, backgroundColor }}
          useForeground
        >
          {children}
        </View>
      </TouchableComponent>
    </View>
  );
};

export default FoodButton;

const styles = StyleSheet.create({
  buttonContainer: {
    height: 30,
    width: 60,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.24,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "pink",
  },
});
