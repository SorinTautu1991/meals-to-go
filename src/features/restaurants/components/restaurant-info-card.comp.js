import React from "react";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component.js";
import { Text } from "../../../components/typography/text.comp";
import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Adress,
  Info,
  Rating,
  Section,
  SectionEnd,
  Open,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourites-component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = [
      "https://res.cloudinary.com/hmzve6z5z/image/upload/v1612371175/FOOD_IMG/PASTA/Toasted_Spinach_Ravioli.jpg.jpg.jpg",
    ],
    address = "Some adrress 102",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <Open xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Adress>{address}</Adress>
      </Info>
    </RestaurantCard>
  );
};
