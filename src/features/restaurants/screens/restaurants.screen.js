import React, { useContext, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.comp";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component.js";
import { SafeArea } from "../../../components/utility/safe-area.comp";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants-context";
import { FavouritesContext } from "../../../services/favourites/favourites-context";
import Loader from "../../../components/loader/activity-indicator";
import { Search } from "../components/search.comp";
import { FavouritesBar } from "../../../components/favourites/favourites-bar-component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
