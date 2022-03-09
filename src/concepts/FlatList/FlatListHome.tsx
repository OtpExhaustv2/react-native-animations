import React from "react";
import { ScrollView } from "react-native";
import { FlatListStackNavProps } from "../../navigation/App";
import Card from "../../shared/Card";

interface FlatListHomeProps extends FlatListStackNavProps<"FlatListHome"> {}

const FlatListHome: React.FC<FlatListHomeProps> = ({ navigation }) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Card
        text="Parallax Carousel"
        onPress={() => {
          navigation.push("ParallaxCarousel");
        }}
      />
      <Card
        text="Timer"
        onPress={() => {
          navigation.push("Timer");
        }}
      />
    </ScrollView>
  );
};

export default FlatListHome;
