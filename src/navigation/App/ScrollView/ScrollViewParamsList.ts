import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ScrollViewParamsList = {
  ScrollViewHome: undefined;
  HorizontalAnimation: undefined;
  ChannelScrollView: undefined;
  ChromeSortableList: undefined;
  DragAndSortList: undefined;
};

export type ScrollViewStackNavProps<T extends keyof ScrollViewParamsList> = {
  navigation: StackNavigationProp<ScrollViewParamsList, T>;
  route: RouteProp<ScrollViewParamsList, T>;
};
