import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Platform,
  Image,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

const RestCard = ({ onCardPress }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.wrapperCard}>
      <TouchableComponent
        style={{ flex: 1 }}
        useForeground
        onPress={onCardPress}
      >
        <View style={styles.restCard}>
          <Image
            style={styles.restImage}
            source={require("../assets/images/food4.jpg")}
            resizeMode="cover"
          />

          <View style={styles.details}>
            <View style={styles.detailsLeft}>
              <Text style={styles.restName}>BBQ</Text>
              <Text style={styles.restDetails}>Veg,Non-Veg</Text>
              <Text style={styles.restTimings}>Opens at 8.am</Text>
            </View>

            <View style={styles.detailsRight}>
              <Text style={styles.rating}>3.7 ⭐</Text>
            </View>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default RestCard;

const styles = StyleSheet.create({
  wrapperCard: {
    backgroundColor: "#fff",
    width: width * 0.9,
    borderRadius: 10,
    overflow: "hidden",
    shadowOpacity: 0.24,
    shadowColor: "#000",
    shadowRadius: 8,
    shadowOffset: {
      height: 8,
      width: 0,
    },
    elevation: 8, //shadow
    marginBottom: 10,
  },

  restCard: {
    width: "100%",
  },

  restImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-start",
  },
  details: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restName: {
    color: "black",
    fontSize: 15,
  },

  restDetails: {
    color: "#ccc",
  },

  restTimings: {
    color: "red",
  },

  rating: {
    backgroundColor: "#ff9292",
    padding: 4,
    borderRadius: 6,
  },
});
