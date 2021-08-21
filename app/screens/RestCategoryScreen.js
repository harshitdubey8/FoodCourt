import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import RestCard from "../components/RestCard";

const RestCategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.restCategory}>
      <Image
        style={styles.categoryBanner}
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1036880806.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*",
        }}
        resizeMode="cover"
      />
      <View style={styles.categoryDetails}>
        <Text style={{ fontSize: 20 }}>Vegetarians Delight</Text>
        <Text>resturant serving best veg food</Text>
        <Text>9 Places</Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 20, alignItems: "center" }}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <RestCard
            onCardPress={() => navigation.navigate("RestaurantScreen")}
          />
        )}
      />
    </View>
  );
};

export default RestCategoryScreen;

const styles = StyleSheet.create({
  restCategory: {
    flex: 1,
    backgroundColor: "#fff",
  },
  categoryBanner: {
    height: 300,
    width: "100%",
  },
  categoryDetails: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "#eee",
  },
});
