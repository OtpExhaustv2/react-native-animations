import React from "react";
import { ScrollView } from "react-native";
import Card from "../../shared/Card";
import { ScrollViewStackNavProps } from "../../navigation/App/ScrollView";

interface ScrollViewHomeProps
  extends ScrollViewStackNavProps<"ScrollViewHome"> {}

const ScrollViewHome: React.FC<ScrollViewHomeProps> = ({ navigation }) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Card
        text="Horizontal Animation"
        onPress={() => {
          navigation.push("HorizontalAnimation");
        }}
      />
      <Card
        text="Channel animation"
        onPress={() => {
          navigation.push("ChannelScrollView");
        }}
      />
    </ScrollView>
  );
};

export default ScrollViewHome;
