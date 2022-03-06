import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { AnimationsHome, ClockLoader } from "../../../concepts";
import { AnimationsParamsList } from "./AnimationsParamsList";

interface AnimationsStackProps {}

const Stack = createStackNavigator<AnimationsParamsList>();

const AnimationsStack: React.FC<AnimationsStackProps> = () => {
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
        name="AnimationsHome"
        component={AnimationsHome}
        options={{
          headerTitle: "PanGestureHandler",
        }}
      />
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: "",
        }}
      >
        <Stack.Screen name="ClockLoaderAnimation" component={ClockLoader} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AnimationsStack;
