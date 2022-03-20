import React from "react";
import { ScrollView } from "react-native";
import { PanGestureHandlerStackNavProps } from "../../navigation/App";
import Card from "../../shared/Card";

interface PanGestureHandlerHomeProps
  extends PanGestureHandlerStackNavProps<"PanGestureHandlerHome"> {}

const PanGestureHandlerHome: React.FC<PanGestureHandlerHomeProps> = ({
  navigation,
}) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Card
        text="Reflecty Color"
        onPress={() => {
          navigation.push("ReflectyColor");
        }}
      />

      <Card
        text="Liquid Swipe"
        onPress={() => {
          navigation.push("LiquidSwipe");
        }}
      />

      <Card
        text="Tarot"
        onPress={() => {
          navigation.push("Tarot");
        }}
      />
    </ScrollView>
  );
};

export default PanGestureHandlerHome;
