import React from "react";
import { ScrollView } from "react-native";
import { HomeStackNavProps } from "../navigation/App/Home/HomeParamsList";
import Card from "../shared/Card";

interface HomeScreenProps extends HomeStackNavProps<"Home"> {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Card
        text="PinchGestureHandler"
        onPress={() => {
          navigation.push("PinchGestureHandler");
        }}
      />
      <Card
        text="ScrollView"
        onPress={() => {
          navigation.push("ScrollView");
        }}
      />
      <Card
        text="PanGestureHandler"
        onPress={() => {
          navigation.push("PanGestureHandler");
        }}
      />
      <Card
        text="Animations"
        onPress={() => {
          navigation.push("Animations");
        }}
      />
    </ScrollView>
  );
};

export default HomeScreen;
