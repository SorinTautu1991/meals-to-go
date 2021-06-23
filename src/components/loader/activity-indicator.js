import React from "react";
import { Colors } from "react-native-paper";
import { LoadingContainer } from "./activity-indicator.styles";
import { Loading } from "./activity-indicator.styles";

const Loader = () => (
  <LoadingContainer>
    <Loading size={50} animating={true} color={Colors.blue300} />
  </LoadingContainer>
);

export default Loader;
