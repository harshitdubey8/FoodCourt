import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const FoodButton = () => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableComponent style={{ flex: 1 }} onPress={() => {}}>
        <View style={styles.buttonWrapper} useForeground>
          <Text style={styles.buttonText}>Add</Text>
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
    borderWidth: 1,
    borderColor: "red",
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "pink",
  },
  buttonText: {
    color: "red",
  },
});
