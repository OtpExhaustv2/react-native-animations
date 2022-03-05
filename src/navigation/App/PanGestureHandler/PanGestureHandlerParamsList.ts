import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type PanGestureHandlerParamsList = {
  PanGestureHandlerHome: undefined;
  ReflectyColor: undefined;
  LiquidSwipe: undefined;
};

export type PanGestureHandlerStackNavProps<
  T extends keyof PanGestureHandlerParamsList
> = {
  navigation: StackNavigationProp<PanGestureHandlerParamsList, T>;
  route: RouteProp<PanGestureHandlerParamsList, T>;
};
