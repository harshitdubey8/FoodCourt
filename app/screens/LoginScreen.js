import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Dimensions,
} from "react-native";

import FoodButton from "../components/FoodButton";
import Background from "../assets/images/food1.jpg";

const { width } = Dimensions.get("window");

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.registerScreen}
      source={Background}
      resizeMode="cover"
    >
      <View style={styles.registerScreenContainer}>
        <View style={styles.registerForm}>
          <TextInput
            style={styles.formInput}
            placeholderTextColor="#666"
            placeholder="Email"
          />
          <TextInput
            style={styles.formInput}
            placeholderTextColor="#666"
            placeholder="Password"
            secureTextEntry
          />
          <FoodButton style={styles.button} backgroundColor="red">
            <Text style={styles.buttonText}>LOGIN</Text>
          </FoodButton>
        </View>
        <Text style={{ fontSize: 15, color: "#fff" }}>
          Don't have an account ?{" "}
          <Text
            style={{
              color: "#00BFFF",
              textDecorationLine: "underline",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Register
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  registerScreen: {
    flex: 1,
  },
  registerScreenContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  registerForm: {
    width: width * 0.9,
    padding: 10,
  },
  formInput: {
    backgroundColor: "#fff",
    width: "100%",
    height: 40,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 12,
  },
  buttonText: {
    fontWeight: "bold",
    color: "#fff",
  },
});
