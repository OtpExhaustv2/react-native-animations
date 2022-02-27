import React from "react";
import { View } from "react-native";
import { HomeStackNavProps } from "../navigation/App/Home/HomeParamsList";
import Card from "../shared/Card";

interface HomeScreenProps extends HomeStackNavProps<"Home"> {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
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
    </View>
  );
};

export default HomeScreen;
