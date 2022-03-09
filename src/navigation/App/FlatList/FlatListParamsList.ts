import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type FlatListParamsList = {
  FlatListHome: undefined;
  ParallaxCarousel: undefined;
  Timer: undefined;
};

export type FlatListStackNavProps<T extends keyof FlatListParamsList> = {
  navigation: StackNavigationProp<FlatListParamsList, T>;
  route: RouteProp<FlatListParamsList, T>;
};
