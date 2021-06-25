import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.comp";
import { FadeInView } from "../../../components/animations/fade-animation";
import { Spacer } from "../../../components/spacer/spacer-component";
import { SafeArea } from "../../../components/utility/safe-area.comp";
import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants-context";
import { FavouritesContext } from "../../../services/favourites/favourites-context";
import Loader from "../../../components/loader/activity-indicator";
import { Search } from "../components/search.comp";
import { FavouritesBar } from "../../../components/favourites/favourites-bar-component";
import { RestaurantList } from "../components/restaurant-list-component-styles";

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
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
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
