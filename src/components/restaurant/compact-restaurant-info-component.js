import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/text.comp";
import { Platform } from "react-native";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 100px;
  height: 120px;
`;

const CompactWebView = styled(WebView)`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "ANDROID";
export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
