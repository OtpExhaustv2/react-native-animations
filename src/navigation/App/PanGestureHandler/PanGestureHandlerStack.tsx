import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { PanGestureHandlerParamsList } from "./PanGestureHandlerParamsList";
import {
  LiquidSwipe,
  PanGestureHandlerHome,
  ReflectyColor,
  Tarot,
} from "../../../concepts";

interface PanchGestureHandlerStackProps {}

const Stack = createStackNavigator<PanGestureHandlerParamsList>();
const PanGestureHandlerStack: React.FC<
  PanchGestureHandlerStackProps
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
        name="PanGestureHandlerHome"
        component={PanGestureHandlerHome}
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
        <Stack.Screen name="ReflectyColor" component={ReflectyColor} />
        <Stack.Screen name="LiquidSwipe" component={LiquidSwipe} />
        <Stack.Screen name="Tarot" component={Tarot} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PanGestureHandlerStack;
