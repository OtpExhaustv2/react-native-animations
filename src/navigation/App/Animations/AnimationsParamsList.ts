import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type AnimationsParamsList = {
  AnimationsHome: undefined;
  ClockLoaderAnimation: undefined;
};

export type AnimationsStackNavProps<T extends keyof AnimationsParamsList> = {
  navigation: StackNavigationProp<AnimationsParamsList, T>;
  route: RouteProp<AnimationsParamsList, T>;
};
