import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppStack } from "./App";

interface RoutesProps {}

const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
