import React from "react";
import { View } from "react-native";
import { PanGestureHandlerStackNavProps } from "../../../navigation/App/PanGestureHandler";
import Card from "../../../shared/Card";

interface PanGestureHandlerHomeProps
  extends PanGestureHandlerStackNavProps<"PanGestureHandlerHome"> {}

const PanGestureHandlerHome: React.FC<PanGestureHandlerHomeProps> = ({
  navigation,
}) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Card
        text="Reflecty Color"
        onPress={() => {
          navigation.push("ReflectyColor");
        }}
      />
    </View>
  );
};

export default PanGestureHandlerHome;
