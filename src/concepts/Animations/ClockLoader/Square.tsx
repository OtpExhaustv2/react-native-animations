import React from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SQUARE_NUMBER, SQUARE_SIZE } from "./constants";

interface SquareProps {
  index: number;
  progress: Animated.SharedValue<number>;
}

const Square: React.FC<SquareProps> = ({ index, progress }) => {
  const offsetAngle = (2 * Math.PI) / SQUARE_NUMBER;
  const finalAngle = offsetAngle * (SQUARE_NUMBER - 1 - index);

  const rotate = useDerivedValue(() => {
    if (progress.value <= 2 * Math.PI) {
      return Math.min(finalAngle, progress.value);
    }
    if (progress.value - 2 * Math.PI < finalAngle) {
      return finalAngle;
    }

    return progress.value;
  }, []);

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) {
      return withSpring(SQUARE_SIZE * -SQUARE_NUMBER);
    }

    if (progress.value > 2 * Math.PI) {
      return withTiming((index - SQUARE_NUMBER) * SQUARE_SIZE);
    }
    return withTiming(-index * SQUARE_SIZE);
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotate: `${rotate.value}rad` },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          height: SQUARE_SIZE,
          aspectRatio: 1,
          backgroundColor: "white",
          opacity: (index + 1) / SQUARE_NUMBER,
          position: "absolute",
        },
        rStyle,
      ]}
    />
  );
};

export default Square;
