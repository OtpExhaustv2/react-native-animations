import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type HomeParamsList = {
  Home: undefined;
  PinchGestureHandler: undefined;
  ScrollView: undefined;
  PanGestureHandler: undefined;
  Animations: undefined;
};

export type HomeStackNavProps<T extends keyof HomeParamsList> = {
  navigation: StackNavigationProp<HomeParamsList, T>;
  route: RouteProp<HomeParamsList, T>;
};
