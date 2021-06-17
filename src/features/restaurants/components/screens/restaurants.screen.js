import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../restaurant-info-card.comp";
import { StatusBar } from "react-native";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: { flex: 1, backgroundColor: "blue", padding: 16 },
});
