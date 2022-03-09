import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { FlatListHome, ParallaxCarousel, Timer } from "../../../concepts";
import { FlatListParamsList } from "./FlatListParamsList";

interface FlatListStackProps {}

const Stack = createStackNavigator<FlatListParamsList>();

const FlatListStack: React.FC<FlatListStackProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        gestureEnabled: true,
        headerLeftLabelVisible: false,
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        name="FlatListHome"
        component={FlatListHome}
        options={{
          headerTitle: "FlatList",
        }}
      />
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: "",
        }}
      >
        <Stack.Screen name="ParallaxCarousel" component={ParallaxCarousel} />
        <Stack.Screen name="Timer" component={Timer} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default FlatListStack;
