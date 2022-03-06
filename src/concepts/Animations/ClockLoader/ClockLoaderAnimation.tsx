import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { SQUARE_NUMBER } from "./constants";
import Square from "./Square";

interface ClockLoaderAnimationProps {}

const ClockLoaderAnimation: React.FC<ClockLoaderAnimationProps> = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(4 * Math.PI, {
        duration: 8000,
        easing: Easing.linear,
      }),
      -1
    );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      {new Array(SQUARE_NUMBER).fill(0).map((_, index) => (
        <Square key={index} {...{ index, progress }} />
      ))}
    </View>
  );
};

export default ClockLoaderAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
  },
});
