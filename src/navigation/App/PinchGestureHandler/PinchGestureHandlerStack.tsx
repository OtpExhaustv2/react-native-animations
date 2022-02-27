import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { PinchGestureHandlerParamsList } from "./PinchGestureHandlerParamsList";
import {
  PinchGestureHandlerBasics,
  PinchGestureHandlerHome,
} from "../../../concepts";

interface PinchGestureHandlerStackProps {}

const Stack = createStackNavigator<PinchGestureHandlerParamsList>();
const PinchGestureHandlerStack: React.FC<
  PinchGestureHandlerStackProps
> = ({}) => {
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
        name="PinchGestureHandlerHome"
        component={PinchGestureHandlerHome}
        options={{
          headerTitle: "PinchGestureHandler",
        }}
      />
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerTitle: "",
        }}
      >
        <Stack.Screen name="Basics" component={PinchGestureHandlerBasics} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PinchGestureHandlerStack;
