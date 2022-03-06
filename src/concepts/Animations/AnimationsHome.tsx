import React from "react";
import { ScrollView } from "react-native";
import { AnimationsStackNavProps } from "../../navigation/App/Animations";
import Card from "../../shared/Card";

interface AnimationsHomeProps
  extends AnimationsStackNavProps<"AnimationsHome"> {}

const AnimationsHome: React.FC<AnimationsHomeProps> = ({ navigation }) => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <Card
        text="Clock Loader"
        onPress={() => {
          navigation.push("ClockLoaderAnimation");
        }}
      />
    </ScrollView>
  );
};

export default AnimationsHome;
