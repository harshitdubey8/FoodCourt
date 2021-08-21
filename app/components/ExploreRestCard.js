import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const ExploreRestCard = ({ navigation }) => {
  return (
    <View style={styles.exploreCards}>
      <FlatList
        contentContainerstyle={styles.exploreRestCard}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => item.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={() => (
          <Pressable onPress={() => navigation.navigate("RestCategoryScreen")}>
            <ImageBackground
              source={{
                uri: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?b=1&k=6&m=1220017909&s=170667a&w=0&h=yqVHUpGRq-vldcbdMjSbaDV9j52Vq8AaGUNpYBGklXs=",
              }}
              style={styles.exploreRestCardContainer}
              resizeMode="cover"
            >
              <View style={styles.exploreTextSection}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Vegetarians Delight
                </Text>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  9 places
                </Text>
              </View>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  );
};

export default ExploreRestCard;

const styles = StyleSheet.create({
  exploreCards: {
    width: width * 0.9,
    height: 200,
  },
  exploreRestCard: {
    width: width * 0.9,
    height: 200,
  },
  exploreRestCardContainer: {
    height: 200,
    width: 150,
    overflow: "hidden",
    borderRadius: 10,
    marginRight: 10,
  },
  exploreTextSection: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 10,
  },
});
