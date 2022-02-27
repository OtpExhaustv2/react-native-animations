import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";

export type PinchGestureHandlerParamsList = {
    Basics: undefined;
    PinchGestureHandlerHome: undefined;
}

export type PinchGestureHandlerStackNavProps<T extends keyof PinchGestureHandlerParamsList> = {
    navigation: StackNavigationProp<PinchGestureHandlerParamsList, T>,
    route: RouteProp<PinchGestureHandlerParamsList, T>,
}