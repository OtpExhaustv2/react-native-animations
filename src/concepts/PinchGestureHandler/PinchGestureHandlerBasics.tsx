import React, { useLayoutEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { PinchGestureHandlerStackNavProps } from "../../navigation/App/PinchGestureHandler/PinchGestureHandlerParamsList";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface PinchGestureHandlerBasicsProps
  extends PinchGestureHandlerStackNavProps<"Basics"> {}

const imageUri =
  "https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80";

const { width, height } = Dimensions.get("window");

const PinchGestureHandlerBasics: React.FC<PinchGestureHandlerBasicsProps> = ({
  navigation,
}) => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: (event) => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: focalX.value },
        { translateY: focalY.value },
        { translateY: -height / 2 },
        { translateX: -width / 2 },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
        { translateY: height / 2 },
        { translateX: width / 2 },
      ],
    };
  });

  const focalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.View style={{ flex: 1 }}>
        <Animated.Image
          style={[rStyle, { flex: 1 }]}
          source={{ uri: imageUri }}
        />
        <Animated.View style={[styles.focalPoint, focalPointStyle]} />
      </Animated.View>
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
});

export default PinchGestureHandlerBasics;
